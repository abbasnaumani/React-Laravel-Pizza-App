<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\BaseRepository\BaseRepository;
use App\Repositories\RepositoryInterface\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository extends BaseRepository implements BaseRepositoryInterface
{
    /**
     * @param Product $model
     */
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    // Add your repository methods here

    /**
     * Return Product with its category and images.
     * @return Builder[]|Collection
     */
    public function getProducts()
    {
        return $this->model->with('Category','Image')->get();
    }
}
