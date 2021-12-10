<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\BaseRepository\BaseRepository;
use App\Repositories\RepositoryInterface\BaseRepositoryInterface;

class UserRepository extends BaseRepository implements BaseRepositoryInterface
{

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    // Add your repository methods here

}
