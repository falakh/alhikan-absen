<?php

namespace Tests\Feature;

use App\Model\Kehadiran;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class KehadiranTest extends TestCase
{
    use DatabaseMigrations;
//    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {

        $kehadiran = new Kehadiran();
        $kehadiran->Absen(1,1);
        $kehadiran->save();

    }
}
