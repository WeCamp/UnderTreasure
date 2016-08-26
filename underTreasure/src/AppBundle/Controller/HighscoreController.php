<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 26-8-2016
 * Time: 11:30
 */

namespace AppBundle\Controller;

use AppBundle\AppBundle;
use AppBundle\Entity\Highscore;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Request\ParamFetcher;
use FOS\RestBundle\View\View;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HighscoreController extends FOSRestController
{
	public function getHighscoresAction()
	{
		$em = $this->getDoctrine()->getEntityManagerForClass(Highscore::class);
		$entities = $em->getRepository('AppBundle:Highscore')->findTopTen();

		$view = View::create();
		$view->setData($entities)->setStatusCode(200);
		return $view;
	}

	/**
	 * @param ParamFetcher $paramFetcher
	 * @RequestParam(name="username", nullable=false, strict=true)
	 * @RequestParam(name="time", nullable=false, strict=true)
	 * @RequestParam(name="coins", nullable=false, strict=true)
	 */
	public function postHighscoresAction(ParamFetcher $paramFetcher)
	{
		$highscore = new Highscore();
		$highscore->setUsername($paramFetcher->get('username'));
		$highscore->setTime($paramFetcher->get('time'));
		$highscore->setCoins($paramFetcher->get('coins'));


		$em = $this->getDoctrine()->getEntityManagerForClass(Highscore::class);
		$em->persist($highscore);
		$em->flush();

		$view = View::create();
		$view->setStatusCode(201);
	}
}