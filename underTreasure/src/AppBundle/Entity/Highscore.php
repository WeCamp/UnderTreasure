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
}