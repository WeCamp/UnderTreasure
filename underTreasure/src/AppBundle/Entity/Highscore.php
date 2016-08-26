<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 26-8-2016
 * Time: 10:55
 */

namespace AppBundle\Entity;


class Highscore
{
	/**
	 * @var integer
	 */
	private $id;

	/**
	 * @var string
	 */
	private $username;

	/**
	 * @var integer
	 */
	private $time;

	/**
	 * @var integer
	 */
	private $coins;

	/**
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * @param int $id
	 */
	public function setId($id)
	{
		$this->id = $id;
	}

	/**
	 * @return string
	 */
	public function getUsername()
	{
		return $this->username;
	}

	/**
	 * @param string $username
	 */
	public function setUsername($username)
	{
		$this->username = $username;
	}

	/**
	 * @return int
	 */
	public function getTime()
	{
		return $this->time;
	}

	/**
	 * @param int $time
	 */
	public function setTime($time)
	{
		$this->time = $time;
	}

	/**
	 * @return int
	 */
	public function getCoins()
	{
		return $this->coins;
	}

	/**
	 * @param int $coins
	 */
	public function setCoins($coins)
	{
		$this->coins = $coins;
	}
}