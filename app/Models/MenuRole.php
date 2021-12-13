<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MenuRole extends Model
{
    protected $table = 'menu_role';
    public $fillable = ['menu_id', 'role_id', 'created_at', 'updated_at'];

    /**
     * Menu Role Belongs to One menu.
     * @return BelongsTo
     */
    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class);
    }

    /**
     * Menu Role Belongs to One role.
     * @return BelongsTo
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * @param $query
     * @param $relation
     * @param $constraint
     * @return mixed
     */
    public function scopeWithAndWhereHas($query, $relation, $constraint){
        return $query->whereHas($relation, $constraint)
            ->with([$relation => $constraint]);
    }
}
