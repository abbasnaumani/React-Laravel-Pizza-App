<?php

namespace App\Traits;

trait CustomHash
{
    /**
     * return array.
     *
     * @return string[]
     */
    public function hashKey(): array
    {
        return [
            'str' => '6rG&;q',
            'separator' => '|',
        ];
    }

    /**
     * Encode given data.
     *
     * @param string $dataToEncode
     * @return string
     */
    public function customEncode(string $dataToEncode): string
    {
        $encodeArray = [];
        $encodedKey = $this->encodeData($dataToEncode);
        if (trim($encodedKey) != '') {
            $hashKeyData = $this->hashKey();
            $beforeStr = $hashKeyData['str'] ?? '';
            if (trim($beforeStr) != '') {
                $encodeArray[] = $beforeStr;
            }
            $encodeArray[] = $encodedKey;

            $separator = $hashKeyData['separator'] ?? '|';
            $encodedKey = implode($separator, $encodeArray);
            $encodedKey= $this->encodeData($encodedKey);
        }
        return $encodedKey;
    }

    /**
     * Decode given input data.
     *
     * @param string $dataToEncode
     * @return string|null
     */
    public function customDecode(string $dataToEncode): ?string
    {
        $decodedKey = $this->decodeData($dataToEncode);
        if (trim($decodedKey) != '') {
            $hashKeyData = $this->hashKey();
            $separator = $hashKeyData['separator'] ?? '|';
            $decodedArray = explode($separator, $decodedKey);
            $decodedKey=$decodedArray[1]??($decodedArray[0]??$decodedArray);
            $decodedKey= $this->decodeData($decodedKey);
        }
        return $decodedKey??null;
    }

    /**
     * encode given data.
     *
     * @param string $data
     * @return string
     */
    public function encodeData(string $data): string
    {
        return base64_encode(urlencode($data));
    }

    /**
     * decode given data.
     *
     * @param string $data
     * @return string
     */
    public function decodeData(string $data): string
    {
        return urldecode(base64_decode($data));
    }

}
