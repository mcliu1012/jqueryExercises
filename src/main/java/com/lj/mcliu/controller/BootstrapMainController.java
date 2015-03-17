package com.lj.mcliu.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("bootstrap")
public class BootstrapMainController extends BaseController {
    private Logger logger = LoggerFactory.getLogger(BootstrapMainController.class);

    /**
     * 画面初始化
     *
     * @return
     */
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String initBootstrapMain() {
        logger.info("==== initBootstrapMain START ====");

        logger.info("==== initBootstrapMain END ====");
        return "bootstrap/bootstrapMain";
    }

    /**
     * Bootstrap流式布局
     *
     * @return
     */
    @RequestMapping(value = "bootstrapFluidLayout", method = RequestMethod.GET)
    public String initBootstrapFluidLayout() {
        logger.info("==== initBootstrapFluidLayout START ====");

        logger.info("==== initBootstrapFluidLayout END ====");
        return "bootstrap/bootstrap-fluid-layout";
    }
}
