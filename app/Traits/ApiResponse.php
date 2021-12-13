<?php

namespace App\Traits;

use App\Helpers\ApiResponseHelper;

trait ApiResponse
{
    /**
     * Set Success Api Response.
     * @param $msg
     * @param $data
     * @param $statusCode
     * @return void
     */
    public function setApiSuccessMessage($msg, $data = null, $statusCode = 200)
    {
        ApiResponseHelper::setMessage($msg);
        ApiResponseHelper::setData($data);
        ApiResponseHelper::setCode($statusCode);
    }

    /**
     * Set Error Api Response.
     * @param $msg
     * @param $data
     * @param $statusCode
     * @return void
     */
    public function setApiErrorMessage($msg, $data = null, $statusCode = 400)
    {
        ApiResponseHelper::setMessage($msg);
        ApiResponseHelper::setData($data);
        ApiResponseHelper::setCode($statusCode);
    }

    /**
     * Get Response which is set by setApiSuccessResponse.
     * @return mixed
     */
    public function response()
    {
        return ApiResponseHelper::getResponse();
    }

    /**
     * Get Api Response which is set by setApiSuccessResponse.
     * @return mixed
     */
    public function getApiResponse()
    {
        return ApiResponseHelper::getApiResponse();
    }
}
