<template>
    <header :class="$style.header">
      <div :class="$style.wrapper">
        <div class="grid grid-cols-4 gap-5" :class="$style.row">
          <div>
            <div :class="$style.left">
              <NuxtLink to="/" aria-label="FXPO" :class="$style.logo" style="width:47px;">
                <LogoIcon />
              </NuxtLink>
              <div :class="$style.text">Servers</div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="flex justify-center">
        
              <NavigationMenu>
              <NavigationMenuList >
                <!-- Home -->
                <NavigationMenuItem>
                  <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
                  <p class='text-lg'> Home</p>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <!-- end Home -->
                <!-- Future Multiverse -->
                <NavigationMenuItem>
                  <NavigationMenuTrigger><p class='text-lg'>Future Multiverse</p></NavigationMenuTrigger>
                  <NavigationMenuContent class="w-full bg-white flex justify-center" >
                    <ul class="grid grid-cols-3 gap-4" style="width: 920px; padding-right: 0px;">
                      <li class="col-span-2 flex flex-col items-left pt-7 pl-5 pr-3"> 
                        <ul class="grid grid-cols-2 gap-3 p-1 ">
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold  dark:text-white">Welcome</p>
                                
                                <p class="text-sm text-gray-500 font-normal">Overview & Examples</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/enter.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Enter the Future</p>
                                <p class="text-sm text-gray-400">Multiverse & EXPO</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Explore Map</p>
                                <p class="text-sm text-gray-400">Econmonic Spaces, Plots, ...</p>
                              </div>
                            </div>
                          </li>
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/cube.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Products & Service Packages</p>
                                <p class="text-sm text-gray-400">Future Multiverse Offerings</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Advanced Technologies</p>
                                <p class="text-sm text-gray-400">Future Trends Catalyst Solutions</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                                <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
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
                                <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600" style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                                <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600" style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                              </div>
                            </div>
  
                          </li>
                        </ul>
                      </li>
                      <li class="col-span-1 flex flex-col items-right ">
                          <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 100%" alt="Curve Ball Image"> 
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <!-- end Future Multiverse -->
                <!-- Future Trends Catalyst -->
                <NavigationMenuItem>
                  <NavigationMenuTrigger><p class='text-lg'>Future Trends Catalyst</p></NavigationMenuTrigger>
                  <NavigationMenuContent class="w-full bg-white flex justify-center" >
                    <ul class="grid grid-cols-3 gap-4" style="width: 920px; padding-right: 0px;">
                      <li class="col-span-2 flex flex-col items-left  pt-7 pl-5 pr-3"> 
                        <ul class="grid grid-cols-2 gap-3 p-1 ">
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">LaunchPad</p>
                                <p class="text-sm text-gray-400">Overview & Examples</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/basket.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Marketplace</p>
                                <p class="text-sm text-gray-400">Multiverse & EXPO</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/blockchain.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Blockchain</p>
                                <p class="text-sm text-gray-400">Future Multiverse Protocol</p>
                              </div>
                            </div>
                          </li>
                          <li class="col-span-1 flex flex-col items-right">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/welcome.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Future Studios</p>
                                <p class="text-sm text-gray-400">Experience FXPO & Multiverse</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/spinner.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">LAB</p>
                                <p class="text-sm text-gray-400">Future Trends Catalyst Soltions</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                                <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
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
                                <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600" style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                                <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600" style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                              </div>
                            </div>
  
                          </li>
                        </ul>
                      </li>
                      <li class="col-span-1 flex flex-col items-right ">
                          <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 100%" alt="Curve Ball Image"> 
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <!-- end Future Trends Catalyst -->
                <!-- Movement -->
                <NavigationMenuItem>
                  <NavigationMenuTrigger><p class='text-lg'>Movement</p></NavigationMenuTrigger>
                  <NavigationMenuContent class="w-full bg-white flex justify-center" >
                    <ul class="grid grid-cols-3 gap-4" style="width: 920px; padding-right: 0px;">
                      <li class="col-span-2 flex flex-col items-left  pt-7 pl-5 pr-3"> 
                        <ul class="grid grid-cols-2 gap-3 p-1 ">
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/quest.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Quest, Vision & Mission</p>
                                <p class="text-sm text-gray-400">Driving force, </p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Suprise Rise of Humanity</p>
                                <p class="text-sm text-gray-400">Most Historic Movement</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/share.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Partnerships</p>
                                <p class="text-sm text-gray-400">Business & Technology Partners</p>
                              </div>
                            </div>
                          </li>
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/future_group.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Future Trends Group</p>
                                <p class="text-sm text-gray-400">Global Matrix, Influence & Impact</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/suprise.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Historic & Recent Impact</p>
                                <p class="text-sm text-gray-400">Global Influence & Impact</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/trends.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Opportunity for Everyone</p>
                                <p class="text-sm text-gray-400">B2B2C Value & Opportunity</p>
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
                                <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600" style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                                <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600" style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                              </div>
                            </div>
  
                          </li>
                        </ul>
                      </li>
                      <li class="col-span-1 flex flex-col items-right ">
                          <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 100%" alt="Curve Ball Image"> 
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <!-- end Movement -->
                <!-- Launch -->
                <NavigationMenuItem>
                  <NavigationMenuTrigger><p class='text-lg'>Launch</p></NavigationMenuTrigger>
                  <NavigationMenuContent class="w-full bg-white flex justify-center" >
                    <ul class="grid grid-cols-3 gap-4" style="width: 920px; padding-right: 0px;">
                      <li class="col-span-2 flex flex-col items-left  pt-7 pl-5 pr-3"> 
                        <ul class="grid grid-cols-2 gap-3 p-1 ">
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">VIP Pre-Launch</p>
                                <p class="text-sm text-gray-400">First Lainch Phase VIP Only</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Pre-Launch</p>
                                <p class="text-sm text-gray-400">Second Launch Phase</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/rocket.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Public Launch</p>
                                <p class="text-sm text-gray-400">Third & Last Launch Phase</p>
                              </div>
                            </div>
                          </li>
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/map.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">RoadMap</p>
                                <p class="text-sm text-gray-400">Launch & Scaling Roadmap</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/gift.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">Launch Specials</p>
                                <p class="text-sm text-gray-400">Gifts, Discounts & more</p>
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/magnifer.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook & GraceAI</p>
                                <p class="text-sm text-gray-400">Your AI Based Future Guide</p>
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
                                <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600" style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                                <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600" style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                              </div>
                            </div>
  
                          </li>
                        </ul>
                      </li>
                      <li class="col-span-1 flex flex-col items-right ">
                          <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 100%" alt="Curve Ball Image"> 
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                  <NavigationMenuTrigger><img src="~/assets/images/drop_menu/magnifier_white.png" style="width: 90%; height: 100%" alt="Curve Ball Image"> </NavigationMenuTrigger>
                  <NavigationMenuContent class="w-full bg-white flex justify-center" >
                    <ul class="grid grid-cols-3 gap-4" style="width: 920px; height:280px; padding-right: 0px;">
                      <li class="col-span-2 flex flex-col items-left  pt-9 pl-5 pr-3"> 
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
                                <p class="text-base text-gray-700 font-bold dark:text-white">GuideBook</p>
                                <p class="text-sm text-gray-400">Your AI based Future Guide</p>
                              </div>
                            </div>
                          </li>
                          <li class="col-span-1 flex flex-col items-left">
                            <div class="flex items-center mb-4">
                              <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                  <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                  </svg>
                                </div>
                                <input type="text" class="block w-full pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm " :class="$style.input_search" placeholder="Search...">
                              </div>
                            </div>
                            <div class="flex items-center mb-4">
                              <div class="p-1 rounded border-2 border-solid border-slate-50  bg-slate-50 ">
                                <img class='p-1' style='width: 30px !important' src="~/assets/images/drop_menu/graceai.png">
                              </div>
                              <div class="pl-3">
                                <p class="text-base text-gray-700 font-bold dark:text-white">GraceAI</p>
                                <p class="text-sm text-gray-400">Your AI based Future Guide</p>
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
                                <button class="px-2 py-0.5 pl-6 pr-6   text-sm  text-white font-medium hover:bg-blue-600" style="background-color: #1A1C37; border-radius: 4px">Maps</button>
                                <button class="px-1 py-0.5 pl-4 pr-4 text-white font-medium rounded-md hover:bg-blue-600" style="background-color: #CFB16D; border-radius: 4px">Enter & Experience</button>
                              </div>
                            </div>
  
                          </li>
                        </ul>
                      </li>
                      <li class="col-span-1 flex flex-col items-right ">
                          <img src="~/assets/images/drop_menu/curve_ball.png" style="width: 100%; height: 100%" alt="Curve Ball Image"> 
                      </li>
                    </ul>
                  </NavigationMenuContent>
  
                </NavigationMenuItem>
                <!-- end Launch -->
              </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div :class="$style.linksCol" >
            <ExploreUserAccount  style="float:right" />
  
            <!--          <div :class="$style.links">-->
            <!--            <NuxtLink to="/" :class="$style.link">-->
            <!--              Onboard-->
            <!--              <RegistrationIcon />-->
            <!--            </NuxtLink>-->
            <!--            <div :class="$style.vline"></div>-->
            <!--            <NuxtLink to="/" :class="$style.link">-->
            <!--              Connect Wallet-->
            <!--              <AddWalletIcon />-->
            <!--            </NuxtLink>-->
            <!--          </div>-->
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script lang="ts" setup>
  import LogoIcon from '~/icons/LogoIcon.vue';
  // import AddWalletIcon from '~/icons/AddWalletIcon.vue';
  // import RegistrationIcon from '~/icons/RegistrationIcon.vue';
  import ExploreUserAccount from '~/components/Explore/ExploreUserAccount.vue';
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from '@/components/ui/navigation-menu';
  </script>
  
  <style lang="scss" module>
  .header {
    padding: rem-calc(18px 0);
    background-color: #1a1c37;
    position: sticky;
    z-index: z('header');
  }
  
  .wrapper {
    margin: 0 auto;
    position: relative;
    max-width: rem-calc(1440px);
  
    @media (max-width: 1440px) {
      margin: rem-calc(0 $wrapper-padding-sm);
    }
  }
  
  .row {
    justify-content: space-between;
    align-items: center;
  }
  
  .left {
    display: flex;
    align-items: center;
  }
  
  .logo {
    color: inherit;
    display: inline-block;
  }
  
  .logo svg {
    width: 55px !important;
  }
  
  .text {
    @include font-size(24px);
    display: flex;
    align-items: center;
    line-height: divide(30, 24);
    font-weight: 700;
  
    &::before {
      border-left: 2px solid #3e3e3e;
      content: '';
      display: block;
      height: rem-calc(36px);
      margin: rem-calc(0 16px);
    }
  }
  
  .linksCol {
    display: none;
  
    @include media-breakpoint-up(md) {
      display: block;
    }
  }
  
  .links {
    display: flex;
  }
  
  .link {
    @include font-size(14px);
    color: inherit;
    align-items: center;
    display: inline-flex;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
  
    svg {
      fill: $primary;
      margin-left: rem-calc(12px);
      height: rem-calc(22px);
      width: rem-calc(22px);
    }
  }
  
  .vline {
    height: rem-calc(38px);
    border-left: 2px solid #3a3e56;
    margin: rem-calc(0 16px);
  }
  </style>
  