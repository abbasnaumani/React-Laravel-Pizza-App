<?php


namespace App\Services;

use App\Repositories\ProductRepository;
use App\Services\BaseService\BaseService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductService extends BaseService
{
    public $data = [];
    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Get All Product From Product Model.
     *
     * @return object
     */
    public function getProducts() :object
    {
        return $this->productRepository->getProducts();
    }
}