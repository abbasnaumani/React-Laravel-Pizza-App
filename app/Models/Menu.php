<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
    protected $table = 'menus';
    public $fillable = [
        'id',
        'name',
        'is_parent_menu',
        'parent_menu_id',
        'link',
        'module',
        'sort_order',
        'class',
        'icon',
        'is_count',
        'is_active'];

    /**
     * One Menu belongs to many roles.
     *
     * @return BelongsToMany
     */
    public function menusRole(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * One Menu has only one parent menu.
     *
     * @return HasOne
     */
    public function parent(): HasOne
    {
        return $this->hasOne('App\Models\Menu', 'id', 'parent_id')->orderBy('sort_order');
    }

    /**
     * One Menu has manu children menus.
     *
     * @return HasMany
     */
    public function children(): HasMany
    {
        return $this->hasMany('App\Models\Menu', 'parent_id', 'id')->orderBy('sort_order');
    }

    /**
     *
     * @return Builder[]|Collection
     */
    public static function tree()
    {
        return static::with(implode('.', array_fill(0, 100, 'children')))->where('parent_id', '=', '0')->orderBy('sort_order')->get();
    }

    public function scopeParent()
    {
        return $this->where('parent_menu_id', 0)->orderBy('sort_order');
    }
}
