<?php

namespace App\Repositories;

use App\Models\OrderItem;
use App\Repositories\BaseRepository\BaseRepository;
use App\Repositories\RepositoryInterface\BaseRepositoryInterface;

class OrderItemRepository extends BaseRepository implements BaseRepositoryInterface
{
    /**
     * @param OrderItem $model
     */
    public function __construct(OrderItem $model)
    {
        $this->model = $model;
    }

}
