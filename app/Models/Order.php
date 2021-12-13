<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;
    public $fillable = ['user_id','address', 'phone_number','created_at','updated_at'];

    /**
     * One Order belongs to only one user.
     * @return BelongsTo
     */
    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * One Order has many Order Items.
     * @return HasMany
     */
    public function OrderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
