<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    protected $table = 'roles';
    public $fillable = ['name'];

    /**
     * One Role belongs to many users.
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * One Role belongs to many menus.
     * @return BelongsToMany
     */
    public function menus(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class);
    }

    /**
     * One Role belongs to many parent menus.
     * @return BelongsToMany
     */
    public function parentMenus(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class)->where('parent_id', 0)->orderBy('sort_order');
    }

    /**
     * One Role belongs to many Menus.
     * @param $parentId
     * @return BelongsToMany
     */
    public function childMenusByParentId($parentId)
    {
        return $this->belongsToMany(Menu::class)->where('parent_id', $parentId)->orderBy('sort_order');
    }
}
