<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

trait UserTrait
{
    /**
     * @return Builder[]|Collection
     */
    public function getAllUsers()
    {
        return User::with('roles')->get();
    }
}
