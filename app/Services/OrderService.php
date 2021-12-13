<?php


namespace App\Services;


use App\Repositories\OrderItemRepository;
use App\Repositories\OrderRepository;
use App\Services\BaseService\BaseService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderService extends BaseService
{
    public $data = [];
    protected $orderRepository;
    protected $orderItemRepository;

    /**
     * @param OrderRepository $orderRepository
     * @param OrderItemRepository $orderItemRepository
     */
    public function __construct(OrderRepository $orderRepository, OrderItemRepository $orderItemRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderItemRepository = $orderItemRepository;
    }

    /**
     * This Method creates an order for user.
     * @param Request $request
     * @return void
     */
    public function createOrder(Request $request)
    {
        $userId = $this->getAuthUserId();
        $orderData = $request->orderData ?? [];
        $orderItems = $request->orderItems ?? [];
        if ($orderData && $orderItems && $userId > 0) {
            $orderDataToStore = [];
            $orderDataToStore['user_id'] = $userId;
            $orderDataToStore['address'] = $orderData['address'] ?? '';
            $orderDataToStore['phone_number'] = isset($orderData['phone_number']) ? str_replace(array('(', ')', '-', ' '), array('', '', '', ''), $orderData['phone_number']):'';
            $orderDataToStore['created_at'] = Carbon::now()->format('Y-m-d H:i:s');
            $order = $this->orderRepository->create($orderDataToStore);
            $orderId = $order->id ?? 0;
            if ($orderId) {
                foreach ($orderItems as $orderItem) {
                    $orderItemDataToStore = [];
                    $orderItemDataToStore['order_id'] = $orderId;
                    $orderItemDataToStore['product_id'] = $orderItem['id'] ?? 0;
                    $orderItemDataToStore['price'] = $orderItem['price'] ?? 0;
                    $orderItemDataToStore['quantity'] = $orderItem['quantity'] ?? 0;
                    $orderItemDataToStore['created_at'] = Carbon::now()->format('Y-m-d H:i:s');
                    $this->orderItemRepository->create($orderItemDataToStore);
                }
            }
            $this->setApiSuccessMessage(trans('order.order_stored'));
        }else{
            $this->setApiErrorMessage(trans('order.order_not_stored'));
        }
    }
}