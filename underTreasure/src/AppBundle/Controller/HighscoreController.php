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
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HighscoreController extends Controller
{
	public function getHighscoresAction()
	{
		$em = $this->getDoctrine()->getEntityManagerForClass(Highscore::class);
		$entities = $em->getRepository('AppBundle:Highscore')->findAll();

		return ['entities' => $entities];
	}
}