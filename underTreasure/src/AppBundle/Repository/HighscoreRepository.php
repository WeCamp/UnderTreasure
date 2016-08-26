<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 26-8-2016
 * Time: 18:52
 */

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class HighscoreRepository extends EntityRepository
{
	public function findTopTen()
	{
		$qb = $this->getEntityManager()->createQueryBuilder();
		$qb->select('hs')
			->from ('AppBundle:Highscore', 'hs')
			->orderBy('hs.time', 'DESC')
			->setMaxResults(10)
		;

		return $qb->getQuery()->getResult();
	}
}