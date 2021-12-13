<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;
    public $fillable = ['category_id', 'image_id', 'description', 'name','price','created_at','updated_at'];

    /**
     * One Product belongs to one category.
     * @return BelongsTo
     */
    public function Category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * One Product has one image.
     * @return BelongsTo
     */
    public function Image(): BelongsTo
    {
        return $this->belongsTo(Image::class);
    }

    /**
     * Set the products Price to float.
     * @param $value
     * @return float
     */
    public function getPriceAttribute($value)
    {
        return floatval($value);
    }
}
