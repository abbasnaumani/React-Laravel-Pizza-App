<?php

namespace App\Traits;

use Illuminate\Config\Repository;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use App\Enums\RoleUser;

trait AuthUser
{
    protected $authUserData = null;

    /**
     * @return string
     */
    public function authTokenKey(): string
    {
        return config('constants.app_login_token');
    }

    /**
     * @param $user
     * @return string
     */
    public function authUserToken($user = null): ?string
    {
        $user = $user ?? $this->getAuthUser();
        return intval($user->id) > 0 ? $user->createToken($this->authTokenKey())->plainTextToken : null;
    }

    /**
     * Return Auth User.
     * @return object
     */
    public function getAuthUser():object
    {
        return $this->authUserData['auth_user'] = (isset($this->authUserData['auth_user']) && $this->authUserData['auth_user'] != null) ? $this->authUserData['auth_user'] : (Auth::check() ? Auth::user() : null);
    }

    /**
     * Return Auth user id.
     * @return int
     */
    public function getAuthUserId(): int
    {
        $user = $this->getAuthUser();
        return $user->id ?? 0;
    }

    /**
     * Return Auth User Roles.
     * @return array
     */
    public function userRoles(): array
    {
        $user = $this->getAuthUser();
        $userRoles = $user ? $user->roles : null;
        return $userRoles ? (array_column($userRoles->toArray(), 'id')) : [];
    }

    /**
     * Check That User has specific Role or not.
     * @param int $role
     * @return bool
     */
    public function hasRoleAccess(int $role = 0): bool
    {
        $hasAccess = false;
        if ($role != '') {
            $user = $this->getAuthUser();
            if ($user) {
                $userRoles = $this->userRoles();
                $hasAccess = in_array($role, $userRoles);
            }
        }
        return $hasAccess;
    }

    /**
     * Check that user has super admin role or not.
     * @return bool
     */
    public function isSuperAdminRole(): bool
    {
        return $this->hasRoleAccess(RoleUser::SUPER_ADMIN);
    }

    /**
     * Check that user has admin role or not.
     * @return bool
     */
    public function isAdminRole(): bool
    {
        return $this->hasRoleAccess(RoleUser::ADMIN);
    }
}
