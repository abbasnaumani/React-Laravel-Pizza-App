<?php

namespace App\Repositories;

use App\Models\Order;
use App\Repositories\BaseRepository\BaseRepository;
use App\Repositories\RepositoryInterface\BaseRepositoryInterface;

class OrderRepository extends BaseRepository implements BaseRepositoryInterface
{

    public function __construct(Order $model)
    {
        $this->model = $model;
    }

}
