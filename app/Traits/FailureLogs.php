<?php

namespace App\Traits;

use App\Models\FailureLog;

trait FailureLogs
{
    /**
     * @param string $name
     * @param string $value
     * @param array $jsonData
     * @return void
     */
    public function failureLog(string $name = '',string $value = '',array $jsonData = array())
    {
        $record = [];
        $record['name'] = $name;
        $record['value'] = json_encode($value);
        $record['json_data'] = isset($jsonData) ? json_encode($jsonData) : '';
        FailureLog::create($record);
    }
}
