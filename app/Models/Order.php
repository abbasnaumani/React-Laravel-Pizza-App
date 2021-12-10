<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public $fillable = ['user_id','address', 'phone_number','created_at','updated_at'];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function OrderItems(){
        return $this->hasMany(OrderItem::class);
    }
}
