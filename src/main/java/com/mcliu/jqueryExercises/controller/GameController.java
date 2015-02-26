package com.mcliu.jqueryExercises.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class GameController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(GameController.class);

    /**
     * 画面初始化
     *
     * @return
     */
    @RequestMapping(value = "game", method = RequestMethod.GET)
    public String initGame() {
        logger.info("==== initGame START ====");

        logger.info("==== initGame END ====");
        return "game/game";
    }
}
