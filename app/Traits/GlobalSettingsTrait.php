<?php

namespace App\Traits;

use App\Models\GlobalSetting;

trait GlobalSettingsTrait
{
    protected $globalSettings = null;

    /**
     * @return array|null
     */
    public function prepareGlobalSettings(): ?array
    {
        if (!$this->globalSettings) {
            $prepareGlobalSettings = [];
            $globalSettings = GlobalSetting::all();
            if (isset($globalSettings) && !empty($globalSettings)) {
                foreach ($globalSettings as $globalSetting) {
                    $fieldName = $globalSetting->field_name ?? null;
                    if ($fieldName) {
                        $prepareGlobalSettings[$fieldName] = $globalSetting->toArray();
                    }
                }
            }
            $this->globalSettings = $prepareGlobalSettings;
        }
        return $this->globalSettings;
    }

    /**
     * @return array|null
     */
    public function getGlobalSettings(): ?array
    {
        return $this->globalSettings ?? $this->prepareGlobalSettings();
    }

}
