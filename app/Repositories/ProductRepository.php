<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\BaseRepository\BaseRepository;
use App\Repositories\RepositoryInterface\BaseRepositoryInterface;

class ProductRepository extends BaseRepository implements BaseRepositoryInterface
{

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    // Add your repository methods here
    public function getProducts()
    {
        return $this->model->with('Category','Image')->get();
    }
}
