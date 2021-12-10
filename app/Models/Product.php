<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public $fillable = ['category_id', 'image_id', 'description', 'name','price','created_at','updated_at'];

    public function Category(){
        return $this->belongsTo(Category::class);
    }

    public function Image(){
        return $this->belongsTo(Image::class);
    }
    /**
     * Set the products's Price to float.
     *
     * @param string $value
     * @return floatval
     */
    public function getPriceAttribute($value)
    {
        return floatval($value);
    }
}
