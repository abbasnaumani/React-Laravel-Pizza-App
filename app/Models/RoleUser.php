<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RoleUser extends Model
{
    use HasFactory;

    protected $table = 'role_user';
    public $fillable = ['user_id', 'role_id', 'created_at', 'updated_at'];

    /**
     * A Role Belongs to one User.
     * @return BelongsTo
     */
    public function User()
    {
        return $this->belongsTo(User::class);
    }
    /**
     * A User Belongs to one Role.
     * @return BelongsTo
     */

    public function Role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }
}
