<template>
  <nav class=" lg:hidden lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2" style='background-color: #1A1C37;' >
    <div class="flex-1 flex justify-between items-center">
      <a href="/" class="flex text-lg font-semibold">
        <img src="@/assets/images/multiverse_header_logo.png" style="width: 50px"  alt="logo">
      </a>
    </div>
    <label class="relative z-40 cursor-pointer px-3 py-6" for="mobile-menu">
      <input class="peer hidden" type="checkbox" id="mobile-menu" />
      <div
        class="relative z-50 block h-[1px] w-7 bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform">
      </div>
      <div class="fixed inset-0 z-40 hidden h-full w-full  backdrop-blur-sm peer-checked:block">

      </div>
      <div
        class="fixed top-0 left-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
        <div class="float-left min-h-full w-[80%] px-8 pt-10 shadow-2xl" style="background-color: #1A1C37;">
          <menu>
            <Accordion type="single">
              <AccordionItem value="item-1" style="padding-bottom: 10px;">
                <img src="@/assets/images/multiverse_header_logo.png" style="width: 50px; padding-bottom: 10px"  alt="logo">
              </AccordionItem>
            </Accordion>

            <Accordion type="single">
              <AccordionItem value="item-1" style="padding-bottom: 10px;">Home</AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger class="text-white">Future Mulitverse</AccordionTrigger>
                <AccordionContent class="text-white">
                  <li class="col-span-2 flex  ml-4 flex-col items-left">
                    <ul class="grid grid-cols-1 gap-2 ">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-semibold   dark:text-white">Welcome</p>
                          <p class="text-sm text-white font-normal">Overview & Examples</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/enter.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-semibold  dark:text-white">Enter the Future</p>
                          <p class="text-sm  text-white">Multiverse & EXPO</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-semibold  dark:text-white">Explore Map</p>
                          <p class="text-sm  text-white">Econmonic Spaces, Plots, ...</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/cube.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-semibold  dark:text-white">Products & Services</p>
                          <p class="text-sm  text-white">Future Multiverse Offerings</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-semibold  dark:text-white">Advanced Technologies</p>
                          <p class="text-sm  text-white">Future Trends Catalyst Solutions</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-semibold  dark:text-white">GuideBook & GraceAI</p>
                          <p class="text-sm text-white">Your AI Based Future Guide</p>
                        </nuxt-link>
                        </div>
                      </div>
                    </ul>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger class="text-white">Future Trends Catalyst</AccordionTrigger>
                <AccordionContent class="text-white">
                  <li class="col-span-2 flex  ml-4 flex-col items-left">
                    <ul class="grid grid-cols-1 gap-2 ">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">LaunchPad</p>
                          <p class="text-sm text-white">Overview & Examples</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/basket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Marketplace</p>
                          <p class="text-sm text-white">Multiverse & EXPO</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important'
                            src="~/assets/images/drop_menu/blockchain.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Blockchain</p>
                          <p class="text-sm text-white">Future Multiverse Protocol</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Future Studios</p>
                          <p class="text-sm text-white">Experience FXPO & Multiverse</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">LAB</p>
                          <p class="text-sm text-white">Future Trends Catalyst Soltions</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">GuideBook & GraceAI</p>
                          <p class="text-sm text-white">Your AI Based Future Guide</p>
                        </nuxt-link>
                        </div>
                      </div>
                    </ul>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger class="text-white">Movement</AccordionTrigger>
                <AccordionContent class="text-white" >
                  <li class="col-span-2 flex  ml-4 flex-col items-left">
                    <ul class="grid grid-cols-1 gap-2 ">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/quest.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/movement">
                          <p class="text-base text-white font-bold dark:text-white">Quest, Vision & Mission</p>
                          <p class="text-sm text-white">Driving force, </p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Suprise Rise of Humanity</p>
                          <p class="text-sm text-white">Most Historic Movement</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/share.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Partnerships</p>
                          <p class="text-sm text-white">Business & Technology Partners</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important'
                            src="~/assets/images/drop_menu/future_group.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Future Trends Group</p>
                          <p class="text-sm text-white">Global Matrix, Influence & Impact</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Historic & Recent Impact</p>
                          <p class="text-sm text-white">Global Influence & Impact</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/trends.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Opportunity for Everyone</p>
                          <p class="text-sm text-white">B2B2C Value & Opportunity</p>
                        </nuxt-link>
                        </div>
                      </div>
                    </ul>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger class="text-white">Launch</AccordionTrigger>
                <AccordionContent class="text-white">
                  <li class="col-span-2 flex  ml-4 flex-col items-left">
                    <ul class="grid grid-cols-1 gap-2 ">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">VIP Pre-Launch</p>
                          <p class="text-sm  text-white">First Lainch Phase VIP Only</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">Pre-Launch</p>
                          <p class="text-sm text-white">Second Launch Phase</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-bold dark:text-white">Public Launch</p>
                          <p class="text-sm  text-white">Third & Last Launch Phase</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-bold dark:text-white">RoadMap</p>
                          <p class="text-sm  text-white">Launch & Scaling Roadmap</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/gift.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-bold dark:text-white">Launch Specials</p>
                          <p class="text-sm  text-white">Gifts, Discounts & more</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base  text-white font-bold dark:text-white">GuideBook & GraceAI</p>
                          <p class="text-sm text-white">Your AI Based Future Guide</p>
                        </nuxt-link>
                        </div>
                      </div>

                    </ul>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>


            <Accordion type="single">
              <AccordionItem value="item-1">
                <AccordionTrigger class="text-white"><img src="~/assets/images/drop_menu/magnifier_white.png"
                    style="width: 5%; height: 100%" alt="search_image"> </AccordionTrigger>
                <AccordionContent class="text-white">
                  <li class="col-span-2 flex  ml-4 flex-col items-left">
                    <ul class="grid grid-cols-1 gap-2 ">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/graceai.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">GraceAI</p>
                          <p class="text-sm text-white">Your AI based Future Guide</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/guidebook.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-white font-bold dark:text-white">GuideBook</p>
                          <p class="text-sm text-white">Your AI based Future Guide</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="flex">
                          <div class="flex-1">
                            <p class="text-base text-white font-bold dark:text-white">Search / Ask your Question:</p>

                            <p class="text-xs text-white">Search Future Multiverse / Ask GraceAI..</p>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg style='color: #b8b34b !important;' class="w-5 h-5 text-gray-500" fill="none"
                              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </div>
                          <input id='search_bar' type="text"
                            class="block w-full pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                            :class="$style.input_search" placeholder="Search / Ask">
                        </div>
                      </div>

                    </ul>
                  </li>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single">
              <AccordionItem value="item-1"  style="padding-bottom: 10px; padding-top: 10px">
                  <nuxt-link to='https://auth.futuremultiverse.com' class="px-2 py-2   text-medium text-white font-medium hover:bg-blue-600"
                  style="padding-right: 16px; padding-left: 16px; border: 2px solid #FDE8AE; background-color: #1A1C37; color: #FDE8AE; border-radius: 1px">Onboard</nuxt-link>
              </AccordionItem>
            </Accordion>

            <Accordion type="single">
              <AccordionItem value="item-1"  style="padding-bottom: 10px; padding-top: 10px">
                <nuxt-link to='https://auth.futuremultiverse.com' class="px-2 py-2 text-white font-medium rounded-md hover:bg-blue-600"
                style=" border: 2px solid #FDE8AE;background-color: #1A1C37;padding-right: 16px; padding-left: 16px; color: #FDE8AE; border-radius: 1px">Connect</nuxt-link>
              </AccordionItem>
            </Accordion>

          </menu>
        </div>
      </div>
    </label>
  </nav>
  
  <header :class="$style.el" class="hidden lg:flex justify-center mb-12">
    <!--div :class="$style.wrapper">
          <div class="row" :class="$style.rightRow">
            <div class="col" :class="$style.navCol">
              <AppHeaderNav />
            </div>
            <div class="col-auto" :class="$style.btnsCol">
              <div class="row" :class="$style.btnRow">
                <div class="col-auto" :class="$style.toggleBtnCol">
                  <AppHeaderToggleBtn />
                </div>
              </div>
            </div>
          </div>
    </div-->

    <div class="flex justify-center">

      <NavigationMenu>
        <NavigationMenuList>
          <!-- Logo -->
          <NavigationMenuItem>
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              <AppHeaderLogo />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <!-- end Logo -->
          <!-- Home -->
          <NavigationMenuItem>
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                <nuxt-link  to="/">
                  <p class='text-lg'> Home</p>
                </nuxt-link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <!-- end Home -->
          <!-- Future Multiverse -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p class='text-lg'>Future Multiverse</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="w-full bg-white flex justify-center" style="border: 0px;">
              <ul class="grid grid-cols-3 gap-4" style="width: 920px; border:0px;  padding-right: 0px;">
                <li class="col-span-2 flex flex-col items-left pt-5 pl-5 pr-3">
                  <ul class="grid grid-cols-2 gap-3 p-1 ">
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/fxpo">
                          <p class="text-base text-gray-700 font-bold  dark:text-white">Welcome</p>
                          <p class="text-sm text-gray-500 font-normal">Overview & Examples</p>
                        </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/enter.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future</p>
                          <p class="text-sm text-gray-400">Multiverse & EXPO</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Explore Map</p>
                          <p class="text-sm text-gray-400">Econmonic Spaces, Plots, ...</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/cube.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Products & Services</p>
                          <p class="text-sm text-gray-400">Future Multiverse Offerings</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Advanced Technologies</p>
                          <p class="text-sm text-gray-400">Future Trends Catalyst Solutions</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                          <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
                      <div class="flex pt-2">
                        <div class="flex-1 ">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future Multiverse:</p>

                          <p class="text-sm text-gray-400">The Home of Inspiration for the Future.</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                          <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600"
                            style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                          <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600"
                            style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                        </div>
                      </div>

                    </li>
                  </ul>
                </li>
                <li class="col-span-1 flex flex-col items-right ">
                  <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 95%"
                    alt="Curve Ball Image">
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <!-- end Future Multiverse -->
          <!-- Future Trends Catalyst -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p class='text-lg'>Future Trends Catalyst</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="w-full bg-white flex justify-center" style="border: 0px;">
              <ul class="grid grid-cols-3 gap-4" style="width: 920px; border:0px;  padding-right: 0px;">
                <li class="col-span-2 flex flex-col items-left  pt-5 pl-5 pr-3">
                  <ul class="grid grid-cols-2 gap-3 p-1 ">
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                            <p class="text-base text-gray-700 font-bold dark:text-white">LaunchPad</p>
                            <p class="text-sm text-gray-400">Overview & Examples</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/basket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Marketplace</p>
                          <p class="text-sm text-gray-400">Multiverse & EXPO</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important'
                            src="~/assets/images/drop_menu/blockchain.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                            <p class="text-base text-gray-700 font-bold dark:text-white">Blockchain</p>
                            <p class="text-sm text-gray-400">Future Multiverse Protocol</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex flex-col items-right">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                            <p class="text-base text-gray-700 font-bold dark:text-white">Future Studios</p>
                            <p class="text-sm text-gray-400">Experience FXPO & Multiverse</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                            <p class="text-base text-gray-700 font-bold dark:text-white">LAB</p>
                            <p class="text-sm text-gray-400">Future Trends Catalyst Soltions</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                            <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                            <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
                      <div class="flex pt-2">
                        <div class="flex-1">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future Multiverse:</p>

                          <p class="text-sm text-gray-400">The Home of Inspiration for the Future.</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                          <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600"
                            style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                          <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600"
                            style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                        </div>
                      </div>

                    </li>
                  </ul>
                </li>
                <li class="col-span-1 flex flex-col items-right ">
                  <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 95%"
                    alt="Curve Ball Image">
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <!-- end Future Trends Catalyst -->
          <!-- Movement -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p class='text-lg'>Movement</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="w-full bg-white flex justify-center" style="border: 0px;">
              <ul class="grid grid-cols-3 gap-4" style="width: 920px; border:0px;  padding-right: 0px;">
                <li class="col-span-2 flex flex-col items-left  pt-5 pl-5 pr-3">
                  <ul class="grid grid-cols-2 gap-3 p-1 ">
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/quest.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/movement">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Quest, Vision & Mission</p>
                          <p class="text-sm text-gray-400">Driving force, </p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Suprise Rise of Humanity</p>
                          <p class="text-sm text-gray-400">Most Historic Movement</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/share.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Partnerships</p>
                          <p class="text-sm text-gray-400">Business & Technology Partners</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important'
                            src="~/assets/images/drop_menu/future_group.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Future Trends Group</p>
                          <p class="text-sm text-gray-400">Global Matrix, Influence & Impact</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Historic & Recent Impact</p>
                          <p class="text-sm text-gray-400">Global Influence & Impact</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/trends.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Opportunity for Everyone</p>
                          <p class="text-sm text-gray-400">B2B2C Value & Opportunity</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
                      <div class="flex pt-2">
                        <div class="flex-1">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future Multiverse:</p>

                          <p class="text-sm text-gray-400">The Home of Inspiration for the Future.</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                          <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600"
                            style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                          <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600"
                            style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                        </div>
                      </div>

                    </li>
                  </ul>
                </li>
                <li class="col-span-1 flex flex-col items-right ">
                  <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 95%"
                    alt="Curve Ball Image">
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <!-- end Movement -->
          <!-- Launch -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <p class='text-lg'>Launch</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="w-full bg-white flex justify-center" style="border: 0px;">
              <ul class="grid grid-cols-3 gap-4" style="width: 920px; border:0px;  padding-right: 0px;">
                <li class="col-span-2 flex flex-col items-left  pt-5 pl-5 pr-3">
                  <ul class="grid grid-cols-2 gap-3 p-1 ">
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">VIP Pre-Launch</p>
                          <p class="text-sm text-gray-400">First Lainch Phase VIP Only</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Pre-Launch</p>
                          <p class="text-sm text-gray-400">Second Launch Phase</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Public Launch</p>
                          <p class="text-sm text-gray-400">Third & Last Launch Phase</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">RoadMap</p>
                          <p class="text-sm text-gray-400">Launch & Scaling Roadmap</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/gift.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Launch Specials</p>
                          <p class="text-sm text-gray-400">Gifts, Discounts & more</p>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="flex items-center mb-3">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                          <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
                      <div class="flex pt-2">
                        <div class="flex-1">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future Multiverse:</p>

                          <p class="text-sm text-gray-400">The Home of Inspiration for the Future.</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                          <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600"
                            style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                          <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600"
                            style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                        </div>
                      </div>

                    </li>
                  </ul>
                </li>
                <li class="col-span-1 flex flex-col items-right ">
                  <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 95%"
                    alt="Curve Ball Image">
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><img src="~/assets/images/drop_menu/magnifier_white.png"
                style="width: 100%; height: 100%" alt="Curve Ball Image"> </NavigationMenuTrigger>
            <NavigationMenuContent class="w-full bg-white flex justify-center" style="border: 0px;">
              <ul class="grid grid-cols-3 gap-4" style="width: 920px; border:0px;  height:245px; padding-right: 0px;">
                <li class="col-span-2 flex flex-col items-left  pt-5 pl-5 pr-3">
                  <ul class="grid grid-cols-2 gap-3 p-1 ">
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="flex">
                          <div class="flex-1">
                            <p class="text-base text-gray-700 font-bold dark:text-white">Search / Ask your Question:</p>

                            <p class="text-xs text-gray-400">Search Future Multiverse / Ask GraceAI..</p>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/guidebook.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook</p>
                          <p class="text-sm text-gray-400">Your AI based Future Guide</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex flex-col items-left">
                      <div class="flex items-center mb-4">
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg style='color: #b8b34b !important;' class="w-5 h-5 text-gray-500" fill="none"
                              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </div>
                          <input id='search_bar' type="text"
                            class="block w-full pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                            :class="$style.input_search" placeholder="Search / Ask">
                        </div>
                      </div>
                      <div class="flex items-center mb-4">
                        <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                          <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/graceai.png">
                        </div>
                        <div class="pl-3">
                        <nuxt-link  to="/">
                          <p class="text-base text-gray-700 font-bold dark:text-white">GraceAI</p>
                          <p class="text-sm text-gray-400">Your AI based Future Guide</p>
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-3 flex flex-col items-left pt-3 border-t-2 border-dashed border-gray-300">
                      <div class="flex pt-2">
                        <div class="flex-1">
                          <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future Multiverse:</p>

                          <p class="text-sm text-gray-400">The Home of Inspiration for the Future.</p>
                        </div>
                        <div class="flex justify-end space-x-2">
                          <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600"
                            style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                          <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600"
                            style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                        </div>
                      </div>

                    </li>
                  </ul>
                </li>
                <li class="col-span-1 flex flex-col items-right ">
                  <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 85%; height: 88%"
                    alt="Curve Ball Image">
                </li>
              </ul>
            </NavigationMenuContent>

          </NavigationMenuItem>
          <!-- end Launch -->
          <NavigationMenuItem class='ml-4'>
            <NavigationMenuLink>
              <div class="flex justify-end space-x-2">
                <nuxt-link to='https://auth.futuremultiverse.com' class="px-2 py-2   text-medium text-white font-medium hover:bg-blue-600"
                  style="padding-right: 16px; padding-left: 16px; border: 2px solid #FDE8AE; background-color: #1A1C37; color: #FDE8AE; border-radius: 1px">Onboard</nuxt-link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem class='ml-4'>
            <NavigationMenuLink>
              <div class="flex justify-end space-x-2">
                <nuxt-link to='https://auth.futuremultiverse.com' class="px-2 py-2 text-white font-medium rounded-md hover:bg-blue-600"
                  style=" border: 2px solid #FDE8AE;background-color: #1A1C37;padding-right: 16px; padding-left: 16px; color: #FDE8AE; border-radius: 1px">Connect</nuxt-link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>

<script lang="ts" setup>
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';
import AppHeaderNav from '~/components/AppHeader/AppHeaderNav.vue';
import AppHeaderToggleBtn from '~/components/AppHeader/AppHeaderToggleBtn.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

</script>

<style lang="scss" module>
.el {
  @include padding(2px 0px 10px 0);
  padding-bottom: 5px !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: z('header');
  background-color: #1A1C37;
}

#menu-toggle:checked + #menu {
        display: block;
      }
      
 .rounded{
  border-radius: 10px !important;
 }
 .input_search{
  text-align: center; 
  background-color: #FCF2E1; 
  color: #BDB9BC; 
  width: 280px; 
  border-radius:20px; 
  height: 43px
 }
 input::placeholder{
  color: #BDB9BC;
  font-weight:600;
 }
 .custom-image {
  height: auto; /* Maintain aspect ratio */
  position: relative; /* Set position to relative */
  width: 120px;
  margin-top: 30px;
}
</style>
