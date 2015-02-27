package com.mcliu.jqueryExercises.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("game")
public class GameController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(GameController.class);

    /**
     * 画面初始化
     *
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String initGame() {
        logger.info("==== initGame START ====");

        logger.info("==== initGame END ====");
        return "game/game";
    }

    /**
     * 2048
     *
     * @return
     */
    @RequestMapping(value = "2048", method = RequestMethod.GET)
    public String initGame2048() {
        logger.info("==== initGame2048 START ====");

        logger.info("==== initGame2048 END ====");
        return "game/2048/2048";
    }
}
