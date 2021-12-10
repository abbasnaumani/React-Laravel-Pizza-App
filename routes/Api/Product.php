<?php


namespace Route\Api;

use App\Http\Controllers\ProductController;
use App\Services\ProductService;
use \Illuminate\Support\Facades\Route;

class Product
{
    protected $productService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public static function register()
    {
        Route::get('products', [ProductController::class,'index'])->name('products');
        Route::middleware(['auth:sanctum'])->group(function () {
        });
    }
}
