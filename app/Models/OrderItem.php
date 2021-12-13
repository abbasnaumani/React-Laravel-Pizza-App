<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    use HasFactory;
    public $fillable = ['product_id', 'order_id','quantity','price','created_at','updated_at'];

    /**
     * Order Item belongs to only one product.
     * @return BelongsTo
     */
    public function Product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Order Item belongs to one order.
     * @return BelongsTo
     */
    public function Order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Set the products item Price to float.
     * @param $value
     * @return float
     */
    public function getPriceAttribute($value): float
    {
        return floatval($value);
    }
}
