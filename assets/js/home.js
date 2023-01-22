/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {

    'use strict';
    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    //  selectpicker function by = bootstrap-select.min.js ========================== //
    function select_picker_select() {
        jQuery('.my-select').selectpicker();
    }

    //  Home 1 Banner Carousel function by = owl.carousel.js ========================== //
    function twm_h1_bnr_carousal() {
        jQuery('.twm-h1-bnr-carousal').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: false,
            touchDrag: false,
            mouseDrag: false,
        });
    }

    //  Job Categories Carousel function by = owl.carousel.js ========================== //
    function job_categories_carousel() {
        jQuery('.job-categories-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            center: false,
            margin: 30,
            autoplay: true,
            navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                    margin: 0,
                },
                991: {
                    items: 2,

                },
                1024: {
                    items: 3
                }
            }
        });
    }

    // > Video responsive function by = custom.js ========================= //	
    function video_responsive() {
        jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    }

    // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
    function lightbox_popup() {
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery: true,
            thumb_attr: 'data-lcl-thumb',

            skin: 'minimal',
            radius: 0,
            padding: 0,
            border_w: 0,
        });
    }

    // > magnificPopup for video function	by = magnific-popup.js ===================== //	
    function magnific_video() {
        jQuery('.mfp-video').magnificPopup({
            type: 'iframe',
        });
    }

    // Vertically center Bootstrap modal popup function by = custom.js ==============//
    function popup_vertical_center() {
        jQuery(function () {
            function reposition() {
                var modal = jQuery(this),
                    dialog = modal.find('.modal-dialog');
                modal.css('display', 'block');

                // Dividing by two centers the modal exactly, but dividing by three 
                // or four works better for larger screens.
                dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
            }
            // Reposition when a modal is shown
            jQuery('.modal').on('show.bs.modal', reposition);
            // Reposition when the window is resized
            jQuery(window).on('resize', function () {
                jQuery('.modal:visible').each(reposition);
            });
        });
    }

    // > Main menu sticky on top  when scroll down function by = custom.js ========== //		
    function sticky_header() {
        if (jQuery('.sticky-header').length) {
            var sticky = new Waypoint.Sticky({
                element: jQuery('.sticky-header')
            });
        }
    }

    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
    function sticky_sidebar() {
        $('.rightSidebar')
            .theiaStickySidebar({
                additionalMarginTop: 100
            });
    }

    // > page scroll top on button click function by = custom.js ===================== //	
    function scroll_top() {
        jQuery("button.scroltop").on('click', function () {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        jQuery(window).on("scroll", function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 900) {
                jQuery("button.scroltop").fadeIn(1000);
            } else {
                jQuery("button.scroltop").fadeOut(1000);
            }
        });
    }

    // > input type file function by = custom.js ========================== //	 	 
    function input_type_file_form() {
        jQuery(document).on('change', '.btn-file :file', function () {
            var input = jQuery(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        jQuery('.btn-file :file').on('fileselect', function (event, numFiles, label) {
            var input = jQuery(this).parents('.input-group').find(':text'),
                log = numFiles > 10 ? numFiles + ' files selected' : label;
            if (input.length) {
                input.val(log);
            } else {
                if (log) alert(log);
            }
        });
    }

    // > input Placeholder in IE9 function by = custom.js ======================== //	
    function placeholderSupport() {
        /* input placeholder for ie9 & ie8 & ie7 */
        jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
        /* input placeholder for ie9 & ie8 & ie7 end*/
        /*fix for IE7 and IE8  */
        if (!jQuery.support.placeholder) {
            jQuery("[placeholder]").on('focus', function () {
                if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
            }).blur(function () {
                if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
            }).blur();

            jQuery("[placeholder]").parents("form").on('submit', function () {
                jQuery(this).find('[placeholder]').each(function () {
                    if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
                        jQuery(this).val("");
                    }
                });
            });
        }
        /*fix for IE7 and IE8 end */
    }

    // > Nav submenu show hide on mobile by = custom.js
    function mobile_nav() {
        jQuery(".sub-menu").parent('li').addClass('has-child');
        jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

        jQuery('.has-child a+.submenu-toogle').on('click', function (ev) {

            jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function () {
                jQuery(this).parent().removeClass('nav-active');
            });

            jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function () {
                jQuery(this).parent().toggleClass('nav-active');
            });

            ev.stopPropagation();
        });

    }

    // Mobile side drawer function by = custom.js
    function mobile_side_drawer() {
        jQuery('#mobile-side-drawer').on('click', function () {
            jQuery('.mobile-sider-drawer-menu').toggleClass('active');
        });
    }

    //  > Top Search bar Show Hide function by = custom.js =================== //	

    function site_search() {
        jQuery('a[href="#search"]').on('click', function (event) {
            jQuery('#search').addClass('open');
            jQuery('#search > form > input[type="search"]').focus();
        });

        jQuery('#search, #search button.close').on('click keyup', function (event) {
            if (event.target === this || event.target.className === 'close') {
                jQuery(this).removeClass('open');
            }
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel() {
        jQuery('.home-client-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 5,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel_2() {
        jQuery('.home-client-carousel2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 6
                }
            }
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel_3() {
        jQuery('.home-client-carousel3').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 1500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 5
                }
            }
        });
    }

    //  Related jobs Carousel function by = owl.carousel.js ========================== //
    function twm_related_jobs_carousel() {
        jQuery('.twm-related-jobs-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            //autoplay:true,
            autoplayTimeout: 3000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel_4() {
        jQuery('.home-client-carousel4').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 5
                }
            }
        });
    }

    //  Trusted logo Carousel function by = owl.carousel.js ========================== //
    function trusted_logo() {
        jQuery('.trusted-logo').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 5,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2
                }
            }
        });
    }

    //  Testimonial Carousel function by = owl.carousel.js ========================== //
    function twm_testimonial_1_carousel() {
        jQuery('.twm-testimonial-1-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                991: {
                    items: 2,
                }

            }
        });
    }

    //  Testimonial Carousel function by = owl.carousel.js ========================== //
    function twm_testimonial_2_carousel() {
        jQuery('.twm-testimonial-2-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 5,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                991: {
                    items: 2,
                },
                1199: {
                    items: 3,
                }

            }
        });
    }


    //  Latest Article Blogs Carousel function by = owl.carousel.js ========================== //
    function twm_la_home_blog() {
        jQuery('.twm-la-home-blog').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                991: {
                    items: 2,
                },
                1199: {
                    items: 3,
                }

            }
        });
    }

    //  Counter Section function by = counterup.min.js
    function counter_section() {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }


    // sidebarCollapse function by = custom.js
    function msg_user_list_slide() {
        jQuery('.user-msg-list-btn-open, .user-msg-list-btn-close').on('click', function () {
            jQuery('.wt-admin-dashboard-msg-2').toggleClass('active');
        });
    }

    // sidebarCollapse function by = custom.js
    function sidebarCollapse() {
        jQuery('#sidebarCollapse').on('click', function () {
            jQuery('#header-admin, #sidebar-admin-wraper, #content').toggleClass('active');
        });
    }

    // dashboard Notification function by = custom.js
    function dashboard_noti_dropdown() {
        jQuery('.dashboard-noti-dropdown').on('click', function () {
            jQuery('.dashboard-noti-panel').toggleClass('active');
        });
    }

    // dashboard Message function by = custom.js
    function dashboard_message_dropdown() {
        jQuery('.dashboard-message-dropdown').on('click', function () {
            jQuery('.dashboard-message-panel').toggleClass('active');
        });
    }

    // CustomScrollbar function by = jquery.scrollbar.js
    function scroll_bar_custome() {
        jQuery('.scrollbar-macosx').scrollbar();
    }


    // Jobs Bookmark table function by = dataTables.bootstrap5.js
    function jobs_bookmark_table() {
        jQuery('#jobs_bookmark_table').DataTable(
            {
                "aLengthMenu": [[3, 5, 10, -1], [3, 5, 10, "All"]],
                "iDisplayLength": 3
            }
        );
    }

    // candidate_data_table function by = dataTables.bootstrap5.js
    function candidate_data_table() {
        jQuery('#candidate_data_table').DataTable(
            {
                "aLengthMenu": [[5, 8, 10, -1], [5, 8, 10, "All"]],
                "iDisplayLength": 5
            }
        );

        function checkAll(bx) {
            var cbs = document.getElementsByTagName('input');
            for (var i = 0; i < cbs.length; i++) {
                if (cbs[i].type == 'checkbox') {
                    cbs[i].checked = bx.checked;
                }
            }
        }
    }

    // datepicker function by = dbootstrap-datepicker.js
    function datepicker_function() {
        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy'
        });
    }


    // profile-chart function by = chart.js
    function profile_chart() {
        if (jQuery('#profileViewChart').length) {
            var profileViewChart = document.getElementById('profileViewChart').getContext('2d');
            var profileViewChart = new Chart(profileViewChart, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Viewers',
                        data: [200, 250, 350, 200, 250, 150],
                        pointHoverBorderColor: '#1967d2',
                        pointBorderWidth: 10,
                        pointHoverBorderWidth: 3,
                        pointHitRadius: 20,
                        borderWidth: 3,
                        borderColor: '#1967d2',
                        pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: 'rgba(66, 133, 244, 0)',
                        cubicInterpolationMode: 'monotone',
                        fill: true,
                        backgroundColor: 'rgba(212, 230, 255, 0.2)',
                    }]
                },
            });
        }
    }


    // view map sidebar function by = custom.js
    function view_map_sidebar() {
        jQuery('.map-show-btn-open, .map-show-btn-close').on('click', function () {
            jQuery('.half-map-section').toggleClass('active');
        });
    }
    //  Radius Range Slider function by = bootstrap-slider.min.js ========================== //
    function radius_range() {
        jQuery("#ex2").slider({});
    }

    //DropZone File Uploading Function Start=========================//
    function Dropzone_infut_file() {
        if (jQuery('#demo-upload').length) {
            var dropzone = new Dropzone('#demo-upload', {
                previewTemplate: document.querySelector('#preview-template').innerHTML,
                parallelUploads: 2,
                thumbnailHeight: 120,
                thumbnailWidth: 120,
                maxFilesize: 3,
                filesizeBase: 1000,
                thumbnail: function (file, dataUrl) {
                    if (file.previewElement) {
                        file.previewElement.classList.remove("dz-file-preview");
                        var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                        for (var i = 0; i < images.length; i++) {
                            var thumbnailElement = images[i];
                            thumbnailElement.alt = file.name;
                            thumbnailElement.src = dataUrl;
                        }
                        setTimeout(function () { file.previewElement.classList.add("dz-image-preview"); }, 1);
                    }
                }

            });


            // Now fake the file upload, since GitHub does not handle file uploads
            // and returns a 404

            var minSteps = 6,
                maxSteps = 60,
                timeBetweenSteps = 100,
                bytesPerStep = 100000;

            dropzone.uploadFiles = function (files) {
                var self = this;

                for (var i = 0; i < files.length; i++) {

                    var file = files[i];
                    totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

                    for (var step = 0; step < totalSteps; step++) {
                        var duration = timeBetweenSteps * (step + 1);
                        setTimeout(function (file, totalSteps, step) {
                            return function () {
                                file.upload = {
                                    progress: 100 * (step + 1) / totalSteps,
                                    total: file.size,
                                    bytesSent: (step + 1) * file.size / totalSteps
                                };

                                self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
                                if (file.upload.progress == 100) {
                                    file.status = Dropzone.SUCCESS;
                                    self.emit("success", file, 'success', null);
                                    self.emit("complete", file);
                                    self.processQueue();
                                    //document.getElementsByClassName("dz-success-mark").style.opacity = "1";
                                }
                            };
                        }(file, totalSteps, step), duration);
                    }
                }
            }
        }
    }
    //DropZone File Uploading Function End =========================//	


    //Maximum input box fields function Start by custom.js==============//

    var max_fields = 100; //maximum input boxes allowed
    var wrapper = $(".input_fields_youtube"); //Fields wrapper
    var wrapper_2 = $(".input_fields_vimeo"); //Fields wrapper
    var wrapper_3 = $(".input_fields_custom"); //Fields wrapper
    var add_button_youtube = $(".add_field_youtube"); //Add button ID
    var add_button_vimeo = $(".add_field_vimeo"); //Add button ID
    var add_custom_field = $(".add_field_custom"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button_youtube).click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="ls-inputicon-box"><input class="form-control wt-form-control m-tb10" name="mytext[]" type="text" placeholder="https://www.youtube.com/"><i class="fs-input-icon fab fa-youtube"></i><a href="#" class="remove_field"><i class="fa fa-times"></i></a></div>'); //add input box
        }
    });

    var x = 1; //initlal text box count
    $(add_button_vimeo).click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper_2).append('<div class="ls-inputicon-box"><input class="form-control m-tb10 wt-form-control" name="mytext[]" type="text" placeholder="https://vimeo.com/"><i class="fs-input-icon fab fa-vimeo-v"></i><a href="#" class="remove_field"><i class="fa fa-times"></i></a></div>'); //add input box
        }
    });

    var x = 1; //initlal text box count
    $(add_custom_field).click(function (e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper_3).append('<div class="ls-inputicon-box"><input class="form-control m-tb10 wt-form-control" name="mytext[]" type="text" placeholder="Selet the role that you work in"><i class="fs-input-icon fa fa-user"></i><a href="#" class="remove_field"><i class="fa fa-times"></i></a></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
    $(wrapper_2).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
    $(wrapper_3).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

    //Maximum input box fields function End by custom.js==============//

    // > Tooltip function by = isotope.pkgd.min.js ========================= //
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    /*--------------------------------------------------------------------------------------------
        Window on load ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/
    // > masonry function function by = isotope.pkgd.min.js ========================= //	

    function masonryBox() {
        if (jQuery().isotope) {
            var $container = jQuery('.masonry-wrap');
            $container.isotope({
                itemSelector: '.masonry-item',
                transitionDuration: '1s',
                originLeft: true,
                stamp: '.stamp',
            });

            $container.imagesLoaded().progress(function () {
                $container.isotope('layout');
            });

            jQuery('.masonry-filter li').on('click', function () {
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    }


    // > page loader function by = custom.js ========================= //		
    function page_loader() {
        $('.loading-area').fadeOut(1000);
    }

    /*--------------------------------------------------------------------------------------------
        Window on scroll ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }


    /*--------------------------------------------------------------------------------------------
        document.ready ALL FUNCTION START
    ---------------------------------------------------------------------------------------------*/
    jQuery(document).ready(function () {
        //  selectpicker function by = bootstrap-select.min.js ========================== //
        select_picker_select(),
            //  Home 1 Banner Carousel function by = owl.carousel.js ========================== //
            twm_h1_bnr_carousal(),
            //  Job Categories Carousel function by = owl.carousel.js ========================== //
            job_categories_carousel(),
            // > Top Search bar Show Hide function by = custom.js  		
            site_search(),
            // > Video responsive function by = custom.js 
            video_responsive(),
            // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
            lightbox_popup(),
            // > magnificPopup for video function	by = magnific-popup.js
            magnific_video(),
            // > Vertically center Bootstrap modal popup function by = custom.js
            popup_vertical_center();
        // > Main menu sticky on top  when scroll down function by = custom.js		
        sticky_header(),
            // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
            sticky_sidebar(),
            // > page scroll top on button click function by = custom.js	
            scroll_top(),
            // > input type file function by = custom.js	 	
            input_type_file_form(),
            // > input Placeholder in IE9 function by = custom.js		
            placeholderSupport(),
            // > Nav submenu on off function by = custome.js ===================//
            mobile_nav(),
            // Mobile side drawer function by = custom.js
            mobile_side_drawer(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel_2(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel_3(),
            //  Related jobs Carousel function by = owl.carousel.js ========================== //
            twm_related_jobs_carousel(),
            //  Client logo Carousel function by = owl.carousel.js ========================== //
            home_client_carousel_4(),
            //  Trusted logo Carousel function by = owl.carousel.js ========================== //
            trusted_logo(),
            //  Testimonial Carousel function by = owl.carousel.js ========================== //
            twm_testimonial_1_carousel(),
            //  Testimonial Carousel function by = owl.carousel.js ========================== //
            twm_testimonial_2_carousel(),
            //  Latest Article Blogs Carousel function by = owl.carousel.js ========================== //
            twm_la_home_blog(),
            //  Counter Section function by = counterup.min.js ========================== //
            counter_section(),
            //massage user list show hide function by = custom.js	 ========================== //
            msg_user_list_slide(),
            // sidebarCollapse function by = custom.js
            sidebarCollapse(),
            // dashboard Notification function by = custom.js
            dashboard_noti_dropdown(),
            // dashboard Message function by = custom.js
            dashboard_message_dropdown(),
            // CustomScrollbar function by = jquery.scrollbar.js	
            scroll_bar_custome(),
            // Jobs Bookmark table function by = dataTables.bootstrap5.js
            jobs_bookmark_table(),
            // candidate_data_table function by = dataTables.bootstrap5.js
            candidate_data_table(),
            // datepicker function by = dbootstrap-datepicker.js
            datepicker_function(),
            // profile-chart function by = chart.js
            profile_chart(),
            // view map sidebar function by = custom.js
            view_map_sidebar(),
            //  Radius Range Slider function by = bootstrap-slider.min.js ========================== //
            radius_range(),
            //DropZone File Uploading Function Start=========================//
            Dropzone_infut_file();

    });

    /*--------------------------------------------------------------------------------------------
        Window Load START
    ---------------------------------------------------------------------------------------------*/
    jQuery(window).on('load', function () {
        // > masonry function function by = isotope.pkgd.min.js		
        masonryBox(),
            // > page loader function by = custom.js		
            page_loader();
    });

    /*===========================
       Window Scroll ALL FUNCTION START
   ===========================*/

    jQuery(window).on('scroll', function () {
        // > Window on scroll header color fill 
        color_fill_header();
    });


    /*===========================
        Document on  Submit FUNCTION START
    ===========================*/

    // > Contact form function by = custom.js	
    jQuery(document).on('submit', 'form.cons-contact-form', function (e) {
        e.preventDefault();
        var form = jQuery(this);
        /* sending message */
        jQuery.ajax({
            url: 'https://thewebmax.com/jobzilla/form-handler2.php',

            data: form.serialize() + "&action=contactform",
            type: 'POST',
            dataType: 'JSON',
            beforeSend: function () {
                jQuery('.loading-area').show();
            },

            success: function (data) {
                jQuery('.loading-area').hide();
                if (data['success']) {
                    jQuery("<div class='alert alert-success'>" + data['message'] + "</div>").insertBefore('form.cons-contact-form');
                } else {
                    jQuery("<div class='alert alert-danger'>" + data['message'] + "</div>").insertBefore('form.cons-contact-form');
                }
            }
        });
        jQuery('.cons-contact-form').trigger("reset");
        return false;
    });

    /*===========================
        Document on  Submit FUNCTION END
    ===========================*/


    /*upload profile pic function*/

    const fileUploader = document.getElementById('file-uploader');
    const reader = new FileReader();
    const imageGrid = document.getElementById('upload-image-grid');
    if (fileUploader) {
        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            const file = files[0];

            const img = document.createElement('img');
            imageGrid.appendChild(img);
            img.src = URL.createObjectURL(file);
            img.alt = file.name;
        });

    }


})(window.jQuery);


/*!
 * Chart.js v3.8.0
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e() }(this, (function () {
    "use strict"; const t = "undefined" == typeof window ? function (t) { return t() } : window.requestAnimationFrame; function e(e, i, s) { const n = s || (t => Array.prototype.slice.call(t)); let o = !1, a = []; return function (...s) { a = n(s), o || (o = !0, t.call(window, (() => { o = !1, e.apply(i, a) }))) } } function i(t, e) { let i; return function (...s) { return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e } } const s = t => "start" === t ? "left" : "end" === t ? "right" : "center", n = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2, o = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e; var a = new class { constructor() { this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0 } _notify(t, e, i, s) { const n = e.listeners[s], o = e.duration; n.forEach((s => s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }))) } _refresh() { this._request || (this._running = !0, this._request = t.call(window, (() => { this._update(), this._request = null, this._running && this._refresh() }))) } _update(t = Date.now()) { let e = 0; this._charts.forEach(((i, s) => { if (!i.running || !i.items.length) return; const n = i.items; let o, a = n.length - 1, r = !1; for (; a >= 0; --a)o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop()); r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length })), this._lastDate = t, 0 === e && (this._running = !1) } _getAnims(t) { const e = this._charts; let i = e.get(t); return i || (i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }, e.set(t, i)), i } listen(t, e, i) { this._getAnims(t).listeners[e].push(i) } add(t, e) { e && e.length && this._getAnims(t).items.push(...e) } has(t) { return this._getAnims(t).items.length > 0 } start(t) { const e = this._charts.get(t); e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(((t, e) => Math.max(t, e._duration)), 0), this._refresh()) } running(t) { if (!this._running) return !1; const e = this._charts.get(t); return !!(e && e.running && e.items.length) } stop(t) { const e = this._charts.get(t); if (!e || !e.items.length) return; const i = e.items; let s = i.length - 1; for (; s >= 0; --s)i[s].cancel(); e.items = [], this._notify(t, e, Date.now(), "complete") } remove(t) { return this._charts.delete(t) } };
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function r(t) { return t + .5 | 0 } const l = (t, e, i) => Math.max(Math.min(t, i), e); function h(t) { return l(r(2.55 * t), 0, 255) } function c(t) { return l(r(255 * t), 0, 255) } function d(t) { return l(r(t / 2.55) / 100, 0, 1) } function u(t) { return l(r(100 * t), 0, 100) } const f = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, g = [..."0123456789ABCDEF"], p = t => g[15 & t], m = t => g[(240 & t) >> 4] + g[15 & t], b = t => (240 & t) >> 4 == (15 & t); function x(t) { var e = (t => b(t.r) && b(t.g) && b(t.b) && b(t.a))(t) ? p : m; return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0 } const _ = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/; function y(t, e, i) { const s = e * Math.min(i, 1 - i), n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1); return [n(0), n(8), n(4)] } function v(t, e, i) { const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0); return [s(5), s(3), s(1)] } function w(t, e, i) { const s = y(t, 1, .5); let n; for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++)s[n] *= 1 - e - i, s[n] += e; return s } function M(t) { const e = t.r / 255, i = t.g / 255, s = t.b / 255, n = Math.max(e, i, s), o = Math.min(e, i, s), a = (n + o) / 2; let r, l, h; return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) { return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4 }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a] } function k(t, e, i, s) { return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(c) } function S(t, e, i) { return k(y, t, e, i) } function P(t) { return (t % 360 + 360) % 360 } function D(t) { const e = _.exec(t); let i, s = 255; if (!e) return; e[5] !== i && (s = e[6] ? h(+e[5]) : c(+e[5])); const n = P(+e[2]), o = +e[3] / 100, a = +e[4] / 100; return i = "hwb" === e[1] ? function (t, e, i) { return k(w, t, e, i) }(n, o, a) : "hsv" === e[1] ? function (t, e, i) { return k(v, t, e, i) }(n, o, a) : S(n, o, a), { r: i[0], g: i[1], b: i[2], a: s } } const C = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" }, O = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" }; let A; function T(t) { A || (A = function () { const t = {}, e = Object.keys(O), i = Object.keys(C); let s, n, o, a, r; for (s = 0; s < e.length; s++) { for (a = r = e[s], n = 0; n < i.length; n++)o = i[n], r = r.replace(o, C[o]); o = parseInt(O[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o] } return t }(), A.transparent = [0, 0, 0, 0]); const e = A[t.toLowerCase()]; return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 } } const L = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/; const R = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055, E = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4); function I(t, e, i) { if (t) { let s = M(t); s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = S(s), t.r = s[0], t.g = s[1], t.b = s[2] } } function z(t, e) { return t ? Object.assign(e || {}, t) : t } function F(t) { var e = { r: 0, g: 0, b: 0, a: 255 }; return Array.isArray(t) ? t.length >= 3 && (e = { r: t[0], g: t[1], b: t[2], a: 255 }, t.length > 3 && (e.a = c(t[3]))) : (e = z(t, { r: 0, g: 0, b: 0, a: 1 })).a = c(e.a), e } function B(t) { return "r" === t.charAt(0) ? function (t) { const e = L.exec(t); let i, s, n, o = 255; if (e) { if (e[7] !== i) { const t = +e[7]; o = e[8] ? h(t) : l(255 * t, 0, 255) } return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? h(i) : l(i, 0, 255)), s = 255 & (e[4] ? h(s) : l(s, 0, 255)), n = 255 & (e[6] ? h(n) : l(n, 0, 255)), { r: i, g: s, b: n, a: o } } }(t) : D(t) } class V { constructor(t) { if (t instanceof V) return t; const e = typeof t; let i; var s, n, o; "object" === e ? i = F(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = { r: 255 & 17 * f[s[1]], g: 255 & 17 * f[s[2]], b: 255 & 17 * f[s[3]], a: 5 === o ? 17 * f[s[4]] : 255 } : 7 !== o && 9 !== o || (n = { r: f[s[1]] << 4 | f[s[2]], g: f[s[3]] << 4 | f[s[4]], b: f[s[5]] << 4 | f[s[6]], a: 9 === o ? f[s[7]] << 4 | f[s[8]] : 255 })), i = n || T(t) || B(t)), this._rgb = i, this._valid = !!i } get valid() { return this._valid } get rgb() { var t = z(this._rgb); return t && (t.a = d(t.a)), t } set rgb(t) { this._rgb = F(t) } rgbString() { return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${d(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0; var t } hexString() { return this._valid ? x(this._rgb) : void 0 } hslString() { return this._valid ? function (t) { if (!t) return; const e = M(t), i = e[0], s = u(e[1]), n = u(e[2]); return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${d(t.a)})` : `hsl(${i}, ${s}%, ${n}%)` }(this._rgb) : void 0 } mix(t, e) { if (t) { const i = this.rgb, s = t.rgb; let n; const o = e === n ? .5 : e, a = 2 * o - 1, r = i.a - s.a, l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2; n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i } return this } interpolate(t, e) { return t && (this._rgb = function (t, e, i) { const s = E(d(t.r)), n = E(d(t.g)), o = E(d(t.b)); return { r: c(R(s + i * (E(d(e.r)) - s))), g: c(R(n + i * (E(d(e.g)) - n))), b: c(R(o + i * (E(d(e.b)) - o))), a: t.a + i * (e.a - t.a) } }(this._rgb, t._rgb, e)), this } clone() { return new V(this.rgb) } alpha(t) { return this._rgb.a = c(t), this } clearer(t) { return this._rgb.a *= 1 - t, this } greyscale() { const t = this._rgb, e = r(.3 * t.r + .59 * t.g + .11 * t.b); return t.r = t.g = t.b = e, this } opaquer(t) { return this._rgb.a *= 1 + t, this } negate() { const t = this._rgb; return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this } lighten(t) { return I(this._rgb, 2, t), this } darken(t) { return I(this._rgb, 2, -t), this } saturate(t) { return I(this._rgb, 1, t), this } desaturate(t) { return I(this._rgb, 1, -t), this } rotate(t) { return function (t, e) { var i = M(t); i[0] = P(i[0] + e), i = S(i), t.r = i[0], t.g = i[1], t.b = i[2] }(this._rgb, t), this } } function N(t) { return new V(t) } function W(t) { if (t && "object" == typeof t) { const e = t.toString(); return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e } return !1 } function H(t) { return W(t) ? t : N(t) } function j(t) { return W(t) ? t : N(t).saturate(.5).darken(.1).hexString() } function $() { } const Y = function () { let t = 0; return function () { return t++ } }(); function U(t) { return null == t } function X(t) { if (Array.isArray && Array.isArray(t)) return !0; const e = Object.prototype.toString.call(t); return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6) } function q(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) } const K = t => ("number" == typeof t || t instanceof Number) && isFinite(+t); function G(t, e) { return K(t) ? t : e } function Z(t, e) { return void 0 === t ? e : t } const J = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e, Q = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t; function tt(t, e, i) { if (t && "function" == typeof t.call) return t.apply(i, e) } function et(t, e, i, s) { let n, o, a; if (X(t)) if (o = t.length, s) for (n = o - 1; n >= 0; n--)e.call(i, t[n], n); else for (n = 0; n < o; n++)e.call(i, t[n], n); else if (q(t)) for (a = Object.keys(t), o = a.length, n = 0; n < o; n++)e.call(i, t[a[n]], a[n]) } function it(t, e) { let i, s, n, o; if (!t || !e || t.length !== e.length) return !1; for (i = 0, s = t.length; i < s; ++i)if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1; return !0 } function st(t) { if (X(t)) return t.map(st); if (q(t)) { const e = Object.create(null), i = Object.keys(t), s = i.length; let n = 0; for (; n < s; ++n)e[i[n]] = st(t[i[n]]); return e } return t } function nt(t) { return -1 === ["__proto__", "prototype", "constructor"].indexOf(t) } function ot(t, e, i, s) { if (!nt(t)) return; const n = e[t], o = i[t]; q(n) && q(o) ? at(n, o, s) : e[t] = st(o) } function at(t, e, i) { const s = X(e) ? e : [e], n = s.length; if (!q(t)) return t; const o = (i = i || {}).merger || ot; for (let a = 0; a < n; ++a) { if (!q(e = s[a])) continue; const n = Object.keys(e); for (let s = 0, a = n.length; s < a; ++s)o(n[s], t, e, i) } return t } function rt(t, e) { return at(t, e, { merger: lt }) } function lt(t, e, i) { if (!nt(t)) return; const s = e[t], n = i[t]; q(s) && q(n) ? rt(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = st(n)) } function ht(t, e) { const i = t.indexOf(".", e); return -1 === i ? t.length : i } function ct(t, e) { if ("" === e) return t; let i = 0, s = ht(e, i); for (; t && s > i;)t = t[e.slice(i, s)], i = s + 1, s = ht(e, i); return t } function dt(t) { return t.charAt(0).toUpperCase() + t.slice(1) } const ut = t => void 0 !== t, ft = t => "function" == typeof t, gt = (t, e) => { if (t.size !== e.size) return !1; for (const i of t) if (!e.has(i)) return !1; return !0 }; function pt(t) { return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type } const mt = Object.create(null), bt = Object.create(null); function xt(t, e) { if (!e) return t; const i = e.split("."); for (let e = 0, s = i.length; e < s; ++e) { const s = i[e]; t = t[s] || (t[s] = Object.create(null)) } return t } function _t(t, e, i) { return "string" == typeof e ? at(xt(t, e), i) : at(xt(t, ""), e) } var yt = new class { constructor(t) { this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (t, e) => j(e.backgroundColor), this.hoverBorderColor = (t, e) => j(e.borderColor), this.hoverColor = (t, e) => j(e.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t) } set(t, e) { return _t(this, t, e) } get(t) { return xt(this, t) } describe(t, e) { return _t(bt, t, e) } override(t, e) { return _t(mt, t, e) } route(t, e, i, s) { const n = xt(this, t), o = xt(this, i), a = "_" + e; Object.defineProperties(n, { [a]: { value: n[e], writable: !0 }, [e]: { enumerable: !0, get() { const t = this[a], e = o[s]; return q(t) ? Object.assign({}, e, t) : Z(t, e) }, set(t) { this[a] = t } } }) } }({ _scriptable: t => !t.startsWith("on"), _indexable: t => "events" !== t, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } }); function vt(t, e, i) { i = i || (i => t[i] < e); let s, n = t.length - 1, o = 0; for (; n - o > 1;)s = o + n >> 1, i(s) ? o = s : n = s; return { lo: o, hi: n } } const wt = (t, e, i) => vt(t, i, (s => t[s][e] < i)), Mt = (t, e, i) => vt(t, i, (s => t[s][e] >= i)); function kt(t, e, i) { let s = 0, n = t.length; for (; s < n && t[s] < e;)s++; for (; n > s && t[n - 1] > i;)n--; return s > 0 || n < t.length ? t.slice(s, n) : t } const St = ["push", "pop", "shift", "splice", "unshift"]; function Pt(t, e) { t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), St.forEach((e => { const i = "_onData" + dt(e), s = t[e]; Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value(...e) { const n = s.apply(this, e); return t._chartjs.listeners.forEach((t => { "function" == typeof t[i] && t[i](...e) })), n } }) }))) } function Dt(t, e) { const i = t._chartjs; if (!i) return; const s = i.listeners, n = s.indexOf(e); -1 !== n && s.splice(n, 1), s.length > 0 || (St.forEach((e => { delete t[e] })), delete t._chartjs) } function Ct(t) { const e = new Set; let i, s; for (i = 0, s = t.length; i < s; ++i)e.add(t[i]); return e.size === s ? t : Array.from(e) } const Ot = Math.PI, At = 2 * Ot, Tt = At + Ot, Lt = Number.POSITIVE_INFINITY, Rt = Ot / 180, Et = Ot / 2, It = Ot / 4, zt = 2 * Ot / 3, Ft = Math.log10, Bt = Math.sign; function Vt(t) { const e = Math.round(t); t = Ht(t, e, t / 1e3) ? e : t; const i = Math.pow(10, Math.floor(Ft(t))), s = t / i; return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i } function Nt(t) { const e = [], i = Math.sqrt(t); let s; for (s = 1; s < i; s++)t % s == 0 && (e.push(s), e.push(t / s)); return i === (0 | i) && e.push(i), e.sort(((t, e) => t - e)).pop(), e } function Wt(t) { return !isNaN(parseFloat(t)) && isFinite(t) } function Ht(t, e, i) { return Math.abs(t - e) < i } function jt(t, e) { const i = Math.round(t); return i - e <= t && i + e >= t } function $t(t, e, i) { let s, n, o; for (s = 0, n = t.length; s < n; s++)o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o)) } function Yt(t) { return t * (Ot / 180) } function Ut(t) { return t * (180 / Ot) } function Xt(t) { if (!K(t)) return; let e = 1, i = 0; for (; Math.round(t * e) / e !== t;)e *= 10, i++; return i } function qt(t, e) { const i = e.x - t.x, s = e.y - t.y, n = Math.sqrt(i * i + s * s); let o = Math.atan2(s, i); return o < -.5 * Ot && (o += At), { angle: o, distance: n } } function Kt(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) } function Gt(t, e) { return (t - e + Tt) % At - Ot } function Zt(t) { return (t % At + At) % At } function Jt(t, e, i, s) { const n = Zt(t), o = Zt(e), a = Zt(i), r = Zt(o - n), l = Zt(a - n), h = Zt(n - o), c = Zt(n - a); return n === o || n === a || s && o === a || r > l && h < c } function Qt(t, e, i) { return Math.max(e, Math.min(i, t)) } function te(t) { return Qt(t, -32768, 32767) } function ee(t, e, i, s = 1e-6) { return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s } function ie() { return "undefined" != typeof window && "undefined" != typeof document } function se(t) { let e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e } function ne(t, e, i) { let s; return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s } const oe = t => window.getComputedStyle(t, null); function ae(t, e) { return oe(t).getPropertyValue(e) } const re = ["top", "right", "bottom", "left"]; function le(t, e, i) { const s = {}; i = i ? "-" + i : ""; for (let n = 0; n < 4; n++) { const o = re[n]; s[o] = parseFloat(t[e + "-" + o + i]) || 0 } return s.width = s.left + s.right, s.height = s.top + s.bottom, s } function he(t, e) { if ("native" in t) return t; const { canvas: i, currentDevicePixelRatio: s } = e, n = oe(i), o = "border-box" === n.boxSizing, a = le(n, "padding"), r = le(n, "border", "width"), { x: l, y: h, box: c } = function (t, e) { const i = t.touches, s = i && i.length ? i[0] : t, { offsetX: n, offsetY: o } = s; let a, r, l = !1; if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target)) a = n, r = o; else { const t = e.getBoundingClientRect(); a = s.clientX - t.left, r = s.clientY - t.top, l = !0 } return { x: a, y: r, box: l } }(t, i), d = a.left + (c && r.left), u = a.top + (c && r.top); let { width: f, height: g } = e; return o && (f -= a.width + r.width, g -= a.height + r.height), { x: Math.round((l - d) / f * i.width / s), y: Math.round((h - u) / g * i.height / s) } } const ce = t => Math.round(10 * t) / 10; function de(t, e, i, s) { const n = oe(t), o = le(n, "margin"), a = ne(n.maxWidth, t, "clientWidth") || Lt, r = ne(n.maxHeight, t, "clientHeight") || Lt, l = function (t, e, i) { let s, n; if (void 0 === e || void 0 === i) { const o = se(t); if (o) { const t = o.getBoundingClientRect(), a = oe(o), r = le(a, "border", "width"), l = le(a, "padding"); e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = ne(a.maxWidth, o, "clientWidth"), n = ne(a.maxHeight, o, "clientHeight") } else e = t.clientWidth, i = t.clientHeight } return { width: e, height: i, maxWidth: s || Lt, maxHeight: n || Lt } }(t, e, i); let { width: h, height: c } = l; if ("content-box" === n.boxSizing) { const t = le(n, "border", "width"), e = le(n, "padding"); h -= e.width + t.width, c -= e.height + t.height } return h = Math.max(0, h - o.width), c = Math.max(0, s ? Math.floor(h / s) : c - o.height), h = ce(Math.min(h, a, l.maxWidth)), c = ce(Math.min(c, r, l.maxHeight)), h && !c && (c = ce(h / 2)), { width: h, height: c } } function ue(t, e, i) { const s = e || 1, n = Math.floor(t.height * s), o = Math.floor(t.width * s); t.height = n / s, t.width = o / s; const a = t.canvas; return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0) } const fe = function () { let t = !1; try { const e = { get passive() { return t = !0, !1 } }; window.addEventListener("test", null, e), window.removeEventListener("test", null, e) } catch (t) { } return t }(); function ge(t, e) { const i = ae(t, e), s = i && i.match(/^(\d+)(\.\d+)?px$/); return s ? +s[1] : void 0 } function pe(t) { return !t || U(t.size) || U(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family } function me(t, e, i, s, n) { let o = e[n]; return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s } function be(t, e, i, s) { let n = (s = s || {}).data = s.data || {}, o = s.garbageCollect = s.garbageCollect || []; s.font !== e && (n = s.data = {}, o = s.garbageCollect = [], s.font = e), t.save(), t.font = e; let a = 0; const r = i.length; let l, h, c, d, u; for (l = 0; l < r; l++)if (d = i[l], null != d && !0 !== X(d)) a = me(t, n, o, a, d); else if (X(d)) for (h = 0, c = d.length; h < c; h++)u = d[h], null == u || X(u) || (a = me(t, n, o, a, u)); t.restore(); const f = o.length / 2; if (f > i.length) { for (l = 0; l < f; l++)delete n[o[l]]; o.splice(0, f) } return a } function xe(t, e, i) { const s = t.currentDevicePixelRatio, n = 0 !== i ? Math.max(i / 2, .5) : 0; return Math.round((e - n) * s) / s + n } function _e(t, e) { (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore() } function ye(t, e, i, s) { let n, o, a, r, l; const h = e.pointStyle, c = e.rotation, d = e.radius; let u = (c || 0) * Rt; if (h && "object" == typeof h && (n = h.toString(), "[object HTMLImageElement]" === n || "[object HTMLCanvasElement]" === n)) return t.save(), t.translate(i, s), t.rotate(u), t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), void t.restore(); if (!(isNaN(d) || d <= 0)) { switch (t.beginPath(), h) { default: t.arc(i, s, d, 0, At), t.closePath(); break; case "triangle": t.moveTo(i + Math.sin(u) * d, s - Math.cos(u) * d), u += zt, t.lineTo(i + Math.sin(u) * d, s - Math.cos(u) * d), u += zt, t.lineTo(i + Math.sin(u) * d, s - Math.cos(u) * d), t.closePath(); break; case "rectRounded": l = .516 * d, r = d - l, o = Math.cos(u + It) * r, a = Math.sin(u + It) * r, t.arc(i - o, s - a, l, u - Ot, u - Et), t.arc(i + a, s - o, l, u - Et, u), t.arc(i + o, s + a, l, u, u + Et), t.arc(i - a, s + o, l, u + Et, u + Ot), t.closePath(); break; case "rect": if (!c) { r = Math.SQRT1_2 * d, t.rect(i - r, s - r, 2 * r, 2 * r); break } u += It; case "rectRot": o = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - o, s - a), t.lineTo(i + a, s - o), t.lineTo(i + o, s + a), t.lineTo(i - a, s + o), t.closePath(); break; case "crossRot": u += It; case "cross": o = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - o, s - a), t.lineTo(i + o, s + a), t.moveTo(i + a, s - o), t.lineTo(i - a, s + o); break; case "star": o = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - o, s - a), t.lineTo(i + o, s + a), t.moveTo(i + a, s - o), t.lineTo(i - a, s + o), u += It, o = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - o, s - a), t.lineTo(i + o, s + a), t.moveTo(i + a, s - o), t.lineTo(i - a, s + o); break; case "line": o = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - o, s - a), t.lineTo(i + o, s + a); break; case "dash": t.moveTo(i, s), t.lineTo(i + Math.cos(u) * d, s + Math.sin(u) * d) }t.fill(), e.borderWidth > 0 && t.stroke() } } function ve(t, e, i) { return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i } function we(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() } function Me(t) { t.restore() } function ke(t, e, i, s, n) { if (!e) return t.lineTo(i.x, i.y); if ("middle" === n) { const s = (e.x + i.x) / 2; t.lineTo(s, e.y), t.lineTo(s, i.y) } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y); t.lineTo(i.x, i.y) } function Se(t, e, i, s) { if (!e) return t.lineTo(i.x, i.y); t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y) } function Pe(t, e, i, s, n, o = {}) { const a = X(e) ? e : [e], r = o.strokeWidth > 0 && "" !== o.strokeColor; let l, h; for (t.save(), t.font = n.string, function (t, e) { e.translation && t.translate(e.translation[0], e.translation[1]); U(e.rotation) || t.rotate(e.rotation); e.color && (t.fillStyle = e.color); e.textAlign && (t.textAlign = e.textAlign); e.textBaseline && (t.textBaseline = e.textBaseline) }(t, o), l = 0; l < a.length; ++l)h = a[l], r && (o.strokeColor && (t.strokeStyle = o.strokeColor), U(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(h, i, s, o.maxWidth)), t.fillText(h, i, s, o.maxWidth), De(t, i, s, h, o), s += n.lineHeight; t.restore() } function De(t, e, i, s, n) { if (n.strikethrough || n.underline) { const o = t.measureText(s), a = e - o.actualBoundingBoxLeft, r = e + o.actualBoundingBoxRight, l = i - o.actualBoundingBoxAscent, h = i + o.actualBoundingBoxDescent, c = n.strikethrough ? (l + h) / 2 : h; t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke() } } function Ce(t, e) { const { x: i, y: s, w: n, h: o, radius: a } = e; t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -Et, Ot, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, Ot, Et, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, Et, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -Et, !0), t.lineTo(i + a.topLeft, s) } function Oe(t, e = [""], i = t, s, n = (() => t[0])) { ut(s) || (s = Ne("_fallback", t)); const o = { [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: t, _rootScopes: i, _fallback: s, _getTarget: n, override: n => Oe([n, ...t], e, i, s) }; return new Proxy(o, { deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0), get: (i, s) => Ee(i, s, (() => function (t, e, i, s) { let n; for (const o of e) if (n = Ne(Le(o, t), i), ut(n)) return Re(t, n) ? Be(i, s, t, n) : n }(s, e, t, i))), getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e), getPrototypeOf: () => Reflect.getPrototypeOf(t[0]), has: (t, e) => We(t).includes(e), ownKeys: t => We(t), set(t, e, i) { const s = t._storage || (t._storage = n()); return t[e] = s[e] = i, delete t._keys, !0 } }) } function Ae(t, e, i, s) { const n = { _cacheable: !1, _proxy: t, _context: e, _subProxy: i, _stack: new Set, _descriptors: Te(t, s), setContext: e => Ae(t, e, i, s), override: n => Ae(t.override(n), e, i, s) }; return new Proxy(n, { deleteProperty: (e, i) => (delete e[i], delete t[i], !0), get: (t, e, i) => Ee(t, e, (() => function (t, e, i) { const { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = t; let r = s[e]; ft(r) && a.isScriptable(e) && (r = function (t, e, i, s) { const { _proxy: n, _context: o, _subProxy: a, _stack: r } = i; if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t); r.add(t), e = e(o, a || s), r.delete(t), Re(t, e) && (e = Be(n._scopes, n, t, e)); return e }(e, r, t, i)); X(r) && r.length && (r = function (t, e, i, s) { const { _proxy: n, _context: o, _subProxy: a, _descriptors: r } = i; if (ut(o.index) && s(t)) e = e[o.index % e.length]; else if (q(e[0])) { const i = e, s = n._scopes.filter((t => t !== i)); e = []; for (const l of i) { const i = Be(s, n, t, l); e.push(Ae(i, o, a && a[t], r)) } } return e }(e, r, t, a.isIndexable)); Re(e, r) && (r = Ae(r, n, o && o[e], a)); return r }(t, e, i))), getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(t, i), getPrototypeOf: () => Reflect.getPrototypeOf(t), has: (e, i) => Reflect.has(t, i), ownKeys: () => Reflect.ownKeys(t), set: (e, i, s) => (t[i] = s, delete e[i], !0) }) } function Te(t, e = { scriptable: !0, indexable: !0 }) { const { _scriptable: i = e.scriptable, _indexable: s = e.indexable, _allKeys: n = e.allKeys } = t; return { allKeys: n, scriptable: i, indexable: s, isScriptable: ft(i) ? i : () => i, isIndexable: ft(s) ? s : () => s } } const Le = (t, e) => t ? t + dt(e) : e, Re = (t, e) => q(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object); function Ee(t, e, i) { if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]; const s = i(); return t[e] = s, s } function Ie(t, e, i) { return ft(t) ? t(e, i) : t } const ze = (t, e) => !0 === t ? e : "string" == typeof t ? ct(e, t) : void 0; function Fe(t, e, i, s, n) { for (const o of e) { const e = ze(i, o); if (e) { t.add(e); const o = Ie(e._fallback, i, n); if (ut(o) && o !== i && o !== s) return o } else if (!1 === e && ut(s) && i !== s) return null } return !1 } function Be(t, e, i, s) { const n = e._rootScopes, o = Ie(e._fallback, i, s), a = [...t, ...n], r = new Set; r.add(s); let l = Ve(r, a, i, o || i, s); return null !== l && ((!ut(o) || o === i || (l = Ve(r, a, o, l, s), null !== l)) && Oe(Array.from(r), [""], n, o, (() => function (t, e, i) { const s = t._getTarget(); e in s || (s[e] = {}); const n = s[e]; if (X(n) && q(i)) return i; return n }(e, i, s)))) } function Ve(t, e, i, s, n) { for (; i;)i = Fe(t, e, i, s, n); return i } function Ne(t, e) { for (const i of e) { if (!i) continue; const e = i[t]; if (ut(e)) return e } } function We(t) { let e = t._keys; return e || (e = t._keys = function (t) { const e = new Set; for (const i of t) for (const t of Object.keys(i).filter((t => !t.startsWith("_")))) e.add(t); return Array.from(e) }(t._scopes)), e } function He(t, e, i, s) { const { iScale: n } = t, { key: o = "r" } = this._parsing, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r)h = r + i, c = e[h], a[r] = { r: n.parse(ct(c, o), h) }; return a } const je = Number.EPSILON || 1e-14, $e = (t, e) => e < t.length && !t[e].skip && t[e], Ye = t => "x" === t ? "y" : "x"; function Ue(t, e, i, s) { const n = t.skip ? e : t, o = e, a = i.skip ? e : i, r = Kt(o, n), l = Kt(a, o); let h = r / (r + l), c = l / (r + l); h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c; const d = s * h, u = s * c; return { previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) }, next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) } } } function Xe(t, e = "x") { const i = Ye(e), s = t.length, n = Array(s).fill(0), o = Array(s); let a, r, l, h = $e(t, 0); for (a = 0; a < s; ++a)if (r = l, l = h, h = $e(t, a + 1), l) { if (h) { const t = h[e] - l[e]; n[a] = 0 !== t ? (h[i] - l[i]) / t : 0 } o[a] = r ? h ? Bt(n[a - 1]) !== Bt(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a] } !function (t, e, i) { const s = t.length; let n, o, a, r, l, h = $e(t, 0); for (let c = 0; c < s - 1; ++c)l = h, h = $e(t, c + 1), l && h && (Ht(e[c], 0, je) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c]))) }(t, n, o), function (t, e, i = "x") { const s = Ye(i), n = t.length; let o, a, r, l = $e(t, 0); for (let h = 0; h < n; ++h) { if (a = r, r = l, l = $e(t, h + 1), !r) continue; const n = r[i], c = r[s]; a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h]) } }(t, o, e) } function qe(t, e, i) { return Math.max(Math.min(t, i), e) } function Ke(t, e, i, s, n) { let o, a, r, l; if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) Xe(t, n); else { let i = s ? t[t.length - 1] : t[0]; for (o = 0, a = t.length; o < a; ++o)r = t[o], l = Ue(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r } e.capBezierPoints && function (t, e) { let i, s, n, o, a, r = ve(t[0], e); for (i = 0, s = t.length; i < s; ++i)a = o, o = r, r = i < s - 1 && ve(t[i + 1], e), o && (n = t[i], a && (n.cp1x = qe(n.cp1x, e.left, e.right), n.cp1y = qe(n.cp1y, e.top, e.bottom)), r && (n.cp2x = qe(n.cp2x, e.left, e.right), n.cp2y = qe(n.cp2y, e.top, e.bottom))) }(t, i) } const Ge = t => 0 === t || 1 === t, Ze = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * At / i), Je = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * At / i) + 1, Qe = { linear: t => t, easeInQuad: t => t * t, easeOutQuad: t => -t * (t - 2), easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1), easeInCubic: t => t * t * t, easeOutCubic: t => (t -= 1) * t * t + 1, easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2), easeInQuart: t => t * t * t * t, easeOutQuart: t => -((t -= 1) * t * t * t - 1), easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2), easeInQuint: t => t * t * t * t * t, easeOutQuint: t => (t -= 1) * t * t * t * t + 1, easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2), easeInSine: t => 1 - Math.cos(t * Et), easeOutSine: t => Math.sin(t * Et), easeInOutSine: t => -.5 * (Math.cos(Ot * t) - 1), easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)), easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t), easeInOutExpo: t => Ge(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))), easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1), easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t), easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1), easeInElastic: t => Ge(t) ? t : Ze(t, .075, .3), easeOutElastic: t => Ge(t) ? t : Je(t, .075, .3), easeInOutElastic(t) { const e = .1125; return Ge(t) ? t : t < .5 ? .5 * Ze(2 * t, e, .45) : .5 + .5 * Je(2 * t - 1, e, .45) }, easeInBack(t) { const e = 1.70158; return t * t * ((e + 1) * t - e) }, easeOutBack(t) { const e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, easeInOutBack(t) { let e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: t => 1 - Qe.easeOutBounce(1 - t), easeOutBounce(t) { const e = 7.5625, i = 2.75; return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375 }, easeInOutBounce: t => t < .5 ? .5 * Qe.easeInBounce(2 * t) : .5 * Qe.easeOutBounce(2 * t - 1) + .5 }; function ti(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) } } function ei(t, e, i, s) { return { x: t.x + i * (e.x - t.x), y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y } } function ii(t, e, i, s) { const n = { x: t.cp2x, y: t.cp2y }, o = { x: e.cp1x, y: e.cp1y }, a = ti(t, n, i), r = ti(n, o, i), l = ti(o, e, i), h = ti(a, r, i), c = ti(r, l, i); return ti(h, c, i) } const si = new Map; function ni(t, e, i) { return function (t, e) { e = e || {}; const i = t + JSON.stringify(e); let s = si.get(i); return s || (s = new Intl.NumberFormat(t, e), si.set(i, s)), s }(e, i).format(t) } const oi = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), ai = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/); function ri(t, e) { const i = ("" + t).match(oi); if (!i || "normal" === i[1]) return 1.2 * e; switch (t = +i[2], i[3]) { case "px": return t; case "%": t /= 100 }return e * t } function li(t, e) { const i = {}, s = q(e), n = s ? Object.keys(e) : e, o = q(t) ? s ? i => Z(t[i], t[e[i]]) : e => t[e] : () => t; for (const t of n) i[t] = +o(t) || 0; return i } function hi(t) { return li(t, { top: "y", right: "x", bottom: "y", left: "x" }) } function ci(t) { return li(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]) } function di(t) { const e = hi(t); return e.width = e.left + e.right, e.height = e.top + e.bottom, e } function ui(t, e) { t = t || {}, e = e || yt.font; let i = Z(t.size, e.size); "string" == typeof i && (i = parseInt(i, 10)); let s = Z(t.style, e.style); s && !("" + s).match(ai) && (console.warn('Invalid font style specified: "' + s + '"'), s = ""); const n = { family: Z(t.family, e.family), lineHeight: ri(Z(t.lineHeight, e.lineHeight), i), size: i, style: s, weight: Z(t.weight, e.weight), string: "" }; return n.string = pe(n), n } function fi(t, e, i, s) { let n, o, a, r = !0; for (n = 0, o = t.length; n < o; ++n)if (a = t[n], void 0 !== a && (void 0 !== e && "function" == typeof a && (a = a(e), r = !1), void 0 !== i && X(a) && (a = a[i % a.length], r = !1), void 0 !== a)) return s && !r && (s.cacheable = !1), a } function gi(t, e, i) { const { min: s, max: n } = t, o = Q(e, (n - s) / 2), a = (t, e) => i && 0 === t ? 0 : t + e; return { min: a(s, -Math.abs(o)), max: a(n, o) } } function pi(t, e) { return Object.assign(Object.create(t), e) } function mi(t, e, i) { return t ? function (t, e) { return { x: i => t + t + e - i, setWidth(t) { e = t }, textAlign: t => "center" === t ? t : "right" === t ? "left" : "right", xPlus: (t, e) => t - e, leftForLtr: (t, e) => t - e } }(e, i) : { x: t => t, setWidth(t) { }, textAlign: t => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t } } function bi(t, e) { let i, s; "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s) } function xi(t, e) { void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])) } function _i(t) { return "angle" === t ? { between: Jt, compare: Gt, normalize: Zt } : { between: ee, compare: (t, e) => t - e, normalize: t => t } } function yi({ start: t, end: e, count: i, loop: s, style: n }) { return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n } } function vi(t, e, i) { if (!i) return [t]; const { property: s, start: n, end: o } = i, a = e.length, { compare: r, between: l, normalize: h } = _i(s), { start: c, end: d, loop: u, style: f } = function (t, e, i) { const { property: s, start: n, end: o } = i, { between: a, normalize: r } = _i(s), l = e.length; let h, c, { start: d, end: u, loop: f } = t; if (f) { for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h)d--, u--; d %= l, u %= l } return u < d && (u += l), { start: d, end: u, loop: f, style: t.style } }(t, e, i), g = []; let p, m, b, x = !1, _ = null; const y = () => x || l(n, b, p) && 0 !== r(n, b), v = () => !x || 0 === r(o, p) || l(o, b, p); for (let t = c, i = c; t <= d; ++t)m = e[t % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? t : i), null !== _ && v() && (g.push(yi({ start: _, end: t, loop: u, count: a, style: f })), _ = null), i = t, b = p)); return null !== _ && g.push(yi({ start: _, end: d, loop: u, count: a, style: f })), g } function wi(t, e) { const i = [], s = t.segments; for (let n = 0; n < s.length; n++) { const o = vi(s[n], t.points, e); o.length && i.push(...o) } return i } function Mi(t, e) { const i = t.points, s = t.options.spanGaps, n = i.length; if (!n) return []; const o = !!t._loop, { start: a, end: r } = function (t, e, i, s) { let n = 0, o = e - 1; if (i && !s) for (; n < e && !t[n].skip;)n++; for (; n < e && t[n].skip;)n++; for (n %= e, i && (o += n); o > n && t[o % e].skip;)o--; return o %= e, { start: n, end: o } }(i, n, o, s); if (!0 === s) return ki(t, [{ start: a, end: r, loop: o }], i, e); return ki(t, function (t, e, i, s) { const n = t.length, o = []; let a, r = e, l = t[e]; for (a = e + 1; a <= i; ++a) { const i = t[a % n]; i.skip || i.stop ? l.skip || (s = !1, o.push({ start: e % n, end: (a - 1) % n, loop: s }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i } return null !== r && o.push({ start: e % n, end: r % n, loop: s }), o }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e) } function ki(t, e, i, s) { return s && s.setContext && i ? function (t, e, i, s) { const n = t._chart.getContext(), o = Si(t.options), { _datasetIndex: a, options: { spanGaps: r } } = t, l = i.length, h = []; let c = o, d = e[0].start, u = d; function f(t, e, s, n) { const o = r ? -1 : 1; if (t !== e) { for (t += l; i[t % l].skip;)t -= o; for (; i[e % l].skip;)e += o; t % l != e % l && (h.push({ start: t % l, end: e % l, loop: s, style: n }), c = n, d = e % l) } } for (const t of e) { d = r ? d : t.start; let e, o = i[d % l]; for (u = d + 1; u <= t.end; u++) { const r = i[u % l]; e = Si(s.setContext(pi(n, { type: "segment", p0: o, p1: r, p0DataIndex: (u - 1) % l, p1DataIndex: u % l, datasetIndex: a }))), Pi(e, c) && f(d, u - 1, t.loop, c), o = r, c = e } d < u - 1 && f(d, u - 1, t.loop, c) } return h }(t, e, i, s) : e } function Si(t) { return { backgroundColor: t.backgroundColor, borderCapStyle: t.borderCapStyle, borderDash: t.borderDash, borderDashOffset: t.borderDashOffset, borderJoinStyle: t.borderJoinStyle, borderWidth: t.borderWidth, borderColor: t.borderColor } } function Pi(t, e) { return e && JSON.stringify(t) !== JSON.stringify(e) } var Di = Object.freeze({ __proto__: null, easingEffects: Qe, isPatternOrGradient: W, color: H, getHoverColor: j, noop: $, uid: Y, isNullOrUndef: U, isArray: X, isObject: q, isFinite: K, finiteOrDefault: G, valueOrDefault: Z, toPercentage: J, toDimension: Q, callback: tt, each: et, _elementsEqual: it, clone: st, _merger: ot, merge: at, mergeIf: rt, _mergerIf: lt, _deprecated: function (t, e, i, s) { void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead') }, resolveObjectKey: ct, _capitalize: dt, defined: ut, isFunction: ft, setsEqual: gt, _isClickEvent: pt, toFontString: pe, _measureText: me, _longestText: be, _alignPixel: xe, clearCanvas: _e, drawPoint: ye, _isPointInArea: ve, clipArea: we, unclipArea: Me, _steppedLineTo: ke, _bezierCurveTo: Se, renderText: Pe, addRoundedRectPath: Ce, _lookup: vt, _lookupByKey: wt, _rlookupByKey: Mt, _filterBetween: kt, listenArrayEvents: Pt, unlistenArrayEvents: Dt, _arrayUnique: Ct, _createResolver: Oe, _attachContext: Ae, _descriptors: Te, _parseObjectDataRadialScale: He, splineCurve: Ue, splineCurveMonotone: Xe, _updateBezierControlPoints: Ke, _isDomSupported: ie, _getParentNode: se, getStyle: ae, getRelativePosition: he, getMaximumSize: de, retinaScale: ue, supportsEventListenerOptions: fe, readUsedSize: ge, fontString: function (t, e, i) { return e + " " + t + "px " + i }, requestAnimFrame: t, throttled: e, debounce: i, _toLeftRightCenter: s, _alignStartEnd: n, _textX: o, _pointInLine: ti, _steppedInterpolation: ei, _bezierInterpolation: ii, formatNumber: ni, toLineHeight: ri, _readValueToProps: li, toTRBL: hi, toTRBLCorners: ci, toPadding: di, toFont: ui, resolve: fi, _addGrace: gi, createContext: pi, PI: Ot, TAU: At, PITAU: Tt, INFINITY: Lt, RAD_PER_DEG: Rt, HALF_PI: Et, QUARTER_PI: It, TWO_THIRDS_PI: zt, log10: Ft, sign: Bt, niceNum: Vt, _factorize: Nt, isNumber: Wt, almostEquals: Ht, almostWhole: jt, _setMinAndMaxByKey: $t, toRadians: Yt, toDegrees: Ut, _decimalPlaces: Xt, getAngleFromPoint: qt, distanceBetweenPoints: Kt, _angleDiff: Gt, _normalizeAngle: Zt, _angleBetween: Jt, _limitValue: Qt, _int16Range: te, _isBetween: ee, getRtlAdapter: mi, overrideTextDirection: bi, restoreTextDirection: xi, _boundSegment: vi, _boundSegments: wi, _computeSegments: Mi }); function Ci(t, e, i, s) { const { controller: n, data: o, _sorted: a } = t, r = n._cachedMeta.iScale; if (r && e === r.axis && "r" !== e && a && o.length) { const t = r._reversePixels ? Mt : wt; if (!s) return t(o, e, i); if (n._sharedOptions) { const s = o[0], n = "function" == typeof s.getRange && s.getRange(e); if (n) { const s = t(o, e, i - n), a = t(o, e, i + n); return { lo: s.lo, hi: a.hi } } } } return { lo: 0, hi: o.length - 1 } } function Oi(t, e, i, s, n) { const o = t.getSortedVisibleDatasetMetas(), a = i[e]; for (let t = 0, i = o.length; t < i; ++t) { const { index: i, data: r } = o[t], { lo: l, hi: h } = Ci(o[t], e, a, n); for (let t = l; t <= h; ++t) { const e = r[t]; e.skip || s(e, i, t) } } } function Ai(t, e, i, s, n) { const o = []; if (!n && !t.isPointInArea(e)) return o; return Oi(t, i, e, (function (i, a, r) { (n || ve(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({ element: i, datasetIndex: a, index: r }) }), !0), o } function Ti(t, e, i, s, n, o) { let a = []; const r = function (t) { const e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y"); return function (t, s) { const n = e ? Math.abs(t.x - s.x) : 0, o = i ? Math.abs(t.y - s.y) : 0; return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) } }(i); let l = Number.POSITIVE_INFINITY; return Oi(t, i, e, (function (i, h, c) { const d = i.inRange(e.x, e.y, n); if (s && !d) return; const u = i.getCenterPoint(n); if (!(!!o || t.isPointInArea(u)) && !d) return; const f = r(e, u); f < l ? (a = [{ element: i, datasetIndex: h, index: c }], l = f) : f === l && a.push({ element: i, datasetIndex: h, index: c }) })), a } function Li(t, e, i, s, n, o) { return o || t.isPointInArea(e) ? "r" !== i || s ? Ti(t, e, i, s, n, o) : function (t, e, i, s) { let n = []; return Oi(t, i, e, (function (t, i, o) { const { startAngle: a, endAngle: r } = t.getProps(["startAngle", "endAngle"], s), { angle: l } = qt(t, { x: e.x, y: e.y }); Jt(l, a, r) && n.push({ element: t, datasetIndex: i, index: o }) })), n }(t, e, i, n) : [] } function Ri(t, e, i, s, n) { const o = [], a = "x" === i ? "inXRange" : "inYRange"; let r = !1; return Oi(t, i, e, ((t, s, l) => { t[a](e[i], n) && (o.push({ element: t, datasetIndex: s, index: l }), r = r || t.inRange(e.x, e.y, n)) })), s && !r ? [] : o } var Ei = { evaluateInteractionItems: Oi, modes: { index(t, e, i, s) { const n = he(e, t), o = i.axis || "x", a = i.includeInvisible || !1, r = i.intersect ? Ai(t, n, o, s, a) : Li(t, n, o, !1, s, a), l = []; return r.length ? (t.getSortedVisibleDatasetMetas().forEach((t => { const e = r[0].index, i = t.data[e]; i && !i.skip && l.push({ element: i, datasetIndex: t.index, index: e }) })), l) : [] }, dataset(t, e, i, s) { const n = he(e, t), o = i.axis || "xy", a = i.includeInvisible || !1; let r = i.intersect ? Ai(t, n, o, s, a) : Li(t, n, o, !1, s, a); if (r.length > 0) { const e = r[0].datasetIndex, i = t.getDatasetMeta(e).data; r = []; for (let t = 0; t < i.length; ++t)r.push({ element: i[t], datasetIndex: e, index: t }) } return r }, point: (t, e, i, s) => Ai(t, he(e, t), i.axis || "xy", s, i.includeInvisible || !1), nearest(t, e, i, s) { const n = he(e, t), o = i.axis || "xy", a = i.includeInvisible || !1; return Li(t, n, o, i.intersect, s, a) }, x: (t, e, i, s) => Ri(t, he(e, t), "x", i.intersect, s), y: (t, e, i, s) => Ri(t, he(e, t), "y", i.intersect, s) } }; const Ii = ["left", "top", "right", "bottom"]; function zi(t, e) { return t.filter((t => t.pos === e)) } function Fi(t, e) { return t.filter((t => -1 === Ii.indexOf(t.pos) && t.box.axis === e)) } function Bi(t, e) { return t.sort(((t, i) => { const s = e ? i : t, n = e ? t : i; return s.weight === n.weight ? s.index - n.index : s.weight - n.weight })) } function Vi(t, e) { const i = function (t) { const e = {}; for (const i of t) { const { stack: t, pos: s, stackWeight: n } = i; if (!t || !Ii.includes(s)) continue; const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 }); o.count++, o.weight += n } return e }(t), { vBoxMaxWidth: s, hBoxMaxHeight: n } = e; let o, a, r; for (o = 0, a = t.length; o < a; ++o) { r = t[o]; const { fullSize: a } = r.box, l = i[r.stack], h = l && r.stackWeight / l.weight; r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : a && e.availableHeight) } return i } function Ni(t, e, i, s) { return Math.max(t[i], e[i]) + Math.max(t[s], e[s]) } function Wi(t, e) { t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right) } function Hi(t, e, i, s) { const { pos: n, box: o } = i, a = t.maxPadding; if (!q(n)) { i.size && (t[n] -= i.size); const e = s[i.stack] || { size: 0, count: 1 }; e.size = Math.max(e.size, i.horizontal ? o.height : o.width), i.size = e.size / e.count, t[n] += i.size } o.getPadding && Wi(a, o.getPadding()); const r = Math.max(0, e.outerWidth - Ni(a, t, "left", "right")), l = Math.max(0, e.outerHeight - Ni(a, t, "top", "bottom")), h = r !== t.w, c = l !== t.h; return t.w = r, t.h = l, i.horizontal ? { same: h, other: c } : { same: c, other: h } } function ji(t, e) { const i = e.maxPadding; function s(t) { const s = { left: 0, top: 0, right: 0, bottom: 0 }; return t.forEach((t => { s[t] = Math.max(e[t], i[t]) })), s } return s(t ? ["left", "right"] : ["top", "bottom"]) } function $i(t, e, i, s) { const n = []; let o, a, r, l, h, c; for (o = 0, a = t.length, h = 0; o < a; ++o) { r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, ji(r.horizontal, e)); const { same: a, other: d } = Hi(e, i, r, s); h |= a && n.length, c = c || d, l.fullSize || n.push(r) } return h && $i(n, e, i, s) || c } function Yi(t, e, i, s, n) { t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n } function Ui(t, e, i, s) { const n = i.padding; let { x: o, y: a } = e; for (const r of t) { const t = r.box, l = s[r.stack] || { count: 1, placed: 0, weight: 1 }, h = r.stackWeight / l.weight || 1; if (r.horizontal) { const s = e.w * h, o = l.size || t.height; ut(l.start) && (a = l.start), t.fullSize ? Yi(t, n.left, a, i.outerWidth - n.right - n.left, o) : Yi(t, e.left + l.placed, a, s, o), l.start = a, l.placed += s, a = t.bottom } else { const s = e.h * h, a = l.size || t.width; ut(l.start) && (o = l.start), t.fullSize ? Yi(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : Yi(t, o, e.top + l.placed, a, s), l.start = o, l.placed += s, o = t.right } } e.x = o, e.y = a } yt.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }); var Xi = { addBox(t, e) { t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () { return [{ z: 0, draw(t) { e.draw(t) } }] }, t.boxes.push(e) }, removeBox(t, e) { const i = t.boxes ? t.boxes.indexOf(e) : -1; -1 !== i && t.boxes.splice(i, 1) }, configure(t, e, i) { e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight }, update(t, e, i, s) { if (!t) return; const n = di(t.options.layout.padding), o = Math.max(e - n.width, 0), a = Math.max(i - n.height, 0), r = function (t) { const e = function (t) { const e = []; let i, s, n, o, a, r; for (i = 0, s = (t || []).length; i < s; ++i)n = t[i], ({ position: o, options: { stack: a, stackWeight: r = 1 } } = n), e.push({ index: i, box: n, pos: o, horizontal: n.isHorizontal(), weight: n.weight, stack: a && o + a, stackWeight: r }); return e }(t), i = Bi(e.filter((t => t.box.fullSize)), !0), s = Bi(zi(e, "left"), !0), n = Bi(zi(e, "right")), o = Bi(zi(e, "top"), !0), a = Bi(zi(e, "bottom")), r = Fi(e, "x"), l = Fi(e, "y"); return { fullSize: i, leftAndTop: s.concat(o), rightAndBottom: n.concat(l).concat(a).concat(r), chartArea: zi(e, "chartArea"), vertical: s.concat(n).concat(l), horizontal: o.concat(a).concat(r) } }(t.boxes), l = r.vertical, h = r.horizontal; et(t.boxes, (t => { "function" == typeof t.beforeLayout && t.beforeLayout() })); const c = l.reduce(((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1, d = Object.freeze({ outerWidth: e, outerHeight: i, padding: n, availableWidth: o, availableHeight: a, vBoxMaxWidth: o / 2 / c, hBoxMaxHeight: a / 2 }), u = Object.assign({}, n); Wi(u, di(s)); const f = Object.assign({ maxPadding: u, w: o, h: a, x: n.left, y: n.top }, n), g = Vi(l.concat(h), d); $i(r.fullSize, f, d, g), $i(l, f, d, g), $i(h, f, d, g) && $i(l, f, d, g), function (t) { const e = t.maxPadding; function i(i) { const s = Math.max(e[i] - t[i], 0); return t[i] += s, s } t.y += i("top"), t.x += i("left"), i("right"), i("bottom") }(f), Ui(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, Ui(r.rightAndBottom, f, d, g), t.chartArea = { left: f.left, top: f.top, right: f.left + f.w, bottom: f.top + f.h, height: f.h, width: f.w }, et(r.chartArea, (e => { const i = e.box; Object.assign(i, t.chartArea), i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 }) })) } }; class qi { acquireContext(t, e) { } releaseContext(t) { return !1 } addEventListener(t, e, i) { } removeEventListener(t, e, i) { } getDevicePixelRatio() { return 1 } getMaximumSize(t, e, i, s) { return e = Math.max(0, e || t.width), i = i || t.height, { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) } } isAttached(t) { return !0 } updateConfig(t) { } } class Ki extends qi { acquireContext(t) { return t && t.getContext && t.getContext("2d") || null } updateConfig(t) { t.options.animation = !1 } } const Gi = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" }, Zi = t => null === t || "" === t; const Ji = !!fe && { passive: !0 }; function Qi(t, e, i) { t.canvas.removeEventListener(e, i, Ji) } function ts(t, e) { for (const i of t) if (i === e || i.contains(e)) return !0 } function es(t, e, i) { const s = t.canvas, n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || ts(i.addedNodes, s), e = e && !ts(i.removedNodes, s); e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n } function is(t, e, i) { const s = t.canvas, n = new MutationObserver((t => { let e = !1; for (const i of t) e = e || ts(i.removedNodes, s), e = e && !ts(i.addedNodes, s); e && i() })); return n.observe(document, { childList: !0, subtree: !0 }), n } const ss = new Map; let ns = 0; function os() { const t = window.devicePixelRatio; t !== ns && (ns = t, ss.forEach(((e, i) => { i.currentDevicePixelRatio !== t && e() }))) } function as(t, i, s) { const n = t.canvas, o = n && se(n); if (!o) return; const a = e(((t, e) => { const i = o.clientWidth; s(t, e), i < o.clientWidth && s() }), window), r = new ResizeObserver((t => { const e = t[0], i = e.contentRect.width, s = e.contentRect.height; 0 === i && 0 === s || a(i, s) })); return r.observe(o), function (t, e) { ss.size || window.addEventListener("resize", os), ss.set(t, e) }(t, a), r } function rs(t, e, i) { i && i.disconnect(), "resize" === e && function (t) { ss.delete(t), ss.size || window.removeEventListener("resize", os) }(t) } function ls(t, i, s) { const n = t.canvas, o = e((e => { null !== t.ctx && s(function (t, e) { const i = Gi[t.type] || t.type, { x: s, y: n } = he(t, e); return { type: i, chart: e, native: t, x: void 0 !== s ? s : null, y: void 0 !== n ? n : null } }(e, t)) }), t, (t => { const e = t[0]; return [e, e.offsetX, e.offsetY] })); return function (t, e, i) { t.addEventListener(e, i, Ji) }(n, i, o), o } class hs extends qi { acquireContext(t, e) { const i = t && t.getContext && t.getContext("2d"); return i && i.canvas === t ? (function (t, e) { const i = t.style, s = t.getAttribute("height"), n = t.getAttribute("width"); if (t.$chartjs = { initial: { height: s, width: n, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Zi(n)) { const e = ge(t, "width"); void 0 !== e && (t.width = e) } if (Zi(s)) if ("" === t.style.height) t.height = t.width / (e || 2); else { const e = ge(t, "height"); void 0 !== e && (t.height = e) } }(t, e), i) : null } releaseContext(t) { const e = t.canvas; if (!e.$chartjs) return !1; const i = e.$chartjs.initial;["height", "width"].forEach((t => { const s = i[t]; U(s) ? e.removeAttribute(t) : e.setAttribute(t, s) })); const s = i.style || {}; return Object.keys(s).forEach((t => { e.style[t] = s[t] })), e.width = e.width, delete e.$chartjs, !0 } addEventListener(t, e, i) { this.removeEventListener(t, e); const s = t.$proxies || (t.$proxies = {}), n = { attach: es, detach: is, resize: as }[e] || ls; s[e] = n(t, e, i) } removeEventListener(t, e) { const i = t.$proxies || (t.$proxies = {}), s = i[e]; if (!s) return; ({ attach: rs, detach: rs, resize: rs }[e] || Qi)(t, e, s), i[e] = void 0 } getDevicePixelRatio() { return window.devicePixelRatio } getMaximumSize(t, e, i, s) { return de(t, e, i, s) } isAttached(t) { const e = se(t); return !(!e || !e.isConnected) } } function cs(t) { return !ie() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Ki : hs } var ds = Object.freeze({ __proto__: null, _detectPlatform: cs, BasePlatform: qi, BasicPlatform: Ki, DomPlatform: hs }); const us = "transparent", fs = { boolean: (t, e, i) => i > .5 ? e : t, color(t, e, i) { const s = H(t || us), n = s.valid && H(e || us); return n && n.valid ? n.mix(s, i).hexString() : e }, number: (t, e, i) => t + (e - t) * i }; class gs { constructor(t, e, i, s) { const n = e[i]; s = fi([t.to, s, n, t.from]); const o = fi([t.from, n, s]); this._active = !0, this._fn = t.fn || fs[t.type || typeof o], this._easing = Qe[t.easing] || Qe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0 } active() { return this._active } update(t, e, i) { if (this._active) { this._notify(!1); const s = this._target[this._prop], n = i - this._start, o = this._duration - n; this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = fi([t.to, e, s, t.from]), this._from = fi([t.from, s, e]) } } cancel() { this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1)) } tick(t) { const e = t - this._start, i = this._duration, s = this._prop, n = this._from, o = this._loop, a = this._to; let r; if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0); e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r)) } wait() { const t = this._promises || (this._promises = []); return new Promise(((e, i) => { t.push({ res: e, rej: i }) })) } _notify(t) { const e = t ? "res" : "rej", i = this._promises || []; for (let t = 0; t < i.length; t++)i[t][e]() } } yt.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }); const ps = Object.keys(yt.animation); yt.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t }), yt.set("animations", { colors: { type: "color", properties: ["color", "borderColor", "backgroundColor"] }, numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius", "tension"] } }), yt.describe("animations", { _fallback: "animation" }), yt.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: t => 0 | t } } } }); class ms { constructor(t, e) { this._chart = t, this._properties = new Map, this.configure(e) } configure(t) { if (!q(t)) return; const e = this._properties; Object.getOwnPropertyNames(t).forEach((i => { const s = t[i]; if (!q(s)) return; const n = {}; for (const t of ps) n[t] = s[t]; (X(s.properties) && s.properties || [i]).forEach((t => { t !== i && e.has(t) || e.set(t, n) })) })) } _animateOptions(t, e) { const i = e.options, s = function (t, e) { if (!e) return; let i = t.options; if (!i) return void (t.options = e); i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })); return i }(t, i); if (!s) return []; const n = this._createAnimations(s, i); return i.$shared && function (t, e) { const i = [], s = Object.keys(e); for (let e = 0; e < s.length; e++) { const n = t[s[e]]; n && n.active() && i.push(n.wait()) } return Promise.all(i) }(t.options.$animations, i).then((() => { t.options = i }), (() => { })), n } _createAnimations(t, e) { const i = this._properties, s = [], n = t.$animations || (t.$animations = {}), o = Object.keys(e), a = Date.now(); let r; for (r = o.length - 1; r >= 0; --r) { const l = o[r]; if ("$" === l.charAt(0)) continue; if ("options" === l) { s.push(...this._animateOptions(t, e)); continue } const h = e[l]; let c = n[l]; const d = i.get(l); if (c) { if (d && c.active()) { c.update(d, h, a); continue } c.cancel() } d && d.duration ? (n[l] = c = new gs(d, t, l, h), s.push(c)) : t[l] = h } return s } update(t, e) { if (0 === this._properties.size) return void Object.assign(t, e); const i = this._createAnimations(t, e); return i.length ? (a.add(this._chart, i), !0) : void 0 } } function bs(t, e) { const i = t && t.options || {}, s = i.reverse, n = void 0 === i.min ? e : 0, o = void 0 === i.max ? e : 0; return { start: s ? o : n, end: s ? n : o } } function xs(t, e) { const i = [], s = t._getSortedDatasetMetas(e); let n, o; for (n = 0, o = s.length; n < o; ++n)i.push(s[n].index); return i } function _s(t, e, i, s = {}) { const n = t.keys, o = "single" === s.mode; let a, r, l, h; if (null !== e) { for (a = 0, r = n.length; a < r; ++a) { if (l = +n[a], l === i) { if (s.all) continue; break } h = t.values[l], K(h) && (o || 0 === e || Bt(e) === Bt(h)) && (e += h) } return e } } function ys(t, e) { const i = t && t.options.stacked; return i || void 0 === i && void 0 !== e.stack } function vs(t, e, i) { const s = t[e] || (t[e] = {}); return s[i] || (s[i] = {}) } function ws(t, e, i, s) { for (const n of e.getMatchingVisibleMetas(s).reverse()) { const e = t[n.index]; if (i && e > 0 || !i && e < 0) return n.index } return null } function Ms(t, e) { const { chart: i, _cachedMeta: s } = t, n = i._stacks || (i._stacks = {}), { iScale: o, vScale: a, index: r } = s, l = o.axis, h = a.axis, c = function (t, e, i) { return `${t.id}.${e.id}.${i.stack || i.type}` }(o, a, s), d = e.length; let u; for (let t = 0; t < d; ++t) { const i = e[t], { [l]: o, [h]: d } = i; u = (i._stacks || (i._stacks = {}))[h] = vs(n, c, o), u[r] = d, u._top = ws(u, a, !0, s.type), u._bottom = ws(u, a, !1, s.type) } } function ks(t, e) { const i = t.scales; return Object.keys(i).filter((t => i[t].axis === e)).shift() } function Ss(t, e) { const i = t.controller.index, s = t.vScale && t.vScale.axis; if (s) { e = e || t._parsed; for (const t of e) { const e = t._stacks; if (!e || void 0 === e[s] || void 0 === e[s][i]) return; delete e[s][i] } } } const Ps = t => "reset" === t || "none" === t, Ds = (t, e) => e ? t : Object.assign({}, t); class Cs { constructor(t, e) { this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize() } initialize() { const t = this._cachedMeta; this.configure(), this.linkScales(), t._stacked = ys(t.vScale, t), this.addElements() } updateIndex(t) { this.index !== t && Ss(this._cachedMeta), this.index = t } linkScales() { const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i, n = e.xAxisID = Z(i.xAxisID, ks(t, "x")), o = e.yAxisID = Z(i.yAxisID, ks(t, "y")), a = e.rAxisID = Z(i.rAxisID, ks(t, "r")), r = e.indexAxis, l = e.iAxisID = s(r, n, o, a), h = e.vAxisID = s(r, o, n, a); e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(h) } getDataset() { return this.chart.data.datasets[this.index] } getMeta() { return this.chart.getDatasetMeta(this.index) } getScaleForId(t) { return this.chart.scales[t] } _getOtherScale(t) { const e = this._cachedMeta; return t === e.iScale ? e.vScale : e.iScale } reset() { this._update("reset") } _destroy() { const t = this._cachedMeta; this._data && Dt(this._data, this), t._stacked && Ss(t) } _dataCheck() { const t = this.getDataset(), e = t.data || (t.data = []), i = this._data; if (q(e)) this._data = function (t) { const e = Object.keys(t), i = new Array(e.length); let s, n, o; for (s = 0, n = e.length; s < n; ++s)o = e[s], i[s] = { x: o, y: t[o] }; return i }(e); else if (i !== e) { if (i) { Dt(i, this); const t = this._cachedMeta; Ss(t), t._parsed = [] } e && Object.isExtensible(e) && Pt(e, this), this._syncList = [], this._data = e } } addElements() { const t = this._cachedMeta; this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType) } buildOrUpdateElements(t) { const e = this._cachedMeta, i = this.getDataset(); let s = !1; this._dataCheck(); const n = e._stacked; e._stacked = ys(e.vScale, e), e.stack !== i.stack && (s = !0, Ss(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && Ms(this, e._parsed) } configure() { const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0); this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {} } parse(t, e) { const { _cachedMeta: i, _data: s } = this, { iScale: n, _stacked: o } = i, a = n.axis; let r, l, h, c = 0 === t && e === s.length || i._sorted, d = t > 0 && i._parsed[t - 1]; if (!1 === this._parsing) i._parsed = s, i._sorted = !0, h = s; else { h = X(s[t]) ? this.parseArrayData(i, s, t, e) : q(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e); const n = () => null === l[a] || d && l[a] < d[a]; for (r = 0; r < e; ++r)i._parsed[r + t] = l = h[r], c && (n() && (c = !1), d = l); i._sorted = c } o && Ms(this, h) } parsePrimitiveData(t, e, i, s) { const { iScale: n, vScale: o } = t, a = n.axis, r = o.axis, l = n.getLabels(), h = n === o, c = new Array(s); let d, u, f; for (d = 0, u = s; d < u; ++d)f = d + i, c[d] = { [a]: h || n.parse(l[f], f), [r]: o.parse(e[f], f) }; return c } parseArrayData(t, e, i, s) { const { xScale: n, yScale: o } = t, a = new Array(s); let r, l, h, c; for (r = 0, l = s; r < l; ++r)h = r + i, c = e[h], a[r] = { x: n.parse(c[0], h), y: o.parse(c[1], h) }; return a } parseObjectData(t, e, i, s) { const { xScale: n, yScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = new Array(s); let h, c, d, u; for (h = 0, c = s; h < c; ++h)d = h + i, u = e[d], l[h] = { x: n.parse(ct(u, a), d), y: o.parse(ct(u, r), d) }; return l } getParsed(t) { return this._cachedMeta._parsed[t] } getDataElement(t) { return this._cachedMeta.data[t] } applyStack(t, e, i) { const s = this.chart, n = this._cachedMeta, o = e[t.axis]; return _s({ keys: xs(s, !0), values: e._stacks[t.axis] }, o, n.index, { mode: i }) } updateRangeFromParsed(t, e, i, s) { const n = i[e.axis]; let o = null === n ? NaN : n; const a = s && i._stacks[e.axis]; s && a && (s.values = a, o = _s(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o) } getMinMax(t, e) { const i = this._cachedMeta, s = i._parsed, n = i._sorted && t === i.iScale, o = s.length, a = this._getOtherScale(t), r = ((t, e, i) => t && !e.hidden && e._stacked && { keys: xs(i, !0), values: null })(e, i, this.chart), l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: h, max: c } = function (t) { const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds(); return { min: s ? e : Number.NEGATIVE_INFINITY, max: n ? i : Number.POSITIVE_INFINITY } }(a); let d, u; function f() { u = s[d]; const e = u[a.axis]; return !K(u[t.axis]) || h > e || c < e } for (d = 0; d < o && (f() || (this.updateRangeFromParsed(l, t, u, r), !n)); ++d); if (n) for (d = o - 1; d >= 0; --d)if (!f()) { this.updateRangeFromParsed(l, t, u, r); break } return l } getAllParsedValues(t) { const e = this._cachedMeta._parsed, i = []; let s, n, o; for (s = 0, n = e.length; s < n; ++s)o = e[s][t.axis], K(o) && i.push(o); return i } getMaxOverflow() { return !1 } getLabelAndValue(t) { const e = this._cachedMeta, i = e.iScale, s = e.vScale, n = this.getParsed(t); return { label: i ? "" + i.getLabelForValue(n[i.axis]) : "", value: s ? "" + s.getLabelForValue(n[s.axis]) : "" } } _update(t) { const e = this._cachedMeta; this.update(t || "default"), e._clip = function (t) { let e, i, s, n; return q(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, { top: e, right: i, bottom: s, left: n, disabled: !1 === t } }(Z(this.options.clip, function (t, e, i) { if (!1 === i) return !1; const s = bs(t, i), n = bs(e, i); return { top: n.end, right: s.end, bottom: n.start, left: s.start } }(e.xScale, e.yScale, this.getMaxOverflow()))) } update(t) { } draw() { const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], n = e.chartArea, o = [], a = this._drawStart || 0, r = this._drawCount || s.length - a, l = this.options.drawActiveElementsOnTop; let h; for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) { const e = s[h]; e.hidden || (e.active && l ? o.push(e) : e.draw(t, n)) } for (h = 0; h < o.length; ++h)o[h].draw(t, n) } getStyle(t, e) { const i = e ? "active" : "default"; return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i) } getContext(t, e, i) { const s = this.getDataset(); let n; if (t >= 0 && t < this._cachedMeta.data.length) { const e = this._cachedMeta.data[t]; n = e.$context || (e.$context = function (t, e, i) { return pi(t, { active: !1, dataIndex: e, parsed: void 0, raw: void 0, element: i, index: e, mode: "default", type: "data" }) }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t } else n = this.$context || (this.$context = function (t, e) { return pi(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" }) }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index; return n.active = !!e, n.mode = i, n } resolveDatasetElementOptions(t) { return this._resolveElementOptions(this.datasetElementType.id, t) } resolveDataElementOptions(t, e) { return this._resolveElementOptions(this.dataElementType.id, e, t) } _resolveElementOptions(t, e = "default", i) { const s = "active" === e, n = this._cachedDataOpts, o = t + "-" + e, a = n[o], r = this.enableOptionSharing && ut(i); if (a) return Ds(a, r); const l = this.chart.config, h = l.datasetElementScopeKeys(this._type, t), c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""], d = l.getOptionScopes(this.getDataset(), h), u = Object.keys(yt.elements[t]), f = l.resolveNamedOptions(d, u, (() => this.getContext(i, s)), c); return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ds(f, r))), f } _resolveAnimations(t, e, i) { const s = this.chart, n = this._cachedDataOpts, o = `animation-${e}`, a = n[o]; if (a) return a; let r; if (!1 !== s.options.animation) { const s = this.chart.config, n = s.datasetAnimationScopeKeys(this._type, e), o = s.getOptionScopes(this.getDataset(), n); r = s.createResolver(o, this.getContext(t, i, e)) } const l = new ms(s, r && r.animations); return r && r._cacheable && (n[o] = Object.freeze(l)), l } getSharedOptions(t) { if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t)) } includeOptions(t, e) { return !e || Ps(t) || this.chart._animationsDisabled } updateElement(t, e, i, s) { Ps(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i) } updateSharedOptions(t, e, i) { t && !Ps(e) && this._resolveAnimations(void 0, e).update(t, i) } _setStyle(t, e, i, s) { t.active = s; const n = this.getStyle(e, s); this._resolveAnimations(e, i, s).update(t, { options: !s && this.getSharedOptions(n) || n }) } removeHoverStyle(t, e, i) { this._setStyle(t, i, "active", !1) } setHoverStyle(t, e, i) { this._setStyle(t, i, "active", !0) } _removeDatasetHoverStyle() { const t = this._cachedMeta.dataset; t && this._setStyle(t, void 0, "active", !1) } _setDatasetHoverStyle() { const t = this._cachedMeta.dataset; t && this._setStyle(t, void 0, "active", !0) } _resyncElements(t) { const e = this._data, i = this._cachedMeta.data; for (const [t, e, i] of this._syncList) this[t](e, i); this._syncList = []; const s = i.length, n = e.length, o = Math.min(n, s); o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n) } _insertElements(t, e, i = !0) { const s = this._cachedMeta, n = s.data, o = t + e; let a; const r = t => { for (t.length += e, a = t.length - 1; a >= o; a--)t[a] = t[a - e] }; for (r(n), a = t; a < o; ++a)n[a] = new this.dataElementType; this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset") } updateElements(t, e, i, s) { } _removeElements(t, e) { const i = this._cachedMeta; if (this._parsing) { const s = i._parsed.splice(t, e); i._stacked && Ss(i, s) } i.data.splice(t, e) } _sync(t) { if (this._parsing) this._syncList.push(t); else { const [e, i, s] = t; this[e](i, s) } this.chart._dataChanges.push([this.index, ...t]) } _onDataPush() { const t = arguments.length; this._sync(["_insertElements", this.getDataset().data.length - t, t]) } _onDataPop() { this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]) } _onDataShift() { this._sync(["_removeElements", 0, 1]) } _onDataSplice(t, e) { e && this._sync(["_removeElements", t, e]); const i = arguments.length - 2; i && this._sync(["_insertElements", t, i]) } _onDataUnshift() { this._sync(["_insertElements", 0, arguments.length]) } } Cs.defaults = {}, Cs.prototype.datasetElementType = null, Cs.prototype.dataElementType = null; class Os { constructor() { this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0 } tooltipPosition(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } } hasValue() { return Wt(this.x) && Wt(this.y) } getProps(t, e) { const i = this.$animations; if (!e || !i) return this; const s = {}; return t.forEach((t => { s[t] = i[t] && i[t].active() ? i[t]._to : this[t] })), s } } Os.defaults = {}, Os.defaultRoutes = void 0; const As = { values: t => X(t) ? t : "" + t, numeric(t, e, i) { if (0 === t) return "0"; const s = this.chart.options.locale; let n, o = t; if (i.length > 1) { const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value)); (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function (t, e) { let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value; Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)); return i }(t, i) } const a = Ft(Math.abs(o)), r = Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = { notation: n, minimumFractionDigits: r, maximumFractionDigits: r }; return Object.assign(l, this.options.ticks.format), ni(t, s, l) }, logarithmic(t, e, i) { if (0 === t) return "0"; const s = t / Math.pow(10, Math.floor(Ft(t))); return 1 === s || 2 === s || 5 === s ? As.numeric.call(this, t, e, i) : "" } }; var Ts = { formatters: As }; function Ls(t, e) { const i = t.options.ticks, s = i.maxTicksLimit || function (t) { const e = t.options.offset, i = t._tickSize(), s = t._length / i + (e ? 0 : 1), n = t._maxLength / i; return Math.floor(Math.min(s, n)) }(t), n = i.major.enabled ? function (t) { const e = []; let i, s; for (i = 0, s = t.length; i < s; i++)t[i].major && e.push(i); return e }(e) : [], o = n.length, a = n[0], r = n[o - 1], l = []; if (o > s) return function (t, e, i, s) { let n, o = 0, a = i[0]; for (s = Math.ceil(s), n = 0; n < t.length; n++)n === a && (e.push(t[n]), o++, a = i[o * s]) }(e, l, n, o / s), l; const h = function (t, e, i) { const s = function (t) { const e = t.length; let i, s; if (e < 2) return !1; for (s = t[0], i = 1; i < e; ++i)if (t[i] - t[i - 1] !== s) return !1; return s }(t), n = e.length / i; if (!s) return Math.max(n, 1); const o = Nt(s); for (let t = 0, e = o.length - 1; t < e; t++) { const e = o[t]; if (e > n) return e } return Math.max(n, 1) }(n, e, s); if (o > 0) { let t, i; const s = o > 1 ? Math.round((r - a) / (o - 1)) : null; for (Rs(e, l, h, U(s) ? 0 : a - s, a), t = 0, i = o - 1; t < i; t++)Rs(e, l, h, n[t], n[t + 1]); return Rs(e, l, h, r, U(s) ? e.length : r + s), l } return Rs(e, l, h), l } function Rs(t, e, i, s, n) { const o = Z(s, 0), a = Math.min(Z(n, t.length), t.length); let r, l, h, c = 0; for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), h = o; h < 0;)c++, h = Math.round(o + c * i); for (l = Math.max(o, 0); l < a; l++)l === h && (e.push(t[l]), c++, h = Math.round(o + c * i)) } yt.set("scale", { display: !0, offset: !1, reverse: !1, beginAtZero: !1, bounds: "ticks", grace: 0, grid: { display: !0, lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (t, e) => e.lineWidth, tickColor: (t, e) => e.color, offset: !1, borderDash: [], borderDashOffset: 0, borderWidth: 1 }, title: { display: !1, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: !1, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: !0, autoSkip: !0, autoSkipPadding: 3, labelOffset: 0, callback: Ts.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: !1, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), yt.route("scale.ticks", "color", "", "color"), yt.route("scale.grid", "color", "", "borderColor"), yt.route("scale.grid", "borderColor", "", "borderColor"), yt.route("scale.title", "color", "", "color"), yt.describe("scale", { _fallback: !1, _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t, _indexable: t => "borderDash" !== t && "tickBorderDash" !== t }), yt.describe("scales", { _fallback: "scale" }), yt.describe("scale.ticks", { _scriptable: t => "backdropPadding" !== t && "callback" !== t, _indexable: t => "backdropPadding" !== t }); const Es = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i; function Is(t, e) { const i = [], s = t.length / e, n = t.length; let o = 0; for (; o < n; o += s)i.push(t[Math.floor(o)]); return i } function zs(t, e, i) { const s = t.ticks.length, n = Math.min(e, s - 1), o = t._startPixel, a = t._endPixel, r = 1e-6; let l, h = t.getPixelForTick(n); if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h } function Fs(t) { return t.drawTicks ? t.tickLength : 0 } function Bs(t, e) { if (!t.display) return 0; const i = ui(t.font, e), s = di(t.padding); return (X(t.text) ? t.text.length : 1) * i.lineHeight + s.height } function Vs(t, e, i) { let n = s(t); return (i && "right" !== e || !i && "right" === e) && (n = (t => "left" === t ? "right" : "right" === t ? "left" : t)(n)), n } class Ns extends Os { constructor(t) { super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0 } init(t) { this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax) } parse(t, e) { return t } getUserBounds() { let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this; return t = G(t, Number.POSITIVE_INFINITY), e = G(e, Number.NEGATIVE_INFINITY), i = G(i, Number.POSITIVE_INFINITY), s = G(s, Number.NEGATIVE_INFINITY), { min: G(t, i), max: G(e, s), minDefined: K(t), maxDefined: K(e) } } getMinMax(t) { let e, { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(); if (n && o) return { min: i, max: s }; const a = this.getMatchingVisibleMetas(); for (let r = 0, l = a.length; r < l; ++r)e = a[r].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max)); return i = o && i > s ? s : i, s = n && i > s ? i : s, { min: G(i, G(s, i)), max: G(s, G(i, s)) } } getPadding() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } } getTicks() { return this.ticks } getLabels() { const t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] } beforeLayout() { this._cache = {}, this._dataLimitsCached = !1 } beforeUpdate() { tt(this.options.beforeUpdate, [this]) } update(t, e, i) { const { beginAtZero: s, grace: n, ticks: o } = this.options, a = o.sampleSize; this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = gi(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks(); const r = a < this.ticks.length; this._convertTicksToLabels(r ? Is(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = Ls(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate() } configure() { let t, e, i = this.options.reverse; this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels } afterUpdate() { tt(this.options.afterUpdate, [this]) } beforeSetDimensions() { tt(this.options.beforeSetDimensions, [this]) } setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0 } afterSetDimensions() { tt(this.options.afterSetDimensions, [this]) } _callHooks(t) { this.chart.notifyPlugins(t, this.getContext()), tt(this.options[t], [this]) } beforeDataLimits() { this._callHooks("beforeDataLimits") } determineDataLimits() { } afterDataLimits() { this._callHooks("afterDataLimits") } beforeBuildTicks() { this._callHooks("beforeBuildTicks") } buildTicks() { return [] } afterBuildTicks() { this._callHooks("afterBuildTicks") } beforeTickToLabelConversion() { tt(this.options.beforeTickToLabelConversion, [this]) } generateTickLabels(t) { const e = this.options.ticks; let i, s, n; for (i = 0, s = t.length; i < s; i++)n = t[i], n.label = tt(e.callback, [n.value, i, t], this) } afterTickToLabelConversion() { tt(this.options.afterTickToLabelConversion, [this]) } beforeCalculateLabelRotation() { tt(this.options.beforeCalculateLabelRotation, [this]) } calculateLabelRotation() { const t = this.options, e = t.ticks, i = this.ticks.length, s = e.minRotation || 0, n = e.maxRotation; let o, a, r, l = s; if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s); const h = this._getLabelSizes(), c = h.widest.width, d = h.highest.height, u = Qt(this.chart.width - c, 0, this.maxWidth); o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Fs(t.grid) - e.padding - Bs(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = Ut(Math.min(Math.asin(Qt((h.highest.height + 6) / o, -1, 1)), Math.asin(Qt(a / r, -1, 1)) - Math.asin(Qt(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l } afterCalculateLabelRotation() { tt(this.options.afterCalculateLabelRotation, [this]) } afterAutoSkip() { } beforeFit() { tt(this.options.beforeFit, [this]) } fit() { const t = { width: 0, height: 0 }, { chart: e, options: { ticks: i, title: s, grid: n } } = this, o = this._isVisible(), a = this.isHorizontal(); if (o) { const o = Bs(s, e.options.font); if (a ? (t.width = this.maxWidth, t.height = Fs(n) + o) : (t.height = this.maxHeight, t.width = Fs(n) + o), i.display && this.ticks.length) { const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(), r = 2 * i.padding, l = Yt(this.labelRotation), h = Math.cos(l), c = Math.sin(l); if (a) { const e = i.mirror ? 0 : c * n.width + h * o.height; t.height = Math.min(this.maxHeight, t.height + e + r) } else { const e = i.mirror ? 0 : h * n.width + c * o.height; t.width = Math.min(this.maxWidth, t.width + e + r) } this._calculatePadding(e, s, c, h) } } this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom) } _calculatePadding(t, e, i, s) { const { ticks: { align: n, padding: o }, position: a } = this.options, r = 0 !== this.labelRotation, l = "top" !== a && "x" === this.axis; if (this.isHorizontal()) { const a = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1); let c = 0, d = 0; r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0) } else { let i = e.height / 2, s = t.height / 2; "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o } } _handleMargins() { this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)) } afterFit() { tt(this.options.afterFit, [this]) } isHorizontal() { const { axis: t, position: e } = this.options; return "top" === e || "bottom" === e || "x" === t } isFullSize() { return this.options.fullSize } _convertTicksToLabels(t) { let e, i; for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++)U(t[e].label) && (t.splice(e, 1), i--, e--); this.afterTickToLabelConversion() } _getLabelSizes() { let t = this._labelSizes; if (!t) { const e = this.options.ticks.sampleSize; let i = this.ticks; e < i.length && (i = Is(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length) } return t } _computeLabelSizes(t, e) { const { ctx: i, _longestTextCache: s } = this, n = [], o = []; let a, r, l, h, c, d, u, f, g, p, m, b = 0, x = 0; for (a = 0; a < e; ++a) { if (h = t[a].label, c = this._resolveTickFontOptions(a), i.font = d = c.string, u = s[d] = s[d] || { data: {}, gc: [] }, f = c.lineHeight, g = p = 0, U(h) || X(h)) { if (X(h)) for (r = 0, l = h.length; r < l; ++r)m = h[r], U(m) || X(m) || (g = me(i, u.data, u.gc, g, m), p += f) } else g = me(i, u.data, u.gc, g, h), p = f; n.push(g), o.push(p), b = Math.max(g, b), x = Math.max(p, x) } !function (t, e) { et(t, (t => { const i = t.gc, s = i.length / 2; let n; if (s > e) { for (n = 0; n < s; ++n)delete t.data[i[n]]; i.splice(0, s) } })) }(s, e); const _ = n.indexOf(b), y = o.indexOf(x), v = t => ({ width: n[t] || 0, height: o[t] || 0 }); return { first: v(0), last: v(e - 1), widest: v(_), highest: v(y), widths: n, heights: o } } getLabelForValue(t) { return t } getPixelForValue(t, e) { return NaN } getValueForPixel(t) { } getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) } getPixelForDecimal(t) { this._reversePixels && (t = 1 - t); const e = this._startPixel + t * this._length; return te(this._alignToPixels ? xe(this.chart, e, 0) : e) } getDecimalForPixel(t) { const e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e } getBasePixel() { return this.getPixelForValue(this.getBaseValue()) } getBaseValue() { const { min: t, max: e } = this; return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 } getContext(t) { const e = this.ticks || []; if (t >= 0 && t < e.length) { const i = e[t]; return i.$context || (i.$context = function (t, e, i) { return pi(t, { tick: i, index: e, type: "tick" }) }(this.getContext(), t, i)) } return this.$context || (this.$context = pi(this.chart.getContext(), { scale: this, type: "scale" })) } _tickSize() { const t = this.options.ticks, e = Yt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), n = this._getLabelSizes(), o = t.autoSkipPadding || 0, a = n ? n.widest.width + o : 0, r = n ? n.highest.height + o : 0; return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s } _isVisible() { const t = this.options.display; return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0 } _computeGridLineItems(t) { const e = this.axis, i = this.chart, s = this.options, { grid: n, position: o } = s, a = n.offset, r = this.isHorizontal(), l = this.ticks.length + (a ? 1 : 0), h = Fs(n), c = [], d = n.setContext(this.getContext()), u = d.drawBorder ? d.borderWidth : 0, f = u / 2, g = function (t) { return xe(i, t, u) }; let p, m, b, x, _, y, v, w, M, k, S, P; if ("top" === o) p = g(this.bottom), y = this.bottom - h, w = p - f, k = g(t.top) + f, P = t.bottom; else if ("bottom" === o) p = g(this.top), k = t.top, P = g(t.bottom) - f, y = p + f, w = this.top + h; else if ("left" === o) p = g(this.right), _ = this.right - h, v = p - f, M = g(t.left) + f, S = t.right; else if ("right" === o) p = g(this.left), M = t.left, S = g(t.right) - f, _ = p + f, v = this.left + h; else if ("x" === e) { if ("center" === o) p = g((t.top + t.bottom) / 2 + .5); else if (q(o)) { const t = Object.keys(o)[0], e = o[t]; p = g(this.chart.scales[t].getPixelForValue(e)) } k = t.top, P = t.bottom, y = p + f, w = y + h } else if ("y" === e) { if ("center" === o) p = g((t.left + t.right) / 2); else if (q(o)) { const t = Object.keys(o)[0], e = o[t]; p = g(this.chart.scales[t].getPixelForValue(e)) } _ = p - f, v = _ - h, M = t.left, S = t.right } const D = Z(s.ticks.maxTicksLimit, l), C = Math.max(1, Math.ceil(l / D)); for (m = 0; m < l; m += C) { const t = n.setContext(this.getContext(m)), e = t.lineWidth, s = t.color, o = n.borderDash || [], l = t.borderDashOffset, h = t.tickWidth, d = t.tickColor, u = t.tickBorderDash || [], f = t.tickBorderDashOffset; b = zs(this, m, a), void 0 !== b && (x = xe(i, b, e), r ? _ = v = M = S = x : y = w = k = P = x, c.push({ tx1: _, ty1: y, tx2: v, ty2: w, x1: M, y1: k, x2: S, y2: P, width: e, color: s, borderDash: o, borderDashOffset: l, tickWidth: h, tickColor: d, tickBorderDash: u, tickBorderDashOffset: f })) } return this._ticksLength = l, this._borderValue = p, c } _computeLabelItems(t) { const e = this.axis, i = this.options, { position: s, ticks: n } = i, o = this.isHorizontal(), a = this.ticks, { align: r, crossAlign: l, padding: h, mirror: c } = n, d = Fs(i.grid), u = d + h, f = c ? -h : u, g = -Yt(this.labelRotation), p = []; let m, b, x, _, y, v, w, M, k, S, P, D, C = "middle"; if ("top" === s) v = this.bottom - f, w = this._getXAxisLabelAlignment(); else if ("bottom" === s) v = this.top + f, w = this._getXAxisLabelAlignment(); else if ("left" === s) { const t = this._getYAxisLabelAlignment(d); w = t.textAlign, y = t.x } else if ("right" === s) { const t = this._getYAxisLabelAlignment(d); w = t.textAlign, y = t.x } else if ("x" === e) { if ("center" === s) v = (t.top + t.bottom) / 2 + u; else if (q(s)) { const t = Object.keys(s)[0], e = s[t]; v = this.chart.scales[t].getPixelForValue(e) + u } w = this._getXAxisLabelAlignment() } else if ("y" === e) { if ("center" === s) y = (t.left + t.right) / 2 - u; else if (q(s)) { const t = Object.keys(s)[0], e = s[t]; y = this.chart.scales[t].getPixelForValue(e) } w = this._getYAxisLabelAlignment(d).textAlign } "y" === e && ("start" === r ? C = "top" : "end" === r && (C = "bottom")); const O = this._getLabelSizes(); for (m = 0, b = a.length; m < b; ++m) { x = a[m], _ = x.label; const t = n.setContext(this.getContext(m)); M = this.getPixelForTick(m) + n.labelOffset, k = this._resolveTickFontOptions(m), S = k.lineHeight, P = X(_) ? _.length : 1; const e = P / 2, i = t.color, r = t.textStrokeColor, h = t.textStrokeWidth; let d, u = w; if (o ? (y = M, "inner" === w && (u = m === b - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), D = "top" === s ? "near" === l || 0 !== g ? -P * S + S / 2 : "center" === l ? -O.highest.height / 2 - e * S + S : -O.highest.height + S / 2 : "near" === l || 0 !== g ? S / 2 : "center" === l ? O.highest.height / 2 - e * S : O.highest.height - P * S, c && (D *= -1)) : (v = M, D = (1 - P) * S / 2), t.showLabelBackdrop) { const e = di(t.backdropPadding), i = O.heights[m], s = O.widths[m]; let n = v + D - e.top, o = y - e.left; switch (C) { case "middle": n -= i / 2; break; case "bottom": n -= i }switch (w) { case "center": o -= s / 2; break; case "right": o -= s }d = { left: o, top: n, width: s + e.width, height: i + e.height, color: t.backdropColor } } p.push({ rotation: g, label: _, font: k, color: i, strokeColor: r, strokeWidth: h, textOffset: D, textAlign: u, textBaseline: C, translation: [y, v], backdrop: d }) } return p } _getXAxisLabelAlignment() { const { position: t, ticks: e } = this.options; if (-Yt(this.labelRotation)) return "top" === t ? "left" : "right"; let i = "center"; return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i } _getYAxisLabelAlignment(t) { const { position: e, ticks: { crossAlign: i, mirror: s, padding: n } } = this.options, o = t + n, a = this._getLabelSizes().widest.width; let r, l; return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", { textAlign: r, x: l } } _computeLabelArea() { if (this.options.ticks.mirror) return; const t = this.chart, e = this.options.position; return "left" === e || "right" === e ? { top: 0, left: this.left, bottom: t.height, right: this.right } : "top" === e || "bottom" === e ? { top: this.top, left: 0, bottom: this.bottom, right: t.width } : void 0 } drawBackground() { const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: n, height: o } = this; e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore()) } getLineWidthForValue(t) { const e = this.options.grid; if (!this._isVisible() || !e.display) return 0; const i = this.ticks.findIndex((e => e.value === t)); if (i >= 0) { return e.setContext(this.getContext(i)).lineWidth } return 0 } drawGrid(t) { const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)); let n, o; const a = (t, e, s) => { s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore()) }; if (e.display) for (n = 0, o = s.length; n < o; ++n) { const t = s[n]; e.drawOnChartArea && a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t), e.drawTicks && a({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, { color: t.tickColor, width: t.tickWidth, borderDash: t.tickBorderDash, borderDashOffset: t.tickBorderDashOffset }) } } drawBorder() { const { chart: t, ctx: e, options: { grid: i } } = this, s = i.setContext(this.getContext()), n = i.drawBorder ? s.borderWidth : 0; if (!n) return; const o = i.setContext(this.getContext(0)).lineWidth, a = this._borderValue; let r, l, h, c; this.isHorizontal() ? (r = xe(t, this.left, n) - n / 2, l = xe(t, this.right, o) + o / 2, h = c = a) : (h = xe(t, this.top, n) - n / 2, c = xe(t, this.bottom, o) + o / 2, r = l = a), e.save(), e.lineWidth = s.borderWidth, e.strokeStyle = s.borderColor, e.beginPath(), e.moveTo(r, h), e.lineTo(l, c), e.stroke(), e.restore() } drawLabels(t) { if (!this.options.ticks.display) return; const e = this.ctx, i = this._computeLabelArea(); i && we(e, i); const s = this._labelItems || (this._labelItems = this._computeLabelItems(t)); let n, o; for (n = 0, o = s.length; n < o; ++n) { const t = s[n], i = t.font, o = t.label; t.backdrop && (e.fillStyle = t.backdrop.color, e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), Pe(e, o, 0, t.textOffset, i, t) } i && Me(e) } drawTitle() { const { ctx: t, options: { position: e, title: i, reverse: s } } = this; if (!i.display) return; const o = ui(i.font), a = di(i.padding), r = i.align; let l = o.lineHeight / 2; "bottom" === e || "center" === e || q(e) ? (l += a.bottom, X(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top; const { titleX: h, titleY: c, maxWidth: d, rotation: u } = function (t, e, i, s) { const { top: o, left: a, bottom: r, right: l, chart: h } = t, { chartArea: c, scales: d } = h; let u, f, g, p = 0; const m = r - o, b = l - a; if (t.isHorizontal()) { if (f = n(s, a, l), q(i)) { const t = Object.keys(i)[0], s = i[t]; g = d[t].getPixelForValue(s) + m - e } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Es(t, i, e); u = l - a } else { if (q(i)) { const t = Object.keys(i)[0], s = i[t]; f = d[t].getPixelForValue(s) - b + e } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Es(t, i, e); g = n(s, r, o), p = "left" === i ? -Et : Et } return { titleX: f, titleY: g, maxWidth: u, rotation: p } }(this, l, e, r); Pe(t, i.text, 0, 0, o, { color: i.color, maxWidth: d, rotation: u, textAlign: Vs(r, e, s), textBaseline: "middle", translation: [h, c] }) } draw(t) { this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t)) } _layers() { const t = this.options, e = t.ticks && t.ticks.z || 0, i = Z(t.grid && t.grid.z, -1); return this._isVisible() && this.draw === Ns.prototype.draw ? [{ z: i, draw: t => { this.drawBackground(), this.drawGrid(t), this.drawTitle() } }, { z: i + 1, draw: () => { this.drawBorder() } }, { z: e, draw: t => { this.drawLabels(t) } }] : [{ z: e, draw: t => { this.draw(t) } }] } getMatchingVisibleMetas(t) { const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = []; let n, o; for (n = 0, o = e.length; n < o; ++n) { const o = e[n]; o[i] !== this.id || t && o.type !== t || s.push(o) } return s } _resolveTickFontOptions(t) { return ui(this.options.ticks.setContext(this.getContext(t)).font) } _maxDigits() { const t = this._resolveTickFontOptions(0).lineHeight; return (this.isHorizontal() ? this.width : this.height) / t } } class Ws { constructor(t, e, i) { this.type = t, this.scope = e, this.override = i, this.items = Object.create(null) } isForType(t) { return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype) } register(t) { const e = Object.getPrototypeOf(t); let i; (function (t) { return "id" in t && "defaults" in t })(e) && (i = this.register(e)); const s = this.items, n = t.id, o = this.scope + "." + n; if (!n) throw new Error("class does not have id: " + t); return n in s || (s[n] = t, function (t, e, i) { const s = at(Object.create(null), [i ? yt.get(i) : {}, yt.get(e), t.defaults]); yt.set(e, s), t.defaultRoutes && function (t, e) { Object.keys(e).forEach((i => { const s = i.split("."), n = s.pop(), o = [t].concat(s).join("."), a = e[i].split("."), r = a.pop(), l = a.join("."); yt.route(o, n, l, r) })) }(e, t.defaultRoutes); t.descriptors && yt.describe(e, t.descriptors) }(t, o, i), this.override && yt.override(t.id, t.overrides)), o } get(t) { return this.items[t] } unregister(t) { const e = this.items, i = t.id, s = this.scope; i in e && delete e[i], s && i in yt[s] && (delete yt[s][i], this.override && delete mt[i]) } } var Hs = new class { constructor() { this.controllers = new Ws(Cs, "datasets", !0), this.elements = new Ws(Os, "elements"), this.plugins = new Ws(Object, "plugins"), this.scales = new Ws(Ns, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements] } add(...t) { this._each("register", t) } remove(...t) { this._each("unregister", t) } addControllers(...t) { this._each("register", t, this.controllers) } addElements(...t) { this._each("register", t, this.elements) } addPlugins(...t) { this._each("register", t, this.plugins) } addScales(...t) { this._each("register", t, this.scales) } getController(t) { return this._get(t, this.controllers, "controller") } getElement(t) { return this._get(t, this.elements, "element") } getPlugin(t) { return this._get(t, this.plugins, "plugin") } getScale(t) { return this._get(t, this.scales, "scale") } removeControllers(...t) { this._each("unregister", t, this.controllers) } removeElements(...t) { this._each("unregister", t, this.elements) } removePlugins(...t) { this._each("unregister", t, this.plugins) } removeScales(...t) { this._each("unregister", t, this.scales) } _each(t, e, i) { [...e].forEach((e => { const s = i || this._getRegistryForType(e); i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : et(e, (e => { const s = i || this._getRegistryForType(e); this._exec(t, s, e) })) })) } _exec(t, e, i) { const s = dt(t); tt(i["before" + s], [], i), e[t](i), tt(i["after" + s], [], i) } _getRegistryForType(t) { for (let e = 0; e < this._typedRegistries.length; e++) { const i = this._typedRegistries[e]; if (i.isForType(t)) return i } return this.plugins } _get(t, e, i) { const s = e.get(t); if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + "."); return s } }; class js { constructor() { this._init = [] } notify(t, e, i, s) { "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")); const n = s ? this._descriptors(t).filter(s) : this._descriptors(t), o = this._notify(n, t, e, i); return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o } _notify(t, e, i, s) { s = s || {}; for (const n of t) { const t = n.plugin; if (!1 === tt(t[i], [e, s, n.options], t) && s.cancelable) return !1 } return !0 } invalidate() { U(this._cache) || (this._oldCache = this._cache, this._cache = void 0) } _descriptors(t) { if (this._cache) return this._cache; const e = this._cache = this._createDescriptors(t); return this._notifyStateChanges(t), e } _createDescriptors(t, e) { const i = t && t.config, s = Z(i.options && i.options.plugins, {}), n = function (t) { const e = [], i = Object.keys(Hs.plugins.items); for (let t = 0; t < i.length; t++)e.push(Hs.getPlugin(i[t])); const s = t.plugins || []; for (let t = 0; t < s.length; t++) { const i = s[t]; -1 === e.indexOf(i) && e.push(i) } return e }(i); return !1 !== s || e ? function (t, e, i, s) { const n = [], o = t.getContext(); for (let a = 0; a < e.length; a++) { const r = e[a], l = $s(i[r.id], s); null !== l && n.push({ plugin: r, options: Ys(t.config, r, l, o) }) } return n }(t, n, s, e) : [] } _notifyStateChanges(t) { const e = this._oldCache || [], i = this._cache, s = (t, e) => t.filter((t => !e.some((e => t.plugin.id === e.plugin.id)))); this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start") } } function $s(t, e) { return e || !1 !== t ? !0 === t ? {} : t : null } function Ys(t, e, i, s) { const n = t.pluginScopeKeys(e), o = t.getOptionScopes(i, n); return t.createResolver(o, s, [""], { scriptable: !1, indexable: !1, allKeys: !0 }) } function Us(t, e) { const i = yt.datasets[t] || {}; return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x" } function Xs(t, e) { return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase(); var i } function qs(t) { const e = t.options || (t.options = {}); e.plugins = Z(e.plugins, {}), e.scales = function (t, e) { const i = mt[t.type] || { scales: {} }, s = e.scales || {}, n = Us(t.type, e), o = Object.create(null), a = Object.create(null); return Object.keys(s).forEach((t => { const e = s[t]; if (!q(e)) return console.error(`Invalid scale configuration for scale: ${t}`); if (e._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`); const r = Xs(t, e), l = function (t, e) { return t === e ? "_index_" : "_value_" }(r, n), h = i.scales || {}; o[r] = o[r] || t, a[t] = rt(Object.create(null), [{ axis: r }, e, h[r], h[l]]) })), t.data.datasets.forEach((i => { const n = i.type || t.type, r = i.indexAxis || Us(n, e), l = (mt[n] || {}).scales || {}; Object.keys(l).forEach((t => { const e = function (t, e) { let i = t; return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i }(t, r), n = i[e + "AxisID"] || o[e] || e; a[n] = a[n] || Object.create(null), rt(a[n], [{ axis: e }, s[n], l[t]]) })) })), Object.keys(a).forEach((t => { const e = a[t]; rt(e, [yt.scales[e.type], yt.scale]) })), a }(t, e) } function Ks(t) { return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t } const Gs = new Map, Zs = new Set; function Js(t, e) { let i = Gs.get(t); return i || (i = e(), Gs.set(t, i), Zs.add(i)), i } const Qs = (t, e, i) => { const s = ct(e, i); void 0 !== s && t.add(s) }; class tn { constructor(t) { this._config = function (t) { return (t = t || {}).data = Ks(t.data), qs(t), t }(t), this._scopeCache = new Map, this._resolverCache = new Map } get platform() { return this._config.platform } get type() { return this._config.type } set type(t) { this._config.type = t } get data() { return this._config.data } set data(t) { this._config.data = Ks(t) } get options() { return this._config.options } set options(t) { this._config.options = t } get plugins() { return this._config.plugins } update() { const t = this._config; this.clearCache(), qs(t) } clearCache() { this._scopeCache.clear(), this._resolverCache.clear() } datasetScopeKeys(t) { return Js(t, (() => [[`datasets.${t}`, ""]])) } datasetAnimationScopeKeys(t, e) { return Js(`${t}.transition.${e}`, (() => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]])) } datasetElementScopeKeys(t, e) { return Js(`${t}-${e}`, (() => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]])) } pluginScopeKeys(t) { const e = t.id; return Js(`${this.type}-plugin-${e}`, (() => [[`plugins.${e}`, ...t.additionalOptionScopes || []]])) } _cachedScopes(t, e) { const i = this._scopeCache; let s = i.get(t); return s && !e || (s = new Map, i.set(t, s)), s } getOptionScopes(t, e, i) { const { options: s, type: n } = this, o = this._cachedScopes(t, i), a = o.get(e); if (a) return a; const r = new Set; e.forEach((e => { t && (r.add(t), e.forEach((e => Qs(r, t, e)))), e.forEach((t => Qs(r, s, t))), e.forEach((t => Qs(r, mt[n] || {}, t))), e.forEach((t => Qs(r, yt, t))), e.forEach((t => Qs(r, bt, t))) })); const l = Array.from(r); return 0 === l.length && l.push(Object.create(null)), Zs.has(e) && o.set(e, l), l } chartOptionScopes() { const { options: t, type: e } = this; return [t, mt[e] || {}, yt.datasets[e] || {}, { type: e }, yt, bt] } resolveNamedOptions(t, e, i, s = [""]) { const n = { $shared: !0 }, { resolver: o, subPrefixes: a } = en(this._resolverCache, t, s); let r = o; if (function (t, e) { const { isScriptable: i, isIndexable: s } = Te(t); for (const n of e) { const e = i(n), o = s(n), a = (o || e) && t[n]; if (e && (ft(a) || sn(a)) || o && X(a)) return !0 } return !1 }(o, e)) { n.$shared = !1; r = Ae(o, i = ft(i) ? i() : i, this.createResolver(t, i, a)) } for (const t of e) n[t] = r[t]; return n } createResolver(t, e, i = [""], s) { const { resolver: n } = en(this._resolverCache, t, i); return q(e) ? Ae(n, e, void 0, s) : n } } function en(t, e, i) { let s = t.get(e); s || (s = new Map, t.set(e, s)); const n = i.join(); let o = s.get(n); if (!o) { o = { resolver: Oe(e, i), subPrefixes: i.filter((t => !t.toLowerCase().includes("hover"))) }, s.set(n, o) } return o } const sn = t => q(t) && Object.getOwnPropertyNames(t).reduce(((e, i) => e || ft(t[i])), !1); const nn = ["top", "bottom", "left", "right", "chartArea"]; function on(t, e) { return "top" === t || "bottom" === t || -1 === nn.indexOf(t) && "x" === e } function an(t, e) { return function (i, s) { return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t] } } function rn(t) { const e = t.chart, i = e.options.animation; e.notifyPlugins("afterRender"), tt(i && i.onComplete, [t], e) } function ln(t) { const e = t.chart, i = e.options.animation; tt(i && i.onProgress, [t], e) } function hn(t) { return ie() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t } const cn = {}, dn = t => { const e = hn(t); return Object.values(cn).filter((t => t.canvas === e)).pop() }; function un(t, e, i) { const s = Object.keys(t); for (const n of s) { const s = +n; if (s >= e) { const o = t[n]; delete t[n], (i > 0 || s > e) && (t[s + i] = o) } } } class fn { constructor(t, e) { const s = this.config = new tn(e), n = hn(t), o = dn(n); if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas can be reused."); const r = s.createResolver(s.chartOptionScopes(), this.getContext()); this.platform = new (s.platform || cs(n)), this.platform.updateConfig(s); const l = this.platform.acquireContext(n, r.aspectRatio), h = l && l.canvas, c = h && h.height, d = h && h.width; this.id = Y(), this.ctx = l, this.canvas = h, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new js, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = i((t => this.update(t)), r.resizeDelay || 0), this._dataChanges = [], cn[this.id] = this, l && h ? (a.listen(this, "complete", rn), a.listen(this, "progress", ln), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item") } get aspectRatio() { const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: n } = this; return U(t) ? e && n ? n : s ? i / s : null : t } get data() { return this.config.data } set data(t) { this.config.data = t } get options() { return this._options } set options(t) { this.config.options = t } _initialize() { return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ue(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this } clear() { return _e(this.canvas, this.ctx), this } stop() { return a.stop(this), this } resize(t, e) { a.running(this) ? this._resizeBeforeDraw = { width: t, height: e } : this._resize(t, e) } _resize(t, e) { const i = this.options, s = this.canvas, n = i.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(s, t, e, n), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), r = this.width ? "resize" : "attach"; this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ue(this, a, !0) && (this.notifyPlugins("resize", { size: o }), tt(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render()) } ensureScalesHaveIDs() { et(this.options.scales || {}, ((t, e) => { t.id = e })) } buildOrUpdateScales() { const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce(((t, e) => (t[e] = !1, t)), {}); let n = []; e && (n = n.concat(Object.keys(e).map((t => { const i = e[t], s = Xs(t, i), n = "r" === s, o = "x" === s; return { options: i, dposition: n ? "chartArea" : o ? "bottom" : "left", dtype: n ? "radialLinear" : o ? "category" : "linear" } })))), et(n, (e => { const n = e.options, o = n.id, a = Xs(o, n), r = Z(n.type, e.dtype); void 0 !== n.position && on(n.position, a) === on(e.dposition) || (n.position = e.dposition), s[o] = !0; let l = null; if (o in i && i[o].type === r) l = i[o]; else { l = new (Hs.getScale(r))({ id: o, type: r, ctx: this.ctx, chart: this }), i[l.id] = l } l.init(n, t) })), et(s, ((t, e) => { t || delete i[e] })), et(i, (t => { Xi.configure(this, t, t.options), Xi.addBox(this, t) })) } _updateMetasets() { const t = this._metasets, e = this.data.datasets.length, i = t.length; if (t.sort(((t, e) => t.index - e.index)), i > e) { for (let t = e; t < i; ++t)this._destroyDatasetMeta(t); t.splice(e, i - e) } this._sortedMetasets = t.slice(0).sort(an("order", "index")) } _removeUnreferencedMetasets() { const { _metasets: t, data: { datasets: e } } = this; t.length > e.length && delete this._stacks, t.forEach(((t, i) => { 0 === e.filter((e => e === t._dataset)).length && this._destroyDatasetMeta(i) })) } buildOrUpdateControllers() { const t = [], e = this.data.datasets; let i, s; for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) { const s = e[i]; let n = this.getDatasetMeta(i); const o = s.type || this.config.type; if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || Us(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales(); else { const e = Hs.getController(o), { datasetElementType: s, dataElementType: a } = yt.datasets[o]; Object.assign(e.prototype, { dataElementType: Hs.getElement(a), datasetElementType: s && Hs.getElement(s) }), n.controller = new e(this, i), t.push(n.controller) } } return this._updateMetasets(), t } _resetElements() { et(this.data.datasets, ((t, e) => { this.getDatasetMeta(e).controller.reset() }), this) } reset() { this._resetElements(), this.notifyPlugins("reset") } update(t) { const e = this.config; e.update(); const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation; if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 })) return; const n = this.buildOrUpdateControllers(); this.notifyPlugins("beforeElementsUpdate"); let o = 0; for (let t = 0, e = this.data.datasets.length; t < e; t++) { const { controller: e } = this.getDatasetMeta(t), i = !s && -1 === n.indexOf(e); e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o) } o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || et(n, (t => { t.reset() })), this._updateDatasets(t), this.notifyPlugins("afterUpdate", { mode: t }), this._layers.sort(an("z", "_idx")); const { _active: a, _lastEvent: r } = this; r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render() } _updateScales() { et(this.scales, (t => { Xi.removeBox(this, t) })), this.ensureScalesHaveIDs(), this.buildOrUpdateScales() } _checkEventBindings() { const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events); gt(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents()) } _updateHiddenIndices() { const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || []; for (const { method: i, start: s, count: n } of e) { un(t, s, "_removeElements" === i ? -n : n) } } _getUniformDataChanges() { const t = this._dataChanges; if (!t || !t.length) return; this._dataChanges = []; const e = this.data.datasets.length, i = e => new Set(t.filter((t => t[0] === e)).map(((t, e) => e + "," + t.splice(1).join(",")))), s = i(0); for (let t = 1; t < e; t++)if (!gt(s, i(t))) return; return Array.from(s).map((t => t.split(","))).map((t => ({ method: t[1], start: +t[2], count: +t[3] }))) } _updateLayout(t) { if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return; Xi.update(this, this.width, this.height, t); const e = this.chartArea, i = e.width <= 0 || e.height <= 0; this._layers = [], et(this.boxes, (t => { i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers())) }), this), this._layers.forEach(((t, e) => { t._idx = e })), this.notifyPlugins("afterLayout") } _updateDatasets(t) { if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })) { for (let t = 0, e = this.data.datasets.length; t < e; ++t)this.getDatasetMeta(t).controller.configure(); for (let e = 0, i = this.data.datasets.length; e < i; ++e)this._updateDataset(e, ft(t) ? t({ datasetIndex: e }) : t); this.notifyPlugins("afterDatasetsUpdate", { mode: t }) } } _updateDataset(t, e) { const i = this.getDatasetMeta(t), s = { meta: i, index: t, mode: e, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s)) } render() { !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (a.has(this) ? this.attached && !a.running(this) && a.start(this) : (this.draw(), rn({ chart: this }))) } draw() { let t; if (this._resizeBeforeDraw) { const { width: t, height: e } = this._resizeBeforeDraw; this._resize(t, e), this._resizeBeforeDraw = null } if (this.clear(), this.width <= 0 || this.height <= 0) return; if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return; const e = this._layers; for (t = 0; t < e.length && e[t].z <= 0; ++t)e[t].draw(this.chartArea); for (this._drawDatasets(); t < e.length; ++t)e[t].draw(this.chartArea); this.notifyPlugins("afterDraw") } _getSortedDatasetMetas(t) { const e = this._sortedMetasets, i = []; let s, n; for (s = 0, n = e.length; s < n; ++s) { const n = e[s]; t && !n.visible || i.push(n) } return i } getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0) } _drawDatasets() { if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) return; const t = this.getSortedVisibleDatasetMetas(); for (let e = t.length - 1; e >= 0; --e)this._drawDataset(t[e]); this.notifyPlugins("afterDatasetsDraw") } _drawDataset(t) { const e = this.ctx, i = t._clip, s = !i.disabled, n = this.chartArea, o = { meta: t, index: t.index, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && we(e, { left: !1 === i.left ? 0 : n.left - i.left, right: !1 === i.right ? this.width : n.right + i.right, top: !1 === i.top ? 0 : n.top - i.top, bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom }), t.controller.draw(), s && Me(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o)) } isPointInArea(t) { return ve(t, this.chartArea, this._minPadding) } getElementsAtEventForMode(t, e, i, s) { const n = Ei.modes[e]; return "function" == typeof n ? n(this, t, i, s) : [] } getDatasetMeta(t) { const e = this.data.datasets[t], i = this._metasets; let s = i.filter((t => t && t._dataset === e)).pop(); return s || (s = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e && e.order || 0, index: t, _dataset: e, _parsed: [], _sorted: !1 }, i.push(s)), s } getContext() { return this.$context || (this.$context = pi(null, { chart: this, type: "chart" })) } getVisibleDatasetCount() { return this.getSortedVisibleDatasetMetas().length } isDatasetVisible(t) { const e = this.data.datasets[t]; if (!e) return !1; const i = this.getDatasetMeta(t); return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden } setDatasetVisibility(t, e) { this.getDatasetMeta(t).hidden = !e } toggleDataVisibility(t) { this._hiddenIndices[t] = !this._hiddenIndices[t] } getDataVisibility(t) { return !this._hiddenIndices[t] } _updateVisibility(t, e, i) { const s = i ? "show" : "hide", n = this.getDatasetMeta(t), o = n.controller._resolveAnimations(void 0, s); ut(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, { visible: i }), this.update((e => e.datasetIndex === t ? s : void 0))) } hide(t, e) { this._updateVisibility(t, e, !1) } show(t, e) { this._updateVisibility(t, e, !0) } _destroyDatasetMeta(t) { const e = this._metasets[t]; e && e.controller && e.controller._destroy(), delete this._metasets[t] } _stop() { let t, e; for (this.stop(), a.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)this._destroyDatasetMeta(t) } destroy() { this.notifyPlugins("beforeDestroy"); const { canvas: t, ctx: e } = this; this._stop(), this.config.clearCache(), t && (this.unbindEvents(), _e(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete cn[this.id], this.notifyPlugins("afterDestroy") } toBase64Image(...t) { return this.canvas.toDataURL(...t) } bindEvents() { this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0 } bindUserEvents() { const t = this._listeners, e = this.platform, i = (i, s) => { e.addEventListener(this, i, s), t[i] = s }, s = (t, e, i) => { t.offsetX = e, t.offsetY = i, this._eventHandler(t) }; et(this.options.events, (t => i(t, s))) } bindResponsiveEvents() { this._responsiveListeners || (this._responsiveListeners = {}); const t = this._responsiveListeners, e = this.platform, i = (i, s) => { e.addEventListener(this, i, s), t[i] = s }, s = (i, s) => { t[i] && (e.removeEventListener(this, i, s), delete t[i]) }, n = (t, e) => { this.canvas && this.resize(t, e) }; let o; const a = () => { s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o) }; o = () => { this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a) }, e.isAttached(this.canvas) ? a() : o() } unbindEvents() { et(this._listeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._listeners = {}, et(this._responsiveListeners, ((t, e) => { this.platform.removeEventListener(this, e, t) })), this._responsiveListeners = void 0 } updateHoverStyle(t, e, i) { const s = i ? "set" : "remove"; let n, o, a, r; for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) { o = t[a]; const e = o && this.getDatasetMeta(o.datasetIndex).controller; e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index) } } getActiveElements() { return this._active || [] } setActiveElements(t) { const e = this._active || [], i = t.map((({ datasetIndex: t, index: e }) => { const i = this.getDatasetMeta(t); if (!i) throw new Error("No dataset found at index " + t); return { datasetIndex: t, element: i.data[e], index: e } })); !it(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e)) } notifyPlugins(t, e, i) { return this._plugins.notify(this, t, e, i) } _updateHoverStyles(t, e, i) { const s = this.options.hover, n = (t, e) => t.filter((t => !e.some((e => t.datasetIndex === e.datasetIndex && t.index === e.index)))), o = n(e, t), a = i ? t : n(t, e); o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0) } _eventHandler(t, e) { const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) }, s = e => (e.options.events || this.options.events).includes(t.native.type); if (!1 === this.notifyPlugins("beforeEvent", i, s)) return; const n = this._handleEvent(t, e, i.inChartArea); return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this } _handleEvent(t, e, i) { const { _active: s = [], options: n } = this, o = e, a = this._getActiveElements(t, s, i, o), r = pt(t), l = function (t, e, i, s) { return i && "mouseout" !== t.type ? s ? e : t : null }(t, this._lastEvent, i, r); i && (this._lastEvent = null, tt(n.onHover, [t, a, this], this), r && tt(n.onClick, [t, a, this], this)); const h = !it(a, s); return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h } _getActiveElements(t, e, i, s) { if ("mouseout" === t.type) return []; if (!i) return e; const n = this.options.hover; return this.getElementsAtEventForMode(t, n.mode, n, s) } } const gn = () => et(fn.instances, (t => t._plugins.invalidate())), pn = !0; function mn() { throw new Error("This method is not implemented: Check that a complete date adapter is provided.") } Object.defineProperties(fn, { defaults: { enumerable: pn, value: yt }, instances: { enumerable: pn, value: cn }, overrides: { enumerable: pn, value: mt }, registry: { enumerable: pn, value: Hs }, version: { enumerable: pn, value: "3.8.0" }, getChart: { enumerable: pn, value: dn }, register: { enumerable: pn, value: (...t) => { Hs.add(...t), gn() } }, unregister: { enumerable: pn, value: (...t) => { Hs.remove(...t), gn() } } }); class bn { constructor(t) { this.options = t || {} } formats() { return mn() } parse(t, e) { return mn() } format(t, e) { return mn() } add(t, e, i) { return mn() } diff(t, e, i) { return mn() } startOf(t, e, i) { return mn() } endOf(t, e) { return mn() } } bn.override = function (t) { Object.assign(bn.prototype, t) }; var xn = { _date: bn }; function _n(t) { const e = t.iScale, i = function (t, e) { if (!t._cache.$bar) { const i = t.getMatchingVisibleMetas(e); let s = []; for (let e = 0, n = i.length; e < n; e++)s = s.concat(i[e].controller.getAllParsedValues(t)); t._cache.$bar = Ct(s.sort(((t, e) => t - e))) } return t._cache.$bar }(e, t.type); let s, n, o, a, r = e._length; const l = () => { 32767 !== o && -32768 !== o && (ut(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o) }; for (s = 0, n = i.length; s < n; ++s)o = e.getPixelForValue(i[s]), l(); for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)o = e.getPixelForTick(s), l(); return r } function yn(t, e, i, s) { return X(t) ? function (t, e, i, s) { const n = i.parse(t[0], s), o = i.parse(t[1], s), a = Math.min(n, o), r = Math.max(n, o); let l = a, h = r; Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = { barStart: l, barEnd: h, start: n, end: o, min: a, max: r } }(t, e, i, s) : e[i.axis] = i.parse(t, s), e } function vn(t, e, i, s) { const n = t.iScale, o = t.vScale, a = n.getLabels(), r = n === o, l = []; let h, c, d, u; for (h = i, c = i + s; h < c; ++h)u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(yn(u, d, o, h)); return l } function wn(t) { return t && void 0 !== t.barStart && void 0 !== t.barEnd } function Mn(t, e, i, s) { let n = e.borderSkipped; const o = {}; if (!n) return void (t.borderSkipped = o); const { start: a, end: r, reverse: l, top: h, bottom: c } = function (t) { let e, i, s, n, o; return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), { start: i, end: s, reverse: e, top: n, bottom: o } }(t); "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[kn(c, a, r, l)] = !0, n = h)), o[kn(n, a, r, l)] = !0, t.borderSkipped = o } function kn(t, e, i, s) { var n, o, a; return s ? (a = i, t = Sn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Sn(t, e, i), t } function Sn(t, e, i) { return "start" === t ? e : "end" === t ? i : t } function Pn(t, { inflateAmount: e }, i) { t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e } class Dn extends Cs { parsePrimitiveData(t, e, i, s) { return vn(t, e, i, s) } parseArrayData(t, e, i, s) { return vn(t, e, i, s) } parseObjectData(t, e, i, s) { const { iScale: n, vScale: o } = t, { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing, l = "x" === n.axis ? a : r, h = "x" === o.axis ? a : r, c = []; let d, u, f, g; for (d = i, u = i + s; d < u; ++d)g = e[d], f = {}, f[n.axis] = n.parse(ct(g, l), d), c.push(yn(ct(g, h), f, o, d)); return c } updateRangeFromParsed(t, e, i, s) { super.updateRangeFromParsed(t, e, i, s); const n = i._custom; n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max)) } getMaxOverflow() { return 0 } getLabelAndValue(t) { const e = this._cachedMeta, { iScale: i, vScale: s } = e, n = this.getParsed(t), o = n._custom, a = wn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]); return { label: "" + i.getLabelForValue(n[i.axis]), value: a } } initialize() { this.enableOptionSharing = !0, super.initialize(); this._cachedMeta.stack = this.getDataset().stack } update(t) { const e = this._cachedMeta; this.updateElements(e.data, 0, e.data.length, t) } updateElements(t, e, i, s) { const n = "reset" === s, { index: o, _cachedMeta: { vScale: a } } = this, r = a.getBasePixel(), l = a.isHorizontal(), h = this._getRuler(), c = this.resolveDataElementOptions(e, s), d = this.getSharedOptions(c), u = this.includeOptions(s, d); this.updateSharedOptions(d, s, c); for (let c = e; c < e + i; c++) { const e = this.getParsed(c), i = n || U(e[a.axis]) ? { base: r, head: r } : this._calculateBarValuePixels(c), f = this._calculateBarIndexPixels(c, h), g = (e._stacks || {})[a.axis], p = { horizontal: l, base: i.base, enableBorderRadius: !g || wn(e._custom) || o === g._top || o === g._bottom, x: l ? i.head : f.center, y: l ? f.center : i.head, height: l ? f.size : Math.abs(i.size), width: l ? Math.abs(i.size) : f.size }; u && (p.options = d || this.resolveDataElementOptions(c, t[c].active ? "active" : s)); const m = p.options || t[c].options; Mn(p, m, g, o), Pn(p, m, h.ratio), this.updateElement(t[c], c, p, s) } } _getStacks(t, e) { const i = this._cachedMeta.iScale, s = i.getMatchingVisibleMetas(this._type), n = i.options.stacked, o = s.length, a = []; let r, l; for (r = 0; r < o; ++r)if (l = s[r], l.controller.options.grouped) { if (void 0 !== e) { const t = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis]; if (U(t) || isNaN(t)) continue } if ((!1 === n || -1 === a.indexOf(l.stack) || void 0 === n && void 0 === l.stack) && a.push(l.stack), l.index === t) break } return a.length || a.push(void 0), a } _getStackCount(t) { return this._getStacks(void 0, t).length } _getStackIndex(t, e, i) { const s = this._getStacks(t, i), n = void 0 !== e ? s.indexOf(e) : -1; return -1 === n ? s.length - 1 : n } _getRuler() { const t = this.options, e = this._cachedMeta, i = e.iScale, s = []; let n, o; for (n = 0, o = e.data.length; n < o; ++n)s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n)); const a = t.barThickness; return { min: a || _n(e), pixels: s, start: i._startPixel, end: i._endPixel, stackCount: this._getStackCount(), scale: i, grouped: t.grouped, ratio: a ? 1 : t.categoryPercentage * t.barPercentage } } _calculateBarValuePixels(t) { const { _cachedMeta: { vScale: e, _stacked: i }, options: { base: s, minBarLength: n } } = this, o = s || 0, a = this.getParsed(t), r = a._custom, l = wn(r); let h, c, d = a[e.axis], u = 0, f = i ? this.applyStack(e, a, i) : d; f !== d && (u = f - d, f = d), l && (d = r.barStart, f = r.barEnd - r.barStart, 0 !== d && Bt(d) !== Bt(r.barEnd) && (u = 0), u += d); const g = U(s) || l ? u : s; let p = e.getPixelForValue(g); if (h = this.chart.getDataVisibility(t) ? e.getPixelForValue(u + f) : p, c = h - p, Math.abs(c) < n) { c = function (t, e, i) { return 0 !== t ? Bt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1) }(c, e, o) * n, d === o && (p -= c / 2); const t = e.getPixelForDecimal(0), i = e.getPixelForDecimal(1), s = Math.min(t, i), a = Math.max(t, i); p = Math.max(Math.min(p, a), s), h = p + c } if (p === e.getPixelForValue(o)) { const t = Bt(c) * e.getLineWidthForValue(o) / 2; p += t, c -= t } return { size: c, base: p, head: h, center: h + c / 2 } } _calculateBarIndexPixels(t, e) { const i = e.scale, s = this.options, n = s.skipNull, o = Z(s.maxBarThickness, 1 / 0); let a, r; if (e.grouped) { const i = n ? this._getStackCount(t) : e.stackCount, l = "flex" === s.barThickness ? function (t, e, i, s) { const n = e.pixels, o = n[t]; let a = t > 0 ? n[t - 1] : null, r = t < n.length - 1 ? n[t + 1] : null; const l = i.categoryPercentage; null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a); const h = o - (o - Math.min(a, r)) / 2 * l; return { chunk: Math.abs(r - a) / 2 * l / s, ratio: i.barPercentage, start: h } }(t, e, s, i) : function (t, e, i, s) { const n = i.barThickness; let o, a; return U(n) ? (o = e.min * i.categoryPercentage, a = i.barPercentage) : (o = n * s, a = 1), { chunk: o / s, ratio: a, start: e.pixels[t] - o / 2 } }(t, e, s, i), h = this._getStackIndex(this.index, this._cachedMeta.stack, n ? t : void 0); a = l.start + l.chunk * h + l.chunk / 2, r = Math.min(o, l.chunk * l.ratio) } else a = i.getPixelForValue(this.getParsed(t)[i.axis], t), r = Math.min(o, e.min * e.ratio); return { base: a - r / 2, head: a + r / 2, center: a, size: r } } draw() { const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length; let n = 0; for (; n < s; ++n)null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx) } } Dn.id = "bar", Dn.defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: .8, barPercentage: .9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } }, Dn.overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } }; class Cn extends Cs { initialize() { this.enableOptionSharing = !0, super.initialize() } parsePrimitiveData(t, e, i, s) { const n = super.parsePrimitiveData(t, e, i, s); for (let t = 0; t < n.length; t++)n[t]._custom = this.resolveDataElementOptions(t + i).radius; return n } parseArrayData(t, e, i, s) { const n = super.parseArrayData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t]; n[t]._custom = Z(s[2], this.resolveDataElementOptions(t + i).radius) } return n } parseObjectData(t, e, i, s) { const n = super.parseObjectData(t, e, i, s); for (let t = 0; t < n.length; t++) { const s = e[i + t]; n[t]._custom = Z(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius) } return n } getMaxOverflow() { const t = this._cachedMeta.data; let e = 0; for (let i = t.length - 1; i >= 0; --i)e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2); return e > 0 && e } getLabelAndValue(t) { const e = this._cachedMeta, { xScale: i, yScale: s } = e, n = this.getParsed(t), o = i.getLabelForValue(n.x), a = s.getLabelForValue(n.y), r = n._custom; return { label: e.label, value: "(" + o + ", " + a + (r ? ", " + r : "") + ")" } } update(t) { const e = this._cachedMeta.data; this.updateElements(e, 0, e.length, t) } updateElements(t, e, i, s) { const n = "reset" === s, { iScale: o, vScale: a } = this._cachedMeta, r = this.resolveDataElementOptions(e, s), l = this.getSharedOptions(r), h = this.includeOptions(s, l), c = o.axis, d = a.axis; for (let r = e; r < e + i; r++) { const e = t[r], i = !n && this.getParsed(r), l = {}, u = l[c] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[c]), f = l[d] = n ? a.getBasePixel() : a.getPixelForValue(i[d]); l.skip = isNaN(u) || isNaN(f), h && (l.options = this.resolveDataElementOptions(r, e.active ? "active" : s), n && (l.options.radius = 0)), this.updateElement(e, r, l, s) } this.updateSharedOptions(l, s, r) } resolveDataElementOptions(t, e) { const i = this.getParsed(t); let s = super.resolveDataElementOptions(t, e); s.$shared && (s = Object.assign({}, s, { $shared: !1 })); const n = s.radius; return "active" !== e && (s.radius = 0), s.radius += Z(i && i._custom, n), s } } Cn.id = "bubble", Cn.defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } }, Cn.overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } }, plugins: { tooltip: { callbacks: { title: () => "" } } } }; class On extends Cs { constructor(t, e) { super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0 } linkScales() { } parse(t, e) { const i = this.getDataset().data, s = this._cachedMeta; if (!1 === this._parsing) s._parsed = i; else { let n, o, a = t => +i[t]; if (q(i[t])) { const { key: t = "value" } = this._parsing; a = e => +ct(i[e], t) } for (n = t, o = t + e; n < o; ++n)s._parsed[n] = a(n) } } _getRotation() { return Yt(this.options.rotation - 90) } _getCircumference() { return Yt(this.options.circumference) } _getRotationExtents() { let t = At, e = -At; for (let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i)) { const s = this.chart.getDatasetMeta(i).controller, n = s._getRotation(), o = s._getCircumference(); t = Math.min(t, n), e = Math.max(e, n + o) } return { rotation: t, circumference: e - t } } update(t) { const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, n = s.data, o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - o) / 2, 0), r = Math.min(J(this.options.cutout, a), 1), l = this._getRingWeight(this.index), { circumference: h, rotation: c } = this._getRotationExtents(), { ratioX: d, ratioY: u, offsetX: f, offsetY: g } = function (t, e, i) { let s = 1, n = 1, o = 0, a = 0; if (e < At) { const r = t, l = r + e, h = Math.cos(r), c = Math.sin(r), d = Math.cos(l), u = Math.sin(l), f = (t, e, s) => Jt(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i), g = (t, e, s) => Jt(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i), p = f(0, h, d), m = f(Et, c, u), b = g(Ot, h, d), x = g(Ot + Et, c, u); s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2 } return { ratioX: s, ratioY: n, offsetX: o, offsetY: a } }(c, h, r), p = (i.width - o) / d, m = (i.height - o) / u, b = Math.max(Math.min(p, m) / 2, 0), x = Q(this.options.radius, b), _ = (x - Math.max(x * r, 0)) / this._getVisibleDatasetWeightTotal(); this.offsetX = f * x, this.offsetY = g * x, s.total = this.calculateTotal(), this.outerRadius = x - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * l, 0), this.updateElements(n, 0, n.length, t) } _circumference(t, e) { const i = this.options, s = this._cachedMeta, n = this._getCircumference(); return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / At) } updateElements(t, e, i, s) { const n = "reset" === s, o = this.chart, a = o.chartArea, r = o.options.animation, l = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, c = n && r.animateScale, d = c ? 0 : this.innerRadius, u = c ? 0 : this.outerRadius, f = this.resolveDataElementOptions(e, s), g = this.getSharedOptions(f), p = this.includeOptions(s, g); let m, b = this._getRotation(); for (m = 0; m < e; ++m)b += this._circumference(m, n); for (m = e; m < e + i; ++m) { const e = this._circumference(m, n), i = t[m], o = { x: l + this.offsetX, y: h + this.offsetY, startAngle: b, endAngle: b + e, circumference: e, outerRadius: u, innerRadius: d }; p && (o.options = g || this.resolveDataElementOptions(m, i.active ? "active" : s)), b += e, this.updateElement(i, m, o, s) } this.updateSharedOptions(g, s, f) } calculateTotal() { const t = this._cachedMeta, e = t.data; let i, s = 0; for (i = 0; i < e.length; i++) { const n = t._parsed[i]; null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n)) } return s } calculateCircumference(t) { const e = this._cachedMeta.total; return e > 0 && !isNaN(t) ? At * (Math.abs(t) / e) : 0 } getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ni(e._parsed[t], i.options.locale); return { label: s[t] || "", value: n } } getMaxBorderWidth(t) { let e = 0; const i = this.chart; let s, n, o, a, r; if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s)if (i.isDatasetVisible(s)) { o = i.getDatasetMeta(s), t = o.data, a = o.controller; break } if (!t) return 0; for (s = 0, n = t.length; s < n; ++s)r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0)); return e } getMaxOffset(t) { let e = 0; for (let i = 0, s = t.length; i < s; ++i) { const t = this.resolveDataElementOptions(i); e = Math.max(e, t.offset || 0, t.hoverOffset || 0) } return e } _getRingWeightOffset(t) { let e = 0; for (let i = 0; i < t; ++i)this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i)); return e } _getRingWeight(t) { return Math.max(Z(this.chart.data.datasets[t].weight, 1), 0) } _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length) || 1 } } On.id = "doughnut", On.defaults = { datasetElementType: !1, dataElementType: "arc", animation: { animateRotate: !0, animateScale: !1 }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" }, On.descriptors = { _scriptable: t => "spacing" !== t, _indexable: t => "spacing" !== t }, On.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i } } = t.legend.options; return e.labels.map(((e, s) => { const n = t.getDatasetMeta(0).controller.getStyle(s); return { text: e, fillStyle: n.backgroundColor, strokeStyle: n.borderColor, lineWidth: n.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(s), index: s } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } }, tooltip: { callbacks: { title: () => "", label(t) { let e = t.label; const i = ": " + t.formattedValue; return X(e) ? (e = e.slice(), e[0] += i) : e += i, e } } } } }; class An extends Cs { initialize() { this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize() } update(t) { const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: n } = e, o = this.chart._animationsDisabled; let { start: a, count: r } = function (t, e, i) { const s = e.length; let n = 0, o = s; if (t._sorted) { const { iScale: a, _parsed: r } = t, l = a.axis, { min: h, max: c, minDefined: d, maxDefined: u } = a.getUserBounds(); d && (n = Qt(Math.min(wt(r, a.axis, h).lo, i ? s : wt(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), o = u ? Qt(Math.max(wt(r, a.axis, c).hi + 1, i ? 0 : wt(e, l, a.getPixelForValue(c)).hi + 1), n, s) - n : s - n } return { start: n, count: o } }(e, s, o); this._drawStart = a, this._drawCount = r, function (t) { const { xScale: e, yScale: i, _scaleRanges: s } = t, n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max }; if (!s) return t._scaleRanges = n, !0; const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max; return Object.assign(s, n), o }(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s; const l = this.resolveDatasetElementOptions(t); this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, { animated: !o, options: l }, t), this.updateElements(s, a, r, t) } updateElements(t, e, i, s) { const n = "reset" === s, { iScale: o, vScale: a, _stacked: r, _dataset: l } = this._cachedMeta, h = this.resolveDataElementOptions(e, s), c = this.getSharedOptions(h), d = this.includeOptions(s, c), u = o.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = Wt(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || n || "none" === s; let x = e > 0 && this.getParsed(e - 1); for (let h = e; h < e + i; ++h) { const e = t[h], i = this.getParsed(h), g = b ? e : {}, _ = U(i[f]), y = g[u] = o.getPixelForValue(i[u], h), v = g[f] = n || _ ? a.getBasePixel() : a.getPixelForValue(r ? this.applyStack(a, i, r) : i[f], h); g.skip = isNaN(y) || isNaN(v) || _, g.stop = h > 0 && Math.abs(i[u] - x[u]) > m, p && (g.parsed = i, g.raw = l.data[h]), d && (g.options = c || this.resolveDataElementOptions(h, e.active ? "active" : s)), b || this.updateElement(e, h, g, s), x = i } this.updateSharedOptions(c, s, h) } getMaxOverflow() { const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || []; if (!s.length) return i; const n = s[0].size(this.resolveDataElementOptions(0)), o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1)); return Math.max(i, n, o) / 2 } draw() { const t = this._cachedMeta; t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw() } } An.id = "line", An.defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 }, An.overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } }; class Tn extends Cs { constructor(t, e) { super(t, e), this.innerRadius = void 0, this.outerRadius = void 0 } getLabelAndValue(t) { const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], n = ni(e._parsed[t].r, i.options.locale); return { label: s[t] || "", value: n } } parseObjectData(t, e, i, s) { return He.bind(this)(t, e, i, s) } update(t) { const e = this._cachedMeta.data; this._updateRadius(), this.updateElements(e, 0, e.length, t) } getMinMax() { const t = this._cachedMeta, e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }; return t.data.forEach(((t, i) => { const s = this.getParsed(i).r; !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s)) })), e } _updateRadius() { const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), n = Math.max(s / 2, 0), o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount(); this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o } updateElements(t, e, i, s) { const n = "reset" === s, o = this.chart, a = o.options.animation, r = this._cachedMeta.rScale, l = r.xCenter, h = r.yCenter, c = r.getIndexAngle(0) - .5 * Ot; let d, u = c; const f = 360 / this.countVisibleElements(); for (d = 0; d < e; ++d)u += this._computeAngle(d, s, f); for (d = e; d < e + i; d++) { const e = t[d]; let i = u, g = u + this._computeAngle(d, s, f), p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0; u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c)); const m = { x: l, y: h, innerRadius: 0, outerRadius: p, startAngle: i, endAngle: g, options: this.resolveDataElementOptions(d, e.active ? "active" : s) }; this.updateElement(e, d, m, s) } } countVisibleElements() { const t = this._cachedMeta; let e = 0; return t.data.forEach(((t, i) => { !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++ })), e } _computeAngle(t, e, i) { return this.chart.getDataVisibility(t) ? Yt(this.resolveDataElementOptions(t, e).angle || i) : 0 } } Tn.id = "polarArea", Tn.defaults = { dataElementType: "arc", animation: { animateRotate: !0, animateScale: !0 }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 }, Tn.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(t) { const e = t.data; if (e.labels.length && e.datasets.length) { const { labels: { pointStyle: i } } = t.legend.options; return e.labels.map(((e, s) => { const n = t.getDatasetMeta(0).controller.getStyle(s); return { text: e, fillStyle: n.backgroundColor, strokeStyle: n.borderColor, lineWidth: n.borderWidth, pointStyle: i, hidden: !t.getDataVisibility(s), index: s } })) } return [] } }, onClick(t, e, i) { i.chart.toggleDataVisibility(e.index), i.chart.update() } }, tooltip: { callbacks: { title: () => "", label: t => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue } } }, scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } } }; class Ln extends On { } Ln.id = "pie", Ln.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" }; class Rn extends Cs { getLabelAndValue(t) { const e = this._cachedMeta.vScale, i = this.getParsed(t); return { label: e.getLabels()[t], value: "" + e.getLabelForValue(i[e.axis]) } } parseObjectData(t, e, i, s) { return He.bind(this)(t, e, i, s) } update(t) { const e = this._cachedMeta, i = e.dataset, s = e.data || [], n = e.iScale.getLabels(); if (i.points = s, "resize" !== t) { const e = this.resolveDatasetElementOptions(t); this.options.showLine || (e.borderWidth = 0); const o = { _loop: !0, _fullLoop: n.length === s.length, options: e }; this.updateElement(i, void 0, o, t) } this.updateElements(s, 0, s.length, t) } updateElements(t, e, i, s) { const n = this._cachedMeta.rScale, o = "reset" === s; for (let a = e; a < e + i; a++) { const e = t[a], i = this.resolveDataElementOptions(a, e.active ? "active" : s), r = n.getPointPositionForValue(a, this.getParsed(a).r), l = o ? n.xCenter : r.x, h = o ? n.yCenter : r.y, c = { x: l, y: h, angle: r.angle, skip: isNaN(l) || isNaN(h), options: i }; this.updateElement(e, a, c, s) } } } Rn.id = "radar", Rn.defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } }, Rn.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } }; class En extends An { } En.id = "scatter", En.defaults = { showLine: !1, fill: !1 }, En.overrides = { interaction: { mode: "point" }, plugins: { tooltip: { callbacks: { title: () => "", label: t => "(" + t.label + ", " + t.formattedValue + ")" } } }, scales: { x: { type: "linear" }, y: { type: "linear" } } }; var In = Object.freeze({ __proto__: null, BarController: Dn, BubbleController: Cn, DoughnutController: On, LineController: An, PolarAreaController: Tn, PieController: Ln, RadarController: Rn, ScatterController: En }); function zn(t, e, i) { const { startAngle: s, pixelMargin: n, x: o, y: a, outerRadius: r, innerRadius: l } = e; let h = n / r; t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + Et, s - Et), t.closePath(), t.clip() } function Fn(t, e, i, s) { const n = li(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]); const o = (i - e) / 2, a = Math.min(o, s * e / 2), r = t => { const e = (i - Math.min(o, t)) * s / 2; return Qt(t, 0, Math.min(o, e)) }; return { outerStart: r(n.outerStart), outerEnd: r(n.outerEnd), innerStart: Qt(n.innerStart, 0, a), innerEnd: Qt(n.innerEnd, 0, a) } } function Bn(t, e, i, s) { return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) } } function Vn(t, e, i, s, n) { const { x: o, y: a, startAngle: r, pixelMargin: l, innerRadius: h } = e, c = Math.max(e.outerRadius + s + i - l, 0), d = h > 0 ? h + s + i + l : 0; let u = 0; const f = n - r; if (s) { const t = ((h > 0 ? h - s : 0) + (c > 0 ? c - s : 0)) / 2; u = (f - (0 !== t ? f * t / (t + s) : f)) / 2 } const g = (f - Math.max(.001, f * c - i / Ot) / c) / 2, p = r + g + u, m = n - g - u, { outerStart: b, outerEnd: x, innerStart: _, innerEnd: y } = Fn(e, d, c, m - p), v = c - b, w = c - x, M = p + b / v, k = m - x / w, S = d + _, P = d + y, D = p + _ / S, C = m - y / P; if (t.beginPath(), t.arc(o, a, c, M, k), x > 0) { const e = Bn(w, k, o, a); t.arc(e.x, e.y, x, k, m + Et) } const O = Bn(P, m, o, a); if (t.lineTo(O.x, O.y), y > 0) { const e = Bn(P, C, o, a); t.arc(e.x, e.y, y, m + Et, C + Math.PI) } if (t.arc(o, a, d, m - y / d, p + _ / d, !0), _ > 0) { const e = Bn(S, D, o, a); t.arc(e.x, e.y, _, D + Math.PI, p - Et) } const A = Bn(v, p, o, a); if (t.lineTo(A.x, A.y), b > 0) { const e = Bn(v, M, o, a); t.arc(e.x, e.y, b, p - Et, M) } t.closePath() } function Nn(t, e, i, s, n) { const { options: o } = e, { borderWidth: a, borderJoinStyle: r } = o, l = "inner" === o.borderAlign; a && (l ? (t.lineWidth = 2 * a, t.lineJoin = r || "round") : (t.lineWidth = a, t.lineJoin = r || "bevel"), e.fullCircles && function (t, e, i) { const { x: s, y: n, startAngle: o, pixelMargin: a, fullCircles: r } = e, l = Math.max(e.outerRadius - a, 0), h = e.innerRadius + a; let c; for (i && zn(t, e, o + At), t.beginPath(), t.arc(s, n, h, o + At, o, !0), c = 0; c < r; ++c)t.stroke(); for (t.beginPath(), t.arc(s, n, l, o, o + At), c = 0; c < r; ++c)t.stroke() }(t, e, l), l && zn(t, e, n), Vn(t, e, i, s, n), t.stroke()) } class Wn extends Os { constructor(t) { super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t) } inRange(t, e, i) { const s = this.getProps(["x", "y"], i), { angle: n, distance: o } = qt(s, { x: t, y: e }), { startAngle: a, endAngle: r, innerRadius: l, outerRadius: h, circumference: c } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i), d = this.options.spacing / 2, u = Z(c, r - a) >= At || Jt(n, a, r), f = ee(o, l + d, h + d); return u && f } getCenterPoint(t) { const { x: e, y: i, startAngle: s, endAngle: n, innerRadius: o, outerRadius: a } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), { offset: r, spacing: l } = this.options, h = (s + n) / 2, c = (o + a + l + r) / 2; return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c } } tooltipPosition(t) { return this.getCenterPoint(t) } draw(t) { const { options: e, circumference: i } = this, s = (e.offset || 0) / 2, n = (e.spacing || 0) / 2; if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > At ? Math.floor(i / At) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return; t.save(); let o = 0; if (s) { o = s / 2; const e = (this.startAngle + this.endAngle) / 2; t.translate(Math.cos(e) * o, Math.sin(e) * o), this.circumference >= Ot && (o = s) } t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor; const a = function (t, e, i, s) { const { fullCircles: n, startAngle: o, circumference: a } = e; let r = e.endAngle; if (n) { Vn(t, e, i, s, o + At); for (let e = 0; e < n; ++e)t.fill(); isNaN(a) || (r = o + a % At, a % At == 0 && (r += At)) } return Vn(t, e, i, s, r), t.fill(), r }(t, this, o, n); Nn(t, this, o, n, a), t.restore() } } function Hn(t, e, i = e) { t.lineCap = Z(i.borderCapStyle, e.borderCapStyle), t.setLineDash(Z(i.borderDash, e.borderDash)), t.lineDashOffset = Z(i.borderDashOffset, e.borderDashOffset), t.lineJoin = Z(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = Z(i.borderWidth, e.borderWidth), t.strokeStyle = Z(i.borderColor, e.borderColor) } function jn(t, e, i) { t.lineTo(i.x, i.y) } function $n(t, e, i = {}) { const s = t.length, { start: n = 0, end: o = s - 1 } = i, { start: a, end: r } = e, l = Math.max(n, a), h = Math.min(o, r), c = n < a && o < a || n > r && o > r; return { count: s, start: l, loop: e.loop, ilen: h < l && !c ? s + h - l : h - l } } function Yn(t, e, i, s) { const { points: n, options: o } = e, { count: a, start: r, loop: l, ilen: h } = $n(n, i, s), c = function (t) { return t.stepped ? ke : t.tension || "monotone" === t.cubicInterpolationMode ? Se : jn }(o); let d, u, f, { move: g = !0, reverse: p } = s || {}; for (d = 0; d <= h; ++d)u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u); return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l } function Un(t, e, i, s) { const n = e.points, { count: o, start: a, ilen: r } = $n(n, i, s), { move: l = !0, reverse: h } = s || {}; let c, d, u, f, g, p, m = 0, b = 0; const x = t => (a + (h ? r - t : t)) % o, _ = () => { f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p)) }; for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) { if (d = n[x(c)], d.skip) continue; const e = d.x, i = d.y, s = 0 | e; s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = s, b = 0, f = g = i), p = i } _() } function Xn(t) { const e = t.options, i = e.borderDash && e.borderDash.length; return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Un : Yn } Wn.id = "arc", Wn.defaults = { borderAlign: "center", borderColor: "#fff", borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0 }, Wn.defaultRoutes = { backgroundColor: "backgroundColor" }; const qn = "function" == typeof Path2D; function Kn(t, e, i, s) { qn && !e.options.segment ? function (t, e, i, s) { let n = e._path; n || (n = e._path = new Path2D, e.path(n, i, s) && n.closePath()), Hn(t, e.options), t.stroke(n) }(t, e, i, s) : function (t, e, i, s) { const { segments: n, options: o } = e, a = Xn(e); for (const r of n) Hn(t, o, r.style), t.beginPath(), a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(), t.stroke() }(t, e, i, s) } class Gn extends Os { constructor(t) { super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t) } updateControlPoints(t, e) { const i = this.options; if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) { const s = i.spanGaps ? this._loop : this._fullLoop; Ke(this._points, i, t, s, e), this._pointsUpdated = !0 } } set points(t) { this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1 } get points() { return this._points } get segments() { return this._segments || (this._segments = Mi(this, this.options.segment)) } first() { const t = this.segments, e = this.points; return t.length && e[t[0].start] } last() { const t = this.segments, e = this.points, i = t.length; return i && e[t[i - 1].end] } interpolate(t, e) { const i = this.options, s = t[e], n = this.points, o = wi(this, { property: e, start: s, end: s }); if (!o.length) return; const a = [], r = function (t) { return t.stepped ? ei : t.tension || "monotone" === t.cubicInterpolationMode ? ii : ti }(i); let l, h; for (l = 0, h = o.length; l < h; ++l) { const { start: h, end: c } = o[l], d = n[h], u = n[c]; if (d === u) { a.push(d); continue } const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped); f[e] = t[e], a.push(f) } return 1 === a.length ? a[0] : a } pathSegment(t, e, i) { return Xn(this)(t, this, e, i) } path(t, e, i) { const s = this.segments, n = Xn(this); let o = this._loop; e = e || 0, i = i || this.points.length - e; for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 }); return !!o } draw(t, e, i, s) { const n = this.options || {}; (this.points || []).length && n.borderWidth && (t.save(), Kn(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0) } } function Zn(t, e, i, s) { const n = t.options, { [i]: o } = t.getProps([i], s); return Math.abs(e - o) < n.radius + n.hitRadius } Gn.id = "line", Gn.defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 }, Gn.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }, Gn.descriptors = { _scriptable: !0, _indexable: t => "borderDash" !== t && "fill" !== t }; class Jn extends Os { constructor(t) { super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t) } inRange(t, e, i) { const s = this.options, { x: n, y: o } = this.getProps(["x", "y"], i); return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2) } inXRange(t, e) { return Zn(this, t, "x", e) } inYRange(t, e) { return Zn(this, t, "y", e) } getCenterPoint(t) { const { x: e, y: i } = this.getProps(["x", "y"], t); return { x: e, y: i } } size(t) { let e = (t = t || this.options || {}).radius || 0; e = Math.max(e, e && t.hoverRadius || 0); return 2 * (e + (e && t.borderWidth || 0)) } draw(t, e) { const i = this.options; this.skip || i.radius < .1 || !ve(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, ye(t, i, this.x, this.y)) } getRange() { const t = this.options || {}; return t.radius + t.hitRadius } } function Qn(t, e) { const { x: i, y: s, base: n, width: o, height: a } = t.getProps(["x", "y", "base", "width", "height"], e); let r, l, h, c, d; return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), { left: r, top: h, right: l, bottom: c } } function to(t, e, i, s) { return t ? 0 : Qt(e, i, s) } function eo(t) { const e = Qn(t), i = e.right - e.left, s = e.bottom - e.top, n = function (t, e, i) { const s = t.options.borderWidth, n = t.borderSkipped, o = hi(s); return { t: to(n.top, o.top, 0, i), r: to(n.right, o.right, 0, e), b: to(n.bottom, o.bottom, 0, i), l: to(n.left, o.left, 0, e) } }(t, i / 2, s / 2), o = function (t, e, i) { const { enableBorderRadius: s } = t.getProps(["enableBorderRadius"]), n = t.options.borderRadius, o = ci(n), a = Math.min(e, i), r = t.borderSkipped, l = s || q(n); return { topLeft: to(!l || r.top || r.left, o.topLeft, 0, a), topRight: to(!l || r.top || r.right, o.topRight, 0, a), bottomLeft: to(!l || r.bottom || r.left, o.bottomLeft, 0, a), bottomRight: to(!l || r.bottom || r.right, o.bottomRight, 0, a) } }(t, i / 2, s / 2); return { outer: { x: e.left, y: e.top, w: i, h: s, radius: o }, inner: { x: e.left + n.l, y: e.top + n.t, w: i - n.l - n.r, h: s - n.t - n.b, radius: { topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)), topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)), bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)), bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)) } } } } function io(t, e, i, s) { const n = null === e, o = null === i, a = t && !(n && o) && Qn(t, s); return a && (n || ee(e, a.left, a.right)) && (o || ee(i, a.top, a.bottom)) } function so(t, e) { t.rect(e.x, e.y, e.w, e.h) } function no(t, e, i = {}) { const s = t.x !== i.x ? -e : 0, n = t.y !== i.y ? -e : 0, o = (t.x + t.w !== i.x + i.w ? e : 0) - s, a = (t.y + t.h !== i.y + i.h ? e : 0) - n; return { x: t.x + s, y: t.y + n, w: t.w + o, h: t.h + a, radius: t.radius } } Jn.id = "point", Jn.defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 }, Jn.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; class oo extends Os { constructor(t) { super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t) } draw(t) { const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: n, outer: o } = eo(this), a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? Ce : so; var r; t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, no(o, e, n)), t.clip(), a(t, no(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, no(n, e)), t.fillStyle = s, t.fill(), t.restore() } inRange(t, e, i) { return io(this, t, e, i) } inXRange(t, e) { return io(this, t, null, e) } inYRange(t, e) { return io(this, null, t, e) } getCenterPoint(t) { const { x: e, y: i, base: s, horizontal: n } = this.getProps(["x", "y", "base", "horizontal"], t); return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 } } getRange(t) { return "x" === t ? this.width / 2 : this.height / 2 } } oo.id = "bar", oo.defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 }, oo.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; var ao = Object.freeze({ __proto__: null, ArcElement: Wn, LineElement: Gn, PointElement: Jn, BarElement: oo }); function ro(t) { if (t._decimated) { const e = t._data; delete t._decimated, delete t._data, Object.defineProperty(t, "data", { value: e }) } } function lo(t) { t.data.datasets.forEach((t => { ro(t) })) } var ho = { id: "decimation", defaults: { algorithm: "min-max", enabled: !1 }, beforeElementsUpdate: (t, e, i) => { if (!i.enabled) return void lo(t); const s = t.width; t.data.datasets.forEach(((e, n) => { const { _data: o, indexAxis: a } = e, r = t.getDatasetMeta(n), l = o || e.data; if ("y" === fi([a, t.options.indexAxis])) return; if (!r.controller.supportsDecimation) return; const h = t.scales[r.xAxisID]; if ("linear" !== h.type && "time" !== h.type) return; if (t.options.parsing) return; let { start: c, count: d } = function (t, e) { const i = e.length; let s, n = 0; const { iScale: o } = t, { min: a, max: r, minDefined: l, maxDefined: h } = o.getUserBounds(); return l && (n = Qt(wt(e, o.axis, a).lo, 0, i - 1)), s = h ? Qt(wt(e, o.axis, r).hi + 1, n, i) - n : i - n, { start: n, count: s } }(r, l); if (d <= (i.threshold || 4 * s)) return void ro(e); let u; switch (U(o) && (e._data = l, delete e.data, Object.defineProperty(e, "data", { configurable: !0, enumerable: !0, get: function () { return this._decimated }, set: function (t) { this._data = t } })), i.algorithm) { case "lttb": u = function (t, e, i, s, n) { const o = n.samples || s; if (o >= i) return t.slice(e, e + i); const a = [], r = (i - 2) / (o - 2); let l = 0; const h = e + i - 1; let c, d, u, f, g, p = e; for (a[l++] = t[p], c = 0; c < o - 2; c++) { let s, n = 0, o = 0; const h = Math.floor((c + 1) * r) + 1 + e, m = Math.min(Math.floor((c + 2) * r) + 1, i) + e, b = m - h; for (s = h; s < m; s++)n += t[s].x, o += t[s].y; n /= b, o /= b; const x = Math.floor(c * r) + 1 + e, _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e, { x: y, y: v } = t[p]; for (u = f = -1, s = x; s < _; s++)f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), f > u && (u = f, d = t[s], g = s); a[l++] = d, p = g } return a[l++] = t[h], a }(l, c, d, s, i); break; case "min-max": u = function (t, e, i, s) { let n, o, a, r, l, h, c, d, u, f, g = 0, p = 0; const m = [], b = e + i - 1, x = t[e].x, _ = t[b].x - x; for (n = e; n < e + i; ++n) { o = t[n], a = (o.x - x) / _ * s, r = o.y; const e = 0 | a; if (e === l) r < u ? (u = r, h = n) : r > f && (f = r, c = n), g = (p * g + o.x) / ++p; else { const i = n - 1; if (!U(h) && !U(c)) { const e = Math.min(h, c), s = Math.max(h, c); e !== d && e !== i && m.push({ ...t[e], x: g }), s !== d && s !== i && m.push({ ...t[s], x: g }) } n > 0 && i !== d && m.push(t[i]), m.push(o), l = e, p = 0, u = f = r, h = c = d = n } } return m }(l, c, d, s); break; default: throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`) }e._decimated = u })) }, destroy(t) { lo(t) } }; function co(t, e, i, s) { if (s) return; let n = e[t], o = i[t]; return "angle" === t && (n = Zt(n), o = Zt(o)), { property: t, start: n, end: o } } function uo(t, e, i) { for (; e > t; e--) { const t = i[e]; if (!isNaN(t.x) && !isNaN(t.y)) break } return e } function fo(t, e, i, s) { return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0 } function go(t, e) { let i = [], s = !1; return X(t) ? (s = !0, i = t) : i = function (t, e) { const { x: i = null, y: s = null } = t || {}, n = e.points, o = []; return e.segments.forEach((({ start: t, end: e }) => { e = uo(t, e, n); const a = n[t], r = n[e]; null !== s ? (o.push({ x: a.x, y: s }), o.push({ x: r.x, y: s })) : null !== i && (o.push({ x: i, y: a.y }), o.push({ x: i, y: r.y })) })), o }(t, e), i.length ? new Gn({ points: i, options: { tension: 0 }, _loop: s, _fullLoop: s }) : null } function po(t, e, i) { let s = t[e].fill; const n = [e]; let o; if (!i) return s; for (; !1 !== s && -1 === n.indexOf(s);) { if (!K(s)) return s; if (o = t[s], !o) return !1; if (o.visible) return s; n.push(s), s = o.fill } return !1 } function mo(t, e, i) { const s = function (t) { const e = t.options, i = e.fill; let s = Z(i && i.target, i); void 0 === s && (s = !!e.backgroundColor); if (!1 === s || null === s) return !1; if (!0 === s) return "origin"; return s }(t); if (q(s)) return !isNaN(s.value) && s; let n = parseFloat(s); return K(n) && Math.floor(n) === n ? function (t, e, i, s) { "-" !== t && "+" !== t || (i = e + i); if (i === e || i < 0 || i >= s) return !1; return i }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s } function bo(t, e, i) { const s = []; for (let n = 0; n < i.length; n++) { const o = i[n], { first: a, last: r, point: l } = xo(o, e, "x"); if (!(!l || a && r)) if (a) s.unshift(l); else if (t.push(l), !r) break } t.push(...s) } function xo(t, e, i) { const s = t.interpolate(e, i); if (!s) return {}; const n = s[i], o = t.segments, a = t.points; let r = !1, l = !1; for (let t = 0; t < o.length; t++) { const e = o[t], s = a[e.start][i], h = a[e.end][i]; if (ee(n, s, h)) { r = n === s, l = n === h; break } } return { first: r, last: l, point: s } } class _o { constructor(t) { this.x = t.x, this.y = t.y, this.radius = t.radius } pathSegment(t, e, i) { const { x: s, y: n, radius: o } = this; return e = e || { start: 0, end: At }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds } interpolate(t) { const { x: e, y: i, radius: s } = this, n = t.angle; return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n } } } function yo(t) { const { chart: e, fill: i, line: s } = t; if (K(i)) return function (t, e) { const i = t.getDatasetMeta(e); return i && t.isDatasetVisible(e) ? i.dataset : null }(e, i); if ("stack" === i) return function (t) { const { scale: e, index: i, line: s } = t, n = [], o = s.segments, a = s.points, r = function (t, e) { const i = [], s = t.getMatchingVisibleMetas("line"); for (let t = 0; t < s.length; t++) { const n = s[t]; if (n.index === e) break; n.hidden || i.unshift(n.dataset) } return i }(e, i); r.push(go({ x: null, y: e.bottom }, s)); for (let t = 0; t < o.length; t++) { const e = o[t]; for (let t = e.start; t <= e.end; t++)bo(n, a[t], r) } return new Gn({ points: n, options: {} }) }(t); if ("shape" === i) return !0; const n = function (t) { if ((t.scale || {}).getPointPositionForValue) return function (t) { const { scale: e, fill: i } = t, s = e.options, n = e.getLabels().length, o = s.reverse ? e.max : e.min, a = function (t, e, i) { let s; return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : q(t) ? t.value : e.getBaseValue(), s }(i, e, o), r = []; if (s.grid.circular) { const t = e.getPointPositionForValue(0, o); return new _o({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(a) }) } for (let t = 0; t < n; ++t)r.push(e.getPointPositionForValue(t, a)); return r }(t); return function (t) { const { scale: e = {}, fill: i } = t, s = function (t, e) { let i = null; return "start" === t ? i = e.bottom : "end" === t ? i = e.top : q(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i }(i, e); if (K(s)) { const t = e.isHorizontal(); return { x: t ? s : null, y: t ? null : s } } return null }(t) }(t); return n instanceof _o ? n : go(n, s) } function vo(t, e, i) { const s = yo(e), { line: n, scale: o, axis: a } = e, r = n.options, l = r.fill, h = r.backgroundColor, { above: c = h, below: d = h } = l || {}; s && n.points.length && (we(t, i), function (t, e) { const { line: i, target: s, above: n, below: o, area: a, scale: r } = e, l = i._loop ? "angle" : e.axis; t.save(), "x" === l && o !== n && (wo(t, s, a.top), Mo(t, { line: i, target: s, color: n, scale: r, property: l }), t.restore(), t.save(), wo(t, s, a.bottom)); Mo(t, { line: i, target: s, color: o, scale: r, property: l }), t.restore() }(t, { line: n, target: s, above: c, below: d, area: i, scale: o, axis: a }), Me(t)) } function wo(t, e, i) { const { segments: s, points: n } = e; let o = !0, a = !1; t.beginPath(); for (const r of s) { const { start: s, end: l } = r, h = n[s], c = n[uo(s, l, n)]; o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, { move: a }), a ? t.closePath() : t.lineTo(c.x, i) } t.lineTo(e.first().x, i), t.closePath(), t.clip() } function Mo(t, e) { const { line: i, target: s, property: n, color: o, scale: a } = e, r = function (t, e, i) { const s = t.segments, n = t.points, o = e.points, a = []; for (const t of s) { let { start: s, end: r } = t; r = uo(s, r, n); const l = co(i, n[s], n[r], t.loop); if (!e.segments) { a.push({ source: t, target: l, start: n[s], end: n[r] }); continue } const h = wi(e, l); for (const e of h) { const s = co(i, o[e.start], o[e.end], e.loop), r = vi(t, n, s); for (const t of r) a.push({ source: t, target: e, start: { [i]: fo(l, s, "start", Math.max) }, end: { [i]: fo(l, s, "end", Math.min) } }) } } return a }(i, s, n); for (const { source: e, target: l, start: h, end: c } of r) { const { style: { backgroundColor: r = o } = {} } = e, d = !0 !== s; t.save(), t.fillStyle = r, ko(t, a, d && co(n, h, c)), t.beginPath(); const u = !!i.pathSegment(t, e); let f; if (d) { u ? t.closePath() : So(t, s, c, n); const e = !!s.pathSegment(t, l, { move: u, reverse: !0 }); f = u && e, f || So(t, s, h, n) } t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore() } } function ko(t, e, i) { const { top: s, bottom: n } = e.chart.chartArea, { property: o, start: a, end: r } = i || {}; "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip()) } function So(t, e, i, s) { const n = e.interpolate(i, s); n && t.lineTo(n.x, n.y) } var Po = { id: "filler", afterDatasetsUpdate(t, e, i) { const s = (t.data.datasets || []).length, n = []; let o, a, r, l; for (a = 0; a < s; ++a)o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof Gn && (l = { visible: t.isDatasetVisible(a), index: a, fill: mo(r, a, s), chart: t, axis: o.controller.options.indexAxis, scale: o.vScale, line: r }), o.$filler = l, n.push(l); for (a = 0; a < s; ++a)l = n[a], l && !1 !== l.fill && (l.fill = po(n, a, i.propagate)) }, beforeDraw(t, e, i) { const s = "beforeDraw" === i.drawTime, n = t.getSortedVisibleDatasetMetas(), o = t.chartArea; for (let e = n.length - 1; e >= 0; --e) { const i = n[e].$filler; i && (i.line.updateControlPoints(o, i.axis), s && vo(t.ctx, i, o)) } }, beforeDatasetsDraw(t, e, i) { if ("beforeDatasetsDraw" !== i.drawTime) return; const s = t.getSortedVisibleDatasetMetas(); for (let e = s.length - 1; e >= 0; --e) { const i = s[e].$filler; i && vo(t.ctx, i, t.chartArea) } }, beforeDatasetDraw(t, e, i) { const s = e.meta.$filler; s && !1 !== s.fill && "beforeDatasetDraw" === i.drawTime && vo(t.ctx, s, t.chartArea) }, defaults: { propagate: !0, drawTime: "beforeDatasetDraw" } }; const Do = (t, e) => { let { boxHeight: i = e, boxWidth: s = e } = t; return t.usePointStyle && (i = Math.min(i, e), s = Math.min(s, e)), { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) } }; class Co extends Os { constructor(t) { super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 } update(t, e, i) { this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit() } setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height) } buildLabels() { const t = this.options.labels || {}; let e = tt(t.generateLabels, [this.chart], this) || []; t.filter && (e = e.filter((e => t.filter(e, this.chart.data)))), t.sort && (e = e.sort(((e, i) => t.sort(e, i, this.chart.data)))), this.options.reverse && e.reverse(), this.legendItems = e } fit() { const { options: t, ctx: e } = this; if (!t.display) return void (this.width = this.height = 0); const i = t.labels, s = ui(i.font), n = s.size, o = this._computeTitleHeight(), { boxWidth: a, itemHeight: r } = Do(i, n); let l, h; e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, n, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight) } _fitRows(t, e, i, s) { const { ctx: n, maxWidth: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.lineWidths = [0], h = s + a; let c = t; n.textAlign = "left", n.textBaseline = "middle"; let d = -1, u = -h; return this.legendItems.forEach(((t, f) => { const g = i + e / 2 + n.measureText(t.text).width; (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = { left: 0, top: u, row: d, width: g, height: s }, l[l.length - 1] += g + a })), c } _fitCols(t, e, i, s) { const { ctx: n, maxHeight: o, options: { labels: { padding: a } } } = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], h = o - t; let c = a, d = 0, u = 0, f = 0, g = 0; return this.legendItems.forEach(((t, o) => { const p = i + e / 2 + n.measureText(t.text).width; o > 0 && u + s + 2 * a > h && (c += d + a, l.push({ width: d, height: u }), f += d + a, g++, d = u = 0), r[o] = { left: f, top: u, col: g, width: p, height: s }, d = Math.max(d, p), u += s + a })), c += d, l.push({ width: d, height: u }), c } adjustHitBoxes() { if (!this.options.display) return; const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, a = mi(o, this.left, this.width); if (this.isHorizontal()) { let o = 0, r = n(i, this.left + s, this.right - this.lineWidths[o]); for (const l of e) o !== l.row && (o = l.row, r = n(i, this.left + s, this.right - this.lineWidths[o])), l.top += this.top + t + s, l.left = a.leftForLtr(a.x(r), l.width), r += l.width + s } else { let o = 0, r = n(i, this.top + t + s, this.bottom - this.columnSizes[o].height); for (const l of e) l.col !== o && (o = l.col, r = n(i, this.top + t + s, this.bottom - this.columnSizes[o].height)), l.top = r, l.left += this.left + s, l.left = a.leftForLtr(a.x(l.left), l.width), r += l.height + s } } isHorizontal() { return "top" === this.options.position || "bottom" === this.options.position } draw() { if (this.options.display) { const t = this.ctx; we(t, this), this._draw(), Me(t) } } _draw() { const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: a, labels: r } = t, l = yt.color, h = mi(t.rtl, this.left, this.width), c = ui(r.font), { color: d, padding: u } = r, f = c.size, g = f / 2; let p; this.drawTitle(), s.textAlign = h.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = c.string; const { boxWidth: m, boxHeight: b, itemHeight: x } = Do(r, f), _ = this.isHorizontal(), y = this._computeTitleHeight(); p = _ ? { x: n(a, this.left + u, this.right - i[0]), y: this.top + u + y, line: 0 } : { x: this.left + u, y: n(a, this.top + y + u, this.bottom - e[0].height), line: 0 }, bi(this.ctx, t.textDirection); const v = x + u; this.legendItems.forEach(((w, M) => { s.strokeStyle = w.fontColor || d, s.fillStyle = w.fontColor || d; const k = s.measureText(w.text).width, S = h.textAlign(w.textAlign || (w.textAlign = r.textAlign)), P = m + g + k; let D = p.x, C = p.y; h.setWidth(this.width), _ ? M > 0 && D + P + u > this.right && (C = p.y += v, p.line++, D = p.x = n(a, this.left + u, this.right - i[p.line])) : M > 0 && C + v > this.bottom && (D = p.x = D + e[p.line].width + u, p.line++, C = p.y = n(a, this.top + y + u, this.bottom - e[p.line].height)); !function (t, e, i) { if (isNaN(m) || m <= 0 || isNaN(b) || b < 0) return; s.save(); const n = Z(i.lineWidth, 1); if (s.fillStyle = Z(i.fillStyle, l), s.lineCap = Z(i.lineCap, "butt"), s.lineDashOffset = Z(i.lineDashOffset, 0), s.lineJoin = Z(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = Z(i.strokeStyle, l), s.setLineDash(Z(i.lineDash, [])), r.usePointStyle) { const o = { radius: m * Math.SQRT2 / 2, pointStyle: i.pointStyle, rotation: i.rotation, borderWidth: n }, a = h.xPlus(t, m / 2); ye(s, o, a, e + g) } else { const o = e + Math.max((f - b) / 2, 0), a = h.leftForLtr(t, m), r = ci(i.borderRadius); s.beginPath(), Object.values(r).some((t => 0 !== t)) ? Ce(s, { x: a, y: o, w: m, h: b, radius: r }) : s.rect(a, o, m, b), s.fill(), 0 !== n && s.stroke() } s.restore() }(h.x(D), C, w), D = o(S, D + m + g, _ ? D + P : this.right, t.rtl), function (t, e, i) { Pe(s, i.text, t, e + x / 2, c, { strikethrough: i.hidden, textAlign: h.textAlign(i.textAlign) }) }(h.x(D), C, w), _ ? p.x += P + u : p.y += v })), xi(this.ctx, t.textDirection) } drawTitle() { const t = this.options, e = t.title, i = ui(e.font), o = di(e.padding); if (!e.display) return; const a = mi(t.rtl, this.left, this.width), r = this.ctx, l = e.position, h = i.size / 2, c = o.top + h; let d, u = this.left, f = this.width; if (this.isHorizontal()) f = Math.max(...this.lineWidths), d = this.top + c, u = n(t.align, u, this.right - f); else { const e = this.columnSizes.reduce(((t, e) => Math.max(t, e.height)), 0); d = c + n(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight()) } const g = n(l, u, u + f); r.textAlign = a.textAlign(s(l)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, Pe(r, e.text, g, d, i) } _computeTitleHeight() { const t = this.options.title, e = ui(t.font), i = di(t.padding); return t.display ? e.lineHeight + i.height : 0 } _getLegendItemAt(t, e) { let i, s, n; if (ee(t, this.left, this.right) && ee(e, this.top, this.bottom)) for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)if (s = n[i], ee(t, s.left, s.left + s.width) && ee(e, s.top, s.top + s.height)) return this.legendItems[i]; return null } handleEvent(t) { const e = this.options; if (!function (t, e) { if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0; if (e.onClick && ("click" === t || "mouseup" === t)) return !0; return !1 }(t.type, e)) return; const i = this._getLegendItemAt(t.x, t.y); if ("mousemove" === t.type || "mouseout" === t.type) { const o = this._hoveredItem, a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index); o && !a && tt(e.onLeave, [t, o, this], this), this._hoveredItem = i, i && !a && tt(e.onHover, [t, i, this], this) } else i && tt(e.onClick, [t, i, this], this); var s, n } } var Oo = { id: "legend", _element: Co, start(t, e, i) { const s = t.legend = new Co({ ctx: t.ctx, options: i, chart: t }); Xi.configure(t, s, i), Xi.addBox(t, s) }, stop(t) { Xi.removeBox(t, t.legend), delete t.legend }, beforeUpdate(t, e, i) { const s = t.legend; Xi.configure(t, s, i), s.options = i }, afterUpdate(t) { const e = t.legend; e.buildLabels(), e.adjustHitBoxes() }, afterEvent(t, e) { e.replay || t.legend.handleEvent(e.event) }, defaults: { display: !0, position: "top", align: "center", fullSize: !0, reverse: !1, weight: 1e3, onClick(t, e, i) { const s = e.datasetIndex, n = i.chart; n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1) }, onHover: null, onLeave: null, labels: { color: t => t.chart.options.color, boxWidth: 40, padding: 10, generateLabels(t) { const e = t.data.datasets, { labels: { usePointStyle: i, pointStyle: s, textAlign: n, color: o } } = t.legend.options; return t._getSortedDatasetMetas().map((t => { const a = t.controller.getStyle(i ? 0 : void 0), r = di(a.borderWidth); return { text: e[t.index].label, fillStyle: a.backgroundColor, fontColor: o, hidden: !t.visible, lineCap: a.borderCapStyle, lineDash: a.borderDash, lineDashOffset: a.borderDashOffset, lineJoin: a.borderJoinStyle, lineWidth: (r.width + r.height) / 4, strokeStyle: a.borderColor, pointStyle: s || a.pointStyle, rotation: a.rotation, textAlign: n || a.textAlign, borderRadius: 0, datasetIndex: t.index } }), this) } }, title: { color: t => t.chart.options.color, display: !1, position: "center", text: "" } }, descriptors: { _scriptable: t => !t.startsWith("on"), labels: { _scriptable: t => !["generateLabels", "filter", "sort"].includes(t) } } }; class Ao extends Os { constructor(t) { super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0 } update(t, e) { const i = this.options; if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0); this.width = this.right = t, this.height = this.bottom = e; const s = X(i.text) ? i.text.length : 1; this._padding = di(i.padding); const n = s * ui(i.font).lineHeight + this._padding.height; this.isHorizontal() ? this.height = n : this.width = n } isHorizontal() { const t = this.options.position; return "top" === t || "bottom" === t } _drawArgs(t) { const { top: e, left: i, bottom: s, right: o, options: a } = this, r = a.align; let l, h, c, d = 0; return this.isHorizontal() ? (h = n(r, i, o), c = e + t, l = o - i) : ("left" === a.position ? (h = i + t, c = n(r, s, e), d = -.5 * Ot) : (h = o - t, c = n(r, e, s), d = .5 * Ot), l = s - e), { titleX: h, titleY: c, maxWidth: l, rotation: d } } draw() { const t = this.ctx, e = this.options; if (!e.display) return; const i = ui(e.font), n = i.lineHeight / 2 + this._padding.top, { titleX: o, titleY: a, maxWidth: r, rotation: l } = this._drawArgs(n); Pe(t, e.text, 0, 0, i, { color: e.color, maxWidth: r, rotation: l, textAlign: s(e.align), textBaseline: "middle", translation: [o, a] }) } } var To = { id: "title", _element: Ao, start(t, e, i) { !function (t, e) { const i = new Ao({ ctx: t.ctx, options: e, chart: t }); Xi.configure(t, i, e), Xi.addBox(t, i), t.titleBlock = i }(t, i) }, stop(t) { const e = t.titleBlock; Xi.removeBox(t, e), delete t.titleBlock }, beforeUpdate(t, e, i) { const s = t.titleBlock; Xi.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const Lo = new WeakMap; var Ro = { id: "subtitle", start(t, e, i) { const s = new Ao({ ctx: t.ctx, options: i, chart: t }); Xi.configure(t, s, i), Xi.addBox(t, s), Lo.set(t, s) }, stop(t) { Xi.removeBox(t, Lo.get(t)), Lo.delete(t) }, beforeUpdate(t, e, i) { const s = Lo.get(t); Xi.configure(t, s, i), s.options = i }, defaults: { align: "center", display: !1, font: { weight: "normal" }, fullSize: !0, padding: 0, position: "top", text: "", weight: 1500 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const Eo = { average(t) { if (!t.length) return !1; let e, i, s = 0, n = 0, o = 0; for (e = 0, i = t.length; e < i; ++e) { const i = t[e].element; if (i && i.hasValue()) { const t = i.tooltipPosition(); s += t.x, n += t.y, ++o } } return { x: s / o, y: n / o } }, nearest(t, e) { if (!t.length) return !1; let i, s, n, o = e.x, a = e.y, r = Number.POSITIVE_INFINITY; for (i = 0, s = t.length; i < s; ++i) { const s = t[i].element; if (s && s.hasValue()) { const t = Kt(e, s.getCenterPoint()); t < r && (r = t, n = s) } } if (n) { const t = n.tooltipPosition(); o = t.x, a = t.y } return { x: o, y: a } } }; function Io(t, e) { return e && (X(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t } function zo(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t } function Fo(t, e) { const { element: i, datasetIndex: s, index: n } = e, o = t.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n); return { chart: t, label: a, parsed: o.getParsed(n), raw: t.data.datasets[s].data[n], formattedValue: r, dataset: o.getDataset(), dataIndex: n, datasetIndex: s, element: i } } function Bo(t, e) { const i = t.chart.ctx, { body: s, footer: n, title: o } = t, { boxWidth: a, boxHeight: r } = e, l = ui(e.bodyFont), h = ui(e.titleFont), c = ui(e.footerFont), d = o.length, u = n.length, f = s.length, g = di(e.padding); let p = g.height, m = 0, b = s.reduce(((t, e) => t + e.before.length + e.lines.length + e.after.length), 0); if (b += t.beforeBody.length + t.afterBody.length, d && (p += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b) { p += f * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (b - f) * l.lineHeight + (b - 1) * e.bodySpacing } u && (p += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing); let x = 0; const _ = function (t) { m = Math.max(m, i.measureText(t).width + x) }; return i.save(), i.font = h.string, et(t.title, _), i.font = l.string, et(t.beforeBody.concat(t.afterBody), _), x = e.displayColors ? a + 2 + e.boxPadding : 0, et(s, (t => { et(t.before, _), et(t.lines, _), et(t.after, _) })), x = 0, i.font = c.string, et(t.footer, _), i.restore(), m += g.width, { width: m, height: p } } function Vo(t, e, i, s) { const { x: n, width: o } = i, { width: a, chartArea: { left: r, right: l } } = t; let h = "center"; return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), function (t, e, i, s) { const { x: n, width: o } = s, a = i.caretSize + i.caretPadding; return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0 }(h, t, e, i) && (h = "center"), h } function No(t, e, i) { const s = i.yAlign || e.yAlign || function (t, e) { const { y: i, height: s } = e; return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center" }(t, i); return { xAlign: i.xAlign || e.xAlign || Vo(t, e, i, s), yAlign: s } } function Wo(t, e, i, s) { const { caretSize: n, caretPadding: o, cornerRadius: a } = t, { xAlign: r, yAlign: l } = i, h = n + o, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = ci(a); let g = function (t, e) { let { x: i, width: s } = t; return "right" === e ? i -= s : "center" === e && (i -= s / 2), i }(e, r); const p = function (t, e, i) { let { y: s, height: n } = t; return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s }(e, l, h); return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), { x: Qt(g, 0, s.width - e.width), y: Qt(p, 0, s.height - e.height) } } function Ho(t, e, i) { const s = di(i.padding); return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left } function jo(t) { return Io([], zo(t)) } function $o(t, e) { const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks; return i ? t.override(i) : t } class Yo extends Os { constructor(t) { super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0 } initialize(t) { this.options = t, this._cachedAnimations = void 0, this.$context = void 0 } _resolveAnimations() { const t = this._cachedAnimations; if (t) return t; const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, n = new ms(this.chart, s); return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n } getContext() { return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, pi(t, { tooltip: e, tooltipItems: i, type: "tooltip" }))); var t, e, i } getTitle(t, e) { const { callbacks: i } = e, s = i.beforeTitle.apply(this, [t]), n = i.title.apply(this, [t]), o = i.afterTitle.apply(this, [t]); let a = []; return a = Io(a, zo(s)), a = Io(a, zo(n)), a = Io(a, zo(o)), a } getBeforeBody(t, e) { return jo(e.callbacks.beforeBody.apply(this, [t])) } getBody(t, e) { const { callbacks: i } = e, s = []; return et(t, (t => { const e = { before: [], lines: [], after: [] }, n = $o(i, t); Io(e.before, zo(n.beforeLabel.call(this, t))), Io(e.lines, n.label.call(this, t)), Io(e.after, zo(n.afterLabel.call(this, t))), s.push(e) })), s } getAfterBody(t, e) { return jo(e.callbacks.afterBody.apply(this, [t])) } getFooter(t, e) { const { callbacks: i } = e, s = i.beforeFooter.apply(this, [t]), n = i.footer.apply(this, [t]), o = i.afterFooter.apply(this, [t]); let a = []; return a = Io(a, zo(s)), a = Io(a, zo(n)), a = Io(a, zo(o)), a } _createItems(t) { const e = this._active, i = this.chart.data, s = [], n = [], o = []; let a, r, l = []; for (a = 0, r = e.length; a < r; ++a)l.push(Fo(this.chart, e[a])); return t.filter && (l = l.filter(((e, s, n) => t.filter(e, s, n, i)))), t.itemSort && (l = l.sort(((e, s) => t.itemSort(e, s, i)))), et(l, (e => { const i = $o(t.callbacks, e); s.push(i.labelColor.call(this, e)), n.push(i.labelPointStyle.call(this, e)), o.push(i.labelTextColor.call(this, e)) })), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l } update(t, e) { const i = this.options.setContext(this.getContext()), s = this._active; let n, o = []; if (s.length) { const t = Eo[i.position].call(this, s, this._eventPosition); o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i); const e = this._size = Bo(this, i), a = Object.assign({}, t, e), r = No(this.chart, i, a), l = Wo(i, a, r, this.chart); this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = { opacity: 1, x: l.x, y: l.y, width: e.width, height: e.height, caretX: t.x, caretY: t.y } } else 0 !== this.opacity && (n = { opacity: 0 }); this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e }) } drawCaret(t, e, i, s) { const n = this.getCaretPosition(t, i, s); e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3) } getCaretPosition(t, e, i) { const { xAlign: s, yAlign: n } = this, { caretSize: o, cornerRadius: a } = i, { topLeft: r, topRight: l, bottomLeft: h, bottomRight: c } = ci(a), { x: d, y: u } = t, { width: f, height: g } = e; let p, m, b, x, _, y; return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), { x1: p, x2: m, x3: b, y1: x, y2: _, y3: y } } drawTitle(t, e, i) { const s = this.title, n = s.length; let o, a, r; if (n) { const l = mi(i.rtl, this.x, this.width); for (t.x = Ho(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", o = ui(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r)e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a) } } _drawColorBox(t, e, i, s, n) { const o = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: r, boxWidth: l, boxPadding: h } = n, c = ui(n.bodyFont), d = Ho(this, "left", n), u = s.x(d), f = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0, g = e.y + f; if (n.usePointStyle) { const e = { radius: Math.min(l, r) / 2, pointStyle: a.pointStyle, rotation: a.rotation, borderWidth: 1 }, i = s.leftForLtr(u, l) + l / 2, h = g + r / 2; t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, ye(t, e, i, h), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ye(t, e, i, h) } else { t.lineWidth = o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0; const e = s.leftForLtr(u, l - h), i = s.leftForLtr(s.xPlus(u, 1), l - h - 2), a = ci(o.borderRadius); Object.values(a).some((t => 0 !== t)) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, Ce(t, { x: e, y: g, w: l, h: r, radius: a }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Ce(t, { x: i, y: g + 1, w: l - 2, h: r - 2, radius: a }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, g, l, r), t.strokeRect(e, g, l, r), t.fillStyle = o.backgroundColor, t.fillRect(i, g + 1, l - 2, r - 2)) } t.fillStyle = this.labelTextColors[i] } drawBody(t, e, i) { const { body: s } = this, { bodySpacing: n, bodyAlign: o, displayColors: a, boxHeight: r, boxWidth: l, boxPadding: h } = i, c = ui(i.bodyFont); let d = c.lineHeight, u = 0; const f = mi(i.rtl, this.x, this.width), g = function (i) { e.fillText(i, f.x(t.x + u), t.y + d / 2), t.y += d + n }, p = f.textAlign(o); let m, b, x, _, y, v, w; for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Ho(this, p, i), e.fillStyle = i.bodyColor, et(this.beforeBody, g), u = a && "right" !== p ? "center" === o ? l / 2 + h : l + 2 + h : 0, _ = 0, v = s.length; _ < v; ++_) { for (m = s[_], b = this.labelTextColors[_], e.fillStyle = b, et(m.before, g), x = m.lines, a && x.length && (this._drawColorBox(e, t, _, f, i), d = Math.max(c.lineHeight, r)), y = 0, w = x.length; y < w; ++y)g(x[y]), d = c.lineHeight; et(m.after, g) } u = 0, d = c.lineHeight, et(this.afterBody, g), t.y -= n } drawFooter(t, e, i) { const s = this.footer, n = s.length; let o, a; if (n) { const r = mi(i.rtl, this.x, this.width); for (t.x = Ho(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), e.textBaseline = "middle", o = ui(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a)e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing } } drawBackground(t, e, i, s) { const { xAlign: n, yAlign: o } = this, { x: a, y: r } = t, { width: l, height: h } = i, { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = ci(s.cornerRadius); e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke() } _updateAnimationTarget(t) { const e = this.chart, i = this.$animations, s = i && i.x, n = i && i.y; if (s || n) { const i = Eo[t.position].call(this, this._active, this._eventPosition); if (!i) return; const o = this._size = Bo(this, t), a = Object.assign({}, i, this._size), r = No(e, t, a), l = Wo(t, a, r, e); s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l)) } } _willRender() { return !!this.opacity } draw(t) { const e = this.options.setContext(this.getContext()); let i = this.opacity; if (!i) return; this._updateAnimationTarget(e); const s = { width: this.width, height: this.height }, n = { x: this.x, y: this.y }; i = Math.abs(i) < .001 ? 0 : i; const o = di(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length; e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), bi(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), xi(t, e.textDirection), t.restore()) } getActiveElements() { return this._active || [] } setActiveElements(t, e) { const i = this._active, s = t.map((({ datasetIndex: t, index: e }) => { const i = this.chart.getDatasetMeta(t); if (!i) throw new Error("Cannot find a dataset at index " + t); return { datasetIndex: t, element: i.data[e], index: e } })), n = !it(i, s), o = this._positionChanged(s, e); (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0)) } handleEvent(t, e, i = !0) { if (e && this._ignoreReplayEvents) return !1; this._ignoreReplayEvents = !1; const s = this.options, n = this._active || [], o = this._getActiveElements(t, n, e, i), a = this._positionChanged(o, t), r = e || !it(o, n) || a; return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = { x: t.x, y: t.y }, this.update(!0, e))), r } _getActiveElements(t, e, i, s) { const n = this.options; if ("mouseout" === t.type) return []; if (!s) return e; const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i); return n.reverse && o.reverse(), o } _positionChanged(t, e) { const { caretX: i, caretY: s, options: n } = this, o = Eo[n.position].call(this, t, e); return !1 !== o && (i !== o.x || s !== o.y) } } Yo.positioners = Eo; var Uo = { id: "tooltip", _element: Yo, positioners: Eo, afterInit(t, e, i) { i && (t.tooltip = new Yo({ chart: t, options: i })) }, beforeUpdate(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, reset(t, e, i) { t.tooltip && t.tooltip.initialize(i) }, afterDraw(t) { const e = t.tooltip; if (e && e._willRender()) { const i = { tooltip: e }; if (!1 === t.notifyPlugins("beforeTooltipDraw", i)) return; e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i) } }, afterEvent(t, e) { if (t.tooltip) { const i = e.replay; t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0) } }, defaults: { enabled: !0, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (t, e) => e.bodyFont.size, boxWidth: (t, e) => e.bodyFont.size, multiKeyBackground: "#fff", displayColors: !0, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: { beforeTitle: $, title(t) { if (t.length > 0) { const e = t[0], i = e.chart.data.labels, s = i ? i.length : 0; if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || ""; if (e.label) return e.label; if (s > 0 && e.dataIndex < s) return i[e.dataIndex] } return "" }, afterTitle: $, beforeBody: $, beforeLabel: $, label(t) { if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue; let e = t.dataset.label || ""; e && (e += ": "); const i = t.formattedValue; return U(i) || (e += i), e }, labelColor(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 } }, labelTextColor() { return this.options.bodyColor }, labelPointStyle(t) { const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex); return { pointStyle: e.pointStyle, rotation: e.rotation } }, afterLabel: $, afterBody: $, beforeFooter: $, footer: $, afterFooter: $ } }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t, _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] }, Xo = Object.freeze({ __proto__: null, Decimation: ho, Filler: Po, Legend: Oo, SubTitle: Ro, Title: To, Tooltip: Uo }); function qo(t, e, i, s) { const n = t.indexOf(e); if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({ index: i, label: e })) : isNaN(e) && (i = null), i))(t, e, i, s); return n !== t.lastIndexOf(e) ? i : n } class Ko extends Ns { constructor(t) { super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [] } init(t) { const e = this._addedLabels; if (e.length) { const t = this.getLabels(); for (const { index: i, label: s } of e) t[i] === s && t.splice(i, 1); this._addedLabels = [] } super.init(t) } parse(t, e) { if (U(t)) return null; const i = this.getLabels(); return ((t, e) => null === t ? null : Qt(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : qo(i, t, Z(e, t), this._addedLabels), i.length - 1) } determineDataLimits() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let { min: i, max: s } = this.getMinMax(!0); "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s } buildTicks() { const t = this.min, e = this.max, i = this.options.offset, s = []; let n = this.getLabels(); n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0); for (let i = t; i <= e; i++)s.push({ value: i }); return s } getLabelForValue(t) { const e = this.getLabels(); return t >= 0 && t < e.length ? e[t] : t } configure() { super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels) } getPixelForValue(t) { return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) } getPixelForTick(t) { const e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value) } getValueForPixel(t) { return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange) } getBasePixel() { return this.bottom } } function Go(t, e, { horizontal: i, minRotation: s }) { const n = Yt(s), o = (i ? Math.sin(n) : Math.cos(n)) || .001, a = .75 * e * ("" + t).length; return Math.min(e / o, a) } Ko.id = "category", Ko.defaults = { ticks: { callback: Ko.prototype.getLabelForValue } }; class Zo extends Ns { constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0 } parse(t, e) { return U(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t } handleTickRangeOptions() { const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds(); let { min: s, max: n } = this; const o = t => s = e ? s : t, a = t => n = i ? n : t; if (t) { const t = Bt(s), e = Bt(n); t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0) } if (s === n) { let e = 1; (n >= Number.MAX_SAFE_INTEGER || s <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(.05 * n)), a(n + e), t || o(s - e) } this.min = s, this.max = n } getTickLimit() { const t = this.options.ticks; let e, { maxTicksLimit: i, stepSize: s } = t; return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e } computeTickLimit() { return Number.POSITIVE_INFINITY } buildTicks() { const t = this.options, e = t.ticks; let i = this.getTickLimit(); i = Math.max(2, i); const s = function (t, e) { const i = [], { bounds: s, step: n, min: o, max: a, precision: r, count: l, maxTicks: h, maxDigits: c, includeBounds: d } = t, u = n || 1, f = h - 1, { min: g, max: p } = e, m = !U(o), b = !U(a), x = !U(l), _ = (p - g) / (c + 1); let y, v, w, M, k = Vt((p - g) / f / u) * u; if (k < 1e-14 && !m && !b) return [{ value: g }, { value: p }]; M = Math.ceil(p / k) - Math.floor(g / k), M > f && (k = Vt(M * k / f / u) * u), U(r) || (y = Math.pow(10, r), k = Math.ceil(k * y) / y), "ticks" === s ? (v = Math.floor(g / k) * k, w = Math.ceil(p / k) * k) : (v = g, w = p), m && b && n && jt((a - o) / n, k / 1e3) ? (M = Math.round(Math.min((a - o) / k, h)), k = (a - o) / M, v = o, w = a) : x ? (v = m ? o : v, w = b ? a : w, M = l - 1, k = (w - v) / M) : (M = (w - v) / k, M = Ht(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M)); const S = Math.max(Xt(k), Xt(v)); y = Math.pow(10, U(r) ? S : r), v = Math.round(v * y) / y, w = Math.round(w * y) / y; let P = 0; for (m && (d && v !== o ? (i.push({ value: o }), v < o && P++, Ht(Math.round((v + P * k) * y) / y, o, Go(o, _, t)) && P++) : v < o && P++); P < M; ++P)i.push({ value: Math.round((v + P * k) * y) / y }); return b && d && w !== a ? i.length && Ht(i[i.length - 1].value, a, Go(a, _, t)) ? i[i.length - 1].value = a : i.push({ value: a }) : b && w !== a || i.push({ value: w }), i }({ maxTicks: i, bounds: t.bounds, min: t.min, max: t.max, precision: e.precision, step: e.stepSize, count: e.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: e.minRotation || 0, includeBounds: !1 !== e.includeBounds }, this._range || this); return "ticks" === t.bounds && $t(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s } configure() { const t = this.ticks; let e = this.min, i = this.max; if (super.configure(), this.options.offset && t.length) { const s = (i - e) / Math.max(t.length - 1, 1) / 2; e -= s, i += s } this._startValue = e, this._endValue = i, this._valueRange = i - e } getLabelForValue(t) { return ni(t, this.chart.options.locale, this.options.ticks.format) } } class Jo extends Zo { determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0); this.min = K(t) ? t : 0, this.max = K(e) ? e : 1, this.handleTickRangeOptions() } computeTickLimit() { const t = this.isHorizontal(), e = t ? this.width : this.height, i = Yt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || .001, n = this._resolveTickFontOptions(0); return Math.ceil(e / Math.min(40, n.lineHeight / s)) } getPixelForValue(t) { return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange) } getValueForPixel(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange } } function Qo(t) { return 1 === t / Math.pow(10, Math.floor(Ft(t))) } Jo.id = "linear", Jo.defaults = { ticks: { callback: Ts.formatters.numeric } }; class ta extends Ns { constructor(t) { super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0 } parse(t, e) { const i = Zo.prototype.parse.apply(this, [t, e]); if (0 !== i) return K(i) && i > 0 ? i : null; this._zero = !0 } determineDataLimits() { const { min: t, max: e } = this.getMinMax(!0); this.min = K(t) ? Math.max(0, t) : null, this.max = K(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions() } handleTickRangeOptions() { const { minDefined: t, maxDefined: e } = this.getUserBounds(); let i = this.min, s = this.max; const n = e => i = t ? i : e, o = t => s = e ? s : t, a = (t, e) => Math.pow(10, Math.floor(Ft(t)) + e); i === s && (i <= 0 ? (n(1), o(10)) : (n(a(i, -1)), o(a(s, 1)))), i <= 0 && n(a(s, -1)), s <= 0 && o(a(i, 1)), this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && n(a(i, -1)), this.min = i, this.max = s } buildTicks() { const t = this.options, e = function (t, e) { const i = Math.floor(Ft(e.max)), s = Math.ceil(e.max / Math.pow(10, i)), n = []; let o = G(t.min, Math.pow(10, Math.floor(Ft(e.min)))), a = Math.floor(Ft(o)), r = Math.floor(o / Math.pow(10, a)), l = a < 0 ? Math.pow(10, Math.abs(a)) : 1; do { n.push({ value: o, major: Qo(o) }), ++r, 10 === r && (r = 1, ++a, l = a >= 0 ? 1 : l), o = Math.round(r * Math.pow(10, a) * l) / l } while (a < i || a === i && r < s); const h = G(t.max, o); return n.push({ value: h, major: Qo(o) }), n }({ min: this._userMin, max: this._userMax }, this); return "ticks" === t.bounds && $t(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e } getLabelForValue(t) { return void 0 === t ? "0" : ni(t, this.chart.options.locale, this.options.ticks.format) } configure() { const t = this.min; super.configure(), this._startValue = Ft(t), this._valueRange = Ft(this.max) - Ft(t) } getPixelForValue(t) { return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Ft(t) - this._startValue) / this._valueRange) } getValueForPixel(t) { const e = this.getDecimalForPixel(t); return Math.pow(10, this._startValue + e * this._valueRange) } } function ea(t) { const e = t.ticks; if (e.display && t.display) { const t = di(e.backdropPadding); return Z(e.font && e.font.size, yt.font.size) + t.height } return 0 } function ia(t, e, i, s, n) { return t === s || t === n ? { start: e - i / 2, end: e + i / 2 } : t < s || t > n ? { start: e - i, end: e } : { start: e, end: e + i } } function sa(t) { const e = { l: t.left + t._padding.left, r: t.right - t._padding.right, t: t.top + t._padding.top, b: t.bottom - t._padding.bottom }, i = Object.assign({}, e), s = [], n = [], o = t._pointLabels.length, a = t.options.pointLabels, r = a.centerPointLabels ? Ot / o : 0; for (let d = 0; d < o; d++) { const o = a.setContext(t.getPointLabelContext(d)); n[d] = o.padding; const u = t.getPointPosition(d, t.drawingArea + n[d], r), f = ui(o.font), g = (l = t.ctx, h = f, c = X(c = t._pointLabels[d]) ? c : [c], { w: be(l, h.string, c), h: c.length * h.lineHeight }); s[d] = g; const p = Zt(t.getIndexAngle(d) + r), m = Math.round(Ut(p)); na(i, e, p, ia(m, u.x, g.w, 0, 180), ia(m, u.y, g.h, 90, 270)) } var l, h, c; t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) { const s = [], n = t._pointLabels.length, o = t.options, a = ea(o) / 2, r = t.drawingArea, l = o.pointLabels.centerPointLabels ? Ot / n : 0; for (let o = 0; o < n; o++) { const n = t.getPointPosition(o, r + a + i[o], l), h = Math.round(Ut(Zt(n.angle + Et))), c = e[o], d = ra(n.y, c.h, h), u = oa(h), f = aa(n.x, c.w, u); s.push({ x: n.x, y: d, textAlign: u, left: f, top: d, right: f + c.w, bottom: d + c.h }) } return s }(t, s, n) } function na(t, e, i, s, n) { const o = Math.abs(Math.sin(i)), a = Math.abs(Math.cos(i)); let r = 0, l = 0; s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l)) } function oa(t) { return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right" } function aa(t, e, i) { return "right" === i ? t -= e : "center" === i && (t -= e / 2), t } function ra(t, e, i) { return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t } function la(t, e, i, s) { const { ctx: n } = t; if (i) n.arc(t.xCenter, t.yCenter, e, 0, At); else { let i = t.getPointPosition(0, e); n.moveTo(i.x, i.y); for (let o = 1; o < s; o++)i = t.getPointPosition(o, e), n.lineTo(i.x, i.y) } } ta.id = "logarithmic", ta.defaults = { ticks: { callback: Ts.formatters.logarithmic, major: { enabled: !0 } } }; class ha extends Zo { constructor(t) { super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [] } setDimensions() { const t = this._padding = di(ea(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height; this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2) } determineDataLimits() { const { min: t, max: e } = this.getMinMax(!1); this.min = K(t) && !isNaN(t) ? t : 0, this.max = K(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions() } computeTickLimit() { return Math.ceil(this.drawingArea / ea(this.options)) } generateTickLabels(t) { Zo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(((t, e) => { const i = tt(this.options.pointLabels.callback, [t, e], this); return i || 0 === i ? i : "" })).filter(((t, e) => this.chart.getDataVisibility(e))) } fit() { const t = this.options; t.display && t.pointLabels.display ? sa(this) : this.setCenterPoint(0, 0, 0, 0) } setCenterPoint(t, e, i, s) { this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)) } getIndexAngle(t) { return Zt(t * (At / (this._pointLabels.length || 1)) + Yt(this.options.startAngle || 0)) } getDistanceFromCenterForValue(t) { if (U(t)) return NaN; const e = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - t) * e : (t - this.min) * e } getValueForDistanceFromCenter(t) { if (U(t)) return NaN; const e = t / (this.drawingArea / (this.max - this.min)); return this.options.reverse ? this.max - e : this.min + e } getPointLabelContext(t) { const e = this._pointLabels || []; if (t >= 0 && t < e.length) { const i = e[t]; return function (t, e, i) { return pi(t, { label: i, index: e, type: "pointLabel" }) }(this.getContext(), t, i) } } getPointPosition(t, e, i = 0) { const s = this.getIndexAngle(t) - Et + i; return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s } } getPointPositionForValue(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) } getBasePosition(t) { return this.getPointPositionForValue(t || 0, this.getBaseValue()) } getPointLabelPosition(t) { const { left: e, top: i, right: s, bottom: n } = this._pointLabelItems[t]; return { left: e, top: i, right: s, bottom: n } } drawBackground() { const { backgroundColor: t, grid: { circular: e } } = this.options; if (t) { const i = this.ctx; i.save(), i.beginPath(), la(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore() } } drawGrid() { const t = this.ctx, e = this.options, { angleLines: i, grid: s } = e, n = this._pointLabels.length; let o, a, r; if (e.pointLabels.display && function (t, e) { const { ctx: i, options: { pointLabels: s } } = t; for (let n = e - 1; n >= 0; n--) { const e = s.setContext(t.getPointLabelContext(n)), o = ui(e.font), { x: a, y: r, textAlign: l, left: h, top: c, right: d, bottom: u } = t._pointLabelItems[n], { backdropColor: f } = e; if (!U(f)) { const t = ci(e.borderRadius), s = di(e.backdropPadding); i.fillStyle = f; const n = h - s.left, o = c - s.top, a = d - h + s.width, r = u - c + s.height; Object.values(t).some((t => 0 !== t)) ? (i.beginPath(), Ce(i, { x: n, y: o, w: a, h: r, radius: t }), i.fill()) : i.fillRect(n, o, a, r) } Pe(i, t._pointLabels[n], a, r + o.lineHeight / 2, o, { color: e.color, textAlign: l, textBaseline: "middle" }) } }(this, n), s.display && this.ticks.forEach(((t, e) => { if (0 !== e) { a = this.getDistanceFromCenterForValue(t.value); !function (t, e, i, s) { const n = t.ctx, o = e.circular, { color: a, lineWidth: r } = e; !o && !s || !a || !r || i < 0 || (n.save(), n.strokeStyle = a, n.lineWidth = r, n.setLineDash(e.borderDash), n.lineDashOffset = e.borderDashOffset, n.beginPath(), la(t, i, o, s), n.closePath(), n.stroke(), n.restore()) }(this, s.setContext(this.getContext(e - 1)), a, n) } })), i.display) { for (t.save(), o = n - 1; o >= 0; o--) { const s = i.setContext(this.getPointLabelContext(o)), { color: n, lineWidth: l } = s; l && n && (t.lineWidth = l, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), r = this.getPointPosition(o, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.stroke()) } t.restore() } } drawBorder() { } drawLabels() { const t = this.ctx, e = this.options, i = e.ticks; if (!i.display) return; const s = this.getIndexAngle(0); let n, o; t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(((s, a) => { if (0 === a && !e.reverse) return; const r = i.setContext(this.getContext(a)), l = ui(r.font); if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) { t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor; const e = di(r.backdropPadding); t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height) } Pe(t, s.label, 0, -n, l, { color: r.color }) })), t.restore() } drawTitle() { } } ha.id = "radialLinear", ha.defaults = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: !1 }, startAngle: 0, ticks: { showLabelBackdrop: !0, callback: Ts.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback: t => t, padding: 5, centerPointLabels: !1 } }, ha.defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" }, ha.descriptors = { angleLines: { _fallback: "grid" } }; const ca = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } }, da = Object.keys(ca); function ua(t, e) { return t - e } function fa(t, e) { if (U(e)) return null; const i = t._adapter, { parser: s, round: n, isoWeekday: o } = t._parseOpts; let a = e; return "function" == typeof s && (a = s(a)), K(a) || (a = "string" == typeof s ? i.parse(a, s) : i.parse(a)), null === a ? null : (n && (a = "week" !== n || !Wt(o) && !0 !== o ? i.startOf(a, n) : i.startOf(a, "isoWeek", o)), +a) } function ga(t, e, i, s) { const n = da.length; for (let o = da.indexOf(t); o < n - 1; ++o) { const t = ca[da[o]], n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER; if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return da[o] } return da[n - 1] } function pa(t, e, i) { if (i) { if (i.length) { const { lo: s, hi: n } = vt(i, e); t[i[s] >= e ? i[s] : i[n]] = !0 } } else t[e] = !0 } function ma(t, e, i) { const s = [], n = {}, o = e.length; let a, r; for (a = 0; a < o; ++a)r = e[a], n[r] = a, s.push({ value: r, major: !1 }); return 0 !== o && i ? function (t, e, i, s) { const n = t._adapter, o = +n.startOf(e[0].value, s), a = e[e.length - 1].value; let r, l; for (r = o; r <= a; r = +n.add(r, 1, s))l = i[r], l >= 0 && (e[l].major = !0); return e }(t, s, n, i) : s } class ba extends Ns { constructor(t) { super(t), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0 } init(t, e) { const i = t.time || (t.time = {}), s = this._adapter = new xn._date(t.adapters.date); rt(i.displayFormats, s.formats()), this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }, super.init(t), this._normalized = e.normalized } parse(t, e) { return void 0 === t ? null : fa(this, t) } beforeLayout() { super.beforeLayout(), this._cache = { data: [], labels: [], all: [] } } determineDataLimits() { const t = this.options, e = this._adapter, i = t.time.unit || "day"; let { min: s, max: n, minDefined: o, maxDefined: a } = this.getUserBounds(); function r(t) { o || isNaN(t.min) || (s = Math.min(s, t.min)), a || isNaN(t.max) || (n = Math.max(n, t.max)) } o && a || (r(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || r(this.getMinMax(!1))), s = K(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = K(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n) } _getLabelBounds() { const t = this.getLabelTimestamps(); let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY; return t.length && (e = t[0], i = t[t.length - 1]), { min: e, max: i } } buildTicks() { const t = this.options, e = t.time, i = t.ticks, s = "labels" === i.source ? this.getLabelTimestamps() : this._generate(); "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]); const n = this.min, o = kt(s, n, this.max); return this._unit = e.unit || (i.autoSkip ? ga(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) { for (let o = da.length - 1; o >= da.indexOf(i); o--) { const i = da[o]; if (ca[i].common && t._adapter.diff(n, s, i) >= e - 1) return i } return da[i ? da.indexOf(i) : 0] }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) { for (let e = da.indexOf(t) + 1, i = da.length; e < i; ++e)if (ca[da[e]].common) return da[e] }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), ma(this, o, this._majorUnit) } afterAutoSkip() { this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t => +t.value))) } initOffsets(t) { let e, i, s = 0, n = 0; this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2); const o = t.length < 3 ? .5 : .25; s = Qt(s, 0, o), n = Qt(n, 0, o), this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) } } _generate() { const t = this._adapter, e = this.min, i = this.max, s = this.options, n = s.time, o = n.unit || ga(n.minUnit, e, i, this._getLabelCapacity(e)), a = Z(n.stepSize, 1), r = "week" === o && n.isoWeekday, l = Wt(r) || !0 === r, h = {}; let c, d, u = e; if (l && (u = +t.startOf(u, "isoWeek", r)), u = +t.startOf(u, l ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o); const f = "data" === s.ticks.source && this.getDataTimestamps(); for (c = u, d = 0; c < i; c = +t.add(c, a, o), d++)pa(h, c, f); return c !== i && "ticks" !== s.bounds && 1 !== d || pa(h, c, f), Object.keys(h).sort(((t, e) => t - e)).map((t => +t)) } getLabelForValue(t) { const e = this._adapter, i = this.options.time; return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime) } _tickFormatFunction(t, e, i, s) { const n = this.options, o = n.time.displayFormats, a = this._unit, r = this._majorUnit, l = a && o[a], h = r && o[r], c = i[e], d = r && h && c && c.major, u = this._adapter.format(t, s || (d ? h : l)), f = n.ticks.callback; return f ? tt(f, [u, e, i], this) : u } generateTickLabels(t) { let e, i, s; for (e = 0, i = t.length; e < i; ++e)s = t[e], s.label = this._tickFormatFunction(s.value, e, t) } getDecimalForValue(t) { return null === t ? NaN : (t - this.min) / (this.max - this.min) } getPixelForValue(t) { const e = this._offsets, i = this.getDecimalForValue(t); return this.getPixelForDecimal((e.start + i) * e.factor) } getValueForPixel(t) { const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end; return this.min + i * (this.max - this.min) } _getLabelSize(t) { const e = this.options.ticks, i = this.ctx.measureText(t).width, s = Yt(this.isHorizontal() ? e.maxRotation : e.minRotation), n = Math.cos(s), o = Math.sin(s), a = this._resolveTickFontOptions(0).size; return { w: i * n + a * o, h: i * o + a * n } } _getLabelCapacity(t) { const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, n = this._tickFormatFunction(t, 0, ma(this, [t], this._majorUnit), s), o = this._getLabelSize(n), a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1; return a > 0 ? a : 1 } getDataTimestamps() { let t, e, i = this._cache.data || []; if (i.length) return i; const s = this.getMatchingVisibleMetas(); if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this); for (t = 0, e = s.length; t < e; ++t)i = i.concat(s[t].controller.getAllParsedValues(this)); return this._cache.data = this.normalize(i) } getLabelTimestamps() { const t = this._cache.labels || []; let e, i; if (t.length) return t; const s = this.getLabels(); for (e = 0, i = s.length; e < i; ++e)t.push(fa(this, s[e])); return this._cache.labels = this._normalized ? t : this.normalize(t) } normalize(t) { return Ct(t.sort(ua)) } } function xa(t, e, i) { let s, n, o, a, r = 0, l = t.length - 1; i ? (e >= t[r].pos && e <= t[l].pos && ({ lo: r, hi: l } = wt(t, "pos", e)), ({ pos: s, time: o } = t[r]), ({ pos: n, time: a } = t[l])) : (e >= t[r].time && e <= t[l].time && ({ lo: r, hi: l } = wt(t, "time", e)), ({ time: s, pos: o } = t[r]), ({ time: n, pos: a } = t[l])); const h = n - s; return h ? o + (a - o) * (e - s) / h : o } ba.id = "time", ba.defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", major: { enabled: !1 } } }; class _a extends ba { constructor(t) { super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0 } initOffsets() { const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t); this._minPos = xa(e, this.min), this._tableRange = xa(e, this.max) - this._minPos, super.initOffsets(t) } buildLookupTable(t) { const { min: e, max: i } = this, s = [], n = []; let o, a, r, l, h; for (o = 0, a = t.length; o < a; ++o)l = t[o], l >= e && l <= i && s.push(l); if (s.length < 2) return [{ time: e, pos: 0 }, { time: i, pos: 1 }]; for (o = 0, a = s.length; o < a; ++o)h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({ time: l, pos: o / (a - 1) }); return n } _getTimestampsForTable() { let t = this._cache.all || []; if (t.length) return t; const e = this.getDataTimestamps(), i = this.getLabelTimestamps(); return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t } getDecimalForValue(t) { return (xa(this._table, t) - this._minPos) / this._tableRange } getValueForPixel(t) { const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end; return xa(this._table, i * this._tableRange + this._minPos, !0) } } _a.id = "timeseries", _a.defaults = ba.defaults; var ya = Object.freeze({ __proto__: null, CategoryScale: Ko, LinearScale: Jo, LogarithmicScale: ta, RadialLinearScale: ha, TimeScale: ba, TimeSeriesScale: _a }); return fn.register(In, ya, ao, Xo), fn.helpers = { ...Di }, fn._adapters = xn, fn.Animation = gs, fn.Animations = ms, fn.animator = a, fn.controllers = Hs.controllers.items, fn.DatasetController = Cs, fn.Element = Os, fn.elements = ao, fn.Interaction = Ei, fn.layouts = Xi, fn.platforms = ds, fn.Scale = Ns, fn.Ticks = Ts, Object.assign(fn, In, ya, ao, Xo, ds), fn.Chart = fn, "undefined" != typeof window && (window.Chart = fn), fn
}));



/*!
DataTables Bootstrap 5 integration
2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (a, b, c) { a instanceof String && (a = String(a)); for (var e = a.length, d = 0; d < e; d++) { var f = a[d]; if (b.call(c, f, d, a)) return { i: d, v: f } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) { if (a == Array.prototype || a == Object.prototype) return a; a[b] = c.value; return a }; $jscomp.getGlobal = function (a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x"); $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; var $jscomp$lookupPolyfilledValue = function (a, b) { var c = $jscomp.propertyToPolyfillSymbol[b]; if (null == c) return a[b]; c = a[c]; return void 0 !== c ? c : a[b] };
$jscomp.polyfill = function (a, b, c, e) { b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e)) }; $jscomp.polyfillUnisolated = function (a, b, c, e) { c = $jscomp.global; a = a.split("."); for (e = 0; e < a.length - 1; e++) { var d = a[e]; if (!(d in c)) return; c = c[d] } a = a[a.length - 1]; e = c[a]; b = b(e); b != e && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b }) };
$jscomp.polyfillIsolated = function (a, b, c, e) {
    var d = a.split("."); a = 1 === d.length; e = d[0]; e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var f = 0; f < d.length - 1; f++) { var l = d[f]; if (!(l in e)) return; e = e[l] } d = d[d.length - 1]; c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null; b = b(c); null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, { configurable: !0, writable: !0, value: b }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
        $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, { configurable: !0, writable: !0, value: b })))
}; $jscomp.polyfill("Array.prototype.find", function (a) { return a ? a : function (b, c) { return $jscomp.findInternal(this, b, c).v } }, "es6", "es3");
(function (a) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (b) { return a(b, window, document) }) : "object" === typeof exports ? module.exports = function (b, c) { b || (b = window); c && c.fn.dataTable || (c = require("datatables.net")(b, c).$); return a(c, b, b.document) } : a(jQuery, window, document) })(function (a, b, c, e) {
    var d = a.fn.dataTable; a.extend(!0, d.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }); a.extend(d.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap5", sFilterInput: "form-control form-control-sm", sLengthSelect: "form-select form-select-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }); d.ext.renderer.pageButton.bootstrap = function (f, l, A, B, m, t) {
        var u = new d.Api(f), C = f.oClasses, n = f.oLanguage.oPaginate, D = f.oLanguage.oAria.paginate || {}, h, k, v = 0, y = function (q, w) {
            var x, E = function (p) {
                p.preventDefault(); a(p.currentTarget).hasClass("disabled") ||
                    u.page() == p.data.action || u.page(p.data.action).draw("page")
            }; var r = 0; for (x = w.length; r < x; r++) {
                var g = w[r]; if (Array.isArray(g)) y(q, g); else {
                    k = h = ""; switch (g) { case "ellipsis": h = "&#x2026;"; k = "disabled"; break; case "first": h = n.sFirst; k = g + (0 < m ? "" : " disabled"); break; case "previous": h = n.sPrevious; k = g + (0 < m ? "" : " disabled"); break; case "next": h = n.sNext; k = g + (m < t - 1 ? "" : " disabled"); break; case "last": h = n.sLast; k = g + (m < t - 1 ? "" : " disabled"); break; default: h = g + 1, k = m === g ? "active" : "" }if (h) {
                        var F = a("<li>", {
                            "class": C.sPageButton +
                                " " + k, id: 0 === A && "string" === typeof g ? f.sTableId + "_" + g : null
                        }).append(a("<a>", { href: "#", "aria-controls": f.sTableId, "aria-label": D[g], "data-dt-idx": v, tabindex: f.iTabIndex, "class": "page-link" }).html(h)).appendTo(q); f.oApi._fnBindAction(F, { action: g }, E); v++
                    }
                }
            }
        }; try { var z = a(l).find(c.activeElement).data("dt-idx") } catch (q) { } y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B); z !== e && a(l).find("[data-dt-idx=" + z + "]").trigger("focus")
    }; return d
});



/*!
   SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.12.1
 Â©2008-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (l, y, A) { l instanceof String && (l = String(l)); for (var q = l.length, E = 0; E < q; E++) { var P = l[E]; if (y.call(A, P, E, l)) return { i: E, v: P } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (l, y, A) { if (l == Array.prototype || l == Object.prototype) return l; l[y] = A.value; return l }; $jscomp.getGlobal = function (l) { l = ["object" == typeof globalThis && globalThis, l, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var y = 0; y < l.length; ++y) { var A = l[y]; if (A && A.Math == Math) return A } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x"); $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; var $jscomp$lookupPolyfilledValue = function (l, y) { var A = $jscomp.propertyToPolyfillSymbol[y]; if (null == A) return l[y]; A = l[A]; return void 0 !== A ? A : l[y] };
$jscomp.polyfill = function (l, y, A, q) { y && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(l, y, A, q) : $jscomp.polyfillUnisolated(l, y, A, q)) }; $jscomp.polyfillUnisolated = function (l, y, A, q) { A = $jscomp.global; l = l.split("."); for (q = 0; q < l.length - 1; q++) { var E = l[q]; if (!(E in A)) return; A = A[E] } l = l[l.length - 1]; q = A[l]; y = y(q); y != q && null != y && $jscomp.defineProperty(A, l, { configurable: !0, writable: !0, value: y }) };
$jscomp.polyfillIsolated = function (l, y, A, q) {
    var E = l.split("."); l = 1 === E.length; q = E[0]; q = !l && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var P = 0; P < E.length - 1; P++) { var la = E[P]; if (!(la in q)) return; q = q[la] } E = E[E.length - 1]; A = $jscomp.IS_SYMBOL_NATIVE && "es6" === A ? q[E] : null; y = y(A); null != y && (l ? $jscomp.defineProperty($jscomp.polyfills, E, { configurable: !0, writable: !0, value: y }) : y !== A && ($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(E) : $jscomp.POLYFILL_PREFIX + E,
        E = $jscomp.propertyToPolyfillSymbol[E], $jscomp.defineProperty(q, E, { configurable: !0, writable: !0, value: y })))
}; $jscomp.polyfill("Array.prototype.find", function (l) { return l ? l : function (y, A) { return $jscomp.findInternal(this, y, A).v } }, "es6", "es3");
(function (l) { "function" === typeof define && define.amd ? define(["jquery"], function (y) { return l(y, window, document) }) : "object" === typeof exports ? module.exports = function (y, A) { y || (y = window); A || (A = "undefined" !== typeof window ? require("jquery") : require("jquery")(y)); return l(A, y, y.document) } : window.DataTable = l(jQuery, window, document) })(function (l, y, A, q) {
    function E(a) {
        var b, c, d = {}; l.each(a, function (e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0],
                b[2].toLowerCase()), d[c] = e, "o" === b[1] && E(a[e]))
        }); a._hungarianMap = d
    } function P(a, b, c) { a._hungarianMap || E(a); var d; l.each(b, function (e, h) { d = a._hungarianMap[e]; d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), l.extend(!0, b[d], b[e]), P(a[d], b[d], c)) : b[d] = b[e]) }) } function la(a) {
        var b = u.defaults.oLanguage, c = b.sDecimal; c && bb(c); if (a) {
            var d = a.sZeroRecords; !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && Y(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords &&
                Y(a, a, "sZeroRecords", "sLoadingRecords"); a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && c !== a && bb(a)
        }
    } function Db(a) {
        S(a, "ordering", "bSort"); S(a, "orderMulti", "bSortMulti"); S(a, "orderClasses", "bSortClasses"); S(a, "orderCellsTop", "bSortCellsTop"); S(a, "order", "aaSorting"); S(a, "orderFixed", "aaSortingFixed"); S(a, "paging", "bPaginate"); S(a, "pagingType", "sPaginationType"); S(a, "pageLength", "iDisplayLength"); S(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
            ""); "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++)a[b] && P(u.models.oSearch, a[b])
    } function Eb(a) { S(a, "orderable", "bSortable"); S(a, "orderData", "aDataSort"); S(a, "orderSequence", "asSorting"); S(a, "orderDataType", "sortDataType"); var b = a.aDataSort; "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]) } function Fb(a) {
        if (!u.__browser) {
            var b = {}; u.__browser = b; var c = l("<div/>").css({
                position: "fixed", top: 0, left: -1 * l(y).scrollLeft(), height: 1,
                width: 1, overflow: "hidden"
            }).append(l("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(l("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d = c.children(), e = d.children(); b.barWidth = d[0].offsetWidth - d[0].clientWidth; b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth; b.bScrollbarLeft = 1 !== Math.round(e.offset().left); b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1; c.remove()
        } l.extend(a.oBrowser, u.__browser); a.oScroll.iBarWidth = u.__browser.barWidth
    }
    function Gb(a, b, c, d, e, h) { var f = !1; if (c !== q) { var g = c; f = !0 } for (; d !== e;)a.hasOwnProperty(d) && (g = f ? b(g, a[d], d, a) : a[d], f = !0, d += h); return g } function cb(a, b) { var c = u.defaults.column, d = a.aoColumns.length; c = l.extend({}, u.models.oColumn, c, { nTh: b ? b : A.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = l.extend({}, u.models.oSearch, c[d]); Ia(a, d, l(b).data()) } function Ia(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses, e = l(b.nTh); if (!b.sWidthOrig) { b.sWidthOrig = e.attr("width") || null; var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/); h && (b.sWidthOrig = h[1]) } c !== q && null !== c && (Eb(c), P(u.defaults.column, c, !0), c.mDataProp === q || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h = b.sClass, l.extend(b, c), Y(b, c, "sWidth", "sWidthOrig"), h !== b.sClass && (b.sClass = h + " " + b.sClass), c.iDataSort !== q && (b.aDataSort = [c.iDataSort]),
            Y(b, c, "aDataSort")); var f = b.mData, g = ma(f), k = b.mRender ? ma(b.mRender) : null; c = function (m) { return "string" === typeof m && -1 !== m.indexOf("@") }; b._bAttrSrc = l.isPlainObject(f) && (c(f.sort) || c(f.type) || c(f.filter)); b._setter = null; b.fnGetData = function (m, n, p) { var t = g(m, n, q, p); return k && n ? k(t, n, m, p) : t }; b.fnSetData = function (m, n, p) { return ha(f)(m, n, p) }; "number" !== typeof f && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== l.inArray("asc", b.asSorting); c = -1 !== l.inArray("desc",
                b.asSorting); b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
    } function sa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; db(a); for (var c = 0, d = b.length; c < d; c++)b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; "" === b.sY && "" === b.sX || Ja(a); F(a, null, "column-sizing",
            [a])
    } function ta(a, b) { a = Ka(a, "bVisible"); return "number" === typeof a[b] ? a[b] : null } function ua(a, b) { a = Ka(a, "bVisible"); b = l.inArray(b, a); return -1 !== b ? b : null } function na(a) { var b = 0; l.each(a.aoColumns, function (c, d) { d.bVisible && "none" !== l(d.nTh).css("display") && b++ }); return b } function Ka(a, b) { var c = []; l.map(a.aoColumns, function (d, e) { d[b] && c.push(e) }); return c } function eb(a) {
        var b = a.aoColumns, c = a.aoData, d = u.ext.type.detect, e, h, f; var g = 0; for (e = b.length; g < e; g++) {
            var k = b[g]; var m = []; if (!k.sType && k._sManualType) k.sType =
                k._sManualType; else if (!k.sType) { var n = 0; for (h = d.length; n < h; n++) { var p = 0; for (f = c.length; p < f; p++) { m[p] === q && (m[p] = T(a, p, g, "type")); var t = d[n](m[p], a); if (!t && n !== d.length - 1) break; if ("html" === t && !aa(m[p])) break } if (t) { k.sType = t; break } } k.sType || (k.sType = "string") }
        }
    } function Hb(a, b, c, d) {
        var e, h, f, g = a.aoColumns; if (b) for (e = b.length - 1; 0 <= e; e--) {
            var k = b[e]; var m = k.target !== q ? k.target : k.targets !== q ? k.targets : k.aTargets; Array.isArray(m) || (m = [m]); var n = 0; for (h = m.length; n < h; n++)if ("number" === typeof m[n] && 0 <= m[n]) {
                for (; g.length <=
                    m[n];)cb(a); d(m[n], k)
            } else if ("number" === typeof m[n] && 0 > m[n]) d(g.length + m[n], k); else if ("string" === typeof m[n]) { var p = 0; for (f = g.length; p < f; p++)("_all" == m[n] || l(g[p].nTh).hasClass(m[n])) && d(p, k) }
        } if (c) for (e = 0, a = c.length; e < a; e++)d(e, c[e])
    } function ia(a, b, c, d) {
        var e = a.aoData.length, h = l.extend(!0, {}, u.models.oRow, { src: c ? "dom" : "data", idx: e }); h._aData = b; a.aoData.push(h); for (var f = a.aoColumns, g = 0, k = f.length; g < k; g++)f[g].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== q && (a.aIds[b] = h); !c && a.oFeatures.bDeferRender ||
            fb(a, e, c, d); return e
    } function La(a, b) { var c; b instanceof l || (b = l(b)); return b.map(function (d, e) { c = gb(a, e); return ia(a, c.data, e, c.cells) }) } function T(a, b, c, d) {
        "search" === d ? d = "filter" : "order" === d && (d = "sort"); var e = a.iDraw, h = a.aoColumns[c], f = a.aoData[b]._aData, g = h.sDefaultContent, k = h.fnGetData(f, d, { settings: a, row: b, col: c }); if (k === q) return a.iDrawError != e && null === g && (ea(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError =
            e), g; if ((k === f || null === k) && null !== g && d !== q) k = g; else if ("function" === typeof k) return k.call(f); if (null === k && "display" === d) return ""; "filter" === d && (a = u.ext.type.search, a[h.sType] && (k = a[h.sType](k))); return k
    } function Ib(a, b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) } function hb(a) { return l.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) { return b.replace(/\\\./g, ".") }) } function ib(a) { return U(a.aoData, "_aData") } function Ma(a) {
        a.aoData.length = 0; a.aiDisplayMaster.length =
            0; a.aiDisplay.length = 0; a.aIds = {}
    } function Na(a, b, c) { for (var d = -1, e = 0, h = a.length; e < h; e++)a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === q && a.splice(d, 1) } function va(a, b, c, d) {
        var e = a.aoData[b], h, f = function (k, m) { for (; k.childNodes.length;)k.removeChild(k.firstChild); k.innerHTML = T(a, b, m, "display") }; if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) { var g = e.anCells; if (g) if (d !== q) f(g[d], d); else for (c = 0, h = g.length; c < h; c++)f(g[c], c) } else e._aData = gb(a, e, d, d === q ? q : e._aData).data; e._aSortData = null; e._aFilterData = null; f =
            a.aoColumns; if (d !== q) f[d].sType = null; else { c = 0; for (h = f.length; c < h; c++)f[c].sType = null; jb(a, e) }
    } function gb(a, b, c, d) {
        var e = [], h = b.firstChild, f, g = 0, k, m = a.aoColumns, n = a._rowReadObject; d = d !== q ? d : n ? {} : []; var p = function (x, w) { if ("string" === typeof x) { var r = x.indexOf("@"); -1 !== r && (r = x.substring(r + 1), ha(x)(d, w.getAttribute(r))) } }, t = function (x) {
            if (c === q || c === g) f = m[g], k = x.innerHTML.trim(), f && f._bAttrSrc ? (ha(f.mData._)(d, k), p(f.mData.sort, x), p(f.mData.type, x), p(f.mData.filter, x)) : n ? (f._setter || (f._setter = ha(f.mData)),
                f._setter(d, k)) : d[g] = k; g++
        }; if (h) for (; h;) { var v = h.nodeName.toUpperCase(); if ("TD" == v || "TH" == v) t(h), e.push(h); h = h.nextSibling } else for (e = b.anCells, h = 0, v = e.length; h < v; h++)t(e[h]); (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && ha(a.rowId)(d, b); return { data: d, cells: e }
    } function fb(a, b, c, d) {
        var e = a.aoData[b], h = e._aData, f = [], g, k; if (null === e.nTr) {
            var m = c || A.createElement("tr"); e.nTr = m; e.anCells = f; m._DT_RowIndex = b; jb(a, e); var n = 0; for (g = a.aoColumns.length; n < g; n++) {
                var p = a.aoColumns[n]; e = (k = c ? !1 : !0) ? A.createElement(p.sCellType) :
                    d[n]; e._DT_CellIndex = { row: b, column: n }; f.push(e); if (k || !(!p.mRender && p.mData === n || l.isPlainObject(p.mData) && p.mData._ === n + ".display")) e.innerHTML = T(a, b, n, "display"); p.sClass && (e.className += " " + p.sClass); p.bVisible && !c ? m.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e); p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, T(a, b, n), h, b, n)
            } F(a, "aoRowCreatedCallback", null, [m, h, b, f])
        }
    } function jb(a, b) {
        var c = b.nTr, d = b._aData; if (c) {
            if (a = a.rowIdFn(d)) c.id = a; d.DT_RowClass && (a = d.DT_RowClass.split(" "),
                b.__rowc = b.__rowc ? Oa(b.__rowc.concat(a)) : a, l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass)); d.DT_RowAttr && l(c).attr(d.DT_RowAttr); d.DT_RowData && l(c).data(d.DT_RowData)
        }
    } function Jb(a) {
        var b, c, d = a.nTHead, e = a.nTFoot, h = 0 === l("th, td", d).length, f = a.oClasses, g = a.aoColumns; h && (c = l("<tr/>").appendTo(d)); var k = 0; for (b = g.length; k < b; k++) {
            var m = g[k]; var n = l(m.nTh).addClass(m.sClass); h && n.appendTo(c); a.oFeatures.bSort && (n.addClass(m.sSortingClass), !1 !== m.bSortable && (n.attr("tabindex", a.iTabIndex).attr("aria-controls",
                a.sTableId), kb(a, m.nTh, k))); m.sTitle != n[0].innerHTML && n.html(m.sTitle); lb(a, "header")(a, n, m, f)
        } h && wa(a.aoHeader, d); l(d).children("tr").children("th, td").addClass(f.sHeaderTH); l(e).children("tr").children("th, td").addClass(f.sFooterTH); if (null !== e) for (a = a.aoFooter[0], k = 0, b = a.length; k < b; k++)m = g[k], m.nTf = a[k].cell, m.sClass && l(m.nTf).addClass(m.sClass)
    } function xa(a, b, c) {
        var d, e, h = [], f = [], g = a.aoColumns.length; if (b) {
            c === q && (c = !1); var k = 0; for (d = b.length; k < d; k++) {
                h[k] = b[k].slice(); h[k].nTr = b[k].nTr; for (e =
                    g - 1; 0 <= e; e--)a.aoColumns[e].bVisible || c || h[k].splice(e, 1); f.push([])
            } k = 0; for (d = h.length; k < d; k++) { if (a = h[k].nTr) for (; e = a.firstChild;)a.removeChild(e); e = 0; for (b = h[k].length; e < b; e++) { var m = g = 1; if (f[k][e] === q) { a.appendChild(h[k][e].cell); for (f[k][e] = 1; h[k + g] !== q && h[k][e].cell == h[k + g][e].cell;)f[k + g][e] = 1, g++; for (; h[k][e + m] !== q && h[k][e].cell == h[k][e + m].cell;) { for (c = 0; c < g; c++)f[k + c][e + m] = 1; m++ } l(h[k][e].cell).attr("rowspan", g).attr("colspan", m) } } }
        }
    } function ja(a, b) {
        var c = "ssp" == Q(a), d = a.iInitDisplayStart;
        d !== q && -1 !== d && (a._iDisplayStart = c ? d : d >= a.fnRecordsDisplay() ? 0 : d, a.iInitDisplayStart = -1); c = F(a, "aoPreDrawCallback", "preDraw", [a]); if (-1 !== l.inArray(!1, c)) V(a, !1); else {
            c = []; var e = 0; d = a.asStripeClasses; var h = d.length, f = a.oLanguage, g = "ssp" == Q(a), k = a.aiDisplay, m = a._iDisplayStart, n = a.fnDisplayEnd(); a.bDrawing = !0; if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, V(a, !1); else if (!g) a.iDraw++; else if (!a.bDestroying && !b) { Kb(a); return } if (0 !== k.length) for (b = g ? a.aoData.length : n, f = g ? 0 : m; f < b; f++) {
                g = k[f]; var p = a.aoData[g];
                null === p.nTr && fb(a, g); var t = p.nTr; if (0 !== h) { var v = d[e % h]; p._sRowStripe != v && (l(t).removeClass(p._sRowStripe).addClass(v), p._sRowStripe = v) } F(a, "aoRowCallback", null, [t, p._aData, e, f, g]); c.push(t); e++
            } else e = f.sZeroRecords, 1 == a.iDraw && "ajax" == Q(a) ? e = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (e = f.sEmptyTable), c[0] = l("<tr/>", { "class": h ? d[0] : "" }).append(l("<td />", { valign: "top", colSpan: na(a), "class": a.oClasses.sRowEmpty }).html(e))[0]; F(a, "aoHeaderCallback", "header", [l(a.nTHead).children("tr")[0],
            ib(a), m, n, k]); F(a, "aoFooterCallback", "footer", [l(a.nTFoot).children("tr")[0], ib(a), m, n, k]); d = l(a.nTBody); d.children().detach(); d.append(l(c)); F(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
        }
    } function ka(a, b) { var c = a.oFeatures, d = c.bFilter; c.bSort && Lb(a); d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; ja(a); a._drawHold = !1 } function Mb(a) {
        var b = a.oClasses, c = l(a.nTable); c = l("<div/>").insertBefore(c); var d = a.oFeatures,
            e = l("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore = a.nTable.nextSibling; for (var h = a.sDom.split(""), f, g, k, m, n, p, t = 0; t < h.length; t++) {
                f = null; g = h[t]; if ("<" == g) {
                    k = l("<div/>")[0]; m = h[t + 1]; if ("'" == m || '"' == m) {
                        n = ""; for (p = 2; h[t + p] != m;)n += h[t + p], p++; "H" == n ? n = b.sJUIHeader : "F" == n && (n = b.sJUIFooter); -1 != n.indexOf(".") ? (m = n.split("."), k.id = m[0].substr(1, m[0].length - 1), k.className = m[1]) : "#" == n.charAt(0) ? k.id = n.substr(1,
                            n.length - 1) : k.className = n; t += p
                    } e.append(k); e = l(k)
                } else if (">" == g) e = e.parent(); else if ("l" == g && d.bPaginate && d.bLengthChange) f = Nb(a); else if ("f" == g && d.bFilter) f = Ob(a); else if ("r" == g && d.bProcessing) f = Pb(a); else if ("t" == g) f = Qb(a); else if ("i" == g && d.bInfo) f = Rb(a); else if ("p" == g && d.bPaginate) f = Sb(a); else if (0 !== u.ext.feature.length) for (k = u.ext.feature, p = 0, m = k.length; p < m; p++)if (g == k[p].cFeature) { f = k[p].fnInit(a); break } f && (k = a.aanFeatures, k[g] || (k[g] = []), k[g].push(f), e.append(f))
            } c.replaceWith(e); a.nHolding =
                null
    } function wa(a, b) { b = l(b).children("tr"); var c, d, e; a.splice(0, a.length); var h = 0; for (e = b.length; h < e; h++)a.push([]); h = 0; for (e = b.length; h < e; h++) { var f = b[h]; for (c = f.firstChild; c;) { if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) { var g = 1 * c.getAttribute("colspan"); var k = 1 * c.getAttribute("rowspan"); g = g && 0 !== g && 1 !== g ? g : 1; k = k && 0 !== k && 1 !== k ? k : 1; var m = 0; for (d = a[h]; d[m];)m++; var n = m; var p = 1 === g ? !0 : !1; for (d = 0; d < g; d++)for (m = 0; m < k; m++)a[h + m][n + d] = { cell: c, unique: p }, a[h + m].nTr = f } c = c.nextSibling } } }
    function Pa(a, b, c) { var d = []; c || (c = a.aoHeader, b && (c = [], wa(c, b))); b = 0; for (var e = c.length; b < e; b++)for (var h = 0, f = c[b].length; h < f; h++)!c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell); return d } function Qa(a, b, c) {
        F(a, "aoServerParams", "serverParams", [b]); if (b && Array.isArray(b)) { var d = {}, e = /(.*?)\[\]$/; l.each(b, function (n, p) { (n = p.name.match(e)) ? (n = n[0], d[n] || (d[n] = []), d[n].push(p.value)) : d[p.name] = p.value }); b = d } var h = a.ajax, f = a.oInstance, g = function (n) {
            var p = a.jqXHR ? a.jqXHR.status : null; if (null ===
                n || "number" === typeof p && 204 == p) n = {}, za(a, n, []); (p = n.error || n.sError) && ea(a, 0, p); a.json = n; F(a, null, "xhr", [a, n, a.jqXHR]); c(n)
        }; if (l.isPlainObject(h) && h.data) { var k = h.data; var m = "function" === typeof k ? k(b, a) : k; b = "function" === typeof k && m ? m : l.extend(!0, b, m); delete h.data } m = {
            data: b, success: g, dataType: "json", cache: !1, type: a.sServerMethod, error: function (n, p, t) {
                t = F(a, null, "xhr", [a, null, a.jqXHR]); -1 === l.inArray(!0, t) && ("parsererror" == p ? ea(a, 0, "Invalid JSON response", 1) : 4 === n.readyState && ea(a, 0, "Ajax error",
                    7)); V(a, !1)
            }
        }; a.oAjaxData = b; F(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(f, a.sAjaxSource, l.map(b, function (n, p) { return { name: p, value: n } }), g, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = l.ajax(l.extend(m, { url: h || a.sAjaxSource })) : "function" === typeof h ? a.jqXHR = h.call(f, b, g, a) : (a.jqXHR = l.ajax(l.extend(m, h)), h.data = k)
    } function Kb(a) { a.iDraw++; V(a, !0); Qa(a, Tb(a), function (b) { Ub(a, b) }) } function Tb(a) {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, h = a.aoPreSearchCols, f = [], g = oa(a);
        var k = a._iDisplayStart; var m = !1 !== d.bPaginate ? a._iDisplayLength : -1; var n = function (x, w) { f.push({ name: x, value: w }) }; n("sEcho", a.iDraw); n("iColumns", c); n("sColumns", U(b, "sName").join(",")); n("iDisplayStart", k); n("iDisplayLength", m); var p = { draw: a.iDraw, columns: [], order: [], start: k, length: m, search: { value: e.sSearch, regex: e.bRegex } }; for (k = 0; k < c; k++) {
            var t = b[k]; var v = h[k]; m = "function" == typeof t.mData ? "function" : t.mData; p.columns.push({
                data: m, name: t.sName, searchable: t.bSearchable, orderable: t.bSortable, search: {
                    value: v.sSearch,
                    regex: v.bRegex
                }
            }); n("mDataProp_" + k, m); d.bFilter && (n("sSearch_" + k, v.sSearch), n("bRegex_" + k, v.bRegex), n("bSearchable_" + k, t.bSearchable)); d.bSort && n("bSortable_" + k, t.bSortable)
        } d.bFilter && (n("sSearch", e.sSearch), n("bRegex", e.bRegex)); d.bSort && (l.each(g, function (x, w) { p.order.push({ column: w.col, dir: w.dir }); n("iSortCol_" + x, w.col); n("sSortDir_" + x, w.dir) }), n("iSortingCols", g.length)); b = u.ext.legacy.ajax; return null === b ? a.sAjaxSource ? f : p : b ? f : p
    } function Ub(a, b) {
        var c = function (f, g) { return b[f] !== q ? b[f] : b[g] },
        d = za(a, b), e = c("sEcho", "draw"), h = c("iTotalRecords", "recordsTotal"); c = c("iTotalDisplayRecords", "recordsFiltered"); if (e !== q) { if (1 * e < a.iDraw) return; a.iDraw = 1 * e } d || (d = []); Ma(a); a._iRecordsTotal = parseInt(h, 10); a._iRecordsDisplay = parseInt(c, 10); e = 0; for (h = d.length; e < h; e++)ia(a, d[e]); a.aiDisplay = a.aiDisplayMaster.slice(); ja(a, !0); a._bInitComplete || Ra(a, b); V(a, !1)
    } function za(a, b, c) {
        a = l.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp; if (!c) return "data" === a ? b.aaData || b[a] : "" !== a ? ma(a)(b) :
            b; ha(a)(b, c)
    } function Ob(a) {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, h = a.aanFeatures, f = '<input type="search" class="' + b.sFilterInput + '"/>', g = d.sSearch; g = g.match(/_INPUT_/) ? g.replace("_INPUT_", f) : g + f; b = l("<div/>", { id: h.f ? null : c + "_filter", "class": b.sFilter }).append(l("<label/>").append(g)); var k = function (n) {
            var p = this.value ? this.value : ""; e.return && "Enter" !== n.key || p == e.sSearch || (ya(a, { sSearch: p, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive, "return": e.return }),
                a._iDisplayStart = 0, ja(a))
        }; h = null !== a.searchDelay ? a.searchDelay : "ssp" === Q(a) ? 400 : 0; var m = l("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? mb(k, h) : k).on("mouseup", function (n) { setTimeout(function () { k.call(m[0], n) }, 10) }).on("keypress.DT", function (n) { if (13 == n.keyCode) return !1 }).attr("aria-controls", c); l(a.nTable).on("search.dt.DT", function (n, p) { if (a === p) try { m[0] !== A.activeElement && m.val(e.sSearch) } catch (t) { } }); return b[0]
    } function ya(a,
        b, c) { var d = a.oPreviousSearch, e = a.aoPreSearchCols, h = function (g) { d.sSearch = g.sSearch; d.bRegex = g.bRegex; d.bSmart = g.bSmart; d.bCaseInsensitive = g.bCaseInsensitive; d.return = g.return }, f = function (g) { return g.bEscapeRegex !== q ? !g.bEscapeRegex : g.bRegex }; eb(a); if ("ssp" != Q(a)) { Vb(a, b.sSearch, c, f(b), b.bSmart, b.bCaseInsensitive, b.return); h(b); for (b = 0; b < e.length; b++)Wb(a, e[b].sSearch, b, f(e[b]), e[b].bSmart, e[b].bCaseInsensitive); Xb(a) } else h(b); a.bFiltered = !0; F(a, null, "search", [a]) } function Xb(a) {
            for (var b = u.ext.search,
                c = a.aiDisplay, d, e, h = 0, f = b.length; h < f; h++) { for (var g = [], k = 0, m = c.length; k < m; k++)e = c[k], d = a.aoData[e], b[h](a, d._aFilterData, e, d._aData, k) && g.push(e); c.length = 0; l.merge(c, g) }
        } function Wb(a, b, c, d, e, h) { if ("" !== b) { var f = [], g = a.aiDisplay; d = nb(b, d, e, h); for (e = 0; e < g.length; e++)b = a.aoData[g[e]]._aFilterData[c], d.test(b) && f.push(g[e]); a.aiDisplay = f } } function Vb(a, b, c, d, e, h) {
            e = nb(b, d, e, h); var f = a.oPreviousSearch.sSearch, g = a.aiDisplayMaster; h = []; 0 !== u.ext.search.length && (c = !0); var k = Yb(a); if (0 >= b.length) a.aiDisplay =
                g.slice(); else { if (k || c || d || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice(); b = a.aiDisplay; for (c = 0; c < b.length; c++)e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]); a.aiDisplay = h }
        } function nb(a, b, c, d) { a = b ? a : ob(a); c && (a = "^(?=.*?" + l.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) { if ('"' === e.charAt(0)) { var h = e.match(/^"(.*)"$/); e = h ? h[1] : e } return e.replace('"', "") }).join(")(?=.*?") + ").*$"); return new RegExp(a, d ? "i" : "") } function Yb(a) {
            var b = a.aoColumns, c, d; var e = !1; var h = 0; for (c = a.aoData.length; h <
                c; h++) { var f = a.aoData[h]; if (!f._aFilterData) { var g = []; e = 0; for (d = b.length; e < d; e++) { var k = b[e]; k.bSearchable ? (k = T(a, h, e, "filter"), null === k && (k = ""), "string" !== typeof k && k.toString && (k = k.toString())) : k = ""; k.indexOf && -1 !== k.indexOf("&") && (Sa.innerHTML = k, k = Bc ? Sa.textContent : Sa.innerText); k.replace && (k = k.replace(/[\r\n\u2028]/g, "")); g.push(k) } f._aFilterData = g; f._sFilterRow = g.join("  "); e = !0 } } return e
        } function Zb(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } }
    function $b(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function Rb(a) { var b = a.sTableId, c = a.aanFeatures.i, d = l("<div/>", { "class": a.oClasses.sInfo, id: c ? null : b + "_info" }); c || (a.aoDrawCallback.push({ fn: ac, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), l(a.nTable).attr("aria-describedby", b + "_info")); return d[0] } function ac(a) {
        var b = a.aanFeatures.i; if (0 !== b.length) {
            var c = a.oLanguage, d = a._iDisplayStart + 1, e = a.fnDisplayEnd(), h = a.fnRecordsTotal(),
            f = a.fnRecordsDisplay(), g = f ? c.sInfo : c.sInfoEmpty; f !== h && (g += " " + c.sInfoFiltered); g += c.sInfoPostFix; g = bc(a, g); c = c.fnInfoCallback; null !== c && (g = c.call(a.oInstance, a, d, e, h, f, g)); l(b).html(g)
        }
    } function bc(a, b) {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, h = a.fnRecordsDisplay(), f = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d /
            e))).replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(h / e)))
    } function Aa(a) {
        var b = a.iInitDisplayStart, c = a.aoColumns; var d = a.oFeatures; var e = a.bDeferLoading; if (a.bInitialised) {
            Mb(a); Jb(a); xa(a, a.aoHeader); xa(a, a.aoFooter); V(a, !0); d.bAutoWidth && db(a); var h = 0; for (d = c.length; h < d; h++) { var f = c[h]; f.sWidth && (f.nTh.style.width = K(f.sWidth)) } F(a, null, "preInit", [a]); ka(a); c = Q(a); if ("ssp" != c || e) "ajax" == c ? Qa(a, [], function (g) { var k = za(a, g); for (h = 0; h < k.length; h++)ia(a, k[h]); a.iInitDisplayStart = b; ka(a); V(a, !1); Ra(a, g) },
                a) : (V(a, !1), Ra(a))
        } else setTimeout(function () { Aa(a) }, 200)
    } function Ra(a, b) { a._bInitComplete = !0; (b || a.oInit.aaData) && sa(a); F(a, null, "plugin-init", [a, b]); F(a, "aoInitComplete", "init", [a, b]) } function pb(a, b) { b = parseInt(b, 10); a._iDisplayLength = b; qb(a); F(a, null, "length", [a, b]) } function Nb(a) {
        var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = Array.isArray(d[0]), h = e ? d[0] : d; d = e ? d[1] : d; e = l("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }); for (var f = 0, g = h.length; f < g; f++)e[0][f] = new Option("number" ===
            typeof d[f] ? a.fnFormatNumber(d[f]) : d[f], h[f]); var k = l("<div><label/></div>").addClass(b.sLength); a.aanFeatures.l || (k[0].id = c + "_length"); k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); l("select", k).val(a._iDisplayLength).on("change.DT", function (m) { pb(a, l(this).val()); ja(a) }); l(a.nTable).on("length.dt.DT", function (m, n, p) { a === n && l("select", k).val(p) }); return k[0]
    } function Sb(a) {
        var b = a.sPaginationType, c = u.ext.pager[b], d = "function" === typeof c, e = function (f) { ja(f) }; b = l("<div/>").addClass(a.oClasses.sPaging +
            b)[0]; var h = a.aanFeatures; d || c.fnInit(a, b, e); h.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function (f) { if (d) { var g = f._iDisplayStart, k = f._iDisplayLength, m = f.fnRecordsDisplay(), n = -1 === k; g = n ? 0 : Math.ceil(g / k); k = n ? 1 : Math.ceil(m / k); m = c(g, k); var p; n = 0; for (p = h.p.length; n < p; n++)lb(f, "pageButton")(f, h.p[n], n, m, g, k) } else c.fnUpdate(f, e) }, sName: "pagination" })); return b
    } function Ta(a, b, c) {
        var d = a._iDisplayStart, e = a._iDisplayLength, h = a.fnRecordsDisplay(); 0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b *
            e, d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : ea(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart = d; b && (F(a, null, "page", [a]), c && ja(a)); return b
    } function Pb(a) { return l("<div/>", { id: a.aanFeatures.r ? null : a.sTableId + "_processing", "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(a.nTable)[0] } function V(a,
        b) { a.oFeatures.bProcessing && l(a.aanFeatures.r).css("display", b ? "block" : "none"); F(a, null, "processing", [a, b]) } function Qb(a) {
            var b = l(a.nTable), c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, h = a.oClasses, f = b.children("caption"), g = f.length ? f[0]._captionSide : null, k = l(b[0].cloneNode(!1)), m = l(b[0].cloneNode(!1)), n = b.children("tfoot"); n.length || (n = null); k = l("<div/>", { "class": h.sScrollWrapper }).append(l("<div/>", { "class": h.sScrollHead }).css({
                overflow: "hidden", position: "relative", border: 0,
                width: d ? d ? K(d) : null : "100%"
            }).append(l("<div/>", { "class": h.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(k.removeAttr("id").css("margin-left", 0).append("top" === g ? f : null).append(b.children("thead"))))).append(l("<div/>", { "class": h.sScrollBody }).css({ position: "relative", overflow: "auto", width: d ? K(d) : null }).append(b)); n && k.append(l("<div/>", { "class": h.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? d ? K(d) : null : "100%" }).append(l("<div/>", { "class": h.sScrollFootInner }).append(m.removeAttr("id").css("margin-left",
                0).append("bottom" === g ? f : null).append(b.children("tfoot"))))); b = k.children(); var p = b[0]; h = b[1]; var t = n ? b[2] : null; if (d) l(h).on("scroll.DT", function (v) { v = this.scrollLeft; p.scrollLeft = v; n && (t.scrollLeft = v) }); l(h).css("max-height", e); c.bCollapse || l(h).css("height", e); a.nScrollHead = p; a.nScrollBody = h; a.nScrollFoot = t; a.aoDrawCallback.push({ fn: Ja, sName: "scrolling" }); return k[0]
        } function Ja(a) {
            var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY; b = b.iBarWidth; var h = l(a.nScrollHead), f = h[0].style, g = h.children("div"), k =
                g[0].style, m = g.children("table"); g = a.nScrollBody; var n = l(g), p = g.style, t = l(a.nScrollFoot).children("div"), v = t.children("table"), x = l(a.nTHead), w = l(a.nTable), r = w[0], C = r.style, G = a.nTFoot ? l(a.nTFoot) : null, ba = a.oBrowser, L = ba.bScrollOversize; U(a.aoColumns, "nTh"); var O = [], I = [], H = [], fa = [], Z, Ba = function (D) { D = D.style; D.paddingTop = "0"; D.paddingBottom = "0"; D.borderTopWidth = "0"; D.borderBottomWidth = "0"; D.height = 0 }; var X = g.scrollHeight > g.clientHeight; if (a.scrollBarVis !== X && a.scrollBarVis !== q) a.scrollBarVis = X, sa(a);
            else {
                a.scrollBarVis = X; w.children("thead, tfoot").remove(); if (G) { X = G.clone().prependTo(w); var ca = G.find("tr"); var Ca = X.find("tr"); X.find("[id]").removeAttr("id") } var Ua = x.clone().prependTo(w); x = x.find("tr"); X = Ua.find("tr"); Ua.find("th, td").removeAttr("tabindex"); Ua.find("[id]").removeAttr("id"); c || (p.width = "100%", h[0].style.width = "100%"); l.each(Pa(a, Ua), function (D, W) { Z = ta(a, D); W.style.width = a.aoColumns[Z].sWidth }); G && da(function (D) { D.style.width = "" }, Ca); h = w.outerWidth(); "" === c ? (C.width = "100%", L &&
                    (w.find("tbody").height() > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(w.outerWidth() - b)), h = w.outerWidth()) : "" !== d && (C.width = K(d), h = w.outerWidth()); da(Ba, X); da(function (D) { var W = y.getComputedStyle ? y.getComputedStyle(D).width : K(l(D).width()); H.push(D.innerHTML); O.push(W) }, X); da(function (D, W) { D.style.width = O[W] }, x); l(X).css("height", 0); G && (da(Ba, Ca), da(function (D) { fa.push(D.innerHTML); I.push(K(l(D).css("width"))) }, Ca), da(function (D, W) { D.style.width = I[W] }, ca), l(Ca).height(0)); da(function (D,
                        W) { D.innerHTML = '<div class="dataTables_sizing">' + H[W] + "</div>"; D.childNodes[0].style.height = "0"; D.childNodes[0].style.overflow = "hidden"; D.style.width = O[W] }, X); G && da(function (D, W) { D.innerHTML = '<div class="dataTables_sizing">' + fa[W] + "</div>"; D.childNodes[0].style.height = "0"; D.childNodes[0].style.overflow = "hidden"; D.style.width = I[W] }, Ca); Math.round(w.outerWidth()) < Math.round(h) ? (ca = g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y") ? h + b : h, L && (g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y")) &&
                            (C.width = K(ca - b)), "" !== c && "" === d || ea(a, 1, "Possible column misalignment", 6)) : ca = "100%"; p.width = K(ca); f.width = K(ca); G && (a.nScrollFoot.style.width = K(ca)); !e && L && (p.height = K(r.offsetHeight + b)); c = w.outerWidth(); m[0].style.width = K(c); k.width = K(c); d = w.height() > g.clientHeight || "scroll" == n.css("overflow-y"); e = "padding" + (ba.bScrollbarLeft ? "Left" : "Right"); k[e] = d ? b + "px" : "0px"; G && (v[0].style.width = K(c), t[0].style.width = K(c), t[0].style[e] = d ? b + "px" : "0px"); w.children("colgroup").insertBefore(w.children("thead"));
                n.trigger("scroll"); !a.bSorted && !a.bFiltered || a._drawHold || (g.scrollTop = 0)
            }
        } function da(a, b, c) { for (var d = 0, e = 0, h = b.length, f, g; e < h;) { f = b[e].firstChild; for (g = c ? c[e].firstChild : null; f;)1 === f.nodeType && (c ? a(f, g, d) : a(f, d), d++), f = f.nextSibling, g = c ? g.nextSibling : null; e++ } } function db(a) {
            var b = a.nTable, c = a.aoColumns, d = a.oScroll, e = d.sY, h = d.sX, f = d.sXInner, g = c.length, k = Ka(a, "bVisible"), m = l("th", a.nTHead), n = b.getAttribute("width"), p = b.parentNode, t = !1, v, x = a.oBrowser; d = x.bScrollOversize; (v = b.style.width) && -1 !==
                v.indexOf("%") && (n = v); for (v = 0; v < k.length; v++) { var w = c[k[v]]; null !== w.sWidth && (w.sWidth = cc(w.sWidthOrig, p), t = !0) } if (d || !t && !h && !e && g == na(a) && g == m.length) for (v = 0; v < g; v++)k = ta(a, v), null !== k && (c[k].sWidth = K(m.eq(v).width())); else {
                    g = l(b).clone().css("visibility", "hidden").removeAttr("id"); g.find("tbody tr").remove(); var r = l("<tr/>").appendTo(g.find("tbody")); g.find("thead, tfoot").remove(); g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone()); g.find("tfoot th, tfoot td").css("width", ""); m = Pa(a, g.find("thead")[0]);
                    for (v = 0; v < k.length; v++)w = c[k[v]], m[v].style.width = null !== w.sWidthOrig && "" !== w.sWidthOrig ? K(w.sWidthOrig) : "", w.sWidthOrig && h && l(m[v]).append(l("<div/>").css({ width: w.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (a.aoData.length) for (v = 0; v < k.length; v++)t = k[v], w = c[t], l(dc(a, t)).clone(!1).append(w.sContentPadding).appendTo(r); l("[name]", g).removeAttr("name"); w = l("<div/>").css(h || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(g).appendTo(p); h && f ? g.width(f) : h ?
                        (g.css("width", "auto"), g.removeAttr("width"), g.width() < p.clientWidth && n && g.width(p.clientWidth)) : e ? g.width(p.clientWidth) : n && g.width(n); for (v = e = 0; v < k.length; v++)p = l(m[v]), f = p.outerWidth() - p.width(), p = x.bBounding ? Math.ceil(m[v].getBoundingClientRect().width) : p.outerWidth(), e += p, c[k[v]].sWidth = K(p - f); b.style.width = K(e); w.remove()
                } n && (b.style.width = K(n)); !n && !h || a._reszEvt || (b = function () { l(y).on("resize.DT-" + a.sInstance, mb(function () { sa(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0)
        } function cc(a, b) {
            if (!a) return 0;
            a = l("<div/>").css("width", K(a)).appendTo(b || A.body); b = a[0].offsetWidth; a.remove(); return b
        } function dc(a, b) { var c = ec(a, b); if (0 > c) return null; var d = a.aoData[c]; return d.nTr ? d.anCells[b] : l("<td/>").html(T(a, c, b, "display"))[0] } function ec(a, b) { for (var c, d = -1, e = -1, h = 0, f = a.aoData.length; h < f; h++)c = T(a, h, b, "display") + "", c = c.replace(Cc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = h); return e } function K(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function oa(a) {
            var b =
                [], c = a.aoColumns; var d = a.aaSortingFixed; var e = l.isPlainObject(d); var h = []; var f = function (n) { n.length && !Array.isArray(n[0]) ? h.push(n) : l.merge(h, n) }; Array.isArray(d) && f(d); e && d.pre && f(d.pre); f(a.aaSorting); e && d.post && f(d.post); for (a = 0; a < h.length; a++) { var g = h[a][0]; f = c[g].aDataSort; d = 0; for (e = f.length; d < e; d++) { var k = f[d]; var m = c[k].sType || "string"; h[a]._idx === q && (h[a]._idx = l.inArray(h[a][1], c[k].asSorting)); b.push({ src: g, col: k, dir: h[a][1], index: h[a]._idx, type: m, formatter: u.ext.type.order[m + "-pre"] }) } } return b
        }
    function Lb(a) {
        var b, c = [], d = u.ext.type.order, e = a.aoData, h = 0, f = a.aiDisplayMaster; eb(a); var g = oa(a); var k = 0; for (b = g.length; k < b; k++) { var m = g[k]; m.formatter && h++; fc(a, m.col) } if ("ssp" != Q(a) && 0 !== g.length) {
            k = 0; for (b = f.length; k < b; k++)c[f[k]] = k; h === g.length ? f.sort(function (n, p) { var t, v = g.length, x = e[n]._aSortData, w = e[p]._aSortData; for (t = 0; t < v; t++) { var r = g[t]; var C = x[r.col]; var G = w[r.col]; C = C < G ? -1 : C > G ? 1 : 0; if (0 !== C) return "asc" === r.dir ? C : -C } C = c[n]; G = c[p]; return C < G ? -1 : C > G ? 1 : 0 }) : f.sort(function (n, p) {
                var t, v = g.length,
                x = e[n]._aSortData, w = e[p]._aSortData; for (t = 0; t < v; t++) { var r = g[t]; var C = x[r.col]; var G = w[r.col]; r = d[r.type + "-" + r.dir] || d["string-" + r.dir]; C = r(C, G); if (0 !== C) return C } C = c[n]; G = c[p]; return C < G ? -1 : C > G ? 1 : 0
            })
        } a.bSorted = !0
    } function gc(a) {
        var b = a.aoColumns, c = oa(a); a = a.oLanguage.oAria; for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d]; var f = h.asSorting; var g = h.ariaTitle || h.sTitle.replace(/<.*?>/g, ""); var k = h.nTh; k.removeAttribute("aria-sort"); h.bSortable && (0 < c.length && c[0].col == d ? (k.setAttribute("aria-sort", "asc" ==
                c[0].dir ? "ascending" : "descending"), h = f[c[0].index + 1] || f[0]) : h = f[0], g += "asc" === h ? a.sSortAscending : a.sSortDescending); k.setAttribute("aria-label", g)
        }
    } function rb(a, b, c, d) {
        var e = a.aaSorting, h = a.aoColumns[b].asSorting, f = function (g, k) { var m = g._idx; m === q && (m = l.inArray(g[1], h)); return m + 1 < h.length ? m + 1 : k ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = l.inArray(b, U(e, "0")), -1 !== c ? (b = f(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = h[b], e[c]._idx = b)) :
            (e.push([b, h[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = f(e[0]), e.length = 1, e[0][1] = h[b], e[0]._idx = b) : (e.length = 0, e.push([b, h[0]]), e[0]._idx = 0); ka(a); "function" == typeof d && d(a)
    } function kb(a, b, c, d) { var e = a.aoColumns[c]; sb(b, {}, function (h) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (V(a, !0), setTimeout(function () { rb(a, c, h.shiftKey, d); "ssp" !== Q(a) && V(a, !1) }, 0)) : rb(a, c, h.shiftKey, d)) }) } function Va(a) {
        var b = a.aLastSort, c = a.oClasses.sSortColumn, d = oa(a), e = a.oFeatures, h; if (e.bSort && e.bSortClasses) {
            e =
            0; for (h = b.length; e < h; e++) { var f = b[e].src; l(U(a.aoData, "anCells", f)).removeClass(c + (2 > e ? e + 1 : 3)) } e = 0; for (h = d.length; e < h; e++)f = d[e].src, l(U(a.aoData, "anCells", f)).addClass(c + (2 > e ? e + 1 : 3))
        } a.aLastSort = d
    } function fc(a, b) { var c = a.aoColumns[b], d = u.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, ua(a, b))); for (var h, f = u.ext.type.order[c.sType + "-pre"], g = 0, k = a.aoData.length; g < k; g++)if (c = a.aoData[g], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) h = d ? e[g] : T(a, g, b, "sort"), c._aSortData[b] = f ? f(h) : h }
    function Da(a) { if (!a._bLoadingState) { var b = { time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: l.extend(!0, [], a.aaSorting), search: Zb(a.oPreviousSearch), columns: l.map(a.aoColumns, function (c, d) { return { visible: c.bVisible, search: Zb(a.aoPreSearchCols[d]) } }) }; a.oSavedState = b; F(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oFeatures.bStateSave && !a.bDestroying && a.fnStateSaveCallback.call(a.oInstance, a, b) } } function hc(a, b, c) {
        if (a.oFeatures.bStateSave) return b = a.fnStateLoadCallback.call(a.oInstance,
            a, function (d) { tb(a, d, c) }), b !== q && tb(a, b, c), !0; c()
    } function tb(a, b, c) {
        var d, e = a.aoColumns; a._bLoadingState = !0; var h = a._bInitComplete ? new u.Api(a) : null; if (b && b.time) {
            var f = F(a, "aoStateLoadParams", "stateLoadParams", [a, b]); if (-1 !== l.inArray(!1, f)) a._bLoadingState = !1; else if (f = a.iStateDuration, 0 < f && b.time < +new Date - 1E3 * f) a._bLoadingState = !1; else if (b.columns && e.length !== b.columns.length) a._bLoadingState = !1; else {
                a.oLoadedState = l.extend(!0, {}, b); b.length !== q && (h ? h.page.len(b.length) : a._iDisplayLength = b.length);
                b.start !== q && (null === h ? (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start) : Ta(a, b.start / a._iDisplayLength)); b.order !== q && (a.aaSorting = [], l.each(b.order, function (k, m) { a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m) })); b.search !== q && l.extend(a.oPreviousSearch, $b(b.search)); if (b.columns) { f = 0; for (d = b.columns.length; f < d; f++) { var g = b.columns[f]; g.visible !== q && (h ? h.column(f).visible(g.visible, !1) : e[f].bVisible = g.visible); g.search !== q && l.extend(a.aoPreSearchCols[f], $b(g.search)) } h && h.columns.adjust() } a._bLoadingState =
                    !1; F(a, "aoStateLoaded", "stateLoaded", [a, b])
            }
        } else a._bLoadingState = !1; c()
    } function Wa(a) { var b = u.settings; a = l.inArray(a, U(b, "nTable")); return -1 !== a ? b[a] : null } function ea(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d); if (b) y.console && console.log && console.log(c); else if (b = u.ext, b = b.sErrMode || b.errMode, a && F(a, null, "error", [a, d, c]), "alert" == b) alert(c); else {
            if ("throw" == b) throw Error(c); "function" ==
                typeof b && b(a, d, c)
        }
    } function Y(a, b, c, d) { Array.isArray(c) ? l.each(c, function (e, h) { Array.isArray(h) ? Y(a, b, h[0], h[1]) : Y(a, b, h) }) : (d === q && (d = c), b[c] !== q && (a[d] = b[c])) } function ub(a, b, c) { var d; for (d in b) if (b.hasOwnProperty(d)) { var e = b[d]; l.isPlainObject(e) ? (l.isPlainObject(a[d]) || (a[d] = {}), l.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? a[d] = e.slice() : a[d] = e } return a } function sb(a, b, c) {
        l(a).on("click.DT", b, function (d) { l(a).trigger("blur"); c(d) }).on("keypress.DT", b, function (d) {
            13 === d.which &&
            (d.preventDefault(), c(d))
        }).on("selectstart.DT", function () { return !1 })
    } function R(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function F(a, b, c, d) { var e = []; b && (e = l.map(a[b].slice().reverse(), function (h, f) { return h.fn.apply(a.oInstance, d) })); null !== c && (b = l.Event(c + ".dt"), l(a.nTable).trigger(b, d), e.push(b.result)); return e } function qb(a) { var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b } function lb(a, b) {
        a = a.renderer; var c = u.ext.renderer[b];
        return l.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._
    } function Q(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function Ea(a, b) { var c = ic.numbers_length, d = Math.floor(c / 2); b <= c ? a = pa(0, b) : a <= d ? (a = pa(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = pa(b - (c - 2), b) : (a = pa(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0)); a.DT_el = "span"; return a } function bb(a) {
        l.each({
            num: function (b) { return Xa(b, a) }, "num-fmt": function (b) {
                return Xa(b,
                    a, vb)
            }, "html-num": function (b) { return Xa(b, a, Ya) }, "html-num-fmt": function (b) { return Xa(b, a, Ya, vb) }
        }, function (b, c) { M.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (M.type.search[b + a] = M.type.search.html) })
    } function jc(a, b, c, d, e) { return y.moment ? a[b](e) : y.luxon ? a[c](e) : d ? a[d](e) : a } function Za(a, b, c) {
        if (y.moment) { var d = y.moment.utc(a, b, c, !0); if (!d.isValid()) return null } else if (y.luxon) { d = b ? y.luxon.DateTime.fromFormat(a, b) : y.luxon.DateTime.fromISO(a); if (!d.isValid) return null; d.setLocale(c) } else b ? (kc ||
            alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"), kc = !0) : d = new Date(a); return d
    } function wb(a) {
        return function (b, c, d, e) {
            0 === arguments.length ? (d = "en", b = c = null) : 1 === arguments.length ? (d = "en", c = b, b = null) : 2 === arguments.length && (d = c, c = b, b = null); var h = "datetime-" + c; u.ext.type.order[h] || (u.ext.type.detect.unshift(function (f) { return f === h ? h : !1 }), u.ext.type.order[h + "-asc"] = function (f, g) { f = f.valueOf(); g = g.valueOf(); return f === g ? 0 : f < g ? -1 : 1 }, u.ext.type.order[h +
                "-desc"] = function (f, g) { f = f.valueOf(); g = g.valueOf(); return f === g ? 0 : f > g ? -1 : 1 }); return function (f, g) {
                    if (null === f || f === q) "--now" === e ? (f = new Date, f = new Date(Date.UTC(f.getFullYear(), f.getMonth(), f.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()))) : f = ""; if ("type" === g) return h; if ("" === f) return "sort" !== g ? "" : Za("0000-01-01 00:00:00", null, d); if (null !== c && b === c && "sort" !== g && "type" !== g && !(f instanceof Date)) return f; var k = Za(f, b, d); if (null === k) return f; if ("sort" === g) return k; f = null === c ? jc(k, "toDate", "toJSDate",
                        "")[a]() : jc(k, "format", "toFormat", "toISOString", c); return "display" === g ? $a(f) : f
                }
        }
    } function lc(a) { return function () { var b = [Wa(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return u.ext.internal[a].apply(this, b) } } var u = function (a, b) {
        if (this instanceof u) return l(a).DataTable(b); b = a; this.$ = function (f, g) { return this.api(!0).$(f, g) }; this._ = function (f, g) { return this.api(!0).rows(f, g).data() }; this.api = function (f) { return f ? new B(Wa(this[M.iApiIndex])) : new B(this) }; this.fnAddData = function (f,
            g) { var k = this.api(!0); f = Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0])) ? k.rows.add(f) : k.row.add(f); (g === q || g) && k.draw(); return f.flatten().toArray() }; this.fnAdjustColumnSizing = function (f) { var g = this.api(!0).columns.adjust(), k = g.settings()[0], m = k.oScroll; f === q || f ? g.draw(!1) : ("" !== m.sX || "" !== m.sY) && Ja(k) }; this.fnClearTable = function (f) { var g = this.api(!0).clear(); (f === q || f) && g.draw() }; this.fnClose = function (f) { this.api(!0).row(f).child.hide() }; this.fnDeleteRow = function (f, g, k) {
                var m = this.api(!0);
                f = m.rows(f); var n = f.settings()[0], p = n.aoData[f[0][0]]; f.remove(); g && g.call(this, n, p); (k === q || k) && m.draw(); return p
            }; this.fnDestroy = function (f) { this.api(!0).destroy(f) }; this.fnDraw = function (f) { this.api(!0).draw(f) }; this.fnFilter = function (f, g, k, m, n, p) { n = this.api(!0); null === g || g === q ? n.search(f, k, m, p) : n.column(g).search(f, k, m, p); n.draw() }; this.fnGetData = function (f, g) {
                var k = this.api(!0); if (f !== q) {
                    var m = f.nodeName ? f.nodeName.toLowerCase() : ""; return g !== q || "td" == m || "th" == m ? k.cell(f, g).data() : k.row(f).data() ||
                        null
                } return k.data().toArray()
            }; this.fnGetNodes = function (f) { var g = this.api(!0); return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray() }; this.fnGetPosition = function (f) { var g = this.api(!0), k = f.nodeName.toUpperCase(); return "TR" == k ? g.row(f).index() : "TD" == k || "TH" == k ? (f = g.cell(f).index(), [f.row, f.columnVisible, f.column]) : null }; this.fnIsOpen = function (f) { return this.api(!0).row(f).child.isShown() }; this.fnOpen = function (f, g, k) { return this.api(!0).row(f).child(g, k).show().child()[0] }; this.fnPageChange =
                function (f, g) { f = this.api(!0).page(f); (g === q || g) && f.draw(!1) }; this.fnSetColumnVis = function (f, g, k) { f = this.api(!0).column(f).visible(g); (k === q || k) && f.columns.adjust().draw() }; this.fnSettings = function () { return Wa(this[M.iApiIndex]) }; this.fnSort = function (f) { this.api(!0).order(f).draw() }; this.fnSortListener = function (f, g, k) { this.api(!0).order.listener(f, g, k) }; this.fnUpdate = function (f, g, k, m, n) {
                    var p = this.api(!0); k === q || null === k ? p.row(g).data(f) : p.cell(g, k).data(f); (n === q || n) && p.columns.adjust(); (m === q || m) &&
                        p.draw(); return 0
                }; this.fnVersionCheck = M.fnVersionCheck; var c = this, d = b === q, e = this.length; d && (b = {}); this.oApi = this.internal = M.internal; for (var h in u.ext.internal) h && (this[h] = lc(h)); this.each(function () {
                    var f = {}, g = 1 < e ? ub(f, b, !0) : b, k = 0, m; f = this.getAttribute("id"); var n = !1, p = u.defaults, t = l(this); if ("table" != this.nodeName.toLowerCase()) ea(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else {
                        Db(p); Eb(p.column); P(p, p, !0); P(p.column, p.column, !0); P(p, l.extend(g, t.data()), !0); var v = u.settings;
                        k = 0; for (m = v.length; k < m; k++) { var x = v[k]; if (x.nTable == this || x.nTHead && x.nTHead.parentNode == this || x.nTFoot && x.nTFoot.parentNode == this) { var w = g.bRetrieve !== q ? g.bRetrieve : p.bRetrieve; if (d || w) return x.oInstance; if (g.bDestroy !== q ? g.bDestroy : p.bDestroy) { x.oInstance.fnDestroy(); break } else { ea(x, 0, "Cannot reinitialise DataTable", 3); return } } if (x.sTableId == this.id) { v.splice(k, 1); break } } if (null === f || "" === f) this.id = f = "DataTables_Table_" + u.ext._unique++; var r = l.extend(!0, {}, u.models.oSettings, {
                            sDestroyWidth: t[0].style.width,
                            sInstance: f, sTableId: f
                        }); r.nTable = this; r.oApi = c.internal; r.oInit = g; v.push(r); r.oInstance = 1 === c.length ? c : t.dataTable(); Db(g); la(g.oLanguage); g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]); g = ub(l.extend(!0, {}, p), g); Y(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")); Y(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod",
                            "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]); Y(r.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); Y(r.oLanguage, g, "fnInfoCallback");
                        R(r, "aoDrawCallback", g.fnDrawCallback, "user"); R(r, "aoServerParams", g.fnServerParams, "user"); R(r, "aoStateSaveParams", g.fnStateSaveParams, "user"); R(r, "aoStateLoadParams", g.fnStateLoadParams, "user"); R(r, "aoStateLoaded", g.fnStateLoaded, "user"); R(r, "aoRowCallback", g.fnRowCallback, "user"); R(r, "aoRowCreatedCallback", g.fnCreatedRow, "user"); R(r, "aoHeaderCallback", g.fnHeaderCallback, "user"); R(r, "aoFooterCallback", g.fnFooterCallback, "user"); R(r, "aoInitComplete", g.fnInitComplete, "user"); R(r, "aoPreDrawCallback",
                            g.fnPreDrawCallback, "user"); r.rowIdFn = ma(g.rowId); Fb(r); var C = r.oClasses; l.extend(C, u.ext.classes, g.oClasses); t.addClass(C.sTable); r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart); null !== g.iDeferLoading && (r.bDeferLoading = !0, f = Array.isArray(g.iDeferLoading), r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading); var G = r.oLanguage; l.extend(!0, G, g.oLanguage); G.sUrl ? (l.ajax({
                                dataType: "json", url: G.sUrl,
                                success: function (I) { P(p.oLanguage, I); la(I); l.extend(!0, G, I, r.oInit.oLanguage); F(r, null, "i18n", [r]); Aa(r) }, error: function () { Aa(r) }
                            }), n = !0) : F(r, null, "i18n", [r]); null === g.asStripeClasses && (r.asStripeClasses = [C.sStripeOdd, C.sStripeEven]); f = r.asStripeClasses; var ba = t.children("tbody").find("tr").eq(0); -1 !== l.inArray(!0, l.map(f, function (I, H) { return ba.hasClass(I) })) && (l("tbody tr", this).removeClass(f.join(" ")), r.asDestroyStripes = f.slice()); f = []; v = this.getElementsByTagName("thead"); 0 !== v.length && (wa(r.aoHeader,
                                v[0]), f = Pa(r)); if (null === g.aoColumns) for (v = [], k = 0, m = f.length; k < m; k++)v.push(null); else v = g.aoColumns; k = 0; for (m = v.length; k < m; k++)cb(r, f ? f[k] : null); Hb(r, g.aoColumnDefs, v, function (I, H) { Ia(r, I, H) }); if (ba.length) {
                                    var L = function (I, H) { return null !== I.getAttribute("data-" + H) ? H : null }; l(ba[0]).children("th, td").each(function (I, H) {
                                        var fa = r.aoColumns[I]; if (fa.mData === I) {
                                            var Z = L(H, "sort") || L(H, "order"); H = L(H, "filter") || L(H, "search"); if (null !== Z || null !== H) fa.mData = {
                                                _: I + ".display", sort: null !== Z ? I + ".@data-" + Z : q,
                                                type: null !== Z ? I + ".@data-" + Z : q, filter: null !== H ? I + ".@data-" + H : q
                                            }, Ia(r, I)
                                        }
                                    })
                                } var O = r.oFeatures; f = function () {
                                    if (g.aaSorting === q) { var I = r.aaSorting; k = 0; for (m = I.length; k < m; k++)I[k][1] = r.aoColumns[k].asSorting[0] } Va(r); O.bSort && R(r, "aoDrawCallback", function () { if (r.bSorted) { var Z = oa(r), Ba = {}; l.each(Z, function (X, ca) { Ba[ca.src] = ca.dir }); F(r, null, "order", [r, Z, Ba]); gc(r) } }); R(r, "aoDrawCallback", function () { (r.bSorted || "ssp" === Q(r) || O.bDeferRender) && Va(r) }, "sc"); I = t.children("caption").each(function () {
                                        this._captionSide =
                                        l(this).css("caption-side")
                                    }); var H = t.children("thead"); 0 === H.length && (H = l("<thead/>").appendTo(t)); r.nTHead = H[0]; var fa = t.children("tbody"); 0 === fa.length && (fa = l("<tbody/>").insertAfter(H)); r.nTBody = fa[0]; H = t.children("tfoot"); 0 === H.length && 0 < I.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (H = l("<tfoot/>").appendTo(t)); 0 === H.length || 0 === H.children().length ? t.addClass(C.sNoFooter) : 0 < H.length && (r.nTFoot = H[0], wa(r.aoFooter, r.nTFoot)); if (g.aaData) for (k = 0; k < g.aaData.length; k++)ia(r, g.aaData[k]); else (r.bDeferLoading ||
                                        "dom" == Q(r)) && La(r, l(r.nTBody).children("tr")); r.aiDisplay = r.aiDisplayMaster.slice(); r.bInitialised = !0; !1 === n && Aa(r)
                                }; R(r, "aoDrawCallback", Da, "state_save"); g.bStateSave ? (O.bStateSave = !0, hc(r, g, f)) : f()
                    }
                }); c = null; return this
    }, M, z, J, xb = {}, mc = /[\r\n\u2028]/g, Ya = /<.*?>/g, Dc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, Ec = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g, vb = /['\u00A0,$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfkÉƒÎž]/gi, aa = function (a) {
        return a && !0 !== a && "-" !==
            a ? !1 : !0
    }, nc = function (a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null }, oc = function (a, b) { xb[b] || (xb[b] = new RegExp(ob(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(xb[b], ".") : a }, yb = function (a, b, c) { var d = "string" === typeof a; if (aa(a)) return !0; b && d && (a = oc(a, b)); c && d && (a = a.replace(vb, "")); return !isNaN(parseFloat(a)) && isFinite(a) }, pc = function (a, b, c) { return aa(a) ? !0 : aa(a) || "string" === typeof a ? yb(a.replace(Ya, ""), b, c) ? !0 : null : null }, U = function (a, b, c) {
        var d = [], e = 0, h = a.length;
        if (c !== q) for (; e < h; e++)a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e < h; e++)a[e] && d.push(a[e][b]); return d
    }, Fa = function (a, b, c, d) { var e = [], h = 0, f = b.length; if (d !== q) for (; h < f; h++)a[b[h]][c] && e.push(a[b[h]][c][d]); else for (; h < f; h++)e.push(a[b[h]][c]); return e }, pa = function (a, b) { var c = []; if (b === q) { b = 0; var d = a } else d = b, b = a; for (a = b; a < d; a++)c.push(a); return c }, qc = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)a[c] && b.push(a[c]); return b }, Oa = function (a) {
        a: {
            if (!(2 > a.length)) {
                var b = a.slice().sort(); for (var c = b[0],
                    d = 1, e = b.length; d < e; d++) { if (b[d] === c) { b = !1; break a } c = b[d] }
            } b = !0
        } if (b) return a.slice(); b = []; e = a.length; var h, f = 0; d = 0; a: for (; d < e; d++) { c = a[d]; for (h = 0; h < f; h++)if (b[h] === c) continue a; b.push(c); f++ } return b
    }, rc = function (a, b) { if (Array.isArray(b)) for (var c = 0; c < b.length; c++)rc(a, b[c]); else a.push(b); return a }, sc = function (a, b) { b === q && (b = 0); return -1 !== this.indexOf(a, b) }; Array.isArray || (Array.isArray = function (a) { return "[object Array]" === Object.prototype.toString.call(a) }); Array.prototype.includes || (Array.prototype.includes =
        sc); String.prototype.trim || (String.prototype.trim = function () { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }); String.prototype.includes || (String.prototype.includes = sc); u.util = {
            throttle: function (a, b) { var c = b !== q ? b : 200, d, e; return function () { var h = this, f = +new Date, g = arguments; d && f < d + c ? (clearTimeout(e), e = setTimeout(function () { d = q; a.apply(h, g) }, c)) : (d = f, a.apply(h, g)) } }, escapeRegex: function (a) { return a.replace(Ec, "\\$1") }, set: function (a) {
                if (l.isPlainObject(a)) return u.util.set(a._); if (null ===
                    a) return function () { }; if ("function" === typeof a) return function (c, d, e) { a(c, "set", d, e) }; if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (c, d) { c[a] = d }; var b = function (c, d, e) {
                        e = hb(e); var h = e[e.length - 1]; for (var f, g, k = 0, m = e.length - 1; k < m; k++) {
                            if ("__proto__" === e[k] || "constructor" === e[k]) throw Error("Cannot set prototype values"); f = e[k].match(Ga); g = e[k].match(qa); if (f) {
                                e[k] = e[k].replace(Ga, ""); c[e[k]] = []; h = e.slice(); h.splice(0, k + 1); f = h.join("."); if (Array.isArray(d)) for (g =
                                    0, m = d.length; g < m; g++)h = {}, b(h, d[g], f), c[e[k]].push(h); else c[e[k]] = d; return
                            } g && (e[k] = e[k].replace(qa, ""), c = c[e[k]](d)); if (null === c[e[k]] || c[e[k]] === q) c[e[k]] = {}; c = c[e[k]]
                        } if (h.match(qa)) c[h.replace(qa, "")](d); else c[h.replace(Ga, "")] = d
                    }; return function (c, d) { return b(c, d, a) }
            }, get: function (a) {
                if (l.isPlainObject(a)) { var b = {}; l.each(a, function (d, e) { e && (b[d] = u.util.get(e)) }); return function (d, e, h, f) { var g = b[e] || b._; return g !== q ? g(d, e, h, f) : d } } if (null === a) return function (d) { return d }; if ("function" === typeof a) return function (d,
                    e, h, f) { return a(d, e, h, f) }; if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (d, e) { return d[a] }; var c = function (d, e, h) {
                        if ("" !== h) {
                            var f = hb(h); for (var g = 0, k = f.length; g < k; g++) {
                                h = f[g].match(Ga); var m = f[g].match(qa); if (h) { f[g] = f[g].replace(Ga, ""); "" !== f[g] && (d = d[f[g]]); m = []; f.splice(0, g + 1); f = f.join("."); if (Array.isArray(d)) for (g = 0, k = d.length; g < k; g++)m.push(c(d[g], e, f)); d = h[0].substring(1, h[0].length - 1); d = "" === d ? m : m.join(d); break } else if (m) {
                                    f[g] = f[g].replace(qa,
                                        ""); d = d[f[g]](); continue
                                } if (null === d || d[f[g]] === q) return q; d = d[f[g]]
                            }
                        } return d
                    }; return function (d, e) { return c(d, e, a) }
            }
        }; var S = function (a, b, c) { a[b] !== q && (a[c] = a[b]) }, Ga = /\[.*?\]$/, qa = /\(\)$/, ma = u.util.get, ha = u.util.set, ob = u.util.escapeRegex, Sa = l("<div>")[0], Bc = Sa.textContent !== q, Cc = /<.*?>/g, mb = u.util.throttle, tc = [], N = Array.prototype, Fc = function (a) {
            var b, c = u.settings, d = l.map(c, function (h, f) { return h.nTable }); if (a) {
                if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                    var e =
                        l.inArray(a, d); return -1 !== e ? [c[e]] : null
                } if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? b = l(a) : a instanceof l && (b = a)
            } else return []; if (b) return b.map(function (h) { e = l.inArray(this, d); return -1 !== e ? c[e] : null }).toArray()
        }; var B = function (a, b) {
            if (!(this instanceof B)) return new B(a, b); var c = [], d = function (f) { (f = Fc(f)) && c.push.apply(c, f) }; if (Array.isArray(a)) for (var e = 0, h = a.length; e < h; e++)d(a[e]); else d(a); this.context = Oa(c); b && l.merge(this, b); this.selector = {
                rows: null,
                cols: null, opts: null
            }; B.extend(this, this, tc)
        }; u.Api = B; l.extend(B.prototype, {
            any: function () { return 0 !== this.count() }, concat: N.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++)a.call(this, this[b], b, this); return this }, eq: function (a) { var b = this.context; return b.length > a ? new B(b[a], this[a]) : null }, filter: function (a) {
                var b = []; if (N.filter) b = N.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)a.call(this, this[c], c, this) && b.push(this[c]);
                return new B(this.context, b)
            }, flatten: function () { var a = []; return new B(this.context, a.concat.apply(a, this.toArray())) }, join: N.join, indexOf: N.indexOf || function (a, b) { b = b || 0; for (var c = this.length; b < c; b++)if (this[b] === a) return b; return -1 }, iterator: function (a, b, c, d) {
                var e = [], h, f, g = this.context, k, m = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); var n = 0; for (h = g.length; n < h; n++) {
                    var p = new B(g[n]); if ("table" === b) { var t = c.call(p, g[n], n); t !== q && e.push(t) } else if ("columns" === b || "rows" === b) t = c.call(p, g[n],
                        this[n], n), t !== q && e.push(t); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { var v = this[n]; "column-rows" === b && (k = ab(g[n], m.opts)); var x = 0; for (f = v.length; x < f; x++)t = v[x], t = "cell" === b ? c.call(p, g[n], t.row, t.column, n, x) : c.call(p, g[n], t, n, x, k), t !== q && e.push(t) }
                } return e.length || d ? (a = new B(g, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = m.rows, b.cols = m.cols, b.opts = m.opts, a) : this
            }, lastIndexOf: N.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0,
            map: function (a) { var b = []; if (N.map) b = N.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++)b.push(a.call(this, this[c], c)); return new B(this.context, b) }, pluck: function (a) { var b = u.util.get(a); return this.map(function (c) { return b(c) }) }, pop: N.pop, push: N.push, reduce: N.reduce || function (a, b) { return Gb(this, a, b, 0, this.length, 1) }, reduceRight: N.reduceRight || function (a, b) { return Gb(this, a, b, this.length - 1, -1, -1) }, reverse: N.reverse, selector: null, shift: N.shift, slice: function () {
                return new B(this.context,
                    this)
            }, sort: N.sort, splice: N.splice, toArray: function () { return N.slice.call(this) }, to$: function () { return l(this) }, toJQuery: function () { return l(this) }, unique: function () { return new B(this.context, Oa(this)) }, unshift: N.unshift
        }); B.extend = function (a, b, c) {
            if (c.length && b && (b instanceof B || b.__dt_wrapper)) {
                var d, e = function (g, k, m) { return function () { var n = k.apply(g, arguments); B.extend(n, n, m.methodExt); return n } }; var h = 0; for (d = c.length; h < d; h++) {
                    var f = c[h]; b[f.name] = "function" === f.type ? e(a, f.val, f) : "object" ===
                        f.type ? {} : f.val; b[f.name].__dt_wrapper = !0; B.extend(a, b[f.name], f.propExt)
                }
            }
        }; B.register = z = function (a, b) {
            if (Array.isArray(a)) for (var c = 0, d = a.length; c < d; c++)B.register(a[c], b); else {
                d = a.split("."); var e = tc, h; a = 0; for (c = d.length; a < c; a++) {
                    var f = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a]; a: { var g = 0; for (var k = e.length; g < k; g++)if (e[g].name === f) { g = e[g]; break a } g = null } g || (g = { name: f, val: {}, methodExt: [], propExt: [], type: "object" }, e.push(g)); a === c - 1 ? (g.val = b, g.type = "function" === typeof b ? "function" : l.isPlainObject(b) ?
                        "object" : "other") : e = h ? g.methodExt : g.propExt
                }
            }
        }; B.registerPlural = J = function (a, b, c) { B.register(a, c); B.register(b, function () { var d = c.apply(this, arguments); return d === this ? this : d instanceof B ? d.length ? Array.isArray(d[0]) ? new B(d.context, d[0]) : d[0] : q : d }) }; var uc = function (a, b) { if (Array.isArray(a)) return l.map(a, function (d) { return uc(d, b) }); if ("number" === typeof a) return [b[a]]; var c = l.map(b, function (d, e) { return d.nTable }); return l(c).filter(a).map(function (d) { d = l.inArray(this, c); return b[d] }).toArray() };
    z("tables()", function (a) { return a !== q && null !== a ? new B(uc(a, this.context)) : this }); z("table()", function (a) { a = this.tables(a); var b = a.context; return b.length ? new B(b[0]) : a }); J("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); J("tables().body()", "table().body()", function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); J("tables().header()", "table().header()", function () {
        return this.iterator("table", function (a) { return a.nTHead },
            1)
    }); J("tables().footer()", "table().footer()", function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); J("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); z("draw()", function (a) { return this.iterator("table", function (b) { "page" === a ? ja(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ka(b, !1 === a)) }) }); z("page()", function (a) { return a === q ? this.page.info().page : this.iterator("table", function (b) { Ta(b, a) }) }); z("page.info()",
        function (a) { if (0 === this.context.length) return q; a = this.context[0]; var b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === Q(a) } }); z("page.len()", function (a) { return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function (b) { pb(b, a) }) }); var vc = function (a, b,
            c) { if (c) { var d = new B(a); d.one("draw", function () { c(d.ajax.json()) }) } if ("ssp" == Q(a)) ka(a, b); else { V(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); Qa(a, [], function (h) { Ma(a); h = za(a, h); for (var f = 0, g = h.length; f < g; f++)ia(a, h[f]); ka(a, b); V(a, !1) }) } }; z("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); z("ajax.params()", function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); z("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { vc(c, !1 === b, a) }) });
    z("ajax.url()", function (a) { var b = this.context; if (a === q) { if (0 === b.length) return q; b = b[0]; return b.ajax ? l.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function (c) { l.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a }) }); z("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { vc(c, !1 === b, a) }) }); var zb = function (a, b, c, d, e) {
        var h = [], f, g, k; var m = typeof b; b && "string" !== m && "function" !== m && b.length !== q || (b = [b]); m = 0; for (g = b.length; m < g; m++) {
            var n = b[m] && b[m].split &&
                !b[m].match(/[\[\(:]/) ? b[m].split(",") : [b[m]]; var p = 0; for (k = n.length; p < k; p++)(f = c("string" === typeof n[p] ? n[p].trim() : n[p])) && f.length && (h = h.concat(f))
        } a = M.selector[a]; if (a.length) for (m = 0, g = a.length; m < g; m++)h = a[m](d, e, h); return Oa(h)
    }, Ab = function (a) { a || (a = {}); a.filter && a.search === q && (a.search = a.filter); return l.extend({ search: "none", order: "current", page: "all" }, a) }, Bb = function (a) {
        for (var b = 0, c = a.length; b < c; b++)if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length =
            0; return a
    }, ab = function (a, b) {
        var c = [], d = a.aiDisplay; var e = a.aiDisplayMaster; var h = b.search; var f = b.order; b = b.page; if ("ssp" == Q(a)) return "removed" === h ? [] : pa(0, e.length); if ("current" == b) for (f = a._iDisplayStart, a = a.fnDisplayEnd(); f < a; f++)c.push(d[f]); else if ("current" == f || "applied" == f) if ("none" == h) c = e.slice(); else if ("applied" == h) c = d.slice(); else { if ("removed" == h) { var g = {}; f = 0; for (a = d.length; f < a; f++)g[d[f]] = null; c = l.map(e, function (k) { return g.hasOwnProperty(k) ? null : k }) } } else if ("index" == f || "original" ==
            f) for (f = 0, a = a.aoData.length; f < a; f++)"none" == h ? c.push(f) : (e = l.inArray(f, d), (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(f)); return c
    }, Gc = function (a, b, c) {
        var d; return zb("row", b, function (e) {
            var h = nc(e), f = a.aoData; if (null !== h && !c) return [h]; d || (d = ab(a, c)); if (null !== h && -1 !== l.inArray(h, d)) return [h]; if (null === e || e === q || "" === e) return d; if ("function" === typeof e) return l.map(d, function (k) { var m = f[k]; return e(k, m._aData, m.nTr) ? k : null }); if (e.nodeName) {
                h = e._DT_RowIndex; var g = e._DT_CellIndex; if (h !== q) return f[h] &&
                    f[h].nTr === e ? [h] : []; if (g) return f[g.row] && f[g.row].nTr === e.parentNode ? [g.row] : []; h = l(e).closest("*[data-dt-row]"); return h.length ? [h.data("dt-row")] : []
            } if ("string" === typeof e && "#" === e.charAt(0) && (h = a.aIds[e.replace(/^#/, "")], h !== q)) return [h.idx]; h = qc(Fa(a.aoData, d, "nTr")); return l(h).filter(e).map(function () { return this._DT_RowIndex }).toArray()
        }, a, c)
    }; z("rows()", function (a, b) {
        a === q ? a = "" : l.isPlainObject(a) && (b = a, a = ""); b = Ab(b); var c = this.iterator("table", function (d) { return Gc(d, a, b) }, 1); c.selector.rows =
            a; c.selector.opts = b; return c
    }); z("rows().nodes()", function () { return this.iterator("row", function (a, b) { return a.aoData[b].nTr || q }, 1) }); z("rows().data()", function () { return this.iterator(!0, "rows", function (a, b) { return Fa(a.aoData, b, "_aData") }, 1) }); J("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { b = b.aoData[c]; return "search" === a ? b._aFilterData : b._aSortData }, 1) }); J("rows().invalidate()", "row().invalidate()", function (a) {
        return this.iterator("row", function (b, c) {
            va(b,
                c, a)
        })
    }); J("rows().indexes()", "row().index()", function () { return this.iterator("row", function (a, b) { return b }, 1) }); J("rows().ids()", "row().id()", function (a) { for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)for (var h = 0, f = this[d].length; h < f; h++) { var g = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData); b.push((!0 === a ? "#" : "") + g) } return new B(c, b) }); J("rows().remove()", "row().remove()", function () {
        var a = this; this.iterator("row", function (b, c, d) {
            var e = b.aoData, h = e[c], f, g; e.splice(c, 1); var k = 0; for (f = e.length; k <
                f; k++) { var m = e[k]; var n = m.anCells; null !== m.nTr && (m.nTr._DT_RowIndex = k); if (null !== n) for (m = 0, g = n.length; m < g; m++)n[m]._DT_CellIndex.row = k } Na(b.aiDisplayMaster, c); Na(b.aiDisplay, c); Na(a[d], c, !1); 0 < b._iRecordsDisplay && b._iRecordsDisplay--; qb(b); c = b.rowIdFn(h._aData); c !== q && delete b.aIds[c]
        }); this.iterator("table", function (b) { for (var c = 0, d = b.aoData.length; c < d; c++)b.aoData[c].idx = c }); return this
    }); z("rows.add()", function (a) {
        var b = this.iterator("table", function (d) {
            var e, h = []; var f = 0; for (e = a.length; f < e; f++) {
                var g =
                    a[f]; g.nodeName && "TR" === g.nodeName.toUpperCase() ? h.push(La(d, g)[0]) : h.push(ia(d, g))
            } return h
        }, 1), c = this.rows(-1); c.pop(); l.merge(c, b); return c
    }); z("row()", function (a, b) { return Bb(this.rows(a, b)) }); z("row().data()", function (a) { var b = this.context; if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q; var c = b[0].aoData[this[0]]; c._aData = a; Array.isArray(a) && c.nTr && c.nTr.id && ha(b[0].rowId)(a, c.nTr.id); va(b[0], this[0], "data"); return this }); z("row().node()", function () {
        var a = this.context; return a.length &&
            this.length ? a[0].aoData[this[0]].nTr || null : null
    }); z("row.add()", function (a) { a instanceof l && a.length && (a = a[0]); var b = this.iterator("table", function (c) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? La(c, a)[0] : ia(c, a) }); return this.row(b[0]) }); l(A).on("plugin-init.dt", function (a, b) {
        a = new B(b); a.on("stateSaveParams", function (d, e, h) { d = e.rowIdFn; e = e.aoData; for (var f = [], g = 0; g < e.length; g++)e[g]._detailsShow && f.push("#" + d(e[g]._aData)); h.childRows = f }); var c = a.state.loaded(); c && c.childRows && a.rows(l.map(c.childRows,
            function (d) { return d.replace(/:/g, "\\:") })).every(function () { F(b, null, "requestChild", [this]) })
    }); var Hc = function (a, b, c, d) { var e = [], h = function (f, g) { if (Array.isArray(f) || f instanceof l) for (var k = 0, m = f.length; k < m; k++)h(f[k], g); else f.nodeName && "tr" === f.nodeName.toLowerCase() ? e.push(f) : (k = l("<tr><td></td></tr>").addClass(g), l("td", k).addClass(g).html(f)[0].colSpan = na(a), e.push(k[0])) }; h(c, d); b._details && b._details.detach(); b._details = l(e); b._detailsShow && b._details.insertAfter(b.nTr) }, wc = u.util.throttle(function (a) { Da(a[0]) },
        500), Cb = function (a, b) { var c = a.context; c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = q, a._details = q, l(a.nTr).removeClass("dt-hasChild"), wc(c)) }, xc = function (a, b) { var c = a.context; if (c.length && a.length) { var d = c[0].aoData[a[0]]; d._details && ((d._detailsShow = b) ? (d._details.insertAfter(d.nTr), l(d.nTr).addClass("dt-hasChild")) : (d._details.detach(), l(d.nTr).removeClass("dt-hasChild")), F(c[0], null, "childRow", [b, a.row(a[0])]), Ic(c[0]), wc(c)) } }, Ic = function (a) {
            var b = new B(a),
            c = a.aoData; b.off("draw.dt.DT_details column-sizing.dt.DT_details destroy.dt.DT_details"); 0 < U(c, "_details").length && (b.on("draw.dt.DT_details", function (d, e) { a === e && b.rows({ page: "current" }).eq(0).each(function (h) { h = c[h]; h._detailsShow && h._details.insertAfter(h.nTr) }) }), b.on("column-sizing.dt.DT_details", function (d, e, h, f) { if (a === e) for (e = na(e), h = 0, f = c.length; h < f; h++)d = c[h], d._details && d._details.children("td[colspan]").attr("colspan", e) }), b.on("destroy.dt.DT_details", function (d, e) {
                if (a === e) for (d = 0, e =
                    c.length; d < e; d++)c[d]._details && Cb(b, d)
            }))
        }; z("row().child()", function (a, b) { var c = this.context; if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details : q; !0 === a ? this.child.show() : !1 === a ? Cb(this) : c.length && this.length && Hc(c[0], c[0].aoData[this[0]], a, b); return this }); z(["row().child.show()", "row().child().show()"], function (a) { xc(this, !0); return this }); z(["row().child.hide()", "row().child().hide()"], function () { xc(this, !1); return this }); z(["row().child.remove()", "row().child().remove()"], function () {
            Cb(this);
            return this
        }); z("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var Jc = /^([^:]+):(name|visIdx|visible)$/, yc = function (a, b, c, d, e) { c = []; d = 0; for (var h = e.length; d < h; d++)c.push(T(a, e[d], b)); return c }, Kc = function (a, b, c) {
            var d = a.aoColumns, e = U(d, "sName"), h = U(d, "nTh"); return zb("column", b, function (f) {
                var g = nc(f); if ("" === f) return pa(d.length); if (null !== g) return [0 <= g ? g : d.length + g]; if ("function" === typeof f) {
                    var k = ab(a, c); return l.map(d,
                        function (p, t) { return f(t, yc(a, t, 0, 0, k), h[t]) ? t : null })
                } var m = "string" === typeof f ? f.match(Jc) : ""; if (m) switch (m[2]) { case "visIdx": case "visible": g = parseInt(m[1], 10); if (0 > g) { var n = l.map(d, function (p, t) { return p.bVisible ? t : null }); return [n[n.length + g]] } return [ta(a, g)]; case "name": return l.map(e, function (p, t) { return p === m[1] ? t : null }); default: return [] }if (f.nodeName && f._DT_CellIndex) return [f._DT_CellIndex.column]; g = l(h).filter(f).map(function () { return l.inArray(this, h) }).toArray(); if (g.length || !f.nodeName) return g;
                g = l(f).closest("*[data-dt-column]"); return g.length ? [g.data("dt-column")] : []
            }, a, c)
        }; z("columns()", function (a, b) { a === q ? a = "" : l.isPlainObject(a) && (b = a, a = ""); b = Ab(b); var c = this.iterator("table", function (d) { return Kc(d, a, b) }, 1); c.selector.cols = a; c.selector.opts = b; return c }); J("columns().header()", "column().header()", function (a, b) { return this.iterator("column", function (c, d) { return c.aoColumns[d].nTh }, 1) }); J("columns().footer()", "column().footer()", function (a, b) {
            return this.iterator("column", function (c,
                d) { return c.aoColumns[d].nTf }, 1)
        }); J("columns().data()", "column().data()", function () { return this.iterator("column-rows", yc, 1) }); J("columns().dataSrc()", "column().dataSrc()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].mData }, 1) }); J("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, h) { return Fa(b.aoData, h, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); J("columns().nodes()", "column().nodes()", function () {
            return this.iterator("column-rows",
                function (a, b, c, d, e) { return Fa(a.aoData, e, "anCells", b) }, 1)
        }); J("columns().visible()", "column().visible()", function (a, b) {
            var c = this, d = this.iterator("column", function (e, h) { if (a === q) return e.aoColumns[h].bVisible; var f = e.aoColumns, g = f[h], k = e.aoData, m; if (a !== q && g.bVisible !== a) { if (a) { var n = l.inArray(!0, U(f, "bVisible"), h + 1); f = 0; for (m = k.length; f < m; f++) { var p = k[f].nTr; e = k[f].anCells; p && p.insertBefore(e[h], e[n] || null) } } else l(U(e.aoData, "anCells", h)).detach(); g.bVisible = a } }); a !== q && this.iterator("table", function (e) {
                xa(e,
                    e.aoHeader); xa(e, e.aoFooter); e.aiDisplay.length || l(e.nTBody).find("td[colspan]").attr("colspan", na(e)); Da(e); c.iterator("column", function (h, f) { F(h, null, "column-visibility", [h, f, a, b]) }); (b === q || b) && c.columns.adjust()
            }); return d
        }); J("columns().indexes()", "column().index()", function (a) { return this.iterator("column", function (b, c) { return "visible" === a ? ua(b, c) : c }, 1) }); z("columns.adjust()", function () { return this.iterator("table", function (a) { sa(a) }, 1) }); z("column.index()", function (a, b) {
            if (0 !== this.context.length) {
                var c =
                    this.context[0]; if ("fromVisible" === a || "toData" === a) return ta(c, b); if ("fromData" === a || "toVisible" === a) return ua(c, b)
            }
        }); z("column()", function (a, b) { return Bb(this.columns(a, b)) }); var Lc = function (a, b, c) {
            var d = a.aoData, e = ab(a, c), h = qc(Fa(d, e, "anCells")), f = l(rc([], h)), g, k = a.aoColumns.length, m, n, p, t, v, x; return zb("cell", b, function (w) {
                var r = "function" === typeof w; if (null === w || w === q || r) {
                    m = []; n = 0; for (p = e.length; n < p; n++)for (g = e[n], t = 0; t < k; t++)v = { row: g, column: t }, r ? (x = d[g], w(v, T(a, g, t), x.anCells ? x.anCells[t] : null) &&
                        m.push(v)) : m.push(v); return m
                } if (l.isPlainObject(w)) return w.column !== q && w.row !== q && -1 !== l.inArray(w.row, e) ? [w] : []; r = f.filter(w).map(function (C, G) { return { row: G._DT_CellIndex.row, column: G._DT_CellIndex.column } }).toArray(); if (r.length || !w.nodeName) return r; x = l(w).closest("*[data-dt-row]"); return x.length ? [{ row: x.data("dt-row"), column: x.data("dt-column") }] : []
            }, a, c)
        }; z("cells()", function (a, b, c) {
            l.isPlainObject(a) && (a.row === q ? (c = a, a = null) : (c = b, b = null)); l.isPlainObject(b) && (c = b, b = null); if (null === b || b ===
                q) return this.iterator("table", function (n) { return Lc(n, a, Ab(c)) }); var d = c ? { page: c.page, order: c.order, search: c.search } : {}, e = this.columns(b, d), h = this.rows(a, d), f, g, k, m; d = this.iterator("table", function (n, p) { n = []; f = 0; for (g = h[p].length; f < g; f++)for (k = 0, m = e[p].length; k < m; k++)n.push({ row: h[p][f], column: e[p][k] }); return n }, 1); d = c && c.selected ? this.cells(d, c) : d; l.extend(d.selector, { cols: b, rows: a, opts: c }); return d
        }); J("cells().nodes()", "cell().node()", function () {
            return this.iterator("cell", function (a, b, c) {
                return (a =
                    a.aoData[b]) && a.anCells ? a.anCells[c] : q
            }, 1)
        }); z("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return T(a, b, c) }, 1) }); J("cells().cache()", "cell().cache()", function (a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1) }); J("cells().render()", "cell().render()", function (a) { return this.iterator("cell", function (b, c, d) { return T(b, c, d, a) }, 1) }); J("cells().indexes()", "cell().index()", function () {
            return this.iterator("cell",
                function (a, b, c) { return { row: b, column: c, columnVisible: ua(a, c) } }, 1)
        }); J("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { va(b, c, a, d) }) }); z("cell()", function (a, b, c) { return Bb(this.cells(a, b, c)) }); z("cell().data()", function (a) { var b = this.context, c = this[0]; if (a === q) return b.length && c.length ? T(b[0], c[0].row, c[0].column) : q; Ib(b[0], c[0].row, c[0].column, a); va(b[0], c[0].row, "data", c[0].column); return this }); z("order()", function (a, b) {
            var c = this.context; if (a ===
                q) return 0 !== c.length ? c[0].aaSorting : q; "number" === typeof a ? a = [[a, b]] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (d) { d.aaSorting = a.slice() })
        }); z("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { kb(d, a, b, c) }) }); z("order.fixed()", function (a) { if (!a) { var b = this.context; b = b.length ? b[0].aaSortingFixed : q; return Array.isArray(b) ? { pre: b } : b } return this.iterator("table", function (c) { c.aaSortingFixed = l.extend(!0, {}, a) }) });
    z(["columns().order()", "column().order()"], function (a) { var b = this; return this.iterator("table", function (c, d) { var e = []; l.each(b[d], function (h, f) { e.push([f, a]) }); c.aaSorting = e }) }); z("search()", function (a, b, c, d) { var e = this.context; return a === q ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : q : this.iterator("table", function (h) { h.oFeatures.bFilter && ya(h, l.extend({}, h.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) }) }); J("columns().search()", "column().search()",
        function (a, b, c, d) { return this.iterator("column", function (e, h) { var f = e.aoPreSearchCols; if (a === q) return f[h].sSearch; e.oFeatures.bFilter && (l.extend(f[h], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ya(e, e.oPreviousSearch, 1)) }) }); z("state()", function () { return this.context.length ? this.context[0].oSavedState : null }); z("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); z("state.loaded()", function () {
            return this.context.length ?
                this.context[0].oLoadedState : null
        }); z("state.save()", function () { return this.iterator("table", function (a) { Da(a) }) }); u.versionCheck = u.fnVersionCheck = function (a) { var b = u.version.split("."); a = a.split("."); for (var c, d, e = 0, h = a.length; e < h; e++)if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0 }; u.isDataTable = u.fnIsDataTable = function (a) {
            var b = l(a).get(0), c = !1; if (a instanceof u.Api) return !0; l.each(u.settings, function (d, e) {
                d = e.nScrollHead ? l("table", e.nScrollHead)[0] : null; var h = e.nScrollFoot ?
                    l("table", e.nScrollFoot)[0] : null; if (e.nTable === b || d === b || h === b) c = !0
            }); return c
        }; u.tables = u.fnTables = function (a) { var b = !1; l.isPlainObject(a) && (b = a.api, a = a.visible); var c = l.map(u.settings, function (d) { if (!a || a && l(d.nTable).is(":visible")) return d.nTable }); return b ? new B(c) : c }; u.camelToHungarian = P; z("$()", function (a, b) { b = this.rows(b).nodes(); b = l(b); return l([].concat(b.filter(a).toArray(), b.find(a).toArray())) }); l.each(["on", "one", "off"], function (a, b) {
            z(b + "()", function () {
                var c = Array.prototype.slice.call(arguments);
                c[0] = l.map(c[0].split(/\s/), function (e) { return e.match(/\.dt\b/) ? e : e + ".dt" }).join(" "); var d = l(this.tables().nodes()); d[b].apply(d, c); return this
            })
        }); z("clear()", function () { return this.iterator("table", function (a) { Ma(a) }) }); z("settings()", function () { return new B(this.context, this.context) }); z("init()", function () { var a = this.context; return a.length ? a[0].oInit : null }); z("data()", function () { return this.iterator("table", function (a) { return U(a.aoData, "_aData") }).flatten() }); z("destroy()", function (a) {
            a = a ||
            !1; return this.iterator("table", function (b) {
                var c = b.oClasses, d = b.nTable, e = b.nTBody, h = b.nTHead, f = b.nTFoot, g = l(d); e = l(e); var k = l(b.nTableWrapper), m = l.map(b.aoData, function (p) { return p.nTr }), n; b.bDestroying = !0; F(b, "aoDestroyCallback", "destroy", [b]); a || (new B(b)).columns().visible(!0); k.off(".DT").find(":not(tbody *)").off(".DT"); l(y).off(".DT-" + b.sInstance); d != h.parentNode && (g.children("thead").detach(), g.append(h)); f && d != f.parentNode && (g.children("tfoot").detach(), g.append(f)); b.aaSorting = []; b.aaSortingFixed =
                    []; Va(b); l(m).removeClass(b.asStripeClasses.join(" ")); l("th, td", h).removeClass(c.sSortable + " " + c.sSortableAsc + " " + c.sSortableDesc + " " + c.sSortableNone); e.children().detach(); e.append(m); h = b.nTableWrapper.parentNode; f = a ? "remove" : "detach"; g[f](); k[f](); !a && h && (h.insertBefore(d, b.nTableReinsertBefore), g.css("width", b.sDestroyWidth).removeClass(c.sTable), (n = b.asDestroyStripes.length) && e.children().each(function (p) { l(this).addClass(b.asDestroyStripes[p % n]) })); c = l.inArray(b, u.settings); -1 !== c && u.settings.splice(c,
                        1)
            })
        }); l.each(["column", "row", "cell"], function (a, b) { z(b + "s().every()", function (c) { var d = this.selector.opts, e = this; return this.iterator(b, function (h, f, g, k, m) { c.call(e[b](f, "cell" === b ? g : d, "cell" === b ? d : q), f, g, k, m) }) }) }); z("i18n()", function (a, b, c) { var d = this.context[0]; a = ma(a)(d.oLanguage); a === q && (a = b); c !== q && l.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._); return a.replace("%d", c) }); u.version = "1.12.1"; u.settings = []; u.models = {}; u.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0, "return": !1 };
    u.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }; u.models.oColumn = {
        idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null,
        sWidth: null, sWidthOrig: null
    }; u.defaults = {
        aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                this.oLanguage.sThousands)
        }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) { return {} } }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" +
                    a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) { }
        }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
            oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
        }, oSearch: l.extend({}, u.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
    }; E(u.defaults);
    u.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }; E(u.defaults.column); u.models.oSettings = {
        oFeatures: {
            bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null,
            bStateSave: null
        }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [],
        aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, jqXHR: null, json: q, oAjaxData: q, fnServerData: null, aoServerParams: [], sServerMethod: null,
        fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () { return "ssp" == Q(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function () { return "ssp" == Q(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function () {
            var a = this._iDisplayLength, b = this._iDisplayStart, c = b +
                a, d = this.aiDisplay.length, e = this.oFeatures, h = e.bPaginate; return e.bServerSide ? !1 === h || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !h || c > d || -1 === a ? d : c
        }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
    }; u.ext = M = {
        buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: {
            detect: [],
            search: {}, order: {}
        }, _unique: 0, fnVersionCheck: u.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: u.version
    }; l.extend(M, { afnFiltering: M.search, aTypes: M.type.detect, ofnSearch: M.type.search, oSort: M.type.order, afnSortData: M.order, aoFeatures: M.feature, oApi: M.internal, oStdClasses: M.classes, oPagination: M.pager }); l.extend(u.ext.classes, {
        sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_desc_disabled", sSortableDesc: "sorting_asc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: ""
    }); var ic = u.ext.pager; l.extend(ic, {
        simple: function (a, b) { return ["previous", "next"] }, full: function (a, b) { return ["first", "previous", "next", "last"] }, numbers: function (a, b) { return [Ea(a, b)] }, simple_numbers: function (a, b) {
            return ["previous",
                Ea(a, b), "next"]
        }, full_numbers: function (a, b) { return ["first", "previous", Ea(a, b), "next", "last"] }, first_last_numbers: function (a, b) { return ["first", Ea(a, b), "last"] }, _numbers: Ea, numbers_length: 7
    }); l.extend(!0, u.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e, h) {
                var f = a.oClasses, g = a.oLanguage.oPaginate, k = a.oLanguage.oAria.paginate || {}, m, n, p = 0, t = function (x, w) {
                    var r, C = f.sPageButtonDisabled, G = function (I) { Ta(a, I.data.action, !0) }; var ba = 0; for (r = w.length; ba < r; ba++) {
                        var L = w[ba]; if (Array.isArray(L)) {
                            var O = l("<" + (L.DT_el ||
                                "div") + "/>").appendTo(x); t(O, L)
                        } else {
                            m = null; n = L; O = a.iTabIndex; switch (L) { case "ellipsis": x.append('<span class="ellipsis">&#x2026;</span>'); break; case "first": m = g.sFirst; 0 === e && (O = -1, n += " " + C); break; case "previous": m = g.sPrevious; 0 === e && (O = -1, n += " " + C); break; case "next": m = g.sNext; if (0 === h || e === h - 1) O = -1, n += " " + C; break; case "last": m = g.sLast; if (0 === h || e === h - 1) O = -1, n += " " + C; break; default: m = a.fnFormatNumber(L + 1), n = e === L ? f.sPageButtonActive : "" }null !== m && (O = l("<a>", {
                                "class": f.sPageButton + " " + n, "aria-controls": a.sTableId,
                                "aria-label": k[L], "data-dt-idx": p, tabindex: O, id: 0 === c && "string" === typeof L ? a.sTableId + "_" + L : null
                            }).html(m).appendTo(x), sb(O, { action: L }, G), p++)
                        }
                    }
                }; try { var v = l(b).find(A.activeElement).data("dt-idx") } catch (x) { } t(l(b).empty(), d); v !== q && l(b).find("[data-dt-idx=" + v + "]").trigger("focus")
            }
        }
    }); l.extend(u.ext.type.detect, [function (a, b) { b = b.oLanguage.sDecimal; return yb(a, b) ? "num" + b : null }, function (a, b) {
        if (a && !(a instanceof Date) && !Dc.test(a)) return null; b = Date.parse(a); return null !== b && !isNaN(b) || aa(a) ? "date" :
            null
    }, function (a, b) { b = b.oLanguage.sDecimal; return yb(a, b, !0) ? "num-fmt" + b : null }, function (a, b) { b = b.oLanguage.sDecimal; return pc(a, b) ? "html-num" + b : null }, function (a, b) { b = b.oLanguage.sDecimal; return pc(a, b, !0) ? "html-num-fmt" + b : null }, function (a, b) { return aa(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]); l.extend(u.ext.type.search, {
        html: function (a) { return aa(a) ? a : "string" === typeof a ? a.replace(mc, " ").replace(Ya, "") : "" }, string: function (a) {
            return aa(a) ? a : "string" === typeof a ? a.replace(mc, " ") :
                a
        }
    }); var Xa = function (a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = oc(a, b)); a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a }; l.extend(M.type.order, {
        "date-pre": function (a) { a = Date.parse(a); return isNaN(a) ? -Infinity : a }, "html-pre": function (a) { return aa(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" }, "string-pre": function (a) { return aa(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "" }, "string-asc": function (a, b) { return a < b ? -1 : a > b ? 1 : 0 }, "string-desc": function (a,
            b) { return a < b ? 1 : a > b ? -1 : 0 }
    }); bb(""); l.extend(!0, u.ext.renderer, {
        header: {
            _: function (a, b, c, d) { l(a.nTable).on("order.dt.DT", function (e, h, f, g) { a === h && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass)) }) }, jqueryui: function (a, b, c, d) {
                l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b); l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
                    a === h && (e = c.idx,
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == g[e] ? d.sSortJUIAsc : "desc" == g[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
                })
            }
        }
    }); var $a = function (a) {
        Array.isArray(a) && (a = a.join(",")); return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
            "&quot;") : a
    }, kc = !1, zc = ",", Ac = "."; if (Intl) try { for (var Ha = (new Intl.NumberFormat).formatToParts(100000.1), ra = 0; ra < Ha.length; ra++)"group" === Ha[ra].type ? zc = Ha[ra].value : "decimal" === Ha[ra].type && (Ac = Ha[ra].value) } catch (a) { } u.datetime = function (a, b) { var c = "datetime-detect-" + a; b || (b = "en"); u.ext.type.order[c] || (u.ext.type.detect.unshift(function (d) { var e = Za(d, a, b); return "" === d || e ? c : !1 }), u.ext.type.order[c + "-pre"] = function (d) { return Za(d, a, b) || 0 }) }; u.render = {
        date: wb("toLocaleDateString"), datetime: wb("toLocaleString"),
        time: wb("toLocaleTimeString"), number: function (a, b, c, d, e) { if (null === a || a === q) a = zc; if (null === b || b === q) b = Ac; return { display: function (h) { if ("number" !== typeof h && "string" !== typeof h || "" === h || null === h) return h; var f = 0 > h ? "-" : "", g = parseFloat(h); if (isNaN(g)) return $a(h); g = g.toFixed(c); h = Math.abs(g); g = parseInt(h, 10); h = c ? b + (h - g).toFixed(c).substring(2) : ""; 0 === g && 0 === parseFloat(h) && (f = ""); return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + h + (e || "") } } }, text: function () { return { display: $a, filter: $a } }
    };
    l.extend(u.ext.internal, {
        _fnExternApiFunc: lc, _fnBuildAjax: Qa, _fnAjaxUpdate: Kb, _fnAjaxParameters: Tb, _fnAjaxUpdateDraw: Ub, _fnAjaxDataSrc: za, _fnAddColumn: cb, _fnColumnOptions: Ia, _fnAdjustColumnSizing: sa, _fnVisibleToColumnIndex: ta, _fnColumnIndexToVisible: ua, _fnVisbleColumns: na, _fnGetColumns: Ka, _fnColumnTypes: eb, _fnApplyColumnDefs: Hb, _fnHungarianMap: E, _fnCamelToHungarian: P, _fnLanguageCompat: la, _fnBrowserDetect: Fb, _fnAddData: ia, _fnAddTr: La, _fnNodeToDataIndex: function (a, b) {
            return b._DT_RowIndex !== q ? b._DT_RowIndex :
                null
        }, _fnNodeToColumnIndex: function (a, b, c) { return l.inArray(c, a.aoData[b].anCells) }, _fnGetCellData: T, _fnSetCellData: Ib, _fnSplitObjNotation: hb, _fnGetObjectDataFn: ma, _fnSetObjectDataFn: ha, _fnGetDataMaster: ib, _fnClearTable: Ma, _fnDeleteIndex: Na, _fnInvalidate: va, _fnGetRowElements: gb, _fnCreateTr: fb, _fnBuildHead: Jb, _fnDrawHead: xa, _fnDraw: ja, _fnReDraw: ka, _fnAddOptionsHtml: Mb, _fnDetectHeader: wa, _fnGetUniqueThs: Pa, _fnFeatureHtmlFilter: Ob, _fnFilterComplete: ya, _fnFilterCustom: Xb, _fnFilterColumn: Wb, _fnFilter: Vb,
        _fnFilterCreateSearch: nb, _fnEscapeRegex: ob, _fnFilterData: Yb, _fnFeatureHtmlInfo: Rb, _fnUpdateInfo: ac, _fnInfoMacros: bc, _fnInitialise: Aa, _fnInitComplete: Ra, _fnLengthChange: pb, _fnFeatureHtmlLength: Nb, _fnFeatureHtmlPaginate: Sb, _fnPageChange: Ta, _fnFeatureHtmlProcessing: Pb, _fnProcessingDisplay: V, _fnFeatureHtmlTable: Qb, _fnScrollDraw: Ja, _fnApplyToChildren: da, _fnCalculateColumnWidths: db, _fnThrottle: mb, _fnConvertToWidth: cc, _fnGetWidestNode: dc, _fnGetMaxLenString: ec, _fnStringToCss: K, _fnSortFlatten: oa, _fnSort: Lb,
        _fnSortAria: gc, _fnSortListener: rb, _fnSortAttachListener: kb, _fnSortingClasses: Va, _fnSortData: fc, _fnSaveState: Da, _fnLoadState: hc, _fnImplementState: tb, _fnSettingsFromNode: Wa, _fnLog: ea, _fnMap: Y, _fnBindAction: sb, _fnCallbackReg: R, _fnCallbackFire: F, _fnLengthOverflow: qb, _fnRenderer: lb, _fnDataSource: Q, _fnRowAttributes: jb, _fnExtend: ub, _fnCalculateEnd: function () { }
    }); l.fn.dataTable = u; u.$ = l; l.fn.dataTableSettings = u.settings; l.fn.dataTableExt = u.ext; l.fn.DataTable = function (a) { return l(this).dataTable(a).api() };
    l.each(u, function (a, b) { l.fn.DataTable[a] = b }); return u
});


/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function ($, undefined) {

    var $window = $(window);

    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments));
    }
    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
    }
    function alias(method) {
        return function () {
            return this[method].apply(this, arguments);
        };
    }

    var DateArray = (function () {
        var extras = {
            get: function (i) {
                return this.slice(i)[0];
            },
            contains: function (d) {
                // Array.indexOf is not cross-browser;
                // $.inArray doesn't work with Dates
                var val = d && d.valueOf();
                for (var i = 0, l = this.length; i < l; i++)
                    if (this[i].valueOf() === val)
                        return i;
                return -1;
            },
            remove: function (i) {
                this.splice(i, 1);
            },
            replace: function (new_array) {
                if (!new_array)
                    return;
                if (!$.isArray(new_array))
                    new_array = [new_array];
                this.clear();
                this.push.apply(this, new_array);
            },
            clear: function () {
                this.splice(0);
            },
            copy: function () {
                var a = new DateArray();
                a.replace(this);
                return a;
            }
        };

        return function () {
            var a = [];
            a.push.apply(a, arguments);
            $.extend(a, extras);
            return a;
        };
    })();


    // Picker object

    var Datepicker = function (element, options) {
        this.dates = new DateArray();
        this.viewDate = UTCToday();
        this.focusDate = null;

        this._process_options(options);

        this.element = $(element);
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
        this.hasInput = this.component && this.element.find('input').length;
        if (this.component && this.component.length === 0)
            this.component = false;

        this.picker = $(DPGlobal.template);
        this._buildEvents();
        this._attachEvents();

        if (this.isInline) {
            this.picker.addClass('datepicker-inline').appendTo(this.element);
        }
        else {
            this.picker.addClass('datepicker-dropdown dropdown-menu');
        }

        if (this.o.rtl) {
            this.picker.addClass('datepicker-rtl');
        }

        this.viewMode = this.o.startView;

        if (this.o.calendarWeeks)
            this.picker.find('tfoot th.today')
                .attr('colspan', function (i, val) {
                    return parseInt(val) + 1;
                });

        this._allow_update = false;

        this.setStartDate(this._o.startDate);
        this.setEndDate(this._o.endDate);
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

        this.fillDow();
        this.fillMonths();

        this._allow_update = true;

        this.update();
        this.showMode();

        if (this.isInline) {
            this.show();
        }
    };

    Datepicker.prototype = {
        constructor: Datepicker,

        _process_options: function (opts) {
            // Store raw options for reference
            this._o = $.extend({}, this._o, opts);
            // Processed options
            var o = this.o = $.extend({}, this._o);

            // Check if "de-DE" style date is available, if not language should
            // fallback to 2 letter code eg "de"
            var lang = o.language;
            if (!dates[lang]) {
                lang = lang.split('-')[0];
                if (!dates[lang])
                    lang = defaults.language;
            }
            o.language = lang;

            switch (o.startView) {
                case 2:
                case 'decade':
                    o.startView = 2;
                    break;
                case 1:
                case 'year':
                    o.startView = 1;
                    break;
                default:
                    o.startView = 0;
            }

            switch (o.minViewMode) {
                case 1:
                case 'months':
                    o.minViewMode = 1;
                    break;
                case 2:
                case 'years':
                    o.minViewMode = 2;
                    break;
                default:
                    o.minViewMode = 0;
            }

            o.startView = Math.max(o.startView, o.minViewMode);

            // true, false, or Number > 0
            if (o.multidate !== true) {
                o.multidate = Number(o.multidate) || false;
                if (o.multidate !== false)
                    o.multidate = Math.max(0, o.multidate);
                else
                    o.multidate = 1;
            }
            o.multidateSeparator = String(o.multidateSeparator);

            o.weekStart %= 7;
            o.weekEnd = ((o.weekStart + 6) % 7);

            var format = DPGlobal.parseFormat(o.format);
            if (o.startDate !== -Infinity) {
                if (!!o.startDate) {
                    if (o.startDate instanceof Date)
                        o.startDate = this._local_to_utc(this._zero_time(o.startDate));
                    else
                        o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
                }
                else {
                    o.startDate = -Infinity;
                }
            }
            if (o.endDate !== Infinity) {
                if (!!o.endDate) {
                    if (o.endDate instanceof Date)
                        o.endDate = this._local_to_utc(this._zero_time(o.endDate));
                    else
                        o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
                }
                else {
                    o.endDate = Infinity;
                }
            }

            o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
            if (!$.isArray(o.daysOfWeekDisabled))
                o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
            o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
                return parseInt(d, 10);
            });

            var plc = String(o.orientation).toLowerCase().split(/\s+/g),
                _plc = o.orientation.toLowerCase();
            plc = $.grep(plc, function (word) {
                return (/^auto|left|right|top|bottom$/).test(word);
            });
            o.orientation = { x: 'auto', y: 'auto' };
            if (!_plc || _plc === 'auto')
                ; // no action
            else if (plc.length === 1) {
                switch (plc[0]) {
                    case 'top':
                    case 'bottom':
                        o.orientation.y = plc[0];
                        break;
                    case 'left':
                    case 'right':
                        o.orientation.x = plc[0];
                        break;
                }
            }
            else {
                _plc = $.grep(plc, function (word) {
                    return (/^left|right$/).test(word);
                });
                o.orientation.x = _plc[0] || 'auto';

                _plc = $.grep(plc, function (word) {
                    return (/^top|bottom$/).test(word);
                });
                o.orientation.y = _plc[0] || 'auto';
            }
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (evs) {
            for (var i = 0, el, ch, ev; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.on(ev, ch);
            }
        },
        _unapplyEvents: function (evs) {
            for (var i = 0, el, ev, ch; i < evs.length; i++) {
                el = evs[i][0];
                if (evs[i].length === 2) {
                    ch = undefined;
                    ev = evs[i][1];
                }
                else if (evs[i].length === 3) {
                    ch = evs[i][1];
                    ev = evs[i][2];
                }
                el.off(ev, ch);
            }
        },
        _buildEvents: function () {
            if (this.isInput) { // single input
                this._events = [
                    [this.element, {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(function (e) {
                            if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                                this.update();
                        }, this),
                        keydown: $.proxy(this.keydown, this)
                    }]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.element.find('input'), {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(function (e) {
                            if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                                this.update();
                        }, this),
                        keydown: $.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            else if (this.element.is('div')) {  // inline datepicker
                this.isInline = true;
            }
            else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
            this._events.push(
                // Component: listen for blur on element descendants
                [this.element, '*', {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }],
                // Input: listen for blur on element
                [this.element, {
                    blur: $.proxy(function (e) {
                        this._focused_from = e.target;
                    }, this)
                }]
            );

            this._secondaryEvents = [
                [this.picker, {
                    click: $.proxy(this.click, this)
                }],
                [$(window), {
                    resize: $.proxy(this.place, this)
                }],
                [$(document), {
                    'mousedown touchstart': $.proxy(function (e) {
                        // Clicked outside the datepicker, hide it
                        if (!(
                            this.element.is(e.target) ||
                            this.element.find(e.target).length ||
                            this.picker.is(e.target) ||
                            this.picker.find(e.target).length
                        )) {
                            this.hide();
                        }
                    }, this)
                }]
            ];
        },
        _attachEvents: function () {
            this._detachEvents();
            this._applyEvents(this._events);
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events);
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents);
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents);
        },
        _trigger: function (event, altdate) {
            var date = altdate || this.dates.get(-1),
                local_date = this._utc_to_local(date);

            this.element.trigger({
                type: event,
                date: local_date,
                dates: $.map(this.dates, this._utc_to_local),
                format: $.proxy(function (ix, format) {
                    if (arguments.length === 0) {
                        ix = this.dates.length - 1;
                        format = this.o.format;
                    }
                    else if (typeof ix === 'string') {
                        format = ix;
                        ix = this.dates.length - 1;
                    }
                    format = format || this.o.format;
                    var date = this.dates.get(ix);
                    return DPGlobal.formatDate(date, format, this.o.language);
                }, this)
            });
        },

        show: function () {
            if (!this.isInline)
                this.picker.appendTo('body');
            this.picker.show();
            this.place();
            this._attachSecondaryEvents();
            this._trigger('show');
        },

        hide: function () {
            if (this.isInline)
                return;
            if (!this.picker.is(':visible'))
                return;
            this.focusDate = null;
            this.picker.hide().detach();
            this._detachSecondaryEvents();
            this.viewMode = this.o.startView;
            this.showMode();

            if (
                this.o.forceParse &&
                (
                    this.isInput && this.element.val() ||
                    this.hasInput && this.element.find('input').val()
                )
            )
                this.setValue();
            this._trigger('hide');
        },

        remove: function () {
            this.hide();
            this._detachEvents();
            this._detachSecondaryEvents();
            this.picker.remove();
            delete this.element.data().datepicker;
            if (!this.isInput) {
                delete this.element.data().date;
            }
        },

        _utc_to_local: function (utc) {
            return utc && new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));
        },
        _local_to_utc: function (local) {
            return local && new Date(local.getTime() - (local.getTimezoneOffset() * 60000));
        },
        _zero_time: function (local) {
            return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
        },
        _zero_utc_time: function (utc) {
            return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
        },

        getDates: function () {
            return $.map(this.dates, this._utc_to_local);
        },

        getUTCDates: function () {
            return $.map(this.dates, function (d) {
                return new Date(d);
            });
        },

        getDate: function () {
            return this._utc_to_local(this.getUTCDate());
        },

        getUTCDate: function () {
            return new Date(this.dates.get(-1));
        },

        setDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, args);
            this._trigger('changeDate');
            this.setValue();
        },

        setUTCDates: function () {
            var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, $.map(args, this._utc_to_local));
            this._trigger('changeDate');
            this.setValue();
        },

        setDate: alias('setDates'),
        setUTCDate: alias('setUTCDates'),

        setValue: function () {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find('input').val(formatted).change();
                }
            }
            else {
                this.element.val(formatted).change();
            }
        },

        getFormattedDate: function (format) {
            if (format === undefined)
                format = this.o.format;

            var lang = this.o.language;
            return $.map(this.dates, function (d) {
                return DPGlobal.formatDate(d, format, lang);
            }).join(this.o.multidateSeparator);
        },

        setStartDate: function (startDate) {
            this._process_options({ startDate: startDate });
            this.update();
            this.updateNavArrows();
        },

        setEndDate: function (endDate) {
            this._process_options({ endDate: endDate });
            this.update();
            this.updateNavArrows();
        },

        setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
            this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
            this.update();
            this.updateNavArrows();
        },

        place: function () {
            if (this.isInline)
                return;
            var calendarWidth = this.picker.outerWidth(),
                calendarHeight = this.picker.outerHeight(),
                visualPadding = 10,
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                scrollTop = $window.scrollTop();

            var zIndex = parseInt(this.element.parents().filter(function () {
                return $(this).css('z-index') !== 'auto';
            }).first().css('z-index')) + 10;
            var offset = this.component ? this.component.parent().offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
            var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
            var left = offset.left,
                top = offset.top;

            this.picker.removeClass(
                'datepicker-orient-top datepicker-orient-bottom ' +
                'datepicker-orient-right datepicker-orient-left'
            );

            if (this.o.orientation.x !== 'auto') {
                this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
                if (this.o.orientation.x === 'right')
                    left -= calendarWidth - width;
            }
            // auto x orientation is best-placement: if it crosses a window
            // edge, fudge it sideways
            else {
                // Default to left
                this.picker.addClass('datepicker-orient-left');
                if (offset.left < 0)
                    left -= offset.left - visualPadding;
                else if (offset.left + calendarWidth > windowWidth)
                    left = windowWidth - calendarWidth - visualPadding;
            }

            // auto y orientation is best-situation: top or bottom, no fudging,
            // decision based on which shows more of the calendar
            var yorient = this.o.orientation.y,
                top_overflow, bottom_overflow;
            if (yorient === 'auto') {
                top_overflow = -scrollTop + offset.top - calendarHeight;
                bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
                if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
                    yorient = 'top';
                else
                    yorient = 'bottom';
            }
            this.picker.addClass('datepicker-orient-' + yorient);
            if (yorient === 'top')
                top += height;
            else
                top -= calendarHeight + parseInt(this.picker.css('padding-top'));

            this.picker.css({
                top: top,
                left: left,
                zIndex: zIndex
            });
        },

        _allow_update: true,
        update: function () {
            if (!this._allow_update)
                return;

            var oldDates = this.dates.copy(),
                dates = [],
                fromArgs = false;
            if (arguments.length) {
                $.each(arguments, $.proxy(function (i, date) {
                    if (date instanceof Date)
                        date = this._local_to_utc(date);
                    dates.push(date);
                }, this));
                fromArgs = true;
            }
            else {
                dates = this.isInput
                    ? this.element.val()
                    : this.element.data('date') || this.element.find('input').val();
                if (dates && this.o.multidate)
                    dates = dates.split(this.o.multidateSeparator);
                else
                    dates = [dates];
                delete this.element.data().date;
            }

            dates = $.map(dates, $.proxy(function (date) {
                return DPGlobal.parseDate(date, this.o.format, this.o.language);
            }, this));
            dates = $.grep(dates, $.proxy(function (date) {
                return (
                    date < this.o.startDate ||
                    date > this.o.endDate ||
                    !date
                );
            }, this), true);
            this.dates.replace(dates);

            if (this.dates.length)
                this.viewDate = new Date(this.dates.get(-1));
            else if (this.viewDate < this.o.startDate)
                this.viewDate = new Date(this.o.startDate);
            else if (this.viewDate > this.o.endDate)
                this.viewDate = new Date(this.o.endDate);

            if (fromArgs) {
                // setting date by clicking
                this.setValue();
            }
            else if (dates.length) {
                // setting date by typing
                if (String(oldDates) !== String(this.dates))
                    this._trigger('changeDate');
            }
            if (!this.dates.length && oldDates.length)
                this._trigger('clearDate');

            this.fill();
        },

        fillDow: function () {
            var dowCnt = this.o.weekStart,
                html = '<tr>';
            if (this.o.calendarWeeks) {
                var cell = '<th class="cw">&nbsp;</th>';
                html += cell;
                this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
            }
            while (dowCnt < this.o.weekStart + 7) {
                html += '<th class="dow">' + dates[this.o.language].daysMin[(dowCnt++) % 7] + '</th>';
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html);
        },

        fillMonths: function () {
            var html = '',
                i = 0;
            while (i < 12) {
                html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
            }
            this.picker.find('.datepicker-months td').html(html);
        },

        setRange: function (range) {
            if (!range || !range.length)
                delete this.range;
            else
                this.range = $.map(range, function (d) {
                    return d.valueOf();
                });
            this.fill();
        },

        getClassNames: function (date) {
            var cls = [],
                year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                today = new Date();
            if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)) {
                cls.push('old');
            }
            else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)) {
                cls.push('new');
            }
            if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
                cls.push('focused');
            // Compare internal UTC date with local today, not UTC today
            if (this.o.todayHighlight &&
                date.getUTCFullYear() === today.getFullYear() &&
                date.getUTCMonth() === today.getMonth() &&
                date.getUTCDate() === today.getDate()) {
                cls.push('today');
            }
            if (this.dates.contains(date) !== -1)
                cls.push('active');
            if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
                $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
                cls.push('disabled');
            }
            if (this.range) {
                if (date > this.range[0] && date < this.range[this.range.length - 1]) {
                    cls.push('range');
                }
                if ($.inArray(date.valueOf(), this.range) !== -1) {
                    cls.push('selected');
                }
            }
            return cls;
        },

        fill: function () {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                todaytxt = dates[this.o.language].today || dates['en'].today || '',
                cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
                tooltip;
            this.picker.find('.datepicker-days thead th.datepicker-switch')
                .text(dates[this.o.language].months[month] + ' ' + year);
            this.picker.find('tfoot th.today')
                .text(todaytxt)
                .toggle(this.o.todayBtn !== false);
            this.picker.find('tfoot th.clear')
                .text(cleartxt)
                .toggle(this.o.clearBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month - 1, 28),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth);
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while (prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() === this.o.weekStart) {
                    html.push('<tr>');
                    if (this.o.calendarWeeks) {
                        // ISO 8601: First week contains first thursday.
                        // ISO also states week starts on Monday, but we can be more abstract here.
                        var
                            // Start of current week: based on weekstart/current date
                            ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                            // Thursday of this week
                            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                            // First Thursday of year, year from thursday
                            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
                            // Calendar week: ms between thursdays, div ms per day, div 7 days
                            calWeek = (th - yth) / 864e5 / 7 + 1;
                        html.push('<td class="cw">' + calWeek + '</td>');

                    }
                }
                clsName = this.getClassNames(prevMonth);
                clsName.push('day');

                if (this.o.beforeShowDay !== $.noop) {
                    var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
                    if (before === undefined)
                        before = {};
                    else if (typeof (before) === 'boolean')
                        before = { enabled: before };
                    else if (typeof (before) === 'string')
                        before = { classes: before };
                    if (before.enabled === false)
                        clsName.push('disabled');
                    if (before.classes)
                        clsName = clsName.concat(before.classes.split(/\s+/));
                    if (before.tooltip)
                        tooltip = before.tooltip;
                }

                clsName = $.unique(clsName);
                html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
                if (prevMonth.getUTCDay() === this.o.weekEnd) {
                    html.push('</tr>');
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

            var months = this.picker.find('.datepicker-months')
                .find('th:eq(1)')
                .text(year)
                .end()
                .find('span').removeClass('active');

            $.each(this.dates, function (i, d) {
                if (d.getUTCFullYear() === year)
                    months.eq(d.getUTCMonth()).addClass('active');
            });

            if (year < startYear || year > endYear) {
                months.addClass('disabled');
            }
            if (year === startYear) {
                months.slice(0, startMonth).addClass('disabled');
            }
            if (year === endYear) {
                months.slice(endMonth + 1).addClass('disabled');
            }

            html = '';
            year = parseInt(year / 10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years')
                .find('th:eq(1)')
                .text(year + '-' + (year + 9))
                .end()
                .find('td');
            year -= 1;
            var years = $.map(this.dates, function (d) {
                return d.getUTCFullYear();
            }),
                classes;
            for (var i = -1; i < 11; i++) {
                classes = ['year'];
                if (i === -1)
                    classes.push('old');
                else if (i === 10)
                    classes.push('new');
                if ($.inArray(year, years) !== -1)
                    classes.push('active');
                if (year < startYear || year > endYear)
                    classes.push('disabled');
                html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        updateNavArrows: function () {
            if (!this._allow_update)
                return;

            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
                        this.picker.find('.prev').css({ visibility: 'hidden' });
                    }
                    else {
                        this.picker.find('.prev').css({ visibility: 'visible' });
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
                        this.picker.find('.next').css({ visibility: 'hidden' });
                    }
                    else {
                        this.picker.find('.next').css({ visibility: 'visible' });
                    }
                    break;
                case 1:
                case 2:
                    if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
                        this.picker.find('.prev').css({ visibility: 'hidden' });
                    }
                    else {
                        this.picker.find('.prev').css({ visibility: 'visible' });
                    }
                    if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
                        this.picker.find('.next').css({ visibility: 'hidden' });
                    }
                    else {
                        this.picker.find('.next').css({ visibility: 'visible' });
                    }
                    break;
            }
        },

        click: function (e) {
            e.preventDefault();
            var target = $(e.target).closest('span, td, th'),
                year, month, day;
            if (target.length === 1) {
                switch (target[0].nodeName.toLowerCase()) {
                    case 'th':
                        switch (target[0].className) {
                            case 'datepicker-switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        this._trigger('changeMonth', this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        if (this.viewMode === 1)
                                            this._trigger('changeYear', this.viewDate);
                                        break;
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

                                this.showMode(-2);
                                var which = this.o.todayBtn === 'linked' ? null : 'view';
                                this._setDate(date, which);
                                break;
                            case 'clear':
                                var element;
                                if (this.isInput)
                                    element = this.element;
                                else if (this.component)
                                    element = this.element.find('input');
                                if (element)
                                    element.val("").change();
                                this.update();
                                this._trigger('changeDate');
                                if (this.o.autoclose)
                                    this.hide();
                                break;
                        }
                        break;
                    case 'span':
                        if (!target.is('.disabled')) {
                            this.viewDate.setUTCDate(1);
                            if (target.is('.month')) {
                                day = 1;
                                month = target.parent().find('span').index(target);
                                year = this.viewDate.getUTCFullYear();
                                this.viewDate.setUTCMonth(month);
                                this._trigger('changeMonth', this.viewDate);
                                if (this.o.minViewMode === 1) {
                                    this._setDate(UTCDate(year, month, day));
                                }
                            }
                            else {
                                day = 1;
                                month = 0;
                                year = parseInt(target.text(), 10) || 0;
                                this.viewDate.setUTCFullYear(year);
                                this._trigger('changeYear', this.viewDate);
                                if (this.o.minViewMode === 2) {
                                    this._setDate(UTCDate(year, month, day));
                                }
                            }
                            this.showMode(-1);
                            this.fill();
                        }
                        break;
                    case 'td':
                        if (target.is('.day') && !target.is('.disabled')) {
                            day = parseInt(target.text(), 10) || 1;
                            year = this.viewDate.getUTCFullYear();
                            month = this.viewDate.getUTCMonth();
                            if (target.is('.old')) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1;
                                }
                                else {
                                    month -= 1;
                                }
                            }
                            else if (target.is('.new')) {
                                if (month === 11) {
                                    month = 0;
                                    year += 1;
                                }
                                else {
                                    month += 1;
                                }
                            }
                            this._setDate(UTCDate(year, month, day));
                        }
                        break;
                }
            }
            if (this.picker.is(':visible') && this._focused_from) {
                $(this._focused_from).focus();
            }
            delete this._focused_from;
        },

        _toggle_multidate: function (date) {
            var ix = this.dates.contains(date);
            if (!date) {
                this.dates.clear();
            }
            else if (ix !== -1) {
                this.dates.remove(ix);
            }
            else {
                this.dates.push(date);
            }
            if (typeof this.o.multidate === 'number')
                while (this.dates.length > this.o.multidate)
                    this.dates.remove(0);
        },

        _setDate: function (date, which) {
            if (!which || which === 'date')
                this._toggle_multidate(date && new Date(date));
            if (!which || which === 'view')
                this.viewDate = date && new Date(date);

            this.fill();
            this.setValue();
            this._trigger('changeDate');
            var element;
            if (this.isInput) {
                element = this.element;
            }
            else if (this.component) {
                element = this.element.find('input');
            }
            if (element) {
                element.change();
            }
            if (this.o.autoclose && (!which || which === 'date')) {
                this.hide();
            }
        },

        moveMonth: function (date, dir) {
            if (!date)
                return undefined;
            if (!dir)
                return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag === 1) {
                test = dir === -1
                    // If going back one month, make sure month is not current month
                    // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
                    ? function () {
                        return new_date.getUTCMonth() === month;
                    }
                    // If going forward one month, make sure month is as expected
                    // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
                    : function () {
                        return new_date.getUTCMonth() !== new_month;
                    };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
                if (new_month < 0 || new_month > 11)
                    new_month = (new_month + 12) % 12;
            }
            else {
                // For magnitudes >1, move one month at a time...
                for (var i = 0; i < mag; i++)
                    // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
                    new_date = this.moveMonth(new_date, dir);
                // ...then reset the day, keeping it in the new month
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function () {
                    return new_month !== new_date.getUTCMonth();
                };
            }
            // Common date-resetting loop -- if date is beyond end of month, make it
            // end of month
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month);
            }
            return new_date;
        },

        moveYear: function (date, dir) {
            return this.moveMonth(date, dir * 12);
        },

        dateWithinRange: function (date) {
            return date >= this.o.startDate && date <= this.o.endDate;
        },

        keydown: function (e) {
            if (this.picker.is(':not(:visible)')) {
                if (e.keyCode === 27) // allow escape to hide and re-show picker
                    this.show();
                return;
            }
            var dateChanged = false,
                dir, newDate, newViewDate,
                focusDate = this.focusDate || this.viewDate;
            switch (e.keyCode) {
                case 27: // escape
                    if (this.focusDate) {
                        this.focusDate = null;
                        this.viewDate = this.dates.get(-1) || this.viewDate;
                        this.fill();
                    }
                    else
                        this.hide();
                    e.preventDefault();
                    break;
                case 37: // left
                case 39: // right
                    if (!this.o.keyboardNavigation)
                        break;
                    dir = e.keyCode === 37 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    }
                    else if (e.shiftKey) {
                        newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveMonth(focusDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    }
                    else {
                        newDate = new Date(this.dates.get(-1) || UTCToday());
                        newDate.setUTCDate(newDate.getUTCDate() + dir);
                        newViewDate = new Date(focusDate);
                        newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 38: // up
                case 40: // down
                    if (!this.o.keyboardNavigation)
                        break;
                    dir = e.keyCode === 38 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveYear(focusDate, dir);
                        this._trigger('changeYear', this.viewDate);
                    }
                    else if (e.shiftKey) {
                        newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
                        newViewDate = this.moveMonth(focusDate, dir);
                        this._trigger('changeMonth', this.viewDate);
                    }
                    else {
                        newDate = new Date(this.dates.get(-1) || UTCToday());
                        newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
                        newViewDate = new Date(focusDate);
                        newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.focusDate = this.viewDate = newViewDate;
                        this.setValue();
                        this.fill();
                        e.preventDefault();
                    }
                    break;
                case 32: // spacebar
                    // Spacebar is used in manually typing dates in some formats.
                    // As such, its behavior should not be hijacked.
                    break;
                case 13: // enter
                    focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this._toggle_multidate(focusDate);
                    dateChanged = true;
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(':visible')) {
                        e.preventDefault();
                        if (this.o.autoclose)
                            this.hide();
                    }
                    break;
                case 9: // tab
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break;
            }
            if (dateChanged) {
                if (this.dates.length)
                    this._trigger('changeDate');
                else
                    this._trigger('clearDate');
                var element;
                if (this.isInput) {
                    element = this.element;
                }
                else if (this.component) {
                    element = this.element.find('input');
                }
                if (element) {
                    element.change();
                }
            }
        },

        showMode: function (dir) {
            if (dir) {
                this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
            }
            this.picker
                .find('>div')
                .hide()
                .filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
                .css('display', 'block');
            this.updateNavArrows();
        }
    };

    var DateRangePicker = function (element, options) {
        this.element = $(element);
        this.inputs = $.map(options.inputs, function (i) {
            return i.jquery ? i[0] : i;
        });
        delete options.inputs;

        $(this.inputs)
            .datepicker(options)
            .bind('changeDate', $.proxy(this.dateUpdated, this));

        this.pickers = $.map(this.inputs, function (i) {
            return $(i).data('datepicker');
        });
        this.updateDates();
    };
    DateRangePicker.prototype = {
        updateDates: function () {
            this.dates = $.map(this.pickers, function (i) {
                return i.getUTCDate();
            });
            this.updateRanges();
        },
        updateRanges: function () {
            var range = $.map(this.dates, function (d) {
                return d.valueOf();
            });
            $.each(this.pickers, function (i, p) {
                p.setRange(range);
            });
        },
        dateUpdated: function (e) {
            // `this.updating` is a workaround for preventing infinite recursion
            // between `changeDate` triggering and `setUTCDate` calling.  Until
            // there is a better mechanism.
            if (this.updating)
                return;
            this.updating = true;

            var dp = $(e.target).data('datepicker'),
                new_date = dp.getUTCDate(),
                i = $.inArray(e.target, this.inputs),
                l = this.inputs.length;
            if (i === -1)
                return;

            $.each(this.pickers, function (i, p) {
                if (!p.getUTCDate())
                    p.setUTCDate(new_date);
            });

            if (new_date < this.dates[i]) {
                // Date being moved earlier/left
                while (i >= 0 && new_date < this.dates[i]) {
                    this.pickers[i--].setUTCDate(new_date);
                }
            }
            else if (new_date > this.dates[i]) {
                // Date being moved later/right
                while (i < l && new_date > this.dates[i]) {
                    this.pickers[i++].setUTCDate(new_date);
                }
            }
            this.updateDates();

            delete this.updating;
        },
        remove: function () {
            $.map(this.pickers, function (p) { p.remove(); });
            delete this.element.data().datepicker;
        }
    };

    function opts_from_el(el, prefix) {
        // Derive options from element data-attrs
        var data = $(el).data(),
            out = {}, inkey,
            replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
        prefix = new RegExp('^' + prefix.toLowerCase());
        function re_lower(_, a) {
            return a.toLowerCase();
        }
        for (var key in data)
            if (prefix.test(key)) {
                inkey = key.replace(replace, re_lower);
                out[inkey] = data[key];
            }
        return out;
    }

    function opts_from_locale(lang) {
        // Derive options from locale plugins
        var out = {};
        // Check if "de-DE" style date is available, if not language should
        // fallback to 2 letter code eg "de"
        if (!dates[lang]) {
            lang = lang.split('-')[0];
            if (!dates[lang])
                return;
        }
        var d = dates[lang];
        $.each(locale_opts, function (i, k) {
            if (k in d)
                out[k] = d[k];
        });
        return out;
    }

    var old = $.fn.datepicker;
    $.fn.datepicker = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        var internal_return;
        this.each(function () {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option === 'object' && option;
            if (!data) {
                var elopts = opts_from_el(this, 'date'),
                    // Preliminary otions
                    xopts = $.extend({}, defaults, elopts, options),
                    locopts = opts_from_locale(xopts.language),
                    // Options priority: js args, data-attrs, locales, defaults
                    opts = $.extend({}, defaults, locopts, elopts, options);
                if ($this.is('.input-daterange') || opts.inputs) {
                    var ropts = {
                        inputs: opts.inputs || $this.find('input').toArray()
                    };
                    $this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
                }
                else {
                    $this.data('datepicker', (data = new Datepicker(this, opts)));
                }
            }
            if (typeof option === 'string' && typeof data[option] === 'function') {
                internal_return = data[option].apply(data, args);
                if (internal_return !== undefined)
                    return false;
            }
        });
        if (internal_return !== undefined)
            return internal_return;
        else
            return this;
    };

    var defaults = $.fn.datepicker.defaults = {
        autoclose: false,
        beforeShowDay: $.noop,
        calendarWeeks: false,
        clearBtn: false,
        daysOfWeekDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'mm/dd/yyyy',
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        multidate: false,
        multidateSeparator: ',',
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: false,
        weekStart: 0
    };
    var locale_opts = $.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };

    var DPGlobal = {
        modes: [
            {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            },
            {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            },
            {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
            }],
        isLeapYear: function (year) {
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
        },
        getDaysInMonth: function (year, month) {
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function (format) {
            // IE treats \0 as a string end in inputs (truncating the value),
            // so it's a bad format delimiter, anyway
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }
            return { separators: separators, parts: parts };
        },
        parseDate: function (date, format, language) {
            if (!date)
                return undefined;
            if (date instanceof Date)
                return date;
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            var part_re = /([\-+]\d+)([dmwy])/,
                parts = date.match(/([\-+]\d+)([dmwy])/g),
                part, dir, i;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                date = new Date();
                for (i = 0; i < parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch (part[2]) {
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break;
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
            }
            parts = date && date.match(this.nonpunctuation) || [];
            date = new Date();
            var parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function (d, v) {
                        return d.setUTCFullYear(v);
                    },
                    yy: function (d, v) {
                        return d.setUTCFullYear(2000 + v);
                    },
                    m: function (d, v) {
                        if (isNaN(d))
                            return d;
                        v -= 1;
                        while (v < 0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() !== v)
                            d.setUTCDate(d.getUTCDate() - 1);
                        return d;
                    },
                    d: function (d, v) {
                        return d.setUTCDate(v);
                    }
                },
                val, filtered;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            // Remove noop parts
            if (parts.length !== fparts.length) {
                fparts = $(fparts).filter(function (i, p) {
                    return $.inArray(p, setters_order) !== -1;
                }).toArray();
            }
            // Process remainder
            function match_part() {
                var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                return m === p;
            }
            if (parts.length === fparts.length) {
                var cnt;
                for (i = 0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(match_part);
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break;
                        }
                    }
                    parsed[part] = val;
                }
                var _date, s;
                for (i = 0; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) {
                        _date = new Date(date);
                        setters_map[s](_date, parsed[s]);
                        if (!isNaN(_date))
                            date = _date;
                    }
                }
            }
            return date;
        },
        formatDate: function (date, format, language) {
            if (!date)
                return '';
            if (typeof format === 'string')
                format = DPGlobal.parseFormat(format);
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            date = [];
            var seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
                if (seps.length)
                    date.push(seps.shift());
                date.push(val[format.parts[i]]);
            }
            return date.join('');
        },
        headTemplate: '<thead>' +
            '<tr>' +
            '<th class="prev">&laquo;</th>' +
            '<th colspan="5" class="datepicker-switch"></th>' +
            '<th class="next">&raquo;</th>' +
            '</tr>' +
            '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot>' +
            '<tr>' +
            '<th colspan="7" class="today"></th>' +
            '</tr>' +
            '<tr>' +
            '<th colspan="7" class="clear"></th>' +
            '</tr>' +
            '</tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">' +
        '<div class="datepicker-days">' +
        '<table class=" table-condensed">' +
        DPGlobal.headTemplate +
        '<tbody></tbody>' +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-months">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '<div class="datepicker-years">' +
        '<table class="table-condensed">' +
        DPGlobal.headTemplate +
        DPGlobal.contTemplate +
        DPGlobal.footTemplate +
        '</table>' +
        '</div>' +
        '</div>';

    $.fn.datepicker.DPGlobal = DPGlobal;


    /* DATEPICKER NO CONFLICT
    * =================== */

    $.fn.datepicker.noConflict = function () {
        $.fn.datepicker = old;
        return this;
    };


    /* DATEPICKER DATA-API
    * ================== */

    $(document).on(
        'focus.datepicker.data-api click.datepicker.data-api',
        '[data-provide="datepicker"]',
        function (e) {
            var $this = $(this);
            if ($this.data('datepicker'))
                return;
            e.preventDefault();
            // component click requires us to explicitly show it
            $this.datepicker('show');
        }
    );
    $(function () {
        $('[data-provide="datepicker-inline"]').datepicker();
    });

}(window.jQuery));


/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    'use strict';

    // init flags & variables
    var debug = false;

    var browser = {
        data: {
            index: 0,
            name: 'scrollbar'
        },
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };

    browser.scrolls.add = function (instance) {
        this.remove(instance).push(instance);
    };
    browser.scrolls.remove = function (instance) {
        while ($.inArray(instance, this) >= 0) {
            this.splice($.inArray(instance, this), 1);
        }
        return this;
    };

    var defaults = {
        "autoScrollSize": true,     // automatically calculate scrollsize
        "autoUpdate": true,         // update scrollbar if content/container size changed
        "debug": false,             // debug mode
        "disableBodyScroll": false, // disable body scroll if mouse over container
        "duration": 200,            // scroll animate duration in ms
        "ignoreMobile": false,      // ignore mobile devices
        "ignoreOverlay": false,     // ignore browsers with overlay scrollbars (mobile, MacOS)
        "scrollStep": 30,           // scroll step for scrollbar arrows
        "showArrows": false,        // add class to show arrows
        "stepScrolling": true,      // when scrolling to scrollbar mousedown position

        "scrollx": null,            // horizontal scroll element
        "scrolly": null,            // vertical scroll element

        "onDestroy": null,          // callback function on destroy,
        "onInit": null,             // callback function on first initialization
        "onScroll": null,           // callback function on content scrolling
        "onUpdate": null            // callback function on init/resize (before scrollbar size calculation)
    };


    var BaseScrollbar = function (container) {

        if (!browser.scroll) {
            browser.overlay = isScrollOverlaysContent();
            browser.scroll = getBrowserScrollSize();
            updateScrollbars();

            $(window).resize(function () {
                var forceUpdate = false;
                if (browser.scroll && (browser.scroll.height || browser.scroll.width)) {
                    var scroll = getBrowserScrollSize();
                    if (scroll.height !== browser.scroll.height || scroll.width !== browser.scroll.width) {
                        browser.scroll = scroll;
                        forceUpdate = true; // handle page zoom
                    }
                }
                updateScrollbars(forceUpdate);
            });
        }

        this.container = container;
        this.namespace = '.scrollbar_' + browser.data.index++;
        this.options = $.extend({}, defaults, window.jQueryScrollbarOptions || {});
        this.scrollTo = null;
        this.scrollx = {};
        this.scrolly = {};

        container.data(browser.data.name, this);
        browser.scrolls.add(this);
    };

    BaseScrollbar.prototype = {

        destroy: function () {

            if (!this.wrapper) {
                return;
            }

            this.container.removeData(browser.data.name);
            browser.scrolls.remove(this);

            // init variables
            var scrollLeft = this.container.scrollLeft();
            var scrollTop = this.container.scrollTop();

            this.container.insertBefore(this.wrapper).css({
                "height": "",
                "margin": "",
                "max-height": ""
            })
                .removeClass('scroll-content scroll-scrollx_visible scroll-scrolly_visible')
                .off(this.namespace)
                .scrollLeft(scrollLeft)
                .scrollTop(scrollTop);

            this.scrollx.scroll.removeClass('scroll-scrollx_visible').find('div').andSelf().off(this.namespace);
            this.scrolly.scroll.removeClass('scroll-scrolly_visible').find('div').andSelf().off(this.namespace);

            this.wrapper.remove();

            $(document).add('body').off(this.namespace);

            if ($.isFunction(this.options.onDestroy)) {
                this.options.onDestroy.apply(this, [this.container]);
            }
        },
        init: function (options) {

            // init variables
            var S = this,
                c = this.container,
                cw = this.containerWrapper || c,
                namespace = this.namespace,
                o = $.extend(this.options, options || {}),
                s = { x: this.scrollx, y: this.scrolly },
                w = this.wrapper;

            var initScroll = {
                "scrollLeft": c.scrollLeft(),
                "scrollTop": c.scrollTop()
            };

            // do not init if in ignorable browser
            if ((browser.mobile && o.ignoreMobile)
                || (browser.overlay && o.ignoreOverlay)
                || (browser.macosx && !browser.webkit) // still required to ignore nonWebKit browsers on Mac
            ) {
                return false;
            }

            // init scroll container
            if (!w) {
                this.wrapper = w = $('<div>').addClass('scroll-wrapper').addClass(c.attr('class'))
                    .css('position', c.css('position') == 'absolute' ? 'absolute' : 'relative')
                    .insertBefore(c).append(c);

                if (c.is('textarea')) {
                    this.containerWrapper = cw = $('<div>').insertBefore(c).append(c);
                    w.addClass('scroll-textarea');
                }

                cw.addClass('scroll-content').css({
                    "height": "auto",
                    "margin-bottom": browser.scroll.height * -1 + 'px',
                    "margin-right": browser.scroll.width * -1 + 'px',
                    "max-height": ""
                });

                c.on('scroll' + namespace, function (event) {
                    if ($.isFunction(o.onScroll)) {
                        o.onScroll.call(S, {
                            "maxScroll": s.y.maxScrollOffset,
                            "scroll": c.scrollTop(),
                            "size": s.y.size,
                            "visible": s.y.visible
                        }, {
                            "maxScroll": s.x.maxScrollOffset,
                            "scroll": c.scrollLeft(),
                            "size": s.x.size,
                            "visible": s.x.visible
                        });
                    }
                    s.x.isVisible && s.x.scroll.bar.css('left', c.scrollLeft() * s.x.kx + 'px');
                    s.y.isVisible && s.y.scroll.bar.css('top', c.scrollTop() * s.y.kx + 'px');
                });

                /* prevent native scrollbars to be visible on #anchor click */
                w.on('scroll' + namespace, function () {
                    w.scrollTop(0).scrollLeft(0);
                });

                if (o.disableBodyScroll) {
                    var handleMouseScroll = function (event) {
                        isVerticalScroll(event) ?
                            s.y.isVisible && s.y.mousewheel(event) :
                            s.x.isVisible && s.x.mousewheel(event);
                    };
                    w.on('MozMousePixelScroll' + namespace, handleMouseScroll);
                    w.on('mousewheel' + namespace, handleMouseScroll);

                    if (browser.mobile) {
                        w.on('touchstart' + namespace, function (event) {
                            var touch = event.originalEvent.touches && event.originalEvent.touches[0] || event;
                            var originalTouch = {
                                "pageX": touch.pageX,
                                "pageY": touch.pageY
                            };
                            var originalScroll = {
                                "left": c.scrollLeft(),
                                "top": c.scrollTop()
                            };
                            $(document).on('touchmove' + namespace, function (event) {
                                var touch = event.originalEvent.targetTouches && event.originalEvent.targetTouches[0] || event;
                                c.scrollLeft(originalScroll.left + originalTouch.pageX - touch.pageX);
                                c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
                                event.preventDefault();
                            });
                            $(document).on('touchend' + namespace, function () {
                                $(document).off(namespace);
                            });
                        });
                    }
                }
                if ($.isFunction(o.onInit)) {
                    o.onInit.apply(this, [c]);
                }
            } else {
                cw.css({
                    "height": "auto",
                    "margin-bottom": browser.scroll.height * -1 + 'px',
                    "margin-right": browser.scroll.width * -1 + 'px',
                    "max-height": ""
                });
            }

            // init scrollbars & recalculate sizes
            $.each(s, function (d, scrollx) {

                var scrollCallback = null;
                var scrollForward = 1;
                var scrollOffset = (d === 'x') ? 'scrollLeft' : 'scrollTop';
                var scrollStep = o.scrollStep;
                var scrollTo = function () {
                    var currentOffset = c[scrollOffset]();
                    c[scrollOffset](currentOffset + scrollStep);
                    if (scrollForward == 1 && (currentOffset + scrollStep) >= scrollToValue)
                        currentOffset = c[scrollOffset]();
                    if (scrollForward == -1 && (currentOffset + scrollStep) <= scrollToValue)
                        currentOffset = c[scrollOffset]();
                    if (c[scrollOffset]() == currentOffset && scrollCallback) {
                        scrollCallback();
                    }
                }
                var scrollToValue = 0;

                if (!scrollx.scroll) {

                    scrollx.scroll = S._getScroll(o['scroll' + d]).addClass('scroll-' + d);

                    if (o.showArrows) {
                        scrollx.scroll.addClass('scroll-element_arrows_visible');
                    }

                    scrollx.mousewheel = function (event) {

                        if (!scrollx.isVisible || (d === 'x' && isVerticalScroll(event))) {
                            return true;
                        }
                        if (d === 'y' && !isVerticalScroll(event)) {
                            s.x.mousewheel(event);
                            return true;
                        }

                        var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
                        var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;

                        if ((delta > 0 && scrollToValue < maxScrollValue) || (delta < 0 && scrollToValue > 0)) {
                            scrollToValue = scrollToValue + delta;
                            if (scrollToValue < 0)
                                scrollToValue = 0;
                            if (scrollToValue > maxScrollValue)
                                scrollToValue = maxScrollValue;

                            S.scrollTo = S.scrollTo || {};
                            S.scrollTo[scrollOffset] = scrollToValue;
                            setTimeout(function () {
                                if (S.scrollTo) {
                                    c.stop().animate(S.scrollTo, 240, 'linear', function () {
                                        scrollToValue = c[scrollOffset]();
                                    });
                                    S.scrollTo = null;
                                }
                            }, 1);
                        }

                        event.preventDefault();
                        return false;
                    };

                    scrollx.scroll
                        .on('MozMousePixelScroll' + namespace, scrollx.mousewheel)
                        .on('mousewheel' + namespace, scrollx.mousewheel)
                        .on('mouseenter' + namespace, function () {
                            scrollToValue = c[scrollOffset]();
                        });

                    // handle arrows & scroll inner mousedown event
                    scrollx.scroll.find('.scroll-arrow, .scroll-element_track')
                        .on('mousedown' + namespace, function (event) {

                            if (event.which != 1) // lmb
                                return true;

                            scrollForward = 1;

                            var data = {
                                "eventOffset": event[(d === 'x') ? 'pageX' : 'pageY'],
                                "maxScrollValue": scrollx.size - scrollx.visible - scrollx.offset,
                                "scrollbarOffset": scrollx.scroll.bar.offset()[(d === 'x') ? 'left' : 'top'],
                                "scrollbarSize": scrollx.scroll.bar[(d === 'x') ? 'outerWidth' : 'outerHeight']()
                            };
                            var timeout = 0, timer = 0;

                            if ($(this).hasClass('scroll-arrow')) {
                                scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
                                scrollStep = o.scrollStep * scrollForward;
                                scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
                            } else {
                                scrollForward = (data.eventOffset > (data.scrollbarOffset + data.scrollbarSize) ? 1
                                    : (data.eventOffset < data.scrollbarOffset ? -1 : 0));
                                scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
                                scrollToValue = (data.eventOffset - data.scrollbarOffset -
                                    (o.stepScrolling ? (scrollForward == 1 ? data.scrollbarSize : 0)
                                        : Math.round(data.scrollbarSize / 2)));
                                scrollToValue = c[scrollOffset]() + (scrollToValue / scrollx.kx);
                            }

                            S.scrollTo = S.scrollTo || {};
                            S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;

                            if (o.stepScrolling) {
                                scrollCallback = function () {
                                    scrollToValue = c[scrollOffset]();
                                    clearInterval(timer);
                                    clearTimeout(timeout);
                                    timeout = 0;
                                    timer = 0;
                                };
                                timeout = setTimeout(function () {
                                    timer = setInterval(scrollTo, 40);
                                }, o.duration + 100);
                            }

                            setTimeout(function () {
                                if (S.scrollTo) {
                                    c.animate(S.scrollTo, o.duration);
                                    S.scrollTo = null;
                                }
                            }, 1);

                            return S._handleMouseDown(scrollCallback, event);
                        });

                    // handle scrollbar drag'n'drop
                    scrollx.scroll.bar.on('mousedown' + namespace, function (event) {

                        if (event.which != 1) // lmb
                            return true;

                        var eventPosition = event[(d === 'x') ? 'pageX' : 'pageY'];
                        var initOffset = c[scrollOffset]();

                        scrollx.scroll.addClass('scroll-draggable');

                        $(document).on('mousemove' + namespace, function (event) {
                            var diff = parseInt((event[(d === 'x') ? 'pageX' : 'pageY'] - eventPosition) / scrollx.kx, 10);
                            c[scrollOffset](initOffset + diff);
                        });

                        return S._handleMouseDown(function () {
                            scrollx.scroll.removeClass('scroll-draggable');
                            scrollToValue = c[scrollOffset]();
                        }, event);
                    });
                }
            });

            // remove classes & reset applied styles
            $.each(s, function (d, scrollx) {
                var scrollClass = 'scroll-scroll' + d + '_visible';
                var scrolly = (d == "x") ? s.y : s.x;

                scrollx.scroll.removeClass(scrollClass);
                scrolly.scroll.removeClass(scrollClass);
                cw.removeClass(scrollClass);
            });

            // calculate init sizes
            $.each(s, function (d, scrollx) {
                $.extend(scrollx, (d == "x") ? {
                    "offset": parseInt(c.css('left'), 10) || 0,
                    "size": c.prop('scrollWidth'),
                    "visible": w.width()
                } : {
                    "offset": parseInt(c.css('top'), 10) || 0,
                    "size": c.prop('scrollHeight'),
                    "visible": w.height()
                });
            });

            // update scrollbar visibility/dimensions
            this._updateScroll('x', this.scrollx);
            this._updateScroll('y', this.scrolly);

            if ($.isFunction(o.onUpdate)) {
                o.onUpdate.apply(this, [c]);
            }

            // calculate scroll size
            $.each(s, function (d, scrollx) {

                var cssOffset = (d === 'x') ? 'left' : 'top';
                var cssFullSize = (d === 'x') ? 'outerWidth' : 'outerHeight';
                var cssSize = (d === 'x') ? 'width' : 'height';
                var offset = parseInt(c.css(cssOffset), 10) || 0;

                var AreaSize = scrollx.size;
                var AreaVisible = scrollx.visible + offset;

                var scrollSize = scrollx.scroll.size[cssFullSize]() + (parseInt(scrollx.scroll.size.css(cssOffset), 10) || 0);

                if (o.autoScrollSize) {
                    scrollx.scrollbarSize = parseInt(scrollSize * AreaVisible / AreaSize, 10);
                    scrollx.scroll.bar.css(cssSize, scrollx.scrollbarSize + 'px');
                }

                scrollx.scrollbarSize = scrollx.scroll.bar[cssFullSize]();
                scrollx.kx = ((scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible)) || 1;
                scrollx.maxScrollOffset = AreaSize - AreaVisible;
            });

            c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger('scroll');
        },

        /**
         * Get scrollx/scrolly object
         *
         * @param {Mixed} scroll
         * @returns {jQuery} scroll object
         */
        _getScroll: function (scroll) {
            var types = {
                advanced: [
                    '<div class="scroll-element">',
                    '<div class="scroll-element_corner"></div>',
                    '<div class="scroll-arrow scroll-arrow_less"></div>',
                    '<div class="scroll-arrow scroll-arrow_more"></div>',
                    '<div class="scroll-element_outer">',
                    '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
                    '<div class="scroll-element_inner-wrapper">',
                    '<div class="scroll-element_inner scroll-element_track">', // used for handling scrollbar click
                    '<div class="scroll-element_inner-bottom"></div>',
                    '</div>',
                    '</div>',
                    '<div class="scroll-bar">', // required
                    '<div class="scroll-bar_body">',
                    '<div class="scroll-bar_body-inner"></div>',
                    '</div>',
                    '<div class="scroll-bar_bottom"></div>',
                    '<div class="scroll-bar_center"></div>',
                    '</div>',
                    '</div>',
                    '</div>'
                ].join(''),
                simple: [
                    '<div class="scroll-element">',
                    '<div class="scroll-element_outer">',
                    '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
                    '<div class="scroll-element_track"></div>', // used for handling scrollbar click
                    '<div class="scroll-bar"></div>', // required
                    '</div>',
                    '</div>'
                ].join('')
            };
            if (types[scroll]) {
                scroll = types[scroll];
            }
            if (!scroll) {
                scroll = types['simple'];
            }
            if (typeof (scroll) == 'string') {
                scroll = $(scroll).appendTo(this.wrapper);
            } else {
                scroll = $(scroll);
            }
            $.extend(scroll, {
                bar: scroll.find('.scroll-bar'),
                size: scroll.find('.scroll-element_size'),
                track: scroll.find('.scroll-element_track')
            });
            return scroll;
        },

        _handleMouseDown: function (callback, event) {

            var namespace = this.namespace;

            $(document).on('blur' + namespace, function () {
                $(document).add('body').off(namespace);
                callback && callback();
            });
            $(document).on('dragstart' + namespace, function (event) {
                event.preventDefault();
                return false;
            });
            $(document).on('mouseup' + namespace, function () {
                $(document).add('body').off(namespace);
                callback && callback();
            });
            $('body').on('selectstart' + namespace, function (event) {
                event.preventDefault();
                return false;
            });

            event && event.preventDefault();
            return false;
        },

        _updateScroll: function (d, scrollx) {

            var container = this.container,
                containerWrapper = this.containerWrapper || container,
                scrollClass = 'scroll-scroll' + d + '_visible',
                scrolly = (d === 'x') ? this.scrolly : this.scrollx,
                offset = parseInt(this.container.css((d === 'x') ? 'left' : 'top'), 10) || 0,
                wrapper = this.wrapper;

            var AreaSize = scrollx.size;
            var AreaVisible = scrollx.visible + offset;

            scrollx.isVisible = (AreaSize - AreaVisible) > 1; // bug in IE9/11 with 1px diff
            if (scrollx.isVisible) {
                scrollx.scroll.addClass(scrollClass);
                scrolly.scroll.addClass(scrollClass);
                containerWrapper.addClass(scrollClass);
            } else {
                scrollx.scroll.removeClass(scrollClass);
                scrolly.scroll.removeClass(scrollClass);
                containerWrapper.removeClass(scrollClass);
            }

            if (d === 'y') {
                if (container.is('textarea') || AreaSize < AreaVisible) {
                    containerWrapper.css({
                        "height": (AreaVisible + browser.scroll.height) + 'px',
                        "max-height": "none"
                    });
                } else {
                    containerWrapper.css({
                        //"height": "auto", // do not reset height value: issue with height:100%!
                        "max-height": (AreaVisible + browser.scroll.height) + 'px'
                    });
                }
            }

            if (scrollx.size != container.prop('scrollWidth')
                || scrolly.size != container.prop('scrollHeight')
                || scrollx.visible != wrapper.width()
                || scrolly.visible != wrapper.height()
                || scrollx.offset != (parseInt(container.css('left'), 10) || 0)
                || scrolly.offset != (parseInt(container.css('top'), 10) || 0)
            ) {
                $.extend(this.scrollx, {
                    "offset": parseInt(container.css('left'), 10) || 0,
                    "size": container.prop('scrollWidth'),
                    "visible": wrapper.width()
                });
                $.extend(this.scrolly, {
                    "offset": parseInt(container.css('top'), 10) || 0,
                    "size": this.container.prop('scrollHeight'),
                    "visible": wrapper.height()
                });
                this._updateScroll(d === 'x' ? 'y' : 'x', scrolly);
            }
        }
    };

    var CustomScrollbar = BaseScrollbar;

    /*
     * Extend jQuery as plugin
     *
     * @param {Mixed} command to execute
     * @param {Mixed} arguments as Array
     * @return {jQuery}
     */
    $.fn.scrollbar = function (command, args) {
        if (typeof command !== 'string') {
            args = command;
            command = 'init';
        }
        if (typeof args === 'undefined') {
            args = [];
        }
        if (!$.isArray(args)) {
            args = [args];
        }
        this.not('body, .scroll-wrapper').each(function () {
            var element = $(this),
                instance = element.data(browser.data.name);
            if (instance || command === 'init') {
                if (!instance) {
                    instance = new CustomScrollbar(element);
                }
                if (instance[command]) {
                    instance[command].apply(instance, args);
                }
            }
        });
        return this;
    };

    /**
     * Connect default options to global object
     */
    $.fn.scrollbar.options = defaults;


    /**
     * Check if scroll content/container size is changed
     */

    var updateScrollbars = (function () {
        var timer = 0,
            timerCounter = 0;

        return function (force) {
            var i, container, options, scroll, wrapper, scrollx, scrolly;
            for (i = 0; i < browser.scrolls.length; i++) {
                scroll = browser.scrolls[i];
                container = scroll.container;
                options = scroll.options;
                wrapper = scroll.wrapper;
                scrollx = scroll.scrollx;
                scrolly = scroll.scrolly;
                if (force || (options.autoUpdate && wrapper && wrapper.is(':visible') &&
                    (container.prop('scrollWidth') != scrollx.size || container.prop('scrollHeight') != scrolly.size || wrapper.width() != scrollx.visible || wrapper.height() != scrolly.visible))) {
                    scroll.init();

                    if (options.debug) {
                        window.console && console.log({
                            scrollHeight: container.prop('scrollHeight') + ':' + scroll.scrolly.size,
                            scrollWidth: container.prop('scrollWidth') + ':' + scroll.scrollx.size,
                            visibleHeight: wrapper.height() + ':' + scroll.scrolly.visible,
                            visibleWidth: wrapper.width() + ':' + scroll.scrollx.visible
                        }, true);
                        timerCounter++;
                    }
                }
            }
            if (debug && timerCounter > 10) {
                window.console && console.log('Scroll updates exceed 10');
                updateScrollbars = function () { };
            } else {
                clearTimeout(timer);
                timer = setTimeout(updateScrollbars, 300);
            }
        };
    })();

    /* ADDITIONAL FUNCTIONS */
    /**
     * Get native browser scrollbar size (height/width)
     *
     * @param {Boolean} actual size or CSS size, default - CSS size
     * @returns {Object} with height, width
     */
    function getBrowserScrollSize(actualSize) {

        if (browser.webkit && !actualSize) {
            return {
                "height": 0,
                "width": 0
            };
        }

        if (!browser.data.outer) {
            var css = {
                "border": "none",
                "box-sizing": "content-box",
                "height": "200px",
                "margin": "0",
                "padding": "0",
                "width": "200px"
            };
            browser.data.inner = $("<div>").css($.extend({}, css));
            browser.data.outer = $("<div>").css($.extend({
                "left": "-1000px",
                "overflow": "scroll",
                "position": "absolute",
                "top": "-1000px"
            }, css)).append(browser.data.inner).appendTo("body");
        }

        browser.data.outer.scrollLeft(1000).scrollTop(1000);

        return {
            "height": Math.ceil((browser.data.outer.offset().top - browser.data.inner.offset().top) || 0),
            "width": Math.ceil((browser.data.outer.offset().left - browser.data.inner.offset().left) || 0)
        };
    }

    /**
     * Check if native browser scrollbars overlay content
     *
     * @returns {Boolean}
     */
    function isScrollOverlaysContent() {
        var scrollSize = getBrowserScrollSize(true);
        return !(scrollSize.height || scrollSize.width);
    }

    function isVerticalScroll(event) {
        var e = event.originalEvent;
        if (e.axis && e.axis === e.HORIZONTAL_AXIS)
            return false;
        if (e.wheelDeltaX)
            return false;
        return true;
    }


    /**
     * Extend AngularJS as UI directive
     * and expose a provider for override default config
     *
     */
    if (window.angular) {
        (function (angular) {
            angular.module('jQueryScrollbar', [])
                .provider('jQueryScrollbar', function () {
                    var defaultOptions = defaults;
                    return {
                        setOptions: function (options) {
                            angular.extend(defaultOptions, options);
                        },
                        $get: function () {
                            return {
                                options: angular.copy(defaultOptions)
                            };
                        }
                    };
                })
                .directive('jqueryScrollbar', ['jQueryScrollbar', '$parse', function (jQueryScrollbar, $parse) {
                    return {
                        "restrict": "AC",
                        "link": function (scope, element, attrs) {
                            var model = $parse(attrs.jqueryScrollbar),
                                options = model(scope);
                            element.scrollbar(options || jQueryScrollbar.options)
                                .on('$destroy', function () {
                                    element.scrollbar('destroy');
                                });
                        }
                    };
                }]);
        })(window.angular);
    }
}));



(function () { var a, b, c, d, e, f, g, h, i = [].slice, j = {}.hasOwnProperty, k = function (a, b) { function d() { this.constructor = a } for (var c in b) j.call(b, c) && (a[c] = b[c]); return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a }; g = function () { }, b = function () { function a() { } return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function (a, b) { return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this }, a.prototype.emit = function () { var a, b, c, d, e, f; if (d = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, c = this._callbacks[d]) for (e = 0, f = c.length; e < f; e++)b = c[e], b.apply(this, a); return this }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function (a, b) { var c, d, e, f, g; if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this; if (d = this._callbacks[a], !d) return this; if (1 === arguments.length) return delete this._callbacks[a], this; for (e = f = 0, g = d.length; f < g; e = ++f)if (c = d[e], c === b) { d.splice(e, 1); break } return this }, a }(), a = function (a) { function e(a, b) { var d, f, g; if (this.element = a, this.version = e.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element."); if (this.element.dropzone) throw new Error("Dropzone already attached."); if (e.instances.push(this), this.element.dropzone = this, d = null != (g = e.optionsForElement(this.element)) ? g : {}, this.options = c({}, this.defaultOptions, d, null != b ? b : {}), this.options.forceFallback || !e.isBrowserSupported()) return this.options.fallback.call(this); if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided."); if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."); this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = e.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = e.getElements(this.options.clickable, "clickable")), this.init() } var c, d; return k(e, a), e.prototype.Emitter = b, e.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], e.prototype.defaultOptions = { url: null, method: "post", withCredentials: !1, parallelUploads: 2, uploadMultiple: !1, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 120, thumbnailHeight: 120, filesizeBase: 1e3, maxFiles: null, params: {}, clickable: !0, ignoreHiddenFiles: !0, acceptedFiles: null, acceptedMimeTypes: null, autoProcessQueue: !0, autoQueue: !0, addRemoveLinks: !1, previewsContainer: null, hiddenInputContainer: "body", capture: null, renameFilename: null, dictDefaultMessage: "<i class='sl sl-icon-plus'></i> Click here or drop files to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", dictCancelUpload: "Cancel upload", dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?", dictRemoveFile: "Remove file", dictRemoveFileConfirmation: null, dictMaxFilesExceeded: "You can not upload any more files.", accept: function (a, b) { return b() }, init: function () { return g }, forceFallback: !1, fallback: function () { var a, b, c, d, f, g; for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), d = 0, f = g.length; d < f; d++)a = g[d], /(^| )dz-message($| )/.test(a.className) && (b = a, a.className = "dz-message"); return b || (b = e.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(b)), c = b.getElementsByTagName("span")[0], c && (null != c.textContent ? c.textContent = this.options.dictFallbackMessage : null != c.innerText && (c.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm()) }, resize: function (a) { var b, c, d; return b = { srcX: 0, srcY: 0, srcWidth: a.width, srcHeight: a.height }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b }, drop: function (a) { return this.element.classList.remove("dz-drag-hover") }, dragstart: g, dragend: function (a) { return this.element.classList.remove("dz-drag-hover") }, dragenter: function (a) { return this.element.classList.add("dz-drag-hover") }, dragover: function (a) { return this.element.classList.add("dz-drag-hover") }, dragleave: function (a) { return this.element.classList.remove("dz-drag-hover") }, paste: g, reset: function () { return this.element.classList.remove("dz-started") }, addedfile: function (a) { var b, c, d, f, g, h, i, j, k, l, m, n, o; if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) { for (a.previewElement = e.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; f < i; f++)b = l[f], b.textContent = this._renameFilename(a.name); for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; g < j; g++)b = m[g], b.innerHTML = this.filesize(a.size); for (this.options.addRemoveLinks && (a._removeLink = e.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), c = function (b) { return function (c) { return c.preventDefault(), c.stopPropagation(), a.status === e.UPLOADING ? e.confirm(b.options.dictCancelUploadConfirmation, function () { return b.removeFile(a) }) : b.options.dictRemoveFileConfirmation ? e.confirm(b.options.dictRemoveFileConfirmation, function () { return b.removeFile(a) }) : b.removeFile(a) } }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; h < k; h++)d = n[h], o.push(d.addEventListener("click", c)); return o } }, removedfile: function (a) { var b; return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass() }, thumbnail: function (a, b) { var c, d, e, f; if (a.previewElement) { for (a.previewElement.classList.remove("dz-file-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), d = 0, e = f.length; d < e; d++)c = f[d], c.alt = a.name, c.src = b; return setTimeout(function (b) { return function () { return a.previewElement.classList.add("dz-image-preview") } }(this), 1) } }, error: function (a, b) { var c, d, e, f, g; if (a.previewElement) { for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; d < e; d++)c = f[d], g.push(c.textContent = b); return g } }, errormultiple: g, processing: function (a) { if (a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink)) return a._removeLink.textContent = this.options.dictCancelUpload }, processingmultiple: g, uploadprogress: function (a, b, c) { var d, e, f, g, h; if (a.previewElement) { for (g = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), h = [], e = 0, f = g.length; e < f; e++)d = g[e], "PROGRESS" === d.nodeName ? h.push(d.value = b) : h.push(d.style.width = "" + b + "%"); return h } }, totaluploadprogress: g, sending: g, sendingmultiple: g, success: function (a) { if (a.previewElement) return a.previewElement.classList.add("dz-success") }, successmultiple: g, canceled: function (a) { return this.emit("error", a, "Upload canceled.") }, canceledmultiple: g, complete: function (a) { if (a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), a.previewElement) return a.previewElement.classList.add("dz-complete") }, completemultiple: g, maxfilesexceeded: g, maxfilesreached: g, queuecomplete: g, addedfiles: g, previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>' }, c = function () { var a, b, c, d, e, f, g; for (d = arguments[0], c = 2 <= arguments.length ? i.call(arguments, 1) : [], f = 0, g = c.length; f < g; f++) { b = c[f]; for (a in b) e = b[a], d[a] = e } return d }, e.prototype.getAcceptedFiles = function () { var a, b, c, d, e; for (d = this.files, e = [], b = 0, c = d.length; b < c; b++)a = d[b], a.accepted && e.push(a); return e }, e.prototype.getRejectedFiles = function () { var a, b, c, d, e; for (d = this.files, e = [], b = 0, c = d.length; b < c; b++)a = d[b], a.accepted || e.push(a); return e }, e.prototype.getFilesWithStatus = function (a) { var b, c, d, e, f; for (e = this.files, f = [], c = 0, d = e.length; c < d; c++)b = e[c], b.status === a && f.push(b); return f }, e.prototype.getQueuedFiles = function () { return this.getFilesWithStatus(e.QUEUED) }, e.prototype.getUploadingFiles = function () { return this.getFilesWithStatus(e.UPLOADING) }, e.prototype.getAddedFiles = function () { return this.getFilesWithStatus(e.ADDED) }, e.prototype.getActiveFiles = function () { var a, b, c, d, f; for (d = this.files, f = [], b = 0, c = d.length; b < c; b++)a = d[b], a.status !== e.UPLOADING && a.status !== e.QUEUED || f.push(a); return f }, e.prototype.init = function () { var a, b, c, d, f, g, h; for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(e.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (c = function (a) { return function () { return a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function () { var b, d, e, f; if (d = a.hiddenFileInput.files, d.length) for (e = 0, f = d.length; e < f; e++)b = d[e], a.addFile(b); return a.emit("addedfiles", d), c() }) } }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, d = 0, f = h.length; d < f; d++)a = h[d], this.on(a, this.options[a]); return this.on("uploadprogress", function (a) { return function () { return a.updateTotalUploadProgress() } }(this)), this.on("removedfile", function (a) { return function () { return a.updateTotalUploadProgress() } }(this)), this.on("canceled", function (a) { return function (b) { return a.emit("complete", b) } }(this)), this.on("complete", function (a) { return function (b) { if (0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length) return setTimeout(function () { return a.emit("queuecomplete") }, 0) } }(this)), b = function (a) { return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1 }, this.listeners = [{ element: this.element, events: { dragstart: function (a) { return function (b) { return a.emit("dragstart", b) } }(this), dragenter: function (a) { return function (c) { return b(c), a.emit("dragenter", c) } }(this), dragover: function (a) { return function (c) { var d; try { d = c.dataTransfer.effectAllowed } catch (a) { } return c.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", b(c), a.emit("dragover", c) } }(this), dragleave: function (a) { return function (b) { return a.emit("dragleave", b) } }(this), drop: function (a) { return function (c) { return b(c), a.drop(c) } }(this), dragend: function (a) { return function (b) { return a.emit("dragend", b) } }(this) } }], this.clickableElements.forEach(function (a) { return function (b) { return a.listeners.push({ element: b, events: { click: function (c) { return (b !== a.element || c.target === a.element || e.elementInside(c.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0 } } }) } }(this)), this.enable(), this.options.init.call(this) }, e.prototype.destroy = function () { var a; return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, e.instances.splice(e.instances.indexOf(this), 1) }, e.prototype.updateTotalUploadProgress = function () { var a, b, c, d, e, f, g, h; if (d = 0, c = 0, a = this.getActiveFiles(), a.length) { for (h = this.getActiveFiles(), f = 0, g = h.length; f < g; f++)b = h[f], d += b.upload.bytesSent, c += b.upload.total; e = 100 * d / c } else e = 100; return this.emit("totaluploadprogress", e, c, d) }, e.prototype._getParamName = function (a) { return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "") }, e.prototype._renameFilename = function (a) { return "function" != typeof this.options.renameFilename ? a : this.options.renameFilename(a) }, e.prototype.getFallbackForm = function () { var a, b, c, d; return (a = this.getExistingFallback()) ? a : (c = '<div class="dz-fallback">', this.options.dictFallbackText && (c += "<p>" + this.options.dictFallbackText + "</p>"), c += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', b = e.createElement(c), "FORM" !== this.element.tagName ? (d = e.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), d.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != d ? d : b) }, e.prototype.getExistingFallback = function () { var a, b, c, d, e, f; for (b = function (a) { var b, c, d; for (c = 0, d = a.length; c < d; c++)if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b }, f = ["div", "form"], d = 0, e = f.length; d < e; d++)if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a }, e.prototype.setupEventListeners = function () { var a, b, c, d, e, f, g; for (f = this.listeners, g = [], d = 0, e = f.length; d < e; d++)a = f[d], g.push(function () { var d, e; d = a.events, e = []; for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1)); return e }()); return g }, e.prototype.removeEventListeners = function () { var a, b, c, d, e, f, g; for (f = this.listeners, g = [], d = 0, e = f.length; d < e; d++)a = f[d], g.push(function () { var d, e; d = a.events, e = []; for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1)); return e }()); return g }, e.prototype.disable = function () { var a, b, c, d, e; for (this.clickableElements.forEach(function (a) { return a.classList.remove("dz-clickable") }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; b < c; b++)a = d[b], e.push(this.cancelUpload(a)); return e }, e.prototype.enable = function () { return this.clickableElements.forEach(function (a) { return a.classList.add("dz-clickable") }), this.setupEventListeners() }, e.prototype.filesize = function (a) { var b, c, d, e, f, g, h, i; if (d = 0, e = "b", a > 0) { for (g = ["TB", "GB", "MB", "KB", "b"], c = h = 0, i = g.length; h < i; c = ++h)if (f = g[c], b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) { d = a / Math.pow(this.options.filesizeBase, 4 - c), e = f; break } d = Math.round(10 * d) / 10 } return "<strong>" + d + "</strong> " + e }, e.prototype._updateMaxFilesReachedClass = function () { return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached") }, e.prototype.drop = function (a) { var b, c; a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, this.emit("addedfiles", b), b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b))) }, e.prototype.paste = function (a) { var b, c; if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0 }, e.prototype.handleFiles = function (a) { var b, c, d, e; for (e = [], c = 0, d = a.length; c < d; c++)b = a[c], e.push(this.addFile(b)); return e }, e.prototype._addFilesFromItems = function (a) { var b, c, d, e, f; for (f = [], d = 0, e = a.length; d < e; d++)c = a[d], null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? f.push(this.addFile(c.getAsFile())) : b.isDirectory ? f.push(this._addFilesFromDirectory(b, b.name)) : f.push(void 0) : null != c.getAsFile && (null == c.kind || "file" === c.kind) ? f.push(this.addFile(c.getAsFile())) : f.push(void 0); return f }, e.prototype._addFilesFromDirectory = function (a, b) { var c, d, e; return c = a.createReader(), d = function (a) { return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0 }, (e = function (a) { return function () { return c.readEntries(function (c) { var d, f, g; if (c.length > 0) { for (f = 0, g = c.length; f < g; f++)d = c[f], d.isFile ? d.file(function (c) { if (!a.options.ignoreHiddenFiles || "." !== c.name.substring(0, 1)) return c.fullPath = "" + b + "/" + c.name, a.addFile(c) }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name); e() } return null }, d) } }(this))() }, e.prototype.accept = function (a, b) { return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : e.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType) }, e.prototype.addFile = function (a) { return a.upload = { progress: 0, total: a.size, bytesSent: 0 }, this.files.push(a), a.status = e.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function (b) { return function (c) { return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass() } }(this)) }, e.prototype.enqueueFiles = function (a) { var b, c, d; for (c = 0, d = a.length; c < d; c++)b = a[c], this.enqueueFile(b); return null }, e.prototype.enqueueFile = function (a) { if (a.status !== e.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected."); if (a.status = e.QUEUED, this.options.autoProcessQueue) return setTimeout(function (a) { return function () { return a.processQueue() } }(this), 0) }, e.prototype._thumbnailQueue = [], e.prototype._processingThumbnail = !1, e.prototype._enqueueThumbnail = function (a) { if (this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(a), setTimeout(function (a) { return function () { return a._processThumbnailQueue() } }(this), 0) }, e.prototype._processThumbnailQueue = function () { if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function (a) { return function () { return a._processingThumbnail = !1, a._processThumbnailQueue() } }(this)) }, e.prototype.removeFile = function (a) { if (a.status === e.UPLOADING && this.cancelUpload(a), this.files = h(this.files, a), this.emit("removedfile", a), 0 === this.files.length) return this.emit("reset") }, e.prototype.removeAllFiles = function (a) { var b, c, d, f; for (null == a && (a = !1), f = this.files.slice(), c = 0, d = f.length; c < d; c++)b = f[c], (b.status !== e.UPLOADING || a) && this.removeFile(b); return null }, e.prototype.createThumbnail = function (a, b) { var c; return c = new FileReader, c.onload = function (d) { return function () { return "image/svg+xml" === a.type ? (d.emit("thumbnail", a, c.result), void (null != b && b())) : d.createThumbnailFromUrl(a, c.result, b) } }(this), c.readAsDataURL(a) }, e.prototype.createThumbnailFromUrl = function (a, b, c, d) { var e; return e = document.createElement("img"), d && (e.crossOrigin = d), e.onload = function (b) { return function () { var d, g, h, i, j, k, l, m; if (a.width = e.width, a.height = e.height, h = b.options.resize.call(b, a), null == h.trgWidth && (h.trgWidth = h.optWidth), null == h.trgHeight && (h.trgHeight = h.optHeight), d = document.createElement("canvas"), g = d.getContext("2d"), d.width = h.trgWidth, d.height = h.trgHeight, f(g, e, null != (j = h.srcX) ? j : 0, null != (k = h.srcY) ? k : 0, h.srcWidth, h.srcHeight, null != (l = h.trgX) ? l : 0, null != (m = h.trgY) ? m : 0, h.trgWidth, h.trgHeight), i = d.toDataURL("image/png"), b.emit("thumbnail", a, i), null != c) return c() } }(this), null != c && (e.onerror = c), e.src = b }, e.prototype.processQueue = function () { var a, b, c, d; if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) { if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c)); for (; a < b;) { if (!d.length) return; this.processFile(d.shift()), a++ } } }, e.prototype.processFile = function (a) { return this.processFiles([a]) }, e.prototype.processFiles = function (a) { var b, c, d; for (c = 0, d = a.length; c < d; c++)b = a[c], b.processing = !0, b.status = e.UPLOADING, this.emit("processing", b); return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a) }, e.prototype._getFilesWithXhr = function (a) { var b, c; return c = function () { var c, d, e, f; for (e = this.files, f = [], c = 0, d = e.length; c < d; c++)b = e[c], b.xhr === a && f.push(b); return f }.call(this) }, e.prototype.cancelUpload = function (a) { var b, c, d, f, g, h, i; if (a.status === e.UPLOADING) { for (c = this._getFilesWithXhr(a.xhr), d = 0, g = c.length; d < g; d++)b = c[d], b.status = e.CANCELED; for (a.xhr.abort(), f = 0, h = c.length; f < h; f++)b = c[f], this.emit("canceled", b); this.options.uploadMultiple && this.emit("canceledmultiple", c) } else (i = a.status) !== e.ADDED && i !== e.QUEUED || (a.status = e.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a])); if (this.options.autoProcessQueue) return this.processQueue() }, d = function () { var a, b; return b = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], "function" == typeof b ? b.apply(this, a) : b }, e.prototype.uploadFile = function (a) { return this.uploadFiles([a]) }, e.prototype.uploadFiles = function (a) { var b, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L; for (w = new XMLHttpRequest, x = 0, B = a.length; x < B; x++)b = a[x], b.xhr = w; p = d(this.options.method, a), u = d(this.options.url, a), w.open(p, u, !0), w.withCredentials = !!this.options.withCredentials, s = null, g = function (c) { return function () { var d, e, f; for (f = [], d = 0, e = a.length; d < e; d++)b = a[d], f.push(c._errorProcessing(a, s || c.options.dictResponseError.replace("{{statusCode}}", w.status), w)); return f } }(this), t = function (c) { return function (d) { var e, f, g, h, i, j, k, l, m; if (null != d) for (f = 100 * d.loaded / d.total, g = 0, j = a.length; g < j; g++)b = a[g], b.upload = { progress: f, total: d.total, bytesSent: d.loaded }; else { for (e = !0, f = 100, h = 0, k = a.length; h < k; h++)b = a[h], 100 === b.upload.progress && b.upload.bytesSent === b.upload.total || (e = !1), b.upload.progress = f, b.upload.bytesSent = b.upload.total; if (e) return } for (m = [], i = 0, l = a.length; i < l; i++)b = a[i], m.push(c.emit("uploadprogress", b, f, b.upload.bytesSent)); return m } }(this), w.onload = function (b) { return function (c) { var d; if (a[0].status !== e.CANCELED && 4 === w.readyState) { if (s = w.responseText, w.getResponseHeader("content-type") && ~w.getResponseHeader("content-type").indexOf("application/json")) try { s = JSON.parse(s) } catch (a) { c = a, s = "Invalid JSON response from server." } return t(), 200 <= (d = w.status) && d < 300 ? b._finished(a, s, c) : g() } } }(this), w.onerror = function (b) { return function () { if (a[0].status !== e.CANCELED) return g() } }(this), r = null != (G = w.upload) ? G : w, r.onprogress = t, j = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }, this.options.headers && c(j, this.options.headers); for (h in j) i = j[h], i && w.setRequestHeader(h, i); if (f = new FormData, this.options.params) { H = this.options.params; for (o in H) v = H[o], f.append(o, v) } for (y = 0, C = a.length; y < C; y++)b = a[y], this.emit("sending", b, w, f); if (this.options.uploadMultiple && this.emit("sendingmultiple", a, w, f), "FORM" === this.element.tagName) for (I = this.element.querySelectorAll("input, textarea, select, button"), z = 0, D = I.length; z < D; z++)if (l = I[z], m = l.getAttribute("name"), n = l.getAttribute("type"), "SELECT" === l.tagName && l.hasAttribute("multiple")) for (J = l.options, A = 0, E = J.length; A < E; A++)q = J[A], q.selected && f.append(m, q.value); else (!n || "checkbox" !== (K = n.toLowerCase()) && "radio" !== K || l.checked) && f.append(m, l.value); for (k = F = 0, L = a.length - 1; 0 <= L ? F <= L : F >= L; k = 0 <= L ? ++F : --F)f.append(this._getParamName(k), a[k], this._renameFilename(a[k].name)); return this.submitRequest(w, f, a) }, e.prototype.submitRequest = function (a, b, c) { return a.send(b) }, e.prototype._finished = function (a, b, c) { var d, f, g; for (f = 0, g = a.length; f < g; f++)d = a[f], d.status = e.SUCCESS, this.emit("success", d, b, c), this.emit("complete", d); if (this.options.uploadMultiple && (this.emit("successmultiple", a, b, c), this.emit("completemultiple", a)), this.options.autoProcessQueue) return this.processQueue() }, e.prototype._errorProcessing = function (a, b, c) { var d, f, g; for (f = 0, g = a.length; f < g; f++)d = a[f], d.status = e.ERROR, this.emit("error", d, b, c), this.emit("complete", d); if (this.options.uploadMultiple && (this.emit("errormultiple", a, b, c), this.emit("completemultiple", a)), this.options.autoProcessQueue) return this.processQueue() }, e }(b), a.version = "4.3.0", a.options = {}, a.optionsForElement = function (b) { return b.getAttribute("id") ? a.options[c(b.getAttribute("id"))] : void 0 }, a.instances = [], a.forElement = function (a) { if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."); return a.dropzone }, a.autoDiscover = !0, a.discover = function () { var b, c, d, e, f, g; for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], b = function (a) { var b, c, e, f; for (f = [], c = 0, e = a.length; c < e; c++)b = a[c], /(^| )dropzone($| )/.test(b.className) ? f.push(d.push(b)) : f.push(void 0); return f }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; e < f; e++)c = d[e], a.optionsForElement(c) !== !1 ? g.push(new a(c)) : g.push(void 0); return g }, a.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], a.isBrowserSupported = function () { var b, c, d, e, f; if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (f = a.blacklistedBrowsers, d = 0, e = f.length; d < e; d++)c = f[d], c.test(navigator.userAgent) && (b = !1); else b = !1; else b = !1; return b }, h = function (a, b) { var c, d, e, f; for (f = [], d = 0, e = a.length; d < e; d++)c = a[d], c !== b && f.push(c); return f }, c = function (a) { return a.replace(/[\-_](\w)/g, function (a) { return a.charAt(1).toUpperCase() }) }, a.createElement = function (a) { var b; return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0] }, a.elementInside = function (a, b) { if (a === b) return !0; for (; a = a.parentNode;)if (a === b) return !0; return !1 }, a.getElement = function (a, b) { var c; if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element."); return c }, a.getElements = function (a, b) { var c, d, e, f, g, h, i, j; if (a instanceof Array) { e = []; try { for (f = 0, h = a.length; f < h; f++)d = a[f], e.push(this.getElement(d, b)) } catch (a) { c = a, e = null } } else if ("string" == typeof a) for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; g < i; g++)d = j[g], e.push(d); else null != a.nodeType && (e = [a]); if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."); return e }, a.confirm = function (a, b, c) { return window.confirm(a) ? b() : null != c ? c() : void 0 }, a.isValidFile = function (a, b) { var c, d, e, f, g; if (!b) return !0; for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; f < g; f++)if (e = b[f], e = e.trim(), "." === e.charAt(0)) { if (a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length) !== -1) return !0 } else if (/\/\*$/.test(e)) { if (c === e.replace(/\/.*$/, "")) return !0 } else if (d === e) return !0; return !1 }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (b) { return this.each(function () { return new a(this, b) }) }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", e = function (a) { var b, c, d, e, f, g, h, i, j, k; for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;)b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1; return j = i / g, 0 === j ? 1 : j }, f = function (a, b, c, d, f, g, h, i, j, k) { var l; return l = e(b), a.drawImage(b, c, d, f, g, h, i, j, k / l) }, d = function (a, b) { var c, d, e, f, g, h, i, j, k; if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function (c) { if ("readystatechange" !== c.type || "complete" === d.readyState) return ("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0 }, g = function () { var a; try { j.doScroll("left") } catch (b) { return a = b, void setTimeout(g, 50) } return f("poll") }, "complete" !== d.readyState) { if (d.createEventObject && j.doScroll) { try { k = !a.frameElement } catch (a) { } k && g() } return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1) } }, a._autoDiscoverFunction = function () { if (a.autoDiscover) return a.discover() }, d(window, a._autoDiscoverFunction) }).call(this);



/*!
 * Bootstrap-select v1.14.0-beta3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
!function (e, t) { void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery) }(this, function (e) { !function ($) { "use strict"; var M = ["sanitize", "whiteList", "sanitizeFn"], W = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], P = { "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, B = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, R = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i, U = ["title", "placeholder"]; function S(e, t, i) { if (i && "function" == typeof i) return i(e); for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)for (var l = e[n].querySelectorAll("*"), r = 0, a = l.length; r < a; r++) { var c = l[r], d = c.nodeName.toLowerCase(); if (-1 === s.indexOf(d)) c.parentNode.removeChild(c); else for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) { var m = h[u]; !function (e, t) { var i = e.nodeName.toLowerCase(); if (-1 !== $.inArray(i, t)) return -1 === $.inArray(i, W) || Boolean(e.nodeValue.match(B) || e.nodeValue.match(R)); for (var s = $(t).filter(function (e, t) { return t instanceof RegExp }), n = 0, o = s.length; n < o; n++)if (i.match(s[n])) return 1 }(m, p) && c.removeAttribute(m.nodeName) } } } function d(t) { var i, s = {}; return U.forEach(function (e) { (i = t.attr(e)) && (s[e] = i) }), !s.placeholder && s.title && (s.placeholder = s.title), s } if (!("classList" in document.createElement("_")) && "Element" in (i = window)) { var t = "classList", e = "prototype", i = i.Element[e], s = Object, n = function () { var i = $(this); return { add: function (e) { return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e) }, remove: function (e) { return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e) }, toggle: function (e, t) { return i.toggleClass(e, t) }, contains: function (e) { return i.hasClass(e) } } }; if (s.defineProperty) { var o = { get: n, enumerable: !0, configurable: !0 }; try { s.defineProperty(i, t, o) } catch (e) { void 0 !== e.number && -2146823252 !== e.number || (o.enumerable = !1, s.defineProperty(i, t, o)) } } else s[e].__defineGetter__ && i.__defineGetter__(t, n) } var l, r, a, c, o = document.createElement("_"); function h(e) { if (null == this) throw new TypeError; var t = String(this); if (e && "[object RegExp]" == c.call(e)) throw new TypeError; var i = t.length, s = String(e), n = s.length, e = 1 < arguments.length ? arguments[1] : void 0, e = e ? Number(e) : 0, o = (e != e && (e = 0), Math.min(Math.max(e, 0), i)); if (i < n + o) return !1; for (var l = -1; ++l < n;)if (t.charCodeAt(o + l) != s.charCodeAt(l)) return !1; return !0 } function y() { var e = this.selectpicker.main.data, t = (e = this.options.source.data || this.options.source.search ? Object.values(this.selectpicker.optionValuesDataMap) : e).filter(function (e) { return !!e.selected && (!this.options.hideDisabled || !e.disabled) }, this); if (this.options.source.data && !this.multiple && 1 < t.length) { for (var i = 0; i < t.length - 1; i++)t[i].selected = !1; t = [t[t.length - 1]] } return t } function x(e) { for (var t, i = [], s = e || y.call(this), n = 0, o = s.length; n < o; n++)(t = s[n]).disabled || i.push(void 0 === t.value ? t.text : t.value); return this.multiple ? i : i.length ? i[0] : null } o.classList.add("c1", "c2"), o.classList.contains("c2") || (l = DOMTokenList.prototype.add, r = DOMTokenList.prototype.remove, DOMTokenList.prototype.add = function () { Array.prototype.forEach.call(arguments, l.bind(this)) }, DOMTokenList.prototype.remove = function () { Array.prototype.forEach.call(arguments, r.bind(this)) }), o.classList.toggle("c3", !1), o.classList.contains("c3") && (a = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (e, t) { return 1 in arguments && !this.contains(e) == !t ? t : a.call(this, e) }), o = null, Object.values = "function" == typeof Object.values ? Object.values : function (t) { return Object.keys(t).map(function (e) { return t[e] }) }, String.prototype.startsWith || (c = {}.toString, Object.defineProperty ? Object.defineProperty(String.prototype, "startsWith", { value: h, configurable: !0, writable: !0 }) : String.prototype.startsWith = h); var p = { useDefault: !1, _set: $.valHooks.select.set }, E = ($.valHooks.select.set = function (e, t) { return t && !p.useDefault && $(e).data("selected", !0), p._set.apply(this, arguments) }, null), V = function () { try { return new Event("change"), !0 } catch (e) { return !1 } }(); function b(e, t, i, s) { for (var n = ["display", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) { var r = n[l], a = e[r]; if (a && (a = a.toString(), "display" === r && (a = a.replace(/<[^>]+>/g, "")), a = (a = s ? u(a) : a).toUpperCase(), o = "function" == typeof i ? i(a, t) : "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break } return o } function v(e) { return parseInt(e, 10) || 0 } $.fn.triggerNative = function (e) { var t, i = this[0]; i.dispatchEvent && (V ? t = new Event(e, { bubbles: !0 }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) }; var j = { "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C", "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i", "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O", "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S", "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017f": "s" }, _ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, F = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g"); function G(e) { return j[e] } function u(e) { return (e = e.toString()) && e.replace(_, G).replace(F, "") } f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, s = "(?:" + Object.keys(f).join("|") + ")", q = RegExp(s), K = RegExp(s, "g"); var f, q, K, k = function (e) { return q.test(e = null == e ? "" : "" + e) ? e.replace(K, Q) : e }; function Q(e) { return f[e] } var Y = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" }, Z = 27, J = 13, w = 32, I = 9, C = 38, O = 40, m = window.Dropdown || bootstrap.Dropdown; function X() { var t; try { t = $.fn.dropdown.Constructor.VERSION } catch (e) { t = m.VERSION } return t } var g = { success: !1, major: "3" }; try { g.full = (X() || "").split(" ")[0].split("."), g.major = g.full[0], g.success = !0 } catch (e) { } var ee = 0, A = ".bs.select", T = { DISABLED: "disabled", DIVIDER: "divider", SHOW: "open", DROPUP: "dropup", MENU: "dropdown-menu", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", BUTTONCLASS: "btn-default", POPOVERHEADER: "popover-title", ICONBASE: "glyphicon", TICKICON: "glyphicon-ok" }, z = { MENU: "." + T.MENU, DATA_TOGGLE: 'data-toggle="dropdown"' }, D = { div: document.createElement("div"), span: document.createElement("span"), i: document.createElement("i"), subtext: document.createElement("small"), a: document.createElement("a"), li: document.createElement("li"), whitespace: document.createTextNode("\xa0"), fragment: document.createDocumentFragment(), option: document.createElement("option") }, te = (D.selectedOption = D.option.cloneNode(!1), D.selectedOption.setAttribute("selected", !0), D.noResults = D.li.cloneNode(!1), D.noResults.className = "no-results", D.a.setAttribute("role", "option"), D.a.className = "dropdown-item", D.subtext.className = "text-muted", D.text = D.span.cloneNode(!1), D.text.className = "text", D.checkMark = D.span.cloneNode(!1), new RegExp(C + "|" + O)), ie = new RegExp("^" + I + "$|" + Z), L = { li: function (e, t, i) { var s = D.li.cloneNode(!1); return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s }, a: function (e, t, i) { var s = D.a.cloneNode(!0); return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(/\s+/)), i && s.setAttribute("style", i), s }, text: function (e, t) { var i, s, n = D.text.cloneNode(!1); if (e.content ? n.innerHTML = e.content : (n.textContent = e.text, e.icon && (i = D.whitespace.cloneNode(!1), (s = (!0 === t ? D.i : D.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, D.fragment.appendChild(s), D.fragment.appendChild(i)), e.subtext && ((s = D.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(s))), !0 === t) for (; 0 < n.childNodes.length;)D.fragment.appendChild(n.childNodes[0]); else D.fragment.appendChild(n); return D.fragment }, label: function (e) { var t, i, s = D.text.cloneNode(!1); return s.innerHTML = e.display, e.icon && (t = D.whitespace.cloneNode(!1), (i = D.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, D.fragment.appendChild(i), D.fragment.appendChild(t)), e.subtext && ((i = D.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(i)), D.fragment.appendChild(s), D.fragment } }, N = { fromOption: function (e, t) { var i; switch (t) { case "divider": i = "true" === e.getAttribute("data-divider"); break; case "text": i = e.textContent; break; case "label": i = e.label; break; case "style": i = e.style.cssText; break; case "title": i = e.title; break; default: i = e.getAttribute("data-" + t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (e, t) { return (t ? "-" : "") + e.toLowerCase() })) }return i }, fromDataSource: function (e, t) { var i; switch (t) { case "text": case "label": i = e.text || e.value || ""; break; default: i = e[t] }return i } }; function se(e, t) { e.length || (D.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + k(t) + '"'), this.$menuInner[0].firstChild.appendChild(D.noResults)) } function ne(e) { return !(e.hidden || this.options.hideDisabled && e.disabled) } function H(e, t) { var i = this; p.useDefault || ($.valHooks.select.set = p._set, p.useDefault = !0), this.$element = $(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = { main: { data: [], optionQueue: D.fragment.cloneNode(!1), hasMore: !1 }, search: { data: [], hasMore: !1 }, current: {}, view: {}, optionValuesDataMap: {}, isSearching: !1, keydown: { keyHistory: "", resetKeyHistory: { start: function () { return setTimeout(function () { i.selectpicker.keydown.keyHistory = "" }, 800) } } } }, this.sizeInfo = {}, "number" == typeof (e = this.options.windowPadding) && (this.options.windowPadding = [e, e, e, e]), this.val = H.prototype.val, this.render = H.prototype.render, this.refresh = H.prototype.refresh, this.setStyle = H.prototype.setStyle, this.selectAll = H.prototype.selectAll, this.deselectAll = H.prototype.deselectAll, this.destroy = H.prototype.destroy, this.remove = H.prototype.remove, this.show = H.prototype.show, this.hide = H.prototype.hide, this.init() } function oe(e) { var r, a = arguments, c = e; if ([].shift.apply(a), !g.success) { try { g.full = (X() || "").split(" ")[0].split(".") } catch (e) { H.BootstrapVersion ? g.full = H.BootstrapVersion.split(" ")[0].split(".") : (g.full = [g.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)) } g.major = g.full[0], g.success = !0 } if ("4" <= g.major) { var t = []; H.DEFAULTS.style === T.BUTTONCLASS && t.push({ name: "style", className: "BUTTONCLASS" }), H.DEFAULTS.iconBase === T.ICONBASE && t.push({ name: "iconBase", className: "ICONBASE" }), H.DEFAULTS.tickIcon === T.TICKICON && t.push({ name: "tickIcon", className: "TICKICON" }), T.DIVIDER = "dropdown-divider", T.SHOW = "show", T.BUTTONCLASS = "btn-light", T.POPOVERHEADER = "popover-header", T.ICONBASE = "", T.TICKICON = "bs-ok-default"; for (var i = 0; i < t.length; i++) { e = t[i]; H.DEFAULTS[e.name] = T[e.className] } } "4" < g.major && (z.DATA_TOGGLE = 'data-bs-toggle="dropdown"'); var s = this.each(function () { var e = $(this); if (e.is("select")) { var t = e.data("selectpicker"), i = "object" == typeof c && c; if (i.title && (i.placeholder = i.title), t) { if (i) for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t.options[s] = i[s]) } else { var n, o = e.data(); for (n in o) Object.prototype.hasOwnProperty.call(o, n) && -1 !== $.inArray(n, M) && delete o[n]; var l = $.extend({}, H.DEFAULTS, $.fn.selectpicker.defaults || {}, d(e), o, i); l.template = $.extend({}, H.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, o.template, i.template), l.source = $.extend({}, H.DEFAULTS.source, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.source : {}, i.source), e.data("selectpicker", t = new H(this, l)) } "string" == typeof c && (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]) } }); return void 0 !== r ? r : s } H.VERSION = "1.14.0-beta3", H.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function (e, t) { return 1 == e ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function (e, t) { return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", source: { pageSize: 40 }, chunkSize: 40, doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: T.BUTTONCLASS, size: "auto", title: null, placeholder: null, allowClear: !1, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: T.ICONBASE, tickIcon: T.TICKICON, showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !0, dropdownAlignRight: !1, windowPadding: 0, virtualScroll: 600, display: !1, sanitize: !0, sanitizeFn: null, whiteList: P }, H.prototype = { constructor: H, init: function () { var i = this, e = this.$element.attr("id"), t = this.$element[0], s = t.form; ee++, this.selectId = "bs-select-" + ee, t.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), t.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), s && null === t.form && (s.id || (s.id = "form-" + this.selectId), t.setAttribute("form", s.id)), this.$button = this.$newElement.children("button"), this.options.allowClear && (this.$clearButton = this.$button.children(".bs-select-clear-selected")), this.$menu = this.$newElement.children(z.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), t.classList.remove("bs-select-hidden"), this.fetchData(function () { i.render(!0), i.buildList(), requestAnimationFrame(function () { i.$element.trigger("loaded" + A) }) }), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(T.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), 4 < g.major && (this.dropdown = new m(this.$button[0])), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + A, function () { var e, t; i.isVirtual() && (t = (e = i.$menuInner[0]).firstChild.cloneNode(!1), e.replaceChild(t, e.firstChild), e.scrollTop = 0) }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function (e) { i.$element.trigger("hide" + A, e) }, "hidden.bs.dropdown": function (e) { i.$element.trigger("hidden" + A, e) }, "show.bs.dropdown": function (e) { i.$element.trigger("show" + A, e) }, "shown.bs.dropdown": function (e) { i.$element.trigger("shown" + A, e) } }), t.hasAttribute("required") && this.$element.on("invalid" + A, function () { i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + A + ".invalid", function () { i.$element.val(i.$element.val()).off("shown" + A + ".invalid") }).on("rendered" + A, function () { this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + A) }), i.$button.on("blur" + A, function () { i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + A) }) }), s && $(s).on("reset" + A, function () { requestAnimationFrame(function () { i.render() }) }) }, createDropdown: function () { var e = this.multiple || this.options.showTick ? " show-tick" : "", t = this.multiple ? ' aria-multiselectable="true"' : "", i = "", s = this.autofocus ? " autofocus" : ""; g.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn"); var n = "", o = "", l = "", r = "", a = ""; return this.options.header && (n = '<div class="' + T.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (o = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + k(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' + T.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + T.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (r = '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' + T.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), this.options.allowClear && (a = '<span class="close bs-select-clear-selected" title="' + this.options.deselectAllText + '"><span>&times;</span>'), e = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + z.DATA_TOGGLE + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' + a + "</span>" + ("4" <= g.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + T.MENU + " " + ("4" <= g.major ? "" : T.SHOW) + '">' + n + o + l + '<div class="inner ' + T.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + T.MENU + " inner " + ("4" <= g.major ? T.SHOW : "") + '" role="presentation"></ul></div>' + r + "</div></div>", $(e) }, setPositionData: function () { this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1; for (var e = 0; e < this.selectpicker.current.data.length; e++) { var t = this.selectpicker.current.data[e], i = !0; "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height } }, isVirtual: function () { return !1 !== this.options.virtualScroll && this.selectpicker.main.data.length >= this.options.virtualScroll || !0 === this.options.virtualScroll }, createView: function (y, e, t) { var x = this, i = 0; function E(e, t) { var i, s = x.selectpicker.current.data.length, n = [], o = !0, l = x.isVirtual(); x.selectpicker.view.scrollTop = e; for (var r, a = x.options.chunkSize, c = Math.ceil(s / a) || 1, d = 0; d < c; d++) { var h = d === c - 1 ? s : (d + 1) * a; if (n[d] = [d * a + (d ? 1 : 0), h], !s) break; void 0 === i && e - 1 <= x.selectpicker.current.data[h - 1].position - x.sizeInfo.menuInnerHeight && (i = d) } if (void 0 === i && (i = 0), g = [x.selectpicker.view.position0, x.selectpicker.view.position1], p = Math.max(0, i - 1), f = Math.min(c - 1, i + 1), x.selectpicker.view.position0 = !1 !== l && Math.max(0, n[p][0]) || 0, x.selectpicker.view.position1 = !1 === l ? s : Math.min(s, n[f][1]) || 0, p = g[0] !== x.selectpicker.view.position0 || g[1] !== x.selectpicker.view.position1, void 0 !== x.activeElement && (t && (x.activeElement !== x.selectedElement && x.defocusItem(x.activeElement), x.activeElement = void 0), x.activeElement !== x.selectedElement && x.defocusItem(x.selectedElement)), void 0 !== x.prevActiveElement && x.prevActiveElement !== x.activeElement && x.prevActiveElement !== x.selectedElement && x.defocusItem(x.prevActiveElement), t || p || x.selectpicker.current.hasMore) { if (f = x.selectpicker.view.visibleElements ? x.selectpicker.view.visibleElements.slice() : [], x.selectpicker.view.visibleElements = !1 === l ? x.selectpicker.current.elements : x.selectpicker.current.elements.slice(x.selectpicker.view.position0, x.selectpicker.view.position1), x.setOptionStatus(), (y || !1 === l && t) && (g = f, r = x.selectpicker.view.visibleElements, o = !(g.length === r.length && g.every(function (e, t) { return e === r[t] }))), (t || !0 === l) && o) { var p = x.$menuInner[0], u = document.createDocumentFragment(), f = p.firstChild.cloneNode(!1), m = x.selectpicker.view.visibleElements, v = []; p.replaceChild(f, p.firstChild); for (var g, d = 0, b = m.length; d < b; d++) { var w, k, I = m[d]; x.options.sanitize && (w = I.lastChild) && (k = x.selectpicker.current.data[d + x.selectpicker.view.position0]) && k.content && !k.sanitized && (v.push(w), k.sanitized = !0), u.appendChild(I) } x.options.sanitize && v.length && S(v, x.options.whiteList, x.options.sanitizeFn), !0 === l ? (g = 0 === x.selectpicker.view.position0 ? 0 : x.selectpicker.current.data[x.selectpicker.view.position0 - 1].position, o = x.selectpicker.view.position1 > s - 1 ? 0 : x.selectpicker.current.data[s - 1].position - x.selectpicker.current.data[x.selectpicker.view.position1 - 1].position, p.firstChild.style.marginTop = g + "px", p.firstChild.style.marginBottom = o + "px") : (p.firstChild.style.marginTop = 0, p.firstChild.style.marginBottom = 0), p.firstChild.appendChild(u), !0 === l && x.sizeInfo.hasScrollBar && (f = p.firstChild.offsetWidth, t && f < x.sizeInfo.menuInnerInnerWidth && x.sizeInfo.totalMenuWidth > x.sizeInfo.selectWidth ? p.firstChild.style.minWidth = x.sizeInfo.menuInnerInnerWidth + "px" : f > x.sizeInfo.menuInnerInnerWidth && (x.$menu[0].style.minWidth = 0, (g = p.firstChild.offsetWidth) > x.sizeInfo.menuInnerInnerWidth && (x.sizeInfo.menuInnerInnerWidth = g, p.firstChild.style.minWidth = x.sizeInfo.menuInnerInnerWidth + "px"), x.$menu[0].style.minWidth = "")) } (!y && x.options.source.data || y && x.options.source.search) && x.selectpicker.current.hasMore && i === c - 1 && 0 < e && (o = Math.floor(i * x.options.chunkSize / x.options.source.pageSize) + 2, x.fetchData(function () { x.render(), x.buildList(s, y), x.setPositionData(), E(e) }, y ? "search" : "data", o, y ? x.selectpicker.search.previousValue : void 0)) } x.prevActiveElement = x.activeElement, x.options.liveSearch ? y && t && (x.selectpicker.view.canHighlight[l = 0] || (l = 1 + x.selectpicker.view.canHighlight.slice(1).indexOf(!0)), f = x.selectpicker.view.visibleElements[l], x.defocusItem(x.selectpicker.view.currentActive), x.activeElement = (x.selectpicker.current.data[l] || {}).element, x.focusItem(f)) : x.$menuInner.trigger("focus") } this.selectpicker.isSearching = y, this.selectpicker.current = y ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), e && (t ? i = this.$menuInner[0].scrollTop : x.multiple || "number" == typeof (t = ((e = x.$element[0]).options[e.selectedIndex] || {}).liIndex) && !1 !== x.options.size && (t = (e = x.selectpicker.main.data[t]) && e.position) && (i = t - (x.sizeInfo.menuInnerHeight + x.sizeInfo.liHeight) / 2)), E(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (e, t) { x.noScroll || E(this.scrollTop, t), x.noScroll = !1 }), $(window).off("resize" + A + "." + this.selectId + ".createView").on("resize" + A + "." + this.selectId + ".createView", function () { x.$newElement.hasClass(T.SHOW) && E(x.$menuInner[0].scrollTop) }) }, focusItem: function (e, t, i) { var s; e && (t = t || this.selectpicker.current.data[this.selectpicker.current.elements.indexOf(this.activeElement)], (s = e.firstChild) && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active")))) }, defocusItem: function (e) { e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active")) }, setPlaceholder: function () { var e, t, i, s, n, o, l, r = this, a = !1; return !this.options.placeholder && !this.options.allowClear || this.multiple || (this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = this.$element[0], t = !(a = !0), i = !this.selectpicker.view.titleOption.parentNode, s = e.selectedIndex, n = e.options[s], o = (o = e.querySelector("select > *:not(:disabled)")) ? o.index : 0, l = (l = window.performance && window.performance.getEntriesByType("navigation")) && l.length ? "back_forward" !== l[0].type : 2 !== window.performance.navigation.type, i && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", t = !n || s === o && !1 === n.defaultSelected && void 0 === this.$element.data("selected")), !i && 0 === this.selectpicker.view.titleOption.index || e.insertBefore(this.selectpicker.view.titleOption, e.firstChild), t && l ? e.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function () { r.selectpicker.view.displayedValue !== e.value && r.render() })), a }, fetchData: function (n, o, e, t) { e = e || 1, o = o || "data"; var l, r = this, i = this.options.source[o]; i ? (this.options.virtualScroll = !0, "function" == typeof i ? i.call(this, function (e, t, i) { var s = r.selectpicker["search" === o ? "search" : "main"]; s.hasMore = t, s.totalItems = i, l = r.buildData(e, o), n.call(r, l), r.$element.trigger("fetched" + A) }, e, t) : Array.isArray(i) && (l = r.buildData(i, o), n.call(r, l))) : (l = this.buildData(!1, o), n.call(r, l)) }, buildData: function (h, e) { var o = this, p = !1 === h ? N.fromOption : N.fromDataSource, u = ':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])', f = [], l = this.selectpicker.main.data ? this.selectpicker.main.data.length : 0, m = 0, v = this.setPlaceholder() && !h ? 1 : 0, t = ("search" === e && (l = this.selectpicker.search.data.length), this.options.hideDisabled && (u += ":not(:disabled)"), h ? h.filter(ne, this) : this.$element[0].querySelectorAll("select > *" + u)); function g(e) { var t = f[f.length - 1]; t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", f.push(e)) } function b(e, t) { var i, s, n; (t = t || {}).divider = p(e, "divider"), !0 === t.divider ? g({ optID: t.optID }) : (i = f.length + l, s = (s = p(e, "style")) ? k(s) : "", n = (e.className || "") + (t.optgroupClass || ""), t.optID && (n = "opt " + n), t.optionClass = n.trim(), t.inlineStyle = s, t.text = p(e, "text"), t.title = p(e, "title"), t.content = p(e, "content"), t.tokens = p(e, "tokens"), t.subtext = p(e, "subtext"), t.icon = p(e, "icon"), t.display = t.content || t.text, t.value = void 0 === e.value ? e.text : e.value, t.type = "option", t.index = i, t.option = e.option || e, t.option.liIndex = i, t.selected = !!e.selected, t.disabled = t.disabled || !!e.disabled, !1 !== h && (o.selectpicker.optionValuesDataMap[t.value] ? t = $.extend(o.selectpicker.optionValuesDataMap[t.value], t) : o.selectpicker.optionValuesDataMap[t.value] = t), f.push(t)) } function i(e, t) { var i = t[e], s = !(e - 1 < v) && t[e - 1], t = t[e + 1], n = h ? i.children.filter(ne, this) : i.querySelectorAll("option" + u); if (n.length) { var o, l, r = { display: k(p(w, "label")), subtext: p(i, "subtext"), icon: p(i, "icon"), type: "optgroup-label", optgroupClass: " " + (i.className || ""), optgroup: i }; m++, s && g({ optID: m }), r.optID = m, f.push(r); for (var a = 0, c = n.length; a < c; a++) { var d = n[a]; 0 === a && (l = (o = f.length - 1) + c), b(d, { headerIndex: o, lastIndex: l, optID: r.optID, optgroupClass: r.optgroupClass, disabled: i.disabled }) } t && g({ optID: m }) } } for (var s = t.length, n = v; n < s; n++) { var w = t[n], r = w.children; r && r.length ? i.call(this, n, t) : b.call(this, w, {}) } switch (e) { case "data": this.selectpicker.main.data || (this.selectpicker.main.data = []), Array.prototype.push.apply(this.selectpicker.main.data, f), this.selectpicker.current.data = this.selectpicker.main.data; break; case "search": Array.prototype.push.apply(this.selectpicker.search.data, f) }return f }, buildList: function (e, t) { var i = this, s = (t ? this.selectpicker.search : this.selectpicker.main).data, n = [], o = 0; !i.options.showTick && !i.multiple || D.checkMark.parentNode || (D.checkMark.className = this.options.iconBase + " " + i.options.tickIcon + " check-mark", D.a.appendChild(D.checkMark)); for (var l = s.length, r = e || 0; r < l; r++) { var a, c = s[r], d = (p = a = h = d = void 0, n), h = c, p = 0; switch (h.type) { case "divider": a = L.li(!1, T.DIVIDER, h.optID ? h.optID + "div" : void 0); break; case "option": (a = L.li(L.a(L.text.call(i, h), h.optionClass, h.inlineStyle), "", h.optID)).firstChild && (a.firstChild.id = i.selectId + "-" + h.index); break; case "optgroup-label": a = L.li(L.label.call(i, h), "dropdown-header" + h.optgroupClass, h.optID) }h.element ? h.element.innerHTML = a.innerHTML : h.element = a, d.push(h.element), h.display && (p += h.display.length), h.subtext && (p += h.subtext.length), h.icon && (p += 1), o < p && (o = p, i.selectpicker.view.widestOption = d[d.length - 1]) } e ? t ? Array.prototype.push.apply(this.selectpicker.search.elements, n) : (Array.prototype.push.apply(this.selectpicker.main.elements, n), this.selectpicker.current.elements = this.selectpicker.main.elements) : t ? this.selectpicker.search.elements = n : this.selectpicker.main.elements = this.selectpicker.current.elements = n }, findLis: function () { return this.$menuInner.find(".inner > li") }, render: function (e) { var i = this, t = this.$element[0], s = this.setPlaceholder() && 0 === t.selectedIndex, n = y.call(this), o = n.length, l = x.call(this, n), r = this.$button[0], a = r.querySelector(".filter-option-inner-inner"), c = document.createTextNode(this.options.multipleSeparator), d = D.fragment.cloneNode(!1), h = !1; if (this.options.source.data && e && (n.map(function e(t) { t.selected ? i.createOption(t, !0) : t.children && t.children.length && t.children.map(e) }), t.appendChild(this.selectpicker.main.optionQueue), s = s && 0 === t.selectedIndex), r.classList.toggle("bs-placeholder", i.multiple ? !o : !l && 0 !== l), i.multiple || 1 !== n.length || (i.selectpicker.view.displayedValue = l), "static" === this.options.selectedTextFormat) d = L.text.call(this, { text: this.options.placeholder }, !0); else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 0 < o && (1 < (e = this.options.selectedTextFormat.split(">")).length && o > e[1] || 1 === e.length && 2 <= o))) { if (!s) { for (var p = 0; p < o && p < 50; p++) { var u = n[p], f = {}; u && (this.multiple && 0 < p && d.appendChild(c.cloneNode(!1)), u.title ? f.text = u.title : u.content && i.options.showContent ? (f.content = u.content.toString(), h = !0) : (i.options.showIcon && (f.icon = u.icon), i.options.showSubtext && !i.multiple && u.subtext && (f.subtext = " " + u.subtext), f.text = u.text.trim()), d.appendChild(L.text.call(this, f, !0))) } 49 < o && d.appendChild(document.createTextNode("...")) } } else var t = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])', l = (this.options.hideDisabled && (t += ":not(:disabled)"), this.$element[0].querySelectorAll("select > option" + t + ", optgroup" + t + " option" + t).length), e = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, l) : this.options.countSelectedText, d = L.text.call(this, { text: e.replace("{0}", o.toString()).replace("{1}", l.toString()) }, !0); d.childNodes.length || (d = L.text.call(this, { text: this.options.placeholder || this.options.noneSelectedText }, !0)), r.title = d.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && h && S([d], i.options.whiteList, i.options.sanitizeFn), a.innerHTML = "", a.appendChild(d), g.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon") && (s = r.querySelector(".filter-expand"), (t = a.cloneNode(!0)).className = "filter-expand", s ? r.replaceChild(t, s) : r.appendChild(t)), this.$element.trigger("rendered" + A) }, setStyle: function (e, t) { var i = this.$button[0], s = this.$newElement[0], n = this.options.style.trim(); this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), g.major < 4 && (s.classList.add("bs3"), s.parentNode.classList && s.parentNode.classList.contains("input-group") && (s.previousElementSibling || s.nextElementSibling) && (s.previousElementSibling || s.nextElementSibling).classList.contains("input-group-addon") && s.classList.add("bs3-has-addon")), s = e ? e.trim() : n, "add" == t ? s && i.classList.add.apply(i.classList, s.split(" ")) : "remove" == t ? s && i.classList.remove.apply(i.classList, s.split(" ")) : (n && i.classList.remove.apply(i.classList, n.split(" ")), s && i.classList.add.apply(i.classList, s.split(" "))) }, liHeight: function (e) { if (e || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) { var t, e = D.div.cloneNode(!1), i = D.div.cloneNode(!1), s = D.div.cloneNode(!1), n = document.createElement("ul"), o = D.li.cloneNode(!1), l = D.li.cloneNode(!1), r = D.a.cloneNode(!1), a = D.span.cloneNode(!1), c = this.options.header && 0 < this.$menu.find("." + T.POPOVERHEADER).length ? this.$menu.find("." + T.POPOVERHEADER)[0].cloneNode(!0) : null, d = this.options.liveSearch ? D.div.cloneNode(!1) : null, h = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null, p = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null, u = this.$element[0].options[0]; if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, a.className = "text", r.className = "dropdown-item " + (u ? u.className : ""), e.className = this.$menu[0].parentNode.className + " " + T.SHOW, e.style.width = 0, "auto" === this.options.width && (i.style.minWidth = 0), i.className = T.MENU + " " + T.SHOW, s.className = "inner " + T.SHOW, n.className = T.MENU + " inner " + ("4" <= g.major ? T.SHOW : ""), o.className = T.DIVIDER, l.className = "dropdown-header", a.appendChild(document.createTextNode("\u200b")), this.selectpicker.current.data.length) for (var f = 0; f < this.selectpicker.current.data.length; f++) { var m = this.selectpicker.current.data[f]; if ("option" === m.type && "none" !== $(m.element.firstChild).css("display")) { t = m.element; break } } else t = D.li.cloneNode(!1), r.appendChild(a), t.appendChild(r); l.appendChild(a.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(t), n.appendChild(o), n.appendChild(l), c && i.appendChild(c), d && (u = document.createElement("input"), d.className = "bs-searchbox", u.className = "form-control", d.appendChild(u), i.appendChild(d)), h && i.appendChild(h), s.appendChild(n), i.appendChild(s), p && i.appendChild(p), e.appendChild(i), document.body.appendChild(e); r = t.offsetHeight, a = l ? l.offsetHeight : 0, u = c ? c.offsetHeight : 0, n = d ? d.offsetHeight : 0, l = h ? h.offsetHeight : 0, c = p ? p.offsetHeight : 0, d = $(o).outerHeight(!0), h = window.getComputedStyle(i), p = i.offsetWidth, o = { vert: v(h.paddingTop) + v(h.paddingBottom) + v(h.borderTopWidth) + v(h.borderBottomWidth), horiz: v(h.paddingLeft) + v(h.paddingRight) + v(h.borderLeftWidth) + v(h.borderRightWidth) }, h = { vert: o.vert + v(h.marginTop) + v(h.marginBottom) + 2, horiz: o.horiz + v(h.marginLeft) + v(h.marginRight) + 2 }; s.style.overflowY = "scroll", s = i.offsetWidth - p, document.body.removeChild(e), this.sizeInfo.liHeight = r, this.sizeInfo.dropdownHeaderHeight = a, this.sizeInfo.headerHeight = u, this.sizeInfo.searchHeight = n, this.sizeInfo.actionsHeight = l, this.sizeInfo.doneButtonHeight = c, this.sizeInfo.dividerHeight = d, this.sizeInfo.menuPadding = o, this.sizeInfo.menuExtras = h, this.sizeInfo.menuWidth = p, this.sizeInfo.menuInnerInnerWidth = p - o.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = s, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData() } }, getSelectPosition: function () { var e, t = $(window), i = this.$newElement.offset(), s = $(this.options.container), s = (this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = { top: 0, left: 0 }, this.options.windowPadding); this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1], this.sizeInfo.selectOffsetTop -= s[0], this.sizeInfo.selectOffsetLeft -= s[3] }, setMenuSize: function (e) { this.getSelectPosition(); var t, i, s, n, o, l, r = this.sizeInfo.selectWidth, a = this.sizeInfo.liHeight, c = this.sizeInfo.headerHeight, d = this.sizeInfo.searchHeight, h = this.sizeInfo.actionsHeight, p = this.sizeInfo.doneButtonHeight, u = this.sizeInfo.dividerHeight, f = this.sizeInfo.menuPadding, m = 0; if (this.options.dropupAuto && (l = a * this.selectpicker.current.data.length + f.vert, l = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (l = this.selectpicker.dropup), this.$newElement.toggleClass(T.DROPUP, l), this.selectpicker.dropup = l), "auto" === this.options.size) l = 3 < this.selectpicker.current.data.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = l + c + d + h + p, o = Math.max(l - f.vert, 0), t = (n = i = this.$newElement.hasClass(T.DROPUP) ? this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert : i) - c - d - h - p - f.vert; else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) { for (var v = 0; v < this.options.size; v++)"divider" === this.selectpicker.current.data[v].type && m++; t = (i = a * this.options.size + m * u + f.vert) - f.vert, n = i + c + d + h + p, s = o = "" } this.$menu.css({ "max-height": n + "px", overflow: "hidden", "min-height": s + "px" }), this.$menuInner.css({ "max-height": t + "px", overflow: "hidden auto", "min-height": o + "px" }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(T.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - r), this.dropdown && this.dropdown._popper && this.dropdown._popper.update() }, setSize: function (e) { var t, i; this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size && (t = this, i = $(window), this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () { return t.setMenuSize() }), "auto" === this.options.size ? i.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize").on("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize", function () { return t.setMenuSize() }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize")), this.createView(!1, !0, e) }, setWidth: function () { var i = this; "auto" === this.options.width ? requestAnimationFrame(function () { i.$menu.css("min-width", "0"), i.$element.on("loaded" + A, function () { i.liHeight(), i.setMenuSize(); var e = i.$newElement.clone().appendTo("body"), t = e.css("width", "auto").children("button").outerWidth(); e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px") }) }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width") }, selectPosition: function () { this.$bsContainer = $('<div class="bs-container" />'); function e(e) { var t = {}, i = l.options.display || !!$.fn.dropdown.Constructor.Default && $.fn.dropdown.Constructor.Default.display; l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(T.DROPUP, e.hasClass(T.DROPUP)), s = e.offset(), r.is("body") ? n = { top: 0, left: 0 } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), o = e.hasClass(T.DROPUP) ? 0 : e[0].offsetHeight, (g.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, l.$bsContainer.css(t) } var s, n, o, l = this, r = $(this.options.container); this.$button.on("click.bs.dropdown.data-api", function () { l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(T.SHOW, !l.$button.hasClass(T.SHOW)).append(l.$menu)) }), $(window).off("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId).on("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId, function () { l.$newElement.hasClass(T.SHOW) && e(l.$newElement) }), this.$element.on("hide" + A, function () { l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach() }) }, createOption: function (e, t) { var i, s = e.option || e; s && 1 !== s.nodeType && (i = (t ? D.selectedOption : D.option).cloneNode(!0), void 0 !== s.value && (i.value = s.value), i.textContent = s.text, i.selected = !0, void 0 !== s.liIndex ? i.liIndex = s.liIndex : t || (i.liIndex = e.index), e.option = i, this.selectpicker.main.optionQueue.appendChild(i)) }, setOptionStatus: function (e) { var t = this; if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length) { for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) { var s = t.selectpicker.current.data[i + t.selectpicker.view.position0]; s.option && (!0 !== e && t.setDisabled(s), t.setSelected(s)) } this.options.source.data && this.$element[0].appendChild(this.selectpicker.main.optionQueue) } }, setSelected: function (e, t) { t = void 0 === t ? e.selected : t; var i, s = e.element, n = void 0 !== this.activeElement, o = this.activeElement === s || t && !this.multiple && !n; s && (void 0 !== t && (e.selected = t, e.option && (e.option.selected = t)), t && this.options.source.data && this.createOption(e, !1), i = s.firstChild, t && (this.selectedElement = s), s.classList.toggle("selected", t), o ? (this.focusItem(s, e), this.selectpicker.view.currentActive = s, this.activeElement = s) : this.defocusItem(s), i && (i.classList.toggle("selected", t), t ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")), o || n || !t || void 0 === this.prevActiveElement || (e = this.prevActiveElement, this.defocusItem(e))) }, setDisabled: function (e) { var t, i = e.disabled, e = e.element; e && (t = e.firstChild, e.classList.toggle(T.DISABLED, i), t && ("4" <= g.major && t.classList.toggle(T.DISABLED, i), i ? (t.setAttribute("aria-disabled", i), t.setAttribute("tabindex", -1)) : (t.removeAttribute("aria-disabled"), t.setAttribute("tabindex", 0)))) }, isDisabled: function () { return this.$element[0].disabled }, checkDisabled: function () { this.isDisabled() ? (this.$newElement[0].classList.add(T.DISABLED), this.$button.addClass(T.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(T.DISABLED) && (this.$newElement[0].classList.remove(T.DISABLED), this.$button.removeClass(T.DISABLED).attr("aria-disabled", !1)) }, clickListener: function () { var I = this, t = $(document); function e() { (I.options.liveSearch ? I.$searchbox : I.$menuInner).trigger("focus") } function i() { I.dropdown && I.dropdown._popper && I.dropdown._popper.state ? e() : requestAnimationFrame(i) } t.data("spaceSelect", !1), this.$button.on("keyup", function (e) { /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1)) }), this.$newElement.on("show.bs.dropdown", function () { I.dropdown || "4" !== g.major || (I.dropdown = I.$button.data("bs.dropdown"), I.dropdown._menu = I.$menu[0]) }), this.$button.on("click.bs.dropdown.data-api", function (e) { var t, i, s; I.options.allowClear && (t = e.target, i = I.$clearButton[0], (t = /MSIE|Trident/.test(window.navigator.userAgent) ? document.elementFromPoint(e.clientX, e.clientY) : t) !== i && t.parentElement !== i || (e.stopImmediatePropagation(), I.multiple ? I.deselectAll() : (i = (t = I.$element[0]).value, e = t.selectedIndex, (s = !!(s = t.options[e]) && I.selectpicker.main.data[s.liIndex]) && I.setSelected(s, !1), t.selectedIndex = 0, E = [e, !1, i], I.$element.triggerNative("change")), I.$newElement.hasClass(T.SHOW) && (I.options.liveSearch && I.$searchbox.trigger("focus"), I.createView(!1)))), I.$newElement.hasClass(T.SHOW) || I.setSize() }), this.$element.on("shown" + A, function () { I.$menuInner[0].scrollTop !== I.selectpicker.view.scrollTop && (I.$menuInner[0].scrollTop = I.selectpicker.view.scrollTop), 3 < g.major ? requestAnimationFrame(i) : e() }), this.$menuInner.on("mouseenter", "li a", function (e) { var t = this.parentElement, i = I.isVirtual() ? I.selectpicker.view.position0 : 0, s = Array.prototype.indexOf.call(t.parentElement.children, t), s = I.selectpicker.current.data[s + i]; I.focusItem(t, s, !0) }), this.$menuInner.on("click", "li a", function (e, t) { var i = $(this), s = I.$element[0], n = I.isVirtual() ? I.selectpicker.view.position0 : 0, o = I.selectpicker.current.data[i.parent().index() + n], n = o.element, l = x.call(I), r = s.selectedIndex, a = s.options[r], a = !!a && I.selectpicker.main.data[a.liIndex], c = !0; if (I.multiple && 1 !== I.options.maxOptions && e.stopPropagation(), e.preventDefault(), !I.isDisabled() && !i.parent().hasClass(T.DISABLED)) { var e = o.option, i = $(e), d = e.selected, h = I.selectpicker.current.data.find(function (e) { return e.optID === o.optID && "optgroup-label" === e.type }), p = h ? h.optgroup : void 0, h = p instanceof Element ? N.fromOption : N.fromDataSource, u = p && p.children, f = parseInt(I.options.maxOptions), h = p && parseInt(h(p, "maxOptions")) || !1; if ((t = n === I.activeElement ? !0 : t) || (I.prevActiveElement = I.activeElement, I.activeElement = void 0), I.multiple && 1 !== f) { if (I.setSelected(o, !d), I.focusedParent.focus(), !1 !== f || !1 !== h) { var n = f < y.call(I).length, m = 0; if (p && p.children) for (var v = 0; v < p.children.length; v++)p.children[v].selected && m++; t = h < m; if (f && n || h && t) if (f && 1 === f) s.selectedIndex = -1, I.setOptionStatus(!0); else if (h && 1 === h) { for (v = 0; v < u.length; v++) { var g = u[v]; I.setSelected(I.selectpicker.current.data[g.liIndex], !1) } I.setSelected(o, !0) } else { var d = "string" == typeof I.options.maxOptionsText ? [I.options.maxOptionsText, I.options.maxOptionsText] : I.options.maxOptionsText, d = "function" == typeof d ? d(f, h) : d, b = d[0].replace("{n}", f), w = d[1].replace("{n}", h), k = $('<div class="notify"></div>'); d[2] && (b = b.replace("{var}", d[2][1 < f ? 0 : 1]), w = w.replace("{var}", d[2][1 < h ? 0 : 1])), I.$menu.append(k), f && n && (k.append($("<div>" + b + "</div>")), c = !1, I.$element.trigger("maxReached" + A)), h && t && (k.append($("<div>" + w + "</div>")), c = !1, I.$element.trigger("maxReachedGrp" + A)), setTimeout(function () { I.setSelected(o, !1) }, 10), k[0].classList.add("fadeOut"), setTimeout(function () { k.remove() }, 1050) } } } else a && I.setSelected(a, !1), I.setSelected(o, !0); I.options.source.data && I.$element[0].appendChild(I.selectpicker.main.optionQueue), !I.multiple || I.multiple && 1 === I.options.maxOptions ? I.$button.trigger("focus") : I.options.liveSearch && I.$searchbox.trigger("focus"), !c || !I.multiple && r === s.selectedIndex || (E = [e.index, i.prop("selected"), l], I.$element.triggerNative("change")) } }), this.$menu.on("click", "li." + T.DISABLED + " a, ." + T.POPOVERHEADER + ", ." + T.POPOVERHEADER + " :not(.close)", function (e) { e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), (I.options.liveSearch && !$(e.target).hasClass("close") ? I.$searchbox : I.$button).trigger("focus")) }), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) { e.preventDefault(), e.stopPropagation(), (I.options.liveSearch ? I.$searchbox : I.$button).trigger("focus") }), this.$menu.on("click", "." + T.POPOVERHEADER + " .close", function () { I.$button.trigger("click") }), this.$searchbox.on("click", function (e) { e.stopPropagation() }), this.$menu.on("click", ".actions-btn", function (e) { (I.options.liveSearch ? I.$searchbox : I.$button).trigger("focus"), e.preventDefault(), e.stopPropagation(), $(this).hasClass("bs-select-all") ? I.selectAll() : I.deselectAll() }), this.$button.on("focus" + A, function (e) { var t = I.$element[0].getAttribute("tabindex"); void 0 !== t && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", t), I.$element[0].setAttribute("tabindex", -1), I.selectpicker.view.tabindex = t) }).on("blur" + A, function (e) { void 0 !== I.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (I.$element[0].setAttribute("tabindex", I.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), I.selectpicker.view.tabindex = void 0) }), this.$element.on("change" + A, function () { I.render(), I.$element.trigger("changed" + A, E), E = null }).on("focus" + A, function () { I.options.mobile || I.$button[0].focus() }) }, liveSearchListener: function () { var p = this; this.$button.on("click.bs.dropdown.data-api", function () { p.$searchbox.val() && (p.$searchbox.val(""), p.selectpicker.search.previousValue = void 0) }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (e) { e.stopPropagation() }), this.$searchbox.on("input propertychange", function () { var t = p.$searchbox[0].value; if (p.selectpicker.search.elements = [], p.selectpicker.search.data = [], t) if (p.selectpicker.search.previousValue = t, p.options.source.search) p.fetchData(function (e) { p.render(), p.buildList(void 0, !0), p.noScroll = !0, p.$menuInner.scrollTop(0), p.createView(!0), se.call(p, e, t) }, "search", 0, t); else { var e = [], i = t.toUpperCase(), s = {}, n = [], o = p._searchStyle(), l = p.options.liveSearchNormalize; l && (i = u(i)); for (var r = 0; r < p.selectpicker.main.data.length; r++) { var a = p.selectpicker.main.data[r]; s[r] || (s[r] = b(a, i, o, l)), s[r] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[r] && "optgroup-label" !== a.type && n.push(r) } for (var r = 0, c = n.length; r < c; r++) { var d = n[r], h = n[r - 1], a = p.selectpicker.main.data[d], h = p.selectpicker.main.data[h]; ("divider" !== a.type || "divider" === a.type && h && "divider" !== h.type && c - 1 !== r) && (p.selectpicker.search.data.push(a), e.push(p.selectpicker.main.elements[d])) } p.activeElement = void 0, p.noScroll = !0, p.$menuInner.scrollTop(0), p.selectpicker.search.elements = e, p.createView(!0), se.call(p, e, t) } else p.selectpicker.search.previousValue && (p.$menuInner.scrollTop(0), p.createView(!1)) }) }, _searchStyle: function () { return this.options.liveSearchStyle || "contains" }, val: function (t) { var e = this.$element[0]; if (void 0 === t) return this.$element.val(); var i = y.call(this), s = x.call(this, i); E = [null, null, s], (t = Array.isArray(t) ? t : [t]).map(String); for (var n = 0; n < i.length; n++) { var o = i[n]; o && -1 === t.indexOf(String(o.value)) && this.setSelected(o, !1) } return this.selectpicker.main.data.filter(function (e) { return -1 !== t.indexOf(String(e.value)) && (this.setSelected(e, !0), !0) }, this), this.options.source.data && e.appendChild(this.selectpicker.main.optionQueue), this.$element.trigger("changed" + A, E), this.$newElement.hasClass(T.SHOW) && (this.multiple ? this.setOptionStatus(!0) : "number" == typeof (s = (e.options[e.selectedIndex] || {}).liIndex) && this.setSelected(this.selectpicker.current.data[s], !0)), this.render(), E = null, this.$element }, changeAll: function (e) { if (this.multiple) { void 0 === e && (e = !0); var t = this.$element[0], i = 0, s = 0, n = x.call(this); t.classList.add("bs-select-hidden"); for (var o = 0, l = this.selectpicker.current.data, r = l.length; o < r; o++) { var a = l[o], c = a.option; c && !a.disabled && "divider" !== a.type && (a.selected && i++, c.selected = e, !0 === (a.selected = e) && s++) } t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), E = [null, null, n], this.$element.triggerNative("change")) } }, selectAll: function () { return this.changeAll(!0) }, deselectAll: function () { return this.changeAll(!1) }, toggle: function (e, t) { var i = void 0 === t; (e = e || window.event) && e.stopPropagation(), !1 === i && (e = this.$newElement[0].classList.contains(T.SHOW), i = !0 === t && !1 === e || !1 === t && !0 === e), i && this.$button.trigger("click.bs.dropdown.data-api") }, open: function (e) { this.toggle(e, !0) }, close: function (e) { this.toggle(e, !1) }, keydown: function (e) { var t, i, s, n, o = $(this), l = o.hasClass("dropdown-toggle"), r = (l ? o.closest(".dropdown") : o.closest(z.MENU)).data("this"), a = r.findLis(), c = !1, l = e.which === I && !l && !r.options.selectOnTab, d = te.test(e.which) || l, h = r.$menuInner[0].scrollTop, p = !0 === r.isVirtual() ? r.selectpicker.view.position0 : 0; if (!(112 <= e.which && e.which <= 123)) if (!(t = r.$menu.hasClass(T.SHOW)) && (d || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (r.$button.trigger("click.bs.dropdown.data-api"), r.options.liveSearch)) r.$searchbox.trigger("focus"); else { if (e.which === Z && t && (e.preventDefault(), r.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), d) { if (!a.length) return; -1 !== (d = (i = r.activeElement) ? Array.prototype.indexOf.call(i.parentElement.children, i) : -1) && r.defocusItem(i), e.which === C ? (-1 !== d && d--, d + p < 0 && (d += a.length), r.selectpicker.view.canHighlight[d + p] || -1 === (d = r.selectpicker.view.canHighlight.slice(0, d + p).lastIndexOf(!0) - p) && (d = a.length - 1)) : e.which !== O && !l || (++d + p >= r.selectpicker.view.canHighlight.length && (d = r.selectpicker.view.firstHighlightIndex), r.selectpicker.view.canHighlight[d + p] || (d = d + 1 + r.selectpicker.view.canHighlight.slice(d + p + 1).indexOf(!0))), e.preventDefault(); var u = p + d; e.which === C ? 0 === p && d === a.length - 1 ? (r.$menuInner[0].scrollTop = r.$menuInner[0].scrollHeight, u = r.selectpicker.current.elements.length - 1) : (s = r.selectpicker.current.data[u]) && (c = (n = s.position - s.height) < h) : e.which !== O && !l || (d === r.selectpicker.view.firstHighlightIndex ? (r.$menuInner[0].scrollTop = 0, u = r.selectpicker.view.firstHighlightIndex) : (s = r.selectpicker.current.data[u]) && (c = h < (n = s.position - r.sizeInfo.menuInnerHeight))), i = r.selectpicker.current.elements[u], r.activeElement = (r.selectpicker.current.data[u] || {}).element, r.focusItem(i), r.selectpicker.view.currentActive = i, c && (r.$menuInner[0].scrollTop = n), (r.options.liveSearch ? r.$searchbox : o).trigger("focus") } else if (!o.is("input") && !ie.test(e.which) || e.which === w && r.selectpicker.keydown.keyHistory) { var f, m = []; e.preventDefault(), r.selectpicker.keydown.keyHistory += Y[e.which], r.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(r.selectpicker.keydown.resetKeyHistory.cancel), r.selectpicker.keydown.resetKeyHistory.cancel = r.selectpicker.keydown.resetKeyHistory.start(), f = r.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(f) && (f = f.charAt(0)); for (var v = 0; v < r.selectpicker.current.data.length; v++) { var g = r.selectpicker.current.data[v]; b(g, f, "startsWith", !0) && r.selectpicker.view.canHighlight[v] && m.push(g.element) } m.length && (p = 0, a.removeClass("active").find("a").removeClass("active"), 1 === f.length && (-1 === (p = m.indexOf(r.activeElement)) || p === m.length - 1 ? p = 0 : p++), l = m[p], c = 0 < h - (s = r.selectpicker.main.data[l]).position ? (n = s.position - s.height, !0) : (n = s.position - r.sizeInfo.menuInnerHeight, s.position > h + r.sizeInfo.menuInnerHeight), i = r.selectpicker.main.elements[l], r.activeElement = i, r.focusItem(i), i && i.firstChild.focus(), c && (r.$menuInner[0].scrollTop = n), o.trigger("focus")) } t && (e.which === w && !r.selectpicker.keydown.keyHistory || e.which === J || e.which === I && r.options.selectOnTab) && (e.which !== w && e.preventDefault(), r.options.liveSearch && e.which === w || (r.$menuInner.find(".active a").trigger("click", !0), o.trigger("focus"), r.options.liveSearch || (e.preventDefault(), $(document).data("spaceSelect", !0)))) } }, mobile: function () { this.options.mobile = !0, this.$element[0].classList.add("mobile-device") }, refresh: function () { var e = this, t = $.extend({}, this.options, d(this.$element), this.$element.data()); this.options = t, this.options.source.data ? (this.render(), this.buildList()) : this.fetchData(function () { e.render(), e.buildList() }), this.checkDisabled(), this.setStyle(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + A) }, hide: function () { this.$newElement.hide() }, show: function () { this.$newElement.show() }, remove: function () { this.$newElement.remove(), this.$element.remove() }, destroy: function () { this.$newElement.before(this.$element).remove(), (this.$bsContainer || this.$menu).remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(A).removeData("selectpicker").removeClass("bs-select-hidden selectpicker mobile-device"), $(window).off(A + "." + this.selectId) } }; var le = $.fn.selectpicker; function re() { return g.major < 5 ? $.fn.dropdown ? ($.fn.dropdown.Constructor._dataApiKeydownHandler || $.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments) : void 0 : m.dataApiKeydownHandler } $.fn.selectpicker = oe, $.fn.selectpicker.Constructor = H, $.fn.selectpicker.noConflict = function () { return $.fn.selectpicker = le, this }, $(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > [" + z.DATA_TOGGLE + "]", re).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", re).on("keydown" + A, ".bootstrap-select [" + z.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', H.prototype.keydown).on("focusin.modal", ".bootstrap-select [" + z.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) { e.stopPropagation() }), document.addEventListener("DOMContentLoaded", function () { $(".selectpicker").each(function () { var e = $(this); oe.call(e, e.data()) }) }) }(e) });
//# sourceMappingURL=bootstrap-select.min.js.map



/**
  * LC Lightbox - LITE
  * yet.. another jQuery lightbox.. or not?
  *
  * @version	: 	1.2.9
  * @copyright	:	Luca Montanari aka LCweb
  * @website	:	https://lcweb.it
  * @requires	:	jQuery v1.7 or later
  
  * Released under the MIT license
  */

(function ($) {
    lcl_objs = []; // array containing all initialized objects - useful for deeplinks

    lcl_shown = false; // know whether lightbox is shown
    lcl_is_active = false; // true when lightbox systems are acting (disable triggers)
    lcl_slideshow = undefined; // lightbox slideshow - setInterval object
    lcl_on_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // static vars avoiding useless parameters usage - related to currently opened lightbox - otherwise they are empty
    lcl_curr_obj = false; // store currently active object 
    lcl_curr_opts = false; // currently active instance settings
    lcl_curr_vars = false; // currently active instance settings

    lcl_deeplink_tracked = false; // flag to track url changes and initial reading once
    lcl_hashless_url = false; // page URL without eventual hashes
    lcl_url_hash = ''; // URL hashtag

    // lightbox structure
    var lb_code =
        '<div id="lcl_wrap" class="lcl_pre_show lcl_pre_first_el lcl_first_sizing lcl_is_resizing">' +
        '<div id="lcl_window">' +
        '<div id="lcl_corner_close" title="close"></div>' +
        '<div id="lcl_loader" class="lcl_loader_pre_first_el"><span id="lcll_1"></span><span id="lcll_2"></span></div>' +
        '<div id="lcl_nav_cmd">' +
        '<div class="lcl_icon lcl_prev" title="previous"></div>' +
        '<div class="lcl_icon lcl_play"></div>' +
        '<div class="lcl_icon lcl_next" title="next"></div>' +
        '<div class="lcl_icon lcl_counter"></div>' +

        '<div class="lcl_icon lcl_right_icon lcl_close" title="close"></div>' +

        '<div class="lcl_icon lcl_right_icon lcl_fullscreen" title="toggle fullscreen"></div>' +
        '<div class="lcl_icon lcl_right_icon lcl_txt_toggle" title="toggle text"></div>' +
        '<div class="lcl_icon lcl_right_icon lcl_download" title="download"></div>' +
        '<div class="lcl_icon lcl_right_icon lcl_thumbs_toggle" title="toggle thumbnails"></div>' +
        '<div class="lcl_icon lcl_right_icon lcl_socials" title="toggle socials"></div>' +
        '</div>' +
        '<div id="lcl_contents_wrap">' +
        '<div id="lcl_subj">' +
        '<div id="lcl_elem_wrap"></div>' +
        '</div>' +
        '<div id="lcl_txt"></div>' +
        '</div>' +
        '</div>' +
        '<div id="lcl_thumbs_nav" class="lcl_pre_tn_scroll"></div>' +
        '<div id="lcl_overlay"></div>' +
        '</div>';


    ////////////////////////////////////////////////////////////////////


    // initialization
    // obj can be an array and overrides elements / [src: url/selector (only required data), title: (string), txt: (string), author: (string), ajax: bool, type: image/frame/text] 
    lc_lightbox = function (obj, lcl_settings) {
        if (typeof (obj) != 'string' && (typeof (obj) != 'object' || !obj.length)) { return false; }

        // check among already initialized 
        var already_init = false;
        $.each(lcl_objs, function (i, v) {
            if (JSON.stringify(v) == JSON.stringify(obj)) {
                already_init = v;
                return false;
            }
        });

        if (already_init === false) {
            var instance = new lcl(obj, lcl_settings);
            lcl_objs.push(instance);
            return instance;
        }

        return already_init;
    };



    // destruct method
    lcl_destroy = function (instance) {
        var index = $.inArray(instance, lcl_objs);

        if (index !== -1) {
            lcl_objs.splice(index, 1);
        }
    };


    ////////////////////////////////////////////////////////////////////


    /* initialize */
    var lcl = function (obj, settings) {

        var lcl_settings = $.extend({
            gallery: true, // whether to display a single element or compose a gallery
            gallery_hook: 'rel', // attribute grouping elements - use false to create a gallery with all fetched elements 
            live_elements: true, // if a selector is found, set true to handle automatically DOM changes
            preload_all: false, // whether to preload all images on document ready
            global_type: 'image',

            src_attr: 'href', // attribute containing element's source
            title_attr: 'title', // attribute containing the title - is possible to specify a selector with this syntax: "> .selector" or "> span" 
            txt_attr: 'data-lcl-txt', // attribute containing the description - is possible to specify a selector with this syntax: "> .selector" or "> span" 
            author_attr: 'data-lcl-author', // attribute containing the author - is possible to specify a selector with this syntax: "> .selector" or "> span" 

            slideshow: true, // whether to enable slideshow
            open_close_time: 400, // animation duration for lightbox opening and closing / 1000 = 1sec
            ol_time_diff: 100, // overlay's animation advance (on opening) and delay (on close) to window / 1000 = sec
            fading_time: 80, // elements fading animation duration in millisecods / 1000 = 1sec
            animation_time: 250, // sizing animation duration in millisecods / 1000 = 1sec
            slideshow_time: 6000, // slideshow interval duration in milliseconds / 1000 = 1sec
            autoplay: false, // autoplay slideshow - bool
            counter: false, // whether to display elements counter
            progressbar: true, // whether to display a progressbar when slideshow runs
            carousel: true, // whether to create a non-stop pagination cycling elements

            max_width: '93%', // Lightbox maximum width. Use a responsive percent value or an integer for static pixel value
            max_height: '93%', // Lightbox maximum height. Use a responsive percent value or an integer for static pixel value
            wrap_padding: false, // set lightbox wrapping padding. Useful to maintain spaces using px max-sizes. Use a CSS value (string)
            ol_opacity: 0.7, // overlay opacity / value between 0 and 1
            ol_color: '#111', // background color of the overlay
            ol_pattern: false, // overlay patterns - insert the pattern name or false
            border_w: 0, // width of the lightbox border in pixels 
            border_col: '#ddd', // color of the lightbox border
            padding: 0, // width of the lightbox padding in pixels
            radius: 0, // lightbox border radius in pixels 
            shadow: true, // whether to apply a shadow around lightbox window
            remove_scrollbar: true, // whether to hide page's vertical scroller

            wrap_class: '', // custom classes added to wrapper - for custom styling/tracking
            skin: 'light', // light / dark / custom
            data_position: 'over', // over / under / lside / rside	
            cmd_position: 'inner', // inner / outer	
            ins_close_pos: 'normal', // set closing button position for inner commands - normal/corner	
            nav_btn_pos: 'normal', // set arrows and play/pause position - normal/middle

            txt_hidden: 500, // whether to hide texts on lightbox opening - bool or int (related to browser's smaller side)
            show_title: true, // bool / whether to display titles
            show_descr: true, // bool / whether to display descriptions
            show_author: true, // bool / whether to display authors

            thumbs_nav: true, // enables thumbnails navigation (requires elements poster or images)
            tn_icons: true, // print type icons on thumbs if types are mixed
            tn_hidden: 500, // whether to hide thumbs nav on lightbox opening - bool or int (related to browser's smaller side)
            thumbs_w: 110, // width of the thumbs for the standard lightbox
            thumbs_h: 110, // height of the thumbs for the standard lightbox
            thumb_attr: false, // attribute containing thumb URL to use or false to use thumbs maker
            thumbs_maker_url: false, // script baseurl to create thumbnails (use src=%URL% w=%W% h=%H%)

            fullscreen: false, // Allow the user to expand a resized image. true/false
            fs_img_behavior: 'fit', // resize mode of the fullscreen image - smart/fit/fill
            fs_only: 500, // when directly open in fullscreen mode - bool or int (related to browser's smaller side)
            browser_fs_mode: true, // whether to trigger or nor browser fullscreen mode

            socials: false, // bool
            fb_share_params: false, // bool/string / whether to use direct FB contents share (Read the doc to know what to use) 

            txt_toggle_cmd: true, // bool / allow text hiding
            download: false, // bool / whether to add download button
            touchswipe: true, // bool / Allow touch interactions for mobile (requires AlloyFinger)
            mousewheel: true, // bool / Allow elements navigation with mousewheel
            modal: false, // enable modal mode (no closing on overlay click)
            rclick_prevent: false, // whether to avoid right click on lightbox

            elems_parsed: function () { },
            html_is_ready: function () { },
            on_open: function () { },
            on_elem_switch: function () { },
            slideshow_start: function () { },
            slideshow_end: function () { },
            on_fs_enter: function () { },
            on_fs_exit: function () { },
            on_close: function () { },

        }, settings);


        // Variables accessible globally
        var lcl_vars = {
            elems: [], // elements object / src: url/text (only required data), title: (string), descr: (string), author: (string), type: image/iframe/text 
            is_arr_instance: (typeof (obj) != 'string' && typeof (obj[0].childNodes) == 'undefined') ? true : false,	// true if lightbox is initialized usign direct array immission
            elems_count: (typeof (obj) != 'string' && typeof (obj[0].childNodes) == 'undefined') ? obj.length : $(obj).length, // elements count at the moment of lb initialization
            elems_selector: (typeof (obj) == 'string') ? obj : false, // elements selector - used for dynamic elements fetching
            elem_index: false, // current element index
            gallery_hook_val: false, // gallery hook value - to discard other ones
            preload_all_used: false, // flag to know when complete preload on document's ready has been triggered
            img_sizes_cache: [], // store image sizes after their preload - index is images index

            inner_cmd_w: false, // store inner commands width for inner->outer switch 
            txt_exists: false, // any text exists in current element?
            txt_und_sizes: false, // custom lb sizes after text under calculation 
            force_fullscreen: false, // flag to know whether to simulate "always fs" for small screens
            html_style: '', // html tag style (for scrollbar hiding)
            body_style: '', // body tag style (for scrollbar hiding)
        };


        // textal element selector has been used? setup the real obj
        if (typeof (obj) == 'string') {
            obj = $(obj);
        }


        // .data() system to avoid issues on multi instances
        var lcl_ai_opts = $.data(obj, 'lcl_settings', lcl_settings);
        var lcl_ai_vars = $.data(obj, 'lcl_vars', lcl_vars);



        /////////////////////////////////////////////////////////////



        /* given a string - returns an unique numerical hash */
        var get_hash = function (str) {
            if (typeof (str) != 'string') {
                return str;
            }

            var hash = 0, i = 0, len = str.toString().length;

            while (i < len) {
                hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
            }
            return (hash < 0) ? hash * -1 : hash;
        };



        /* element already elaborated? check through hash - returns false or elem object */
        var obj_already_man = function (hash) {
            var found = false;

            $.each(lcl_ai_vars.elems, function (i, v) {
                if (v.hash == hash) {
                    found = v;
                    return false;
                }
            });
            return found;
        };


        /* revert HTML entitles that might have been used in attrs (and trim) */
        var revert_html_entit = function (str) {
            if (!str) { return str; }

            str = str.replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'");
            return $.trim(str);
        };


        /* returns title/text/author detecting whether to get an attribute or selector */
        var attr_or_selector_data = function ($elem, subj_key) {
            var o = lcl_ai_opts;
            var subj = o[subj_key];

            if (subj.indexOf('> ') !== -1) {
                return ($elem.find(subj.replace('> ', '')).length) ? $.trim($elem.find(subj.replace('> ', '')).html()) : '';
            }
            else {
                return (typeof ($elem.attr(subj)) != 'undefined') ? revert_html_entit($elem.attr(subj)) : '';
            }
        };



        /* elaborate binded elements */
        var setup_elems_obj = function ($subj) {
            var o = lcl_ai_opts;

            // [src: url/selector (only required data), title: (string), descr: (string), author: (string), ajax: bool, type: image/frame/text] 
            var new_elems = [];
            $subj.each(function () {
                var $e = $(this);
                var src = $e.attr(o.src_attr);
                var hash = get_hash(src);

                // check against gallery hook
                if (lcl_ai_vars.gallery_hook_val && $e.attr(o.gallery_hook) != lcl_ai_vars.gallery_hook_val) {
                    return true;
                }

                var already_man = obj_already_man(hash);
                if (already_man) {
                    var el = already_man;
                }
                else {
                    var type = el_type_finder(src, $e.data('lcl-type'));

                    // compose
                    if (type != 'unknown') {
                        var el = {
                            src: src,
                            type: type,
                            hash: (o.deeplink) ? get_hash(src) : false,
                            title: (o.show_title) ? attr_or_selector_data($e, 'title_attr') : '',
                            txt: (o.show_descr) ? attr_or_selector_data($e, 'txt_attr') : '',
                            author: (o.show_author) ? attr_or_selector_data($e, 'author_attr') : '',
                            thumb: (o.thumb_attr && typeof (o.thumb_attr) != 'undefined') ? $e.attr(o.thumb_attr) : '',

                            width: (type != 'image' && typeof ($e.data('lcl-w')) != 'undefined') ? $e.data('lcl-w') : false,
                            height: (type != 'image' && typeof ($e.data('lcl-h')) != 'undefined') ? $e.data('lcl-h') : false,

                            force_over_data: (typeof ($e.data('lcl-force-over-data')) != 'undefined') ? parseInt($e.data('lcl-force-over-data'), 10) : '',
                            force_outer_cmd: (typeof ($e.data('lcl-outer-cmd')) != 'undefined') ? $e.data('lcl-outer-cmd') : '',
                        };

                        // download attribute
                        if (type == 'image') {
                            el.download = (typeof ($e.data('lcl-path')) != 'undefined') ? $e.data('lcl-path') : src;
                        } else {
                            el.download = false;
                        }
                    }
                    else {
                        var el = {
                            src: src,
                            type: type,
                            hash: (o.deeplink) ? get_hash(src) : false
                        };
                    }
                }

                new_elems.push(el);
            });

            // if only one element - remove nav arrows and thumbs nav 
            if (new_elems.length < 2) {
                $('.lcl_prev, .lcl_next, #lcl_thumb_nav').remove();
            }

            if (!new_elems.length) {
                return false;
            }

            // setup
            lcl_ai_vars.elems = new_elems;
            return true;
        };


        /* given element source - return its type | accepts type forcing */
        var el_type_finder = function (src, forced_type) {
            if (typeof (forced_type) == 'undefined') {
                forced_type = lcl_ai_opts.global_type;
                return forced_type;
            }

            src = src.toLowerCase();
            var img_regex = /^(http|https)?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;

            if (img_regex.test(src)) { // image matching
                return 'image';
            }

            return 'unknown';
        };


        /////////////


        /* smart images preload */
        var close_img_preload = function () {
            if (lcl_ai_vars.elems.length < 2 || !lcl_ai_opts.gallery) { return false; }

            if (lcl_ai_vars.elem_index > 0) { // prev

                maybe_preload(false, (lcl_ai_vars.elem_index - 1));
            }
            if (lcl_ai_vars.elem_index != (lcl_ai_vars.elems.length - 1)) { // next
                maybe_preload(false, (lcl_ai_vars.elem_index + 1));
            }
        };


        /* preload images and eventually trigger showing function - if index not specified, loads current index */
        var maybe_preload = function (show_when_ready, el_index, cache_check) {
            var v = lcl_ai_vars;

            // if forced index is missing - use current one
            if (typeof (el_index) == 'undefined') {
                el_index = v.elem_index;
            }
            if (typeof (el_index) == 'undefined') { // if lightbox has alraedy been closed
                return false;
            }

            // is a preloadable element?
            if (v.elems[el_index].type == 'image') {
                var to_preload = (v.elems[el_index].type == 'image') ? v.elems[el_index].src : v.elems[el_index].poster;
            }
            else { var to_preload = ''; }

            if (to_preload && typeof (v.img_sizes_cache[to_preload]) == 'undefined') {
                $('<img/>').bind("load", function () {
                    v.img_sizes_cache[to_preload] = {
                        w: this.width,
                        h: this.height
                    };

                    // if sizes are zero, recalculate
                    if (show_when_ready && el_index == v.elem_index) {
                        show_element();
                    }
                }).attr('src', to_preload);
            }
            else {
                if (show_when_ready || typeof (cache_check) != 'undefined') {
                    $('#lcl_loader').addClass('no_loader');
                }
                if (show_when_ready) {
                    show_element();
                }
            }
        };


        /////////////


        /* elements parsing */
        var elems_parsing = function (inst_obj, $clicked_obj) {
            var o = $.data(inst_obj, 'lcl_settings');
            var vars = $.data(inst_obj, 'lcl_vars');

            // direct array initialization - validate and setup hashes
            if (vars.is_arr_instance) {
                var elems = [];

                $.each(inst_obj, function (i, v) {
                    var el = {};

                    var el_type = (typeof (v.type) == 'undefined' && o.global_type) ? o.global_type : false;
                    if (typeof (v.type) != 'undefined') { el_type = v.type; }

                    if (el_type && $.inArray(el_type, ['image']) !== -1) {
                        if (typeof (v.src) != 'undefined' && v.src) {
                            el.src = v.src;
                            el.type = el_type;
                            el.hash = get_hash(v.src);

                            el.title = (typeof (v.title) == 'undefined') ? '' : revert_html_entit(v.title);
                            el.txt = (typeof (v.txt) == 'undefined') ? '' : revert_html_entit(v.txt);
                            el.author = (typeof (v.author) == 'undefined') ? '' : revert_html_entit(v.author);

                            el.width = (typeof (v.width) == 'undefined') ? false : v.width;
                            el.height = (typeof (v.height) == 'undefined') ? false : v.height;

                            el.force_over_data = (typeof (v.force_over_data) == 'undefined') ? false : parseInt(v.force_over_data, 10);
                            el.force_outer_cmd = (typeof (v.force_outer_cmd) == 'undefined') ? false : v.force_outer_cmd;

                            el.thumb = (typeof (v.thumb) == 'undefined') ? false : v.thumb;


                            // download calculate type and parameter
                            if (el_type == 'image') {
                                el.download = (typeof (v.download) != 'undefined') ? v.download : v.src;
                            } else {
                                el.download = false;
                            }

                            elems.push(el);
                        }
                    }
                    else {
                        var el = {
                            src: el.src,
                            type: 'unknown',
                            hash: (o.deeplink) ? get_hash(el.src) : false
                        };
                        elems.push(el);
                    }
                });

                vars.elems = elems;
            }


            // if is from DOM object - prepare elements object	
            else {
                var $subj = inst_obj;

                // can fetch elements in real-time? save selector
                if (o.live_elements && vars.elems_selector) {
                    var consider_group = ($clicked_obj && o.gallery && o.gallery_hook && typeof ($(obj[0]).attr(o.gallery_hook)) != 'undefined') ? true : false;

                    var sel = (consider_group) ? vars.elems_selector + '[' + o.gallery_hook + '=' + $clicked_obj.attr(o.gallery_hook) + ']' : vars.elems_selector;
                    $subj = $(sel);
                }

                if (!setup_elems_obj($subj)) {
                    if (!o.live_elements || (o.live_elements && !vars.elems_selector)) {
                        console.error('LC Lightbox - no valid elements found');
                    }
                    return false;
                }
            }


            // if preload every image on document's ready
            if (o.preload_all && !vars.preload_all_used) {
                vars.preload_all_used = true;

                $(document).ready(function (e) {
                    $.each(vars.elems, function (i, v) {
                        maybe_preload(false, i);
                    });
                });
            }

            /////

            // elements parsed - throw callback
            if (typeof (o.elems_parsed) == 'function') {
                o.elems_parsed.call(null, lcl_ai_opts, lcl_ai_vars);
            }

            // elements parsed | args: elements array
            if (!vars.is_arr_instance) {
                var $subj = (vars.elems_selector) ? $(vars.elems_selector) : inst_obj;
                $subj.first().trigger('lcl_elems_parsed', [vars.elems]);
            }

            return true;
        };
        elems_parsing(obj); // parsing on lightbox INIT



        ////////////////////////////////////////////////////////////



        /* open lightbox */
        var open_lb = function (inst_obj, $clicked_obj) {
            if (lcl_shown || lcl_is_active) { return false; }
            lcl_shown = true;
            lcl_is_active = true;

            // setup static globals
            lcl_curr_obj = inst_obj;
            lcl_ai_opts = $.data(inst_obj, 'lcl_settings');
            lcl_ai_vars = $.data(inst_obj, 'lcl_vars');

            lcl_curr_opts = lcl_ai_opts;
            lcl_curr_vars = lcl_ai_vars;

            var o = lcl_ai_opts;
            var v = lcl_ai_vars;
            var $co = (typeof ($clicked_obj) != 'undefined') ? $clicked_obj : false;


            // check instance existence
            if (!lcl_ai_vars) {
                console.error('LC Lightbox - cannot open. Object not initialized');
                return false;
            }


            // set gallery hook value
            v.gallery_hook_val = ($co && o.gallery && o.gallery_hook && typeof ($co.attr(o.gallery_hook)) != 'undefined') ? $co.attr(o.gallery_hook) : false;

            // parse elements
            if (!elems_parsing(inst_obj, $clicked_obj)) {
                return false;
            }

            // if there is a clicked element - set selected index
            if ($co) {
                $.each(v.elems, function (i, e) {
                    if (e.src == $co.attr(o.src_attr)) {
                        v.elem_index = i;
                        return false;
                    }
                });


            }

            // array or deeplink initialization - check index existence
            else {
                if (parseInt(v.elem_index, 10) >= v.elems_count) {
                    console.error('LC Lightbox - selected index does not exist');
                    return false;
                }
            }

            // try recalling cached images to already shape lightbox
            maybe_preload(false);

            // setup lightbox code


            setup_code();
            touch_events();

            // directly fullscreen?
            if (v.force_fullscreen) {
                enter_fullscreen(true, true);
            }

            // prepare thumbs nav
            if ($('#lcl_thumbs_nav').length) {
                setup_thumbs_nav();
            }

            // prepare first element and show
            maybe_preload(true);
            close_img_preload();
        };


        /* remove lightbox pre-show classes */
        var rm_pre_show_classes = function () {
            // show window and overlay 
            $('#lcl_wrap').removeClass('lcl_pre_show').addClass('lcl_shown');
            $('#lcl_loader').removeClass('lcl_loader_pre_first_el');
        };


        /* setup lightbox code */
        var setup_code = function () {
            var o = lcl_ai_opts;
            var v = lcl_ai_vars;

            var wrap_classes = [];
            var css = '';

            // add class if IE <= 11 and  for commands positions
            if (typeof (document.documentMode) == 'number') {
                $('body').addClass('lcl_old_ie');

                // actually disable middle nav
                if (o.cmd_position != 'outer') { o.nav_btn_pos = 'normal'; }
            }

            if ($('#lcl_wrap').length) { $('#lcl_wrap').remove(); }
            $('body').append(lb_code);


            // lightbox max sizes
            $('#lcl_wrap').attr('data-lcl-max-w', o.max_width).attr('data-lcl-max-h', o.max_height);


            // command positions classes
            wrap_classes.push('lcl_' + o.ins_close_pos + '_close lcl_nav_btn_' + o.nav_btn_pos + ' lcl_' + o.ins_close_pos + '_close lcl_nav_btn_' + o.nav_btn_pos);

            // hidden thumbs nav class
            if (
                o.tn_hidden === true ||
                (typeof (o.tn_hidden) == 'number' && ($(window).width() < o.tn_hidden || $(window).height() < o.tn_hidden))
            ) {
                wrap_classes.push('lcl_tn_hidden');
            }

            // hide texts class
            if (
                o.txt_hidden === true ||
                (typeof (o.txt_hidden) == 'number' && ($(window).width() < o.txt_hidden || $(window).height() < o.txt_hidden))
            ) {
                wrap_classes.push('lcl_hidden_txt');
            }

            // no carousel class	
            if (!o.carousel) {
                wrap_classes.push('lcl_no_carousel');
            }

            // mobile class
            if (lcl_on_mobile) { wrap_classes.push('lcl_on_mobile'); }

            // custom classes
            if (o.wrap_class) { wrap_classes.push(o.wrap_class); }

            // manage elements
            wrap_classes.push('lcl_' + o.cmd_position + '_cmd');
            if (o.cmd_position != 'inner') {
                var nav = $('#lcl_nav_cmd').detach();
                $('#lcl_wrap').prepend(nav);
            }

            if (!o.slideshow) { $('.lcl_play').remove(); }
            if (!o.txt_toggle_cmd) { $('.lcl_txt_toggle').remove(); }
            if (!o.socials) { $('.lcl_socials').remove(); }
            if (!o.download) { $('.lcl_download').remove(); }
            if (!o.counter || v.elems.length < 2 || !o.gallery) { $('.lcl_counter').remove(); }

            // fullscreen
            v.force_fullscreen = false;
            if (!o.fullscreen) {
                $('.lcl_fullscreen').remove();
            }
            else if (o.fs_only === true || (typeof (o.fs_only) == 'number' && ($(window).width() < o.fs_only || $(window).height() < o.fs_only))) {
                $('.lcl_fullscreen').remove();
                lcl_ai_vars.force_fullscreen = true;
            }

            // prev/next buttons
            if (v.elems.length < 2 || !o.gallery) {
                $('.lcl_prev, .lcl_play, .lcl_next').remove();
            } else {
                if (o.nav_btn_pos == 'middle') {
                    css += '.lcl_prev, .lcl_next {margin: ' + o.padding + 'px;}';
                }
            }

            // thumbs nav
            if (!o.thumbs_nav || lcl_ai_vars.elems.length < 2 || !o.gallery) {
                $('#lcl_thumbs_nav, .lcl_thumbs_toggle').remove();
            }
            else {
                $('#lcl_thumbs_nav').css('height', o.thumbs_h); // use JS to pick outerHeight after

                var th_margins = $('#lcl_thumbs_nav').outerHeight(true) - o.thumbs_h;
                css += '#lcl_window {margin-top: ' + ((o.thumbs_h - th_margins) * -1) + 'px;}';

                // center lightbox if cmds are on top and thumbs are hidden
                css += '.lcl_tn_hidden.lcl_outer_cmd:not(.lcl_fullscreen_mode) #lcl_window {margin-bottom: ' + ($('.lcl_close').outerHeight(true) * -1) + 'px;}';
            }

            //////

            // apply skin and layout
            wrap_classes.push('lcl_txt_' + o.data_position + ' lcl_' + o.skin);

            css += '#lcl_overlay {background-color: ' + o.thumbs_h + 'px; opacity: ' + o.ol_opacity + ';}';

            if (o.ol_pattern) { $('#lcl_overlay').addClass('lcl_pattern_' + o.ol_pattern); }
            if (o.modal) { $('#lcl_overlay').addClass('lcl_modal'); }

            if (o.wrap_padding) { css += '#lcl_wrap {padding: ' + o.wrap_padding + ';}'; }
            if (o.border_w) { css += '#lcl_window {border: ' + o.border_w + 'px solid ' + o.border_col + ';}'; }
            if (o.padding) { css += '#lcl_subj, #lcl_txt, #lcl_nav_cmd {margin: ' + o.padding + 'px;}'; }
            if (o.radius) { css += '#lcl_window, #lcl_contents_wrap {border-radius: ' + o.radius + 'px;}'; }
            if (o.shadow) { css += '#lcl_window {box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);}'; }

            if (o.cmd_position == 'inner' && o.ins_close_pos == 'corner') {
                css += '#lcl_corner_close {' +
                    'top: ' + ((o.border_w + Math.ceil($('#lcl_corner_close').outerWidth() / 2)) * -1) + 'px;' +
                    'right: ' + ((o.border_w + Math.ceil($('#lcl_corner_close').outerHeight() / 2)) * -1) + ';' +
                    '}';


                // if no button is in inner cmd w/ corner close - hide bar (not on FS)
                if (!$('#lcl_nav_cmd > *:not(.lcl_close)').length) {
                    css += '#lcl_wrap:not(.lcl_fullscreen_mode):not(.lcl_forced_outer_cmd) #lcl_nav_cmd {' +
                        'display: none;' +
                        '}';
                }
            }

            // custom CSS
            if ($('#lcl_inline_style').length) { $('#lcl_inline_style').remove(); }
            $('head').append(
                '<style type="text/css" id="lcl_inline_style">' +
                css +
                '#lcl_overlay {' +
                'background-color: ' + o.ol_color + ';' +
                'opacity: ' + o.ol_opacity + ';' +
                '}' +
                '#lcl_window, #lcl_txt, #lcl_subj {' +
                '-webkit-transition-duration: ' + o.animation_time + 'ms; transition-duration: ' + o.animation_time + 'ms;' +
                '}' +
                '#lcl_overlay {' +
                '-webkit-transition-duration: ' + o.open_close_time + 'ms; transition-duration: ' + o.open_close_time + 'ms;' +
                '}' +
                '.lcl_first_sizing #lcl_window, .lcl_is_closing #lcl_window {' +
                '-webkit-transition-duration: ' + (o.open_close_time - o.ol_time_diff) + 'ms; transition-duration: ' + (o.open_close_time - o.ol_time_diff) + 'ms;' +
                '}' +
                '.lcl_first_sizing #lcl_window {' +
                '-webkit-transition-delay: ' + o.ol_time_diff + 'ms; transition-delay: ' + o.ol_time_diff + 'ms;' +
                '}' +
                '#lcl_loader, #lcl_contents_wrap, #lcl_corner_close {' +
                '-webkit-transition-duration: ' + o.fading_time + 'ms; transition-duration: ' + o.fading_time + 'ms;' +
                '}' +
                '.lcl_toggling_txt #lcl_subj {' + /* delay to allow sizing on text hiding */
                '-webkit-transition-delay: ' + (o.fading_time + 200) + 'ms !important;  transition-delay: ' + (o.fading_time + 200) + 'ms !important;' +
                '}' +
                '.lcl_fullscreen_mode.lcl_txt_over:not(.lcl_tn_hidden) #lcl_txt, .lcl_fullscreen_mode.lcl_force_txt_over:not(.lcl_tn_hidden) #lcl_txt {' + /* fs txt margin when thumbs are shown */
                'max-height: calc(100% - 42px - ' + o.thumbs_h + 'px);' +
                '}' +
                '.lcl_fullscreen_mode.lcl_playing_video.lcl_txt_over:not(.lcl_tn_hidden) #lcl_txt,' +
                '.lcl_fullscreen_mode.lcl_playing_video.lcl_force_txt_over:not(.lcl_tn_hidden) #lcl_txt {' + /* fullscreen txt over margin when thumbs are shown */
                'max-height: calc(100% - 42px - 45px - ' + o.thumbs_h + 'px);' +
                '}</style>');

            //////

            // backup html/body inline CSS
            if (o.remove_scrollbar) {
                lcl_ai_vars.html_style = (typeof (jQuery('html').attr('style')) != 'undefined') ? jQuery('html').attr('style') : '';
                lcl_ai_vars.body_style = (typeof (jQuery('body').attr('style')) != 'undefined') ? jQuery('body').attr('style') : '';

                // avoid page scrolling and maintain contents position
                var orig_page_w = $(window).width();
                $('html').css('overflow', 'hidden');

                $('html').css({
                    'margin-right': ($(window).width() - orig_page_w),
                    'touch-action': 'none'
                });

                $('body').css({
                    'overflow': 'visible',
                    'touch-action': 'none'
                });
            }


            // opening element could already be shaped?
            var el = lcl_ai_vars.elems[v.elem_index];
            if (el.type != 'image' || (el.type == 'image' && typeof (v.img_sizes_cache[el.src]) != 'undefined')) {
                wrap_classes.push('lcl_show_already_shaped');
            } else {
                rm_pre_show_classes();
            }


            // apply wrap classes	
            $('#lcl_wrap').addClass(wrap_classes.join(' '));


            //////

            // html is appended and ready - callback
            if (typeof (o.html_is_ready) == 'function') {
                o.html_is_ready.call(null, lcl_ai_opts, lcl_ai_vars);
            }

            // lightbox html has been appended and managed 
            if (!lcl_ai_vars.is_arr_instance) {
                var $subj = (lcl_ai_vars.elems_selector) ? $(lcl_ai_vars.elems_selector) : lcl_curr_obj;
                $subj.first().trigger('lcl_html_is_ready', [lcl_ai_opts, lcl_ai_vars]);
            }
        };



        // prevent page touch scroll while moving a specific element
        var no_body_touch_scroll = function (selector) {

            var _overlay = $(selector)[0];
            var _clientY = null; // remember Y position on touch start

            _overlay.addEventListener('touchstart', function (event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    _clientY = event.targetTouches[0].clientY;
                }
            }, false);

            _overlay.addEventListener('touchmove', function (event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    disableRubberBand(event);
                }
            }, false);

            function disableRubberBand(event) {
                var clientY = event.targetTouches[0].clientY - _clientY;

                if (_overlay.scrollTop === 0 && clientY > 0) {
                    // element is at the top of its scroll
                    event.preventDefault();
                }

                if (isOverlayTotallyScrolled() && clientY < 0) {
                    //element is at the top of its scroll
                    event.preventDefault();
                }
            }

            function isOverlayTotallyScrolled() {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
                return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
            }
        };



        /* show element in lightbox */
        var show_element = function () {
            if (!lcl_shown) { return false; }

            var v = lcl_ai_vars;
            var el = v.elems[v.elem_index];

            $('#lcl_wrap').attr('lc-lelem', v.elem_index);

            // if not carousel - set classes
            if (!lcl_ai_opts.carousel) {
                $('#lcl_wrap').removeClass('lcl_first_elem lcl_last_elem');

                if (!v.elem_index) {
                    $('#lcl_wrap').addClass('lcl_first_elem');
                }
                else if (v.elem_index == (v.elems.length - 1)) {
                    $('#lcl_wrap').addClass('lcl_last_elem');
                }
            }

            // global trigger - before element population | args: element object, element index 
            $(document).trigger('lcl_before_populate_global', [el, v.elem_index]);

            // populate
            populate_lb(el);

            //////

            // trigger right before EVERY element showing | args: element index, element object
            if (!v.is_arr_instance) {
                var $subj = (v.elems_selector) ? $(v.elems_selector) : lcl_curr_obj;
                $subj.first().trigger('lcl_before_show', [el, v.elem_index]);
            }

            // global trigger - before EVERY element showing | args: element object, element index 
            $(document).trigger('lcl_before_show_global', [el, v.elem_index]);

            //////

            // actions on first opening
            if ($('#lcl_wrap').hasClass('lcl_pre_first_el')) {

                // first element show - callback
                if (typeof (lcl_ai_opts.on_open) == 'function') {
                    lcl_ai_opts.on_open.call(null, lcl_ai_opts, lcl_ai_vars);
                }

                // first element show | args: element
                if (!v.is_arr_instance) {
                    var $subj = (v.elems_selector) ? $(v.elems_selector) : lcl_curr_obj;
                    $subj.first().trigger('lcl_on_open', [el, v.elem_index]);
                }
            }

            //////

            // set sizes and display
            size_elem(el);

            //////

            $('#lcl_subj').removeClass('lcl_switching_el');
        };



        /* element has text ? */
        var elem_has_txt = function (el) {
            return (el.title || el.txt || el.author) ? true : false;
        };


        /* populate lightbox */
        var populate_lb = function (el) {
            var el_index = lcl_ai_vars.elem_index;

            // reset
            $('#lcl_elem_wrap').removeAttr('style').removeAttr('class').empty();

            // set classes/atts
            $('#lcl_wrap').attr('lcl-type', el.type);
            $('#lcl_elem_wrap').addClass('lcl_' + el.type + '_elem');

            // setup subect
            switch (el.type) {
                case 'image':
                    $('#lcl_elem_wrap').css('background-image', 'url(\'' + el.src + '\')');
                    break;

                default: // error message size
                    $('#lcl_elem_wrap').html('<div id="lcl_inline" class="lcl_elem"><br/>Error loading the resource .. </div>');
                    break;
            }

            if (lcl_curr_opts.download) {
                if (el.download) {
                    $('.lcl_download').show();

                    var arr = el.download.split('/');
                    var filename = arr[(arr.length - 1)];
                    $('.lcl_download').html('<a href="' + el.download + '" target="_blank" download="' + filename + '"></a>');
                } else {
                    $('.lcl_download').hide();
                }
            }

            // counter
            $('.lcl_counter').html((el_index + 1) + ' / ' + lcl_ai_vars.elems.length);

            // texts
            if (elem_has_txt(el) && el.type != 'unknown') {
                $('#lcl_wrap').removeClass('lcl_no_txt');
                $('.lcl_txt_toggle').show();

                if (el.title) { $('#lcl_txt').append('<h3 id="lcl_title">' + el.title + '</h3>'); }
                if (el.author) { $('#lcl_txt').append('<h5 id="lcl_author">by ' + el.author + '</h5>'); }
                if (el.txt) { $('#lcl_txt').append('<section id="lcl_descr">' + el.txt + '</section>'); }

                // set class for bottom border
                if (el.txt) {
                    if (el.title && el.author) {
                        $('#lcl_txt h5').addClass('lcl_txt_border');
                    }
                    else {
                        if ($('#lcl_txt h3').length) {
                            $('#lcl_txt h3').addClass('lcl_txt_border');
                        } else {
                            $('#lcl_txt h5').addClass('lcl_txt_border');
                        }
                    }
                }
            }
            else {
                $('.lcl_txt_toggle').hide();
                $('#lcl_wrap').addClass('lcl_no_txt');
            }


            // prevent body scroll moving text
            no_body_touch_scroll('#lcl_txt');
        };


        /* 
         * given a CSS size (integer (px), %, vw or vh) returns the related pixel value 
         * dimension = w or h
         */
        var css_size_to_px = function (size, dimension, ignore_max) {
            var px = 0;
            var $wrap = $('#lcl_wrap');

            var win_w = $(window).width() - parseInt($wrap.css('padding-left'), 10) - parseInt($wrap.css('padding-right'), 10);
            var win_h = $(window).height() - parseInt($wrap.css('padding-top'), 10) - parseInt($wrap.css('padding-bottom'), 10);

            if (!isNaN(parseFloat(size)) && isFinite(size)) { // integer value
                px = parseInt(size, 10);
            }
            else if (size.toString().indexOf('%') !== -1) {
                var val = (dimension == 'w') ? win_w : win_h;
                px = val * (parseInt(size, 10) / 100);
            }
            else if (size.toString().indexOf('vw') !== -1) {
                px = win_w * (parseInt(size, 10) / 100);
            }
            else if (size.toString().indexOf('vh') !== -1) {
                px = win_h * (parseInt(size, 10) / 100);
            }

            // avoid > 100% values
            if (typeof (ignore_max) == 'undefined') {
                if (dimension == 'w' && px > win_w) { px = win_w; }
                if (dimension == 'h' && px > win_h) { px = win_h; }
            }
            return px;
        };


        /* set element sizes */
        var size_elem = function (el, flags, txt_und_sizes) { // flags: no_txt_under, inner_cmd_checked
            var o = lcl_ai_opts;
            var v = lcl_ai_vars;
            var w, h;

            if (typeof (flags) == 'undefined') { flags = {}; }
            var fs_mode = ($('.lcl_fullscreen_mode').length) ? true : false;

            // calculate padding and borders
            var add_space = (fs_mode) ? 0 : ((parseInt(o.border_w, 10) * 2) + (parseInt(o.padding, 10) * 2));

            // is side-text layout? remove forced on hover 
            if (typeof (flags.side_txt_checked) == 'undefined' && (typeof (flags.no_txt_under) == 'undefined' || !flags.no_txt_under)) {
                $('#lcl_wrap').removeClass('lcl_force_txt_over');
            }
            var side_txt = (!$('.lcl_force_txt_over').length && !$('.lcl_hidden_txt').length && $.inArray(o.data_position, ['rside', 'lside']) !== -1 && elem_has_txt(el)) ? $('#lcl_txt').outerWidth() : 0;

            // has thumbs nav?
            var thumbs_nav = (!fs_mode && $('#lcl_thumbs_nav').length && !$('.lcl_tn_hidden').length) ? $('#lcl_thumbs_nav').outerHeight(true) - parseInt($('#lcl_wrap').css('padding-bottom'), 10) : 0;

            // outer commands?
            var cmd_h = (!fs_mode && $('.lcl_outer_cmd').length) ? $('.lcl_close').outerHeight(true) + parseInt($('#lcl_nav_cmd').css('padding-top'), 10) + parseInt($('#lcl_nav_cmd').css('padding-bottom'), 10) : 0;

            // wrap-up px to remove
            var horiz_add_space = add_space + side_txt;
            var vert_add_space = add_space + thumbs_nav + cmd_h;

            // calculate max sizes
            var max_w_attr = $('#lcl_wrap').attr('data-lcl-max-w');
            var max_h_attr = $('#lcl_wrap').attr('data-lcl-max-h');

            var max_w = (fs_mode) ? $(window).width() : Math.floor(css_size_to_px(max_w_attr, 'w')) - horiz_add_space;
            var max_h = (fs_mode) ? $(window).height() : Math.floor(css_size_to_px(max_h_attr, 'h')) - vert_add_space;

            /////////

            // sizes already calculated by text under processor
            if (typeof (v.txt_und_sizes) == 'object') {
                w = v.txt_und_sizes.w;
                h = v.txt_und_sizes.h;

                if (el.type == 'image') {
                    var img_sizes = v.img_sizes_cache[el.src];
                }
            }

            // normal processing
            else {
                switch (el.type) {
                    case 'image': // discard forced sizes
                        $('#lcl_elem_wrap').css('bottom', 0);

                        if (typeof (v.img_sizes_cache[el.src]) == 'undefined') {
                            return false;
                        }
                        var img_sizes = v.img_sizes_cache[el.src];

                        // get image sizes
                        if (img_sizes.w <= max_w) {
                            w = img_sizes.w;
                            h = img_sizes.h;
                        } else {
                            w = max_w;
                            h = Math.floor(w * (img_sizes.h / img_sizes.w));
                        }

                        // height is bigger than max one?
                        if (h > max_h) {
                            h = max_h;
                            w = Math.floor(h * (img_sizes.w / img_sizes.h));
                        }

                        // calculate text under 
                        if (elem_has_txt(el) && !$('.lcl_hidden_txt').length && o.data_position == 'under' && typeof (flags.no_txt_under) == 'undefined') {
                            txt_under_h(w, h, max_h);

                            $(document).off('lcl_txt_und_calc').on('lcl_txt_und_calc', function () {
                                if (v.txt_und_sizes) {
                                    if (v.txt_und_sizes == 'no_under') {
                                        flags.no_txt_under = true;
                                    }



                                    return size_elem(v.elems[v.elem_index], flags);
                                }
                            });
                            return false;
                        }
                        else {
                            $('#lcl_subj').css('maxHeight', 'none');
                        }
                        break;


                    default: // error message size
                        w = 280;
                        h = 125;

                        break;
                }
            }


            // text on side - turn into text over if small screen or tiny lb
            if (
                (o.data_position == 'rside' || o.data_position == 'lside') &&
                !$('.lcl_no_txt').length && typeof (flags.side_txt_checked) == 'undefined'
            ) {
                var sto_w = w + add_space;
                var sto_h = h + add_space;
                var img_sizes = (el.type == 'image') ? v.img_sizes_cache[el.src] : '';

                // forced text over treshold
                var tot = el.force_over_data;
                if (!tot) { tot = 400; }

                if (el.type == 'image' && img_sizes.w > tot && img_sizes.h > tot) {

                    if (!side_to_over_txt(el, tot, sto_w, sto_h, side_txt)) {
                        flags.side_txt_checked = true;
                        return size_elem(el, flags);
                    }
                }
            }


            // reset text under var
            v.txt_und_sizes = false;

            // force outer commands?
            if (
                typeof (flags.inner_cmd_checked) == 'undefined' &&
                (o.cmd_position == 'inner' || el.force_outer_cmd) &&
                inner_to_outer_cmd(el, w)
            ) {
                flags.inner_cmd_checked = true;
                return size_elem(el, flags);
            }


            // set lb window sizes
            $('#lcl_wrap').removeClass('lcl_pre_first_el');
            $('#lcl_window').css({
                width: (fs_mode) ? '100%' : w + add_space + side_txt,
                height: (fs_mode) ? '100%' : h + add_space
            });


            // if has to be shown already shaped
            if ($('.lcl_show_already_shaped').length) {
                setTimeout(function () { // allow CSS propagation
                    $('#lcl_wrap').removeClass('lcl_show_already_shaped');
                    rm_pre_show_classes();
                }, 10);
            }

            // check thumbs nav arrows visibility
            thumbs_nav_arrows_vis();

            if (typeof (lcl_size_n_show_timeout) != 'undefined') {
                clearTimeout(lcl_size_n_show_timeout);
            }
            var timing = ($('.lcl_first_sizing').length) ? o.open_close_time + 20 : o.animation_time; // +20 trick used to let CSS execute the opening timing
            if ($('.lcl_browser_resize').length || $('.lcl_toggling_fs').length || fs_mode) {
                timing = 0;
            }

            lcl_size_n_show_timeout = setTimeout(function () {
                if (lcl_is_active) { lcl_is_active = false; }

                // autoplay if first opening
                if ($('.lcl_first_sizing').length) {
                    if (o.autoplay && v.elems.length > 1 &&
                        (o.carousel || v.elem_index < (v.elems.length - 1))
                    ) {
                        lcl_start_slideshow();
                    }
                }

                // fullscreen - image rendering manag
                if (el.type == 'image') {
                    if ($('.lcl_fullscreen_mode').length) {
                        fs_img_manag(img_sizes);
                    } else {
                        $('.lcl_image_elem').css('background-size', 'cover');
                    }
                }

                $('#lcl_wrap').removeClass('lcl_first_sizing lcl_switching_elem lcl_is_resizing lcl_browser_resize');
                $('#lcl_loader').removeClass('no_loader');
                $(document).trigger('lcl_resized_window');
            }, timing);
        };

        /* track window size changes */
        $(window).resize(function () {
            if (!lcl_shown || obj != lcl_curr_obj || $('.lcl_toggling_fs').length) { return false; }
            $('#lcl_wrap').addClass('lcl_browser_resize');

            if (typeof (lcl_rs_defer) != 'undefined') { clearTimeout(lcl_rs_defer); }
            lcl_rs_defer = setTimeout(function () {
                lcl_resize();
            }, 50);
        });



        /* calculate text under size - return new element's width and height in an object */
        var txt_under_h = function (curr_w, curr_h, max_height, recursive_count) {
            var rc = (typeof (recursive_count) == 'undefined') ? 1 : recursive_count;
            var fs_mode = $('.lcl_fullscreen_mode').length;
            var old_txt_h = Math.ceil($('#lcl_txt').outerHeight());
            var w_ratio = curr_w / curr_h;

            // fullscreen mode and thumbs - text always over
            if (fs_mode && $('#lcl_thumbs_nav').length) {
                $('#lcl_wrap').addClass('lcl_force_txt_over');
                $('#lcl_subj').css('maxHeight', 'none');

                $('#lcl_txt').css({
                    'right': 0,
                    'width': 'auto'
                });

                lcl_ai_vars.txt_und_sizes = 'no_under';
                $(document).trigger('lcl_txt_und_calc');
                return false;
            }

            // reset
            $('#lcl_wrap').removeClass('lcl_force_txt_over').addClass('lcl_txt_under_calc');

            if (!fs_mode) {
                $('#lcl_txt').css({
                    'right': 'auto',
                    'width': curr_w
                });
            } else {
                $('#lcl_txt').css({
                    'right': 0,
                    'width': 'auto'
                });
            }

            // wait for CSS to be rendered
            if (typeof (lcl_txt_under_calc) != 'undefined') { clearInterval(lcl_txt_under_calc); }
            lcl_txt_under_calc = setTimeout(function () {

                var txt_h = Math.ceil($('#lcl_txt').outerHeight());
                var overflow = (curr_h + txt_h) - max_height;

                // fullscreen mode (no thumbs) - just set max height
                if (fs_mode) {
                    $('#lcl_wrap').removeClass('lcl_txt_under_calc');
                    $('#lcl_subj').css('maxHeight', 'calc(100% - ' + txt_h + 'px)');

                    lcl_ai_vars.txt_und_sizes = { w: curr_w, h: curr_h };
                    $(document).trigger('lcl_txt_und_calc');
                    return false;
                }

                // there's overflow - recurse
                if (overflow > 0 && (typeof (recursive_count) == 'undefined' || recursive_count < 10)) {

                    var new_h = curr_h - overflow;
                    var new_w = Math.floor(new_h * w_ratio);


                    // text over treshold
                    var tot = lcl_ai_vars.elems[lcl_ai_vars.elem_index].force_over_data;
                    if (!tot) { tot = 400; }

                    if (new_w < tot || new_h < tot) {
                        $('#lcl_wrap').removeClass('lcl_txt_under_calc').addClass('lcl_force_txt_over'); // screen too small or image excessively tall - switch to text over
                        $('#lcl_subj').css('maxHeight', 'none');

                        $('#lcl_txt').css({
                            'right': 0,
                            'width': 'auto'
                        });

                        lcl_ai_vars.txt_und_sizes = 'no_under';
                        $(document).trigger('lcl_txt_und_calc');
                        return true;
                    }

                    return txt_under_h(new_w, new_h, max_height, (rc + 1));
                }

                // no overflow - ok
                else {
                    $('#lcl_wrap').removeClass('lcl_txt_under_calc');
                    $('#lcl_subj').css('maxHeight', (curr_h + lcl_ai_opts.padding));

                    lcl_ai_vars.txt_und_sizes = {
                        w: curr_w,
                        h: (curr_h + txt_h)
                    };

                    $(document).trigger('lcl_txt_und_calc');
                    return true;
                }
            }, 120); // min val to let CSS propagate
        };



        /* is lightbox too small to show contents with side text? turn into over txt */
        var side_to_over_txt = function (el, treshold, w, h, side_txt_w) {
            var already_forced = $('.lcl_force_txt_over').length;

            if (w < treshold || (el.type != 'html' && h < treshold)) {
                if (already_forced) { return true; }

                $('#lcl_wrap').addClass('lcl_force_txt_over');
            }
            else {
                if (!already_forced) { return true; }

                $('#lcl_wrap').removeClass('lcl_force_txt_over');
            }

            return false;
        };


        /* are inner commands too wide for lb window? move to outer */
        var inner_to_outer_cmd = function (el, window_width) {
            var o = lcl_ai_opts;
            var fs_mode = ($('.lcl_fullscreen_mode').length) ? true : false;

            // if already acted - reset
            if ($('.lcl_forced_outer_cmd').length) {
                $('#lcl_wrap').removeClass('lcl_forced_outer_cmd');
                $('#lcl_wrap').removeClass('lcl_outer_cmd').addClass('lcl_inner_cmd');

                var nav = $('#lcl_nav_cmd').detach();
                $('#lcl_window').prepend(nav);
            }

            // calculate
            if (!fs_mode && lcl_ai_vars.inner_cmd_w === false) {
                lcl_ai_vars.inner_cmd_w = 0;

                jQuery('#lcl_nav_cmd .lcl_icon').each(function () {
                    if (($(this).hasClass('lcl_prev') || $(this).hasClass('lcl_next')) && o.nav_btn_pos == 'middle') {
                        return true;
                    }

                    lcl_ai_vars.inner_cmd_w = lcl_ai_vars.inner_cmd_w + $(this).outerWidth(true);
                });
            }

            // is wider?
            if (fs_mode || el.force_outer_cmd || window_width <= lcl_ai_vars.inner_cmd_w) {
                $('#lcl_wrap').addClass('lcl_forced_outer_cmd');
                $('#lcl_wrap').removeClass('lcl_inner_cmd').addClass('lcl_outer_cmd');

                var nav = $('#lcl_nav_cmd').detach();
                $('#lcl_wrap').prepend(nav);

                return true;
            }
            else {
                return false;
            }
        };


        //////////////////////////////////////////////////////////////


        /* switch element - new_el could be "next", "prev" or element index */
        var switch_elem = function (new_el, slideshow_switch) {
            var v = lcl_ai_vars;
            var carousel = lcl_ai_opts.carousel;

            if (lcl_is_active || v.elems.length < 2 || !lcl_ai_opts.gallery || $('.lcl_switching_elem').length) { return false; }

            // find and sanitize new index
            if (new_el == 'next') {
                if (v.elem_index == (v.elems.length - 1)) {
                    if (!carousel) { return false; }

                    new_el = 0;
                }
                else {
                    new_el = v.elem_index + 1;
                }
            }
            else if (new_el == 'prev') {
                if (!v.elem_index) {
                    if (!carousel) { return false; }

                    new_el = (v.elems.length - 1);
                }
                else {
                    new_el = v.elem_index - 1;
                }
            }
            else {
                new_el = parseInt(new_el, 10);
                if (new_el < 0 || new_el >= v.elems.length || new_el == v.elem_index) {
                    return false;
                }
            }


            // if slideshow is active
            if (typeof (lcl_slideshow) != 'undefined') {

                // if isn't a slideshow switch and it is active || if isn't carousel and index is latest one - stop ss
                if (typeof (slideshow_switch) == 'undefined' || (!carousel && new_el == (v.elems.length - 1))) {
                    lcl_stop_slideshow();
                }
            }


            // hide current element and set a new one
            lcl_is_active = true;
            thumbs_nav_scroll_to_item(new_el);

            // use maybe_preload to not display loader when next item is already cached
            maybe_preload(false, new_el, true);


            // switching wrapper class		
            $('#lcl_wrap').addClass('lcl_switching_elem');

            setTimeout(function () {
                $('#lcl_wrap').removeClass('lcl_playing_video');

                // if switching from an html element - set static heights
                if (v.elems[v.elem_index].type == 'html') {
                    $('#lcl_window').css('height', $('#lcl_contents_wrap').outerHeight());
                    $('#lcl_contents_wrap').css('maxHeight', 'none');
                }


                // switching element - callback
                if (typeof (lcl_ai_opts.on_elem_switch) == 'function') {
                    lcl_ai_opts.on_elem_switch.call(null, lcl_ai_opts, lcl_ai_vars, new_el);
                }

                // switching | args: old_elem_id, new_elem_id
                if (!v.is_arr_instance && lcl_curr_obj) {
                    var $subj = (v.elems_selector) ? $(v.elems_selector) : lcl_curr_obj;
                    $subj.first().trigger('lcl_on_elem_switch', [v.elem_index, new_el]);
                }

                //////

                $('#lcl_wrap').removeClass('lcl_no_txt lcl_loading_iframe');
                $('#lcl_txt').empty();
                v.elem_index = new_el;

                maybe_preload(true);
                close_img_preload();
            }, lcl_ai_opts.fading_time);
        };



        /* temporary stop slideshow (to wait a preloader for example) */
        var temp_slideshow_stop = function () {
            if (typeof (lcl_slideshow) == 'undefined') { return false; }
            clearInterval(lcl_slideshow);
        };


        /* progressbar animation management */
        var progbar_animate = function (first_run) {
            var o = lcl_ai_opts;
            if (!o.progressbar) { return false; }

            var delay = (first_run) ? 0 : (o.animation_time + o.fading_time);
            var time = o.slideshow_time + o.animation_time - delay;

            if (!$('#lcl_progressbar').length) {
                $('#lcl_wrap').append('<div id="lcl_progressbar"></div>');
            }

            if (typeof (lcl_pb_timeout) != 'undefined') { clearTimeout(lcl_pb_timeout); }
            lcl_pb_timeout = setTimeout(function () {
                $('#lcl_progressbar').stop(true).removeAttr('style').css('width', 0).animate({ width: '100%' }, time, 'linear', function () {

                    $('#lcl_progressbar').fadeTo(0, 0); // duration through CSS
                });
            }, delay);
        };



        /* close lightbox */
        var close_lb = function () {
            if (!lcl_shown) { return false; }

            // lightbox is about to be closed - callback
            if (typeof (lcl_ai_opts.on_close) == 'function') {
                lcl_ai_opts.on_close.call(null, lcl_ai_opts, lcl_ai_vars);
            }

            // event on lightbox closing
            if (!lcl_ai_vars.is_arr_instance) {
                var $subj = (lcl_ai_vars.elems_selector) ? $(lcl_ai_vars.elems_selector) : lcl_curr_obj;
                $subj.first().trigger('lcl_on_close');
            }

            // global trigger - on lightbox closing 
            $(document).trigger('lcl_on_close_global');

            //////

            $('#lcl_wrap').removeClass('lcl_shown').addClass('lcl_is_closing lcl_tn_hidden');
            lcl_stop_slideshow();

            // exit fullscreen
            if ($('.lcl_fullscreen_mode').length) {
                exit_browser_fs();
            }

            // remove lb - wait for animations
            setTimeout(function () {
                $('#lcl_wrap, #lcl_inline_style').remove();

                // restore html/body inline CSS
                if (lcl_ai_opts.remove_scrollbar) {
                    jQuery('html').attr('style', lcl_ai_vars.html_style);
                    jQuery('body').attr('style', lcl_ai_vars.body_style);
                }


                // global trigger - lightybox has been closed and code removed
                $(document).trigger('lcl_closed_global');


                lcl_curr_obj = false;
                lcl_curr_opts = false;
                lcl_curr_vars = false;

                lcl_shown = false;
                lcl_is_active = false;

            }, (lcl_ai_opts.open_close_time + 80));

            if (typeof (lcl_size_check) != 'undefined') { clearTimeout(lcl_size_check); }
        };



        //////////////////////////////////////////////////////////////



        /* Setup fullscreen mode */
        var enter_fullscreen = function (set_browser_status, on_opening) {
            if (typeof (on_opening) == 'undefined') { on_opening = false; }

            if (!lcl_shown || !lcl_ai_opts.fullscreen || (!on_opening && lcl_is_active)) { return false; }

            var o = lcl_ai_opts;
            var v = lcl_ai_vars;

            // hide window elements
            $('#lcl_wrap').addClass('lcl_toggling_fs');

            // enbale browser's fs
            if (o.browser_fs_mode && typeof (set_browser_status) != 'undefined') {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            }

            // set wrap class - recalculate sizes - show
            var timing = (on_opening) ? o.open_close_time : o.fading_time;
            setTimeout(function () {
                $('#lcl_wrap').addClass('lcl_fullscreen_mode');
                size_elem(v.elems[v.elem_index]);

                // disable fs toogle class when has been sized
                $(document).on('lcl_resized_window', function () {
                    $(document).off('lcl_resized_window');

                    // text under or on opening - recalculate
                    if (on_opening || (lcl_curr_opts.data_position == 'under' && !$('.lcl_force_txt_over').length)) {
                        size_elem(lcl_curr_vars.elems[lcl_curr_vars.elem_index]);
                    }

                    setTimeout(function () {
                        $('#lcl_wrap').removeClass('lcl_toggling_fs');
                    }, 150); // 50 (sizing) + 100 (smoothing) is forced sizing timing for fs switch
                });
            }, timing);

            //////

            // entering fullscreen - callback
            if (typeof (o.on_fs_enter) == 'function') {
                o.on_fs_enter.call(null, o, v);
            }

            // entering fullscreen - action
            if (!lcl_ai_vars.is_arr_instance) {
                lcl_curr_obj.first().trigger('lcl_on_fs_enter');
            }
        };


        /* fullscreen image rendering manag - smart/fit/fill */
        var fs_img_manag = function (img_sizes) {
            var behav = lcl_ai_opts.fs_img_behavior;

            // if image is smaller than screen - bg size = auto
            if ($('.lcl_fullscreen_mode').length && img_sizes.w <= $('#lcl_subj').width() && img_sizes.h <= $('#lcl_subj').height()) {
                $('.lcl_image_elem').css('background-size', 'auto');
                return false;
            }


            // fit into screen
            if (behav == 'fit') {
                $('.lcl_image_elem').css('background-size', 'contain');
            }

            // fill screen
            else if (behav == 'fill') {
                $('.lcl_image_elem').css('background-size', 'cover');
            }

            // smart - fill only if is bigger than screen or same aspect ratio
            else {


                if (typeof (img_sizes) == 'undefined') {
                    $('.lcl_image_elem').css('background-size', 'cover');
                    return false;
                }

                var ratio_diff = ($(window).width() / $(window).height()) - (img_sizes.w / img_sizes.h);
                var w_diff = $(window).width() - img_sizes.w;
                var h_diff = $(window).height() - img_sizes.h;

                if ((ratio_diff <= 1.15 && ratio_diff >= -1.15) && (w_diff <= 350 && h_diff <= 350)) { // fill
                    $('.lcl_image_elem').css('background-size', 'cover');
                }
                else { // fit
                    $('.lcl_image_elem').css('background-size', 'contain');
                }
            }
        };


        /* exit fullscreen */
        var exit_fullscreen = function (set_browser_status) {
            if (!lcl_shown || !lcl_ai_opts.fullscreen || lcl_is_active) { return false; }
            var o = lcl_ai_opts;

            // hide window elements
            $('#lcl_wrap').addClass('lcl_toggling_fs');
            $('#lcl_window').fadeTo(70, 0);


            // set wrap class - recalculate sizes - show
            setTimeout(function () {
                // disable browser's fs
                if (o.browser_fs_mode && typeof (set_browser_status) != 'undefined') {
                    exit_browser_fs();
                    var browser_fs_timing = 250; // time taken by browser to exit fullscreen mode
                } else {
                    var browser_fs_timing = 0;
                }

                $('#lcl_wrap').removeClass('lcl_fullscreen_mode');

                // resize after a little while
                setTimeout(function () {
                    size_elem(lcl_ai_vars.elems[lcl_ai_vars.elem_index]);

                    // IE 11 requires a bit more
                    var userAgent = userAgent || navigator.userAgent;
                    var ie11_time = (userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1) ? 100 : 0;

                    // disable fs toogle class
                    setTimeout(function () {
                        $('#lcl_window').fadeTo(30, 1);
                        $('#lcl_wrap').removeClass('lcl_toggling_fs');
                    }, 300 + ie11_time); // 50 (sizing) + 100 (smoothing) is forced sizing timing for fs switch

                }, browser_fs_timing);
            }, 70);

            //////

            // exiting fullscreen - callback
            if (typeof (o.on_fs_exit) == 'function') {
                o.on_fs_exit.call(null, lcl_ai_opts, lcl_ai_vars);
            }

            // exiting fullscreen - action
            if (!lcl_ai_vars.is_arr_instance) {
                var $subj = (lcl_ai_vars.elems_selector) ? $(lcl_ai_vars.elems_selector) : lcl_curr_obj;
                $subj.first().trigger('lcl_on_fs_exit');
            }
        };


        /* trigger browser instruction to exit fullscreen mode */
        var exit_browser_fs = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        };


        //////////////////////////////////////////////////////////////


        /* setup thumbnails navigator */
        var setup_thumbs_nav = function () {
            var mixed_types = false;
            var tracked_type = false;
            var uniq_id = Date.now();

            $('#lcl_thumbs_nav').append('<span class="lcl_tn_prev"></span><ul class="lcl_tn_inner"></ul><span class="lcl_tn_next"></span>');
            $('#lcl_thumbs_nav').attr('rel', uniq_id);

            $.each(lcl_ai_vars.elems, function (i, v) {
                if (v.type != 'unknown') {

                    if (!mixed_types) {
                        if (!tracked_type || tracked_type == v.type) {
                            tracked_type = v.type;
                        }
                        else {
                            mixed_types = true;
                        }
                    }

                    var bg = '',
                        bg_img = '';
                    tpc = ''; // thumbs preload class


                    // has got a specific thumbnail?
                    if (v.thumb) {
                        bg_img = v.thumb;
                        bg = 'style="background-image: url(\'' + v.thumb + '\');"';
                    }
                    else {

                        // find thumbnail for each source
                        switch (v.type) {
                            case 'image': bg_img = v.src; break;
                            case 'youtube': bg_img = (v.poster) ? v.poster : 'https://img.youtube.com/vi/' + v.video_id + '/maxresdefault.jpg'; break;

                            case 'vimeo':

                                if (v.poster) {
                                    bg_img = v.poster;
                                    break;
                                }
                                else {
                                    if (typeof (lcl_ai_vars.vimeo_thumb_cache[v.src]) == 'undefined') {
                                        tpc = 'lcl_tn_preload';

                                        $.getJSON('https://www.vimeo.com/api/v2/video/' + v.video_id + '.json?callback=?', { format: "json" }, function (data) { // need async
                                            thumbs_nav_img_preload(data[0].thumbnail_large, i, uniq_id);
                                            lcl_ai_vars.vimeo_thumb_cache[v.src] = data[0].thumbnail_large;

                                            // use ATTR to avoid issues with IE10
                                            $('.lcl_tn_inner li[rel=' + i + ']').attr('style', $('.lcl_tn_inner li[rel=' + i + ']').attr('style') + ' background-image: url(\'' + data[0].thumbnail_large + '\');');
                                        });
                                    }
                                    else {
                                        bg_img = lcl_ai_vars.vimeo_thumb_cache[v.src];
                                    }
                                }
                                break;

                            case 'video':
                            case 'iframe':
                            case 'html':

                                if (v.poster) { bg_img = v.poster; } break;

                            case 'dailymotion': bg_img = (v.poster) ? v.poster : 'http://www.dailymotion.com/thumbnail/video/' + v.video_id; break;
                        }

                        if (bg_img) {

                            // has thumbs maker?
                            if (lcl_ai_opts.thumbs_maker_url && (v.poster || $.inArray(v.type, ['youtube', 'vimeo', 'dailymotion']) === -1)) {
                                var base = lcl_ai_opts.thumbs_maker_url;
                                bg_img = base.replace('%URL%', encodeURIComponent(bg_img)).replace('%W%', lcl_ai_opts.thumbs_w).replace('%H%', lcl_ai_opts.thumbs_h);
                            }

                            bg = 'style="background-image: url(\'' + bg_img + '\');"';


                            // if is video - store as vid_poster
                            if ($.inArray(v.type, ['youtube', 'vimeo', 'dailymotion']) !== -1 && !v.poster) {
                                lcl_ai_vars.elems[i].vid_poster = bg_img;
                            }
                        }
                    }


                    // if iframe and html and no poster - skip
                    if ((v.type == 'html' || v.type == 'iframe') && !bg) { return true; }

                    // video preview
                    var vp = (v.type == 'video' && !bg) ? '<video src="' + v.src + '"></video>' : '';

                    // thumbs preload class
                    //if(!tpc && bg && typeof(lcl_ai_vars.img_sizes_cache[ bg_img ]) == 'undefined') {tpc = 'lcl_tn_preload';}
                    tpc = 'lcl_tn_preload';

                    // append
                    $('.lcl_tn_inner').append('<li class="lcl_tn_' + v.type + ' ' + tpc + '" title="' + v.title + '" rel="' + i + '" ' + bg + '>' + vp + '</li>');

                    // thumbs image preload
                    if (tpc) {
                        thumbs_nav_img_preload(bg_img, i, uniq_id);
                    }
                }
            });


            // be sure at least 2 elements are left
            if ($('.lcl_tn_inner > li').length < 2) {
                $('#lcl_thumbs_nav').remove();
                return false;
            }

            $('.lcl_tn_inner > li').css('width', lcl_ai_opts.thumbs_w);

            if (!lcl_on_mobile) {
                $('.lcl_tn_inner').lcl_smoothscroll(0.3, 400, false, true);
            }

            // mixed type class
            if (mixed_types && lcl_ai_opts.tn_icons) {
                $('.lcl_tn_inner').addClass('lcl_tn_mixed_types');
            }

            // elem offset - use a bit of delay to let thumbs to have proper shape
            setTimeout(function () {
                thumbs_nav_scroll_to_item(lcl_ai_vars.elem_index);
            }, 300);
        };


        /* thumbs image preload */
        var thumbs_nav_img_preload = function (img_url, el_index, uniq_id) {
            $('<img/>').bind("load", function () {
                if (!lcl_ai_vars) { return false; }

                lcl_ai_vars.img_sizes_cache[img_url] = {
                    w: this.width,
                    h: this.height
                };

                $('#lcl_thumbs_nav[rel=' + uniq_id + '] li[rel=' + el_index + ']').removeClass('lcl_tn_preload');
                setTimeout(function () {
                    thumbs_nav_arrows_vis();
                    thumbs_nav_arrows_opacity();
                }, 500);
            }).attr('src', img_url);
        };


        /* thumbs navigator - thumbs total width */
        var thumbs_nav_elems_w = function () {
            var thumbs_w = 0;
            $('.lcl_tn_inner > li').each(function () { thumbs_w = thumbs_w + $(this).outerWidth(true); });

            return thumbs_w;
        };


        /* thumbs navigator - arrows visibility */
        var thumbs_nav_arrows_vis = function () {
            if (!$('#lcl_thumbs_nav').length) { return false; }

            if (thumbs_nav_elems_w() > $('.lcl_tn_inner').width()) {
                $('#lcl_thumbs_nav').addClass('lcl_tn_has_arr');
            } else {
                $('#lcl_thumbs_nav').removeClass('lcl_tn_has_arr');
            }
        };


        /* thumbs navigator - arrows opacity */
        var thumbs_nav_arrows_opacity = function () {
            var sl = $('.lcl_tn_inner').scrollLeft();

            if (!sl) {
                $('.lcl_tn_prev').addClass('lcl_tn_disabled_arr').stop(true).fadeTo(150, 0.5);
            } else {
                $('.lcl_tn_prev').removeClass('lcl_tn_disabled_arr').stop(true).fadeTo(150, 1);
            }

            if (sl >= (thumbs_nav_elems_w() - $('.lcl_tn_inner').width())) {
                $('.lcl_tn_next').addClass('lcl_tn_disabled_arr').stop(true).fadeTo(150, 0.5);
            } else {
                $('.lcl_tn_next').removeClass('lcl_tn_disabled_arr').stop(true).fadeTo(150, 1);
            }
        };
        $(document).on('lcl_smoothscroll_end', '.lcl_tn_inner', function (e) {
            if (obj != lcl_curr_obj) { return true; }
            thumbs_nav_arrows_opacity();
        });


        /* thumbs navigator - scroll to shown element - centering it */
        var thumbs_nav_scroll_to_item = function (elem_id) {
            var $subj = $('.lcl_tn_inner > li[rel=' + elem_id + ']');
            if (!$subj.length) { return false; }

            var id = 0;
            $('.lcl_tn_inner > li').each(function (i, v) {
                if ($(this).attr('rel') == elem_id) {
                    id = i;
                    return false;
                }
            });

            // center thumb with scroll
            var elem_w = $('.lcl_tn_inner > li').last().outerWidth();
            var margin = parseInt($('.lcl_tn_inner > li').last().css('margin-left'), 10);
            var wrap_w = $('.lcl_tn_inner').width();
            var to_center = Math.floor(($('.lcl_tn_inner').width() - elem_w - margin) / 2);

            var new_offset = ((elem_w * id) + margin * (id - 1)) + Math.floor(margin / 2) - to_center;

            $('.lcl_tn_inner').stop(true).animate({ "scrollLeft": new_offset }, 500, function () {
                $('.lcl_tn_inner').trigger('lcl_smoothscroll_end');

                // show after having scrolled
                $('#lcl_thumbs_nav').removeClass('lcl_pre_tn_scroll');
            });

            // set selected nav thumb class
            $('.lcl_tn_inner > li').removeClass('lcl_sel_thumb');
            $subj.addClass('lcl_sel_thumb');
        };


        /* lc smooth scroll system */
        // suggested ratio = 0.3
        // suggested duration = 400
        $.fn.lcl_smoothscroll = function (ratio, duration, ignoreX, ignoreY) {
            if (lcl_on_mobile) { return false; }
            this.off("mousemove mousedown mouseup mouseenter mouseleave");

            var $subj = this,
                trackX = (typeof (ignoreX) == 'undefined' || !ignoreX) ? true : false,
                trackY = (typeof (ignoreY) == 'undefined' || !ignoreY) ? true : false,

                mouseout_timeout = false,
                curDown = false,
                curYPos = 0,
                curXPos = 0,

                startScrollY = 0,
                startScrollX = 0,
                scrollDif = 0;

            $subj.mousemove(function (m) {
                if (curDown === true) {
                    $subj.stop(true);

                    if (trackX) {
                        $subj.scrollLeft(startScrollX + (curXPos - m.pageX));
                    }
                    if (trackY) {
                        $subj.scrollTop(startScrollY + (curYPos - m.pageY));
                    }
                }
            });


            $subj.mouseover(function () {
                if (mouseout_timeout) {
                    clearTimeout(mouseout_timeout);
                }
            });
            $subj.mouseout(function () {
                mouseout_timeout = setTimeout(function () {
                    curDown = false;
                    mouseout_timeout = false;
                }, 500);
            });

            $subj.mousedown(function (m) {
                if (typeof (lc_sms_timeout) != 'undefined') { clearTimeout(lc_sms_timeout); }
                curDown = true;

                startScrollY = $subj.scrollTop();
                startScrollX = $subj.scrollLeft();

                curYPos = m.pageY;
                curXPos = m.pageX;
            });

            $subj.mouseup(function (m) {
                curDown = false;

                // smooth scroll
                var currScrollY = $subj.scrollTop();
                var scrollDiffY = (startScrollY - currScrollY) * -1;
                var newScrollY = currScrollY + (scrollDiffY * ratio);

                var currScrollX = $subj.scrollLeft();
                var scrollDiffX = (startScrollX - currScrollX) * -1;
                var newScrollX = currScrollX + (scrollDiffX * ratio);

                // thumbs nav - if is tiny movement, simulate a true click on element
                if (
                    (scrollDiffY < 3 && scrollDiffY > -3) &&
                    (scrollDiffX < 3 && scrollDiffX > -3)
                ) {
                    $(m.target).trigger('lcl_tn_elem_click');
                    return false;
                }

                // animate (only if movement was wide enough)
                if (scrollDiffY > 20 || scrollDiffX > 20) {
                    var anim_obj = {};
                    if (trackY) {
                        anim_obj["scrollTop"] = newScrollY;
                    }
                    if (trackX) {
                        anim_obj["scrollLeft"] = newScrollX;
                    }

                    $subj.stop(true).animate(anim_obj, duration, 'linear', function () {
                        $subj.trigger('lcl_smoothscroll_end');
                    });
                }
            });
        };


        //////////////////////////////////////////////////////////////


        /* show lightbox - click handlers */
        if (!lcl_vars.is_arr_instance) {
            if (lcl_settings.live_elements && lcl_vars.elems_selector) { // switch between static and dynamic elements retrieval   	

                $(document).off('click', lcl_vars.elems_selector)
                    .on('click', lcl_vars.elems_selector, function (e) {
                        e.preventDefault();

                        // update elements count - live 
                        var vars = $.data(obj, 'lcl_vars');
                        vars.elems_count = $(lcl_vars.elems_selector).length;

                        // open lightbox
                        open_lb(obj, $(this));

                        // binded element click - lb should open | args: clicked element 
                        obj.first().trigger('lcl_clicked_elem', [$(this)]);
                    });
            }
            else {
                obj.off('click');
                obj.on('click', function (e) {
                    e.preventDefault();

                    open_lb(obj, $(this));

                    // binded element click - lb should open 
                    obj.first().trigger('lcl_clicked_elem', [$(this)]);
                });
            }
        }


        /* close clicking overlay or button */
        $(document).on('click', '#lcl_overlay:not(.lcl_modal), .lcl_close, #lcl_corner_close', function (e) {
            if (obj != lcl_curr_obj) { return true; }
            close_lb();
        });


        /* navigation button - prev */
        $(document).on('click', '.lcl_prev', function (e) {
            if (obj != lcl_curr_obj) { return true; }
            switch_elem('prev');
        });

        /* navigation button - next */
        $(document).on('click', '.lcl_next', function (e) {
            if (obj != lcl_curr_obj) { return true; }
            switch_elem('next');
        });


        /* Keyboard events */
        $(document).bind('keydown', function (e) {
            if (lcl_shown) {
                if (obj != lcl_curr_obj) { return true; }

                // next 
                if (e.keyCode == 39) {
                    e.preventDefault();
                    switch_elem('next');
                }

                // prev
                else if (e.keyCode == 37) {
                    e.preventDefault();
                    switch_elem('prev');
                }

                // close
                else if (e.keyCode == 27) {
                    e.preventDefault();
                    close_lb();
                }

                // fullscreen
                else if (e.keyCode == 122 && lcl_ai_opts.fullscreen) {
                    if (typeof (lcl_fs_key_timeout) != 'undefined') { clearTimeout(lcl_fs_key_timeout); }

                    lcl_fs_key_timeout = setTimeout(function () {
                        if ($('.lcl_fullscreen_mode').length) {
                            exit_fullscreen();
                        } else {
                            enter_fullscreen();
                        }
                    }, 50);
                }
            }
        });


        /* elems navigation with mousewheel */
        $(document).on('wheel', '#lcl_overlay, #lcl_window, #lcl_thumbs_nav:not(.lcl_tn_has_arr)', function (e) {
            if (obj != lcl_curr_obj || !lcl_curr_opts.mousewheel) { return true; }
            var $target = $(e.target);

            // if not in window, do it!
            if (!$target.is('#lcl_window') && !$target.parents('#lcl_window').length) {
                e.preventDefault();
                var delta = e.originalEvent.deltaY;

                if (delta > 0) { switch_elem('next'); }
                else { switch_elem('prev'); }
            }

            else {
                // cycle to know if parents have scrollers
                var perform = true;
                for (a = 0; a < 20; a++) {
                    if ($target.is('#lcl_window')) { break; }

                    if ($target[0].scrollHeight > $target.outerHeight()) {
                        perform = false;
                        break;
                    }
                    else {
                        $target = $target.parent();
                    }
                }

                if (perform) {
                    e.preventDefault();
                    var delta = e.originalEvent.deltaY;

                    if (delta > 0) { switch_elem('next'); }
                    else { switch_elem('prev'); }
                }
            }
        });


        /* next element clicking on image or zoom (where available with doubleclick) */
        $(document).on('click', '.lcl_image_elem', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            lcl_img_click_track = setTimeout(function () {
                if (!$('.lcl_zoom_wrap').length) {
                    switch_elem('next');
                }
            }, 250);
        });


        /* track doubleclick to zoom image */
        $(document).on('dblclick', '.lcl_image_elem', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            if (!lcl_curr_opts.img_zoom) { return true; }
            if (!$('.lcl_zoom_icon').length) { return true; }

            // avoid single click trigger
            if (typeof (lcl_img_click_track) != 'undefined') {
                clearTimeout(lcl_img_click_track);
                zoom(true);
            }
        });


        /* toggle text */
        $(document).on('click', '.lcl_txt_toggle', function (e) {
            if (obj != lcl_curr_obj) { return true; }
            var o = lcl_ai_opts;

            // class lcl_toggling_txt enables window sizing animations
            if (!lcl_is_active && !$('.lcl_no_txt').length && !$('.lcl_toggling_txt').length) {
                if (o.data_position != 'over') {

                    var txt_on_side = (o.data_position == 'rside' || o.data_position == 'lside') ? true : false;
                    var forced_over = $('.lcl_force_txt_over').length;
                    var timing = (o.animation_time < 150) ? o.animation_time : 150;
                    var classes_delay = 0;


                    // if text on side - hide subject
                    if (txt_on_side && !forced_over) {
                        $('#lcl_subj').fadeTo(timing, 0);
                    }
                    // text under - hide 
                    else {
                        if (!forced_over) {
                            $('#lcl_contents_wrap').fadeTo(timing, 0);
                            classes_delay = timing;
                        }
                    }

                    setTimeout(function () {
                        $('#lcl_wrap').toggleClass('lcl_hidden_txt');
                    }, classes_delay);


                    if (!forced_over) {
                        lcl_is_active = true;
                        $('#lcl_wrap').addClass('lcl_toggling_txt');

                        // wait until text is hidden
                        setTimeout(function () {
                            lcl_is_active = false;
                            lcl_resize();
                        }, o.animation_time);

                        // after sizing - disable animations again
                        setTimeout(function () {
                            $('#lcl_wrap').removeClass('lcl_toggling_txt');

                            if (txt_on_side && !forced_over) {
                                $('#lcl_subj').fadeTo(timing, 1);
                            } else {
                                if (!forced_over) {
                                    $('#lcl_contents_wrap').fadeTo(timing, 1);
                                }
                            }
                        }, (o.animation_time * 2) + 50);
                    }
                }

                // text over - just hide
                else {
                    $('#lcl_wrap').toggleClass('lcl_hidden_txt');
                }
            }
        });


        /* start/end slideshow */
        $(document).on('click', '.lcl_play', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            if ($('.lcl_is_playing').length) {
                lcl_stop_slideshow();
            } else {
                lcl_start_slideshow();
            }
        });


        /* track video start on click */
        $(document).on('click', '.lcl_elem', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            if (!$('.lcl_playing_video').length && $.inArray($('#lcl_wrap').attr('lcl-type'), ['video']) !== -1) {

                lcl_stop_slideshow();
                $('#lcl_wrap').addClass('lcl_playing_video');
            }
        });

        /* trick to detect click on iframes */
        var lcl_iframe_click = function () {
            if (typeof (lcl_iframe_click_intval) != 'undefined') { clearInterval(lcl_iframe_click_intval); }

            lcl_iframe_click_intval = setInterval(function () {
                var $ae = $(document.activeElement);

                if ($ae.is('iframe') && $ae.hasClass('lcl_elem') && ($('.lcl_youtube_elem').length || $('.lcl_vimeo_elem').length || $('.lcl_dailymotion_elem').length)) {
                    lcl_stop_slideshow();
                    $('#lcl_wrap').addClass('lcl_playing_video');

                    clearInterval(lcl_iframe_click_intval);
                }
            }, 300);
        };


        /* toggle socials */
        $(document).on('click', '.lcl_socials', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            // show
            if (!$('.lcl_socials > div').length) {
                var el = lcl_curr_vars.elems[lcl_curr_vars.elem_index];
                var page_url = encodeURIComponent(window.location.href);

                var title = encodeURIComponent(el.title).replace(/'/g, "\\'");
                var descr = encodeURIComponent(el.txt).replace(/'/g, "\\'");

                // find image's URL
                if (el.type == 'image') {
                    var img = el.src;
                } else {
                    var img = (el.poster) ? el.poster : false;
                    if (!img && typeof (el.vid_poster) != 'undefined') { img = el.vid_poster; }
                }


                // prepare and append code
                var code =
                    '<div class="lcl_socials_tt lcl_tooltip lcl_tt_bottom">';

                if (lcl_curr_opts.fb_share_params) {
                    var share_url = page_url;
                    share_url += (window.location.href.indexOf('?') === -1) ? '%3F' : '%26';
                    share_url += encodeURIComponent(lcl_curr_opts.fb_share_params.replace('%TITLE%', title).replace('%DESCR%', descr).replace('%IMG%', img));

                    code += '<a class="lcl_icon lcl_fb" onClick="window.open(\'https://www.facebook.com/sharer?u=' + share_url + '&display=popup\',\'sharer\',\'toolbar=0,status=0,width=590,height=500\');" href="javascript: void(0)"></a>';
                } else {
                    code += '<a class="lcl_icon lcl_fb" onClick="window.open(\'https://www.facebook.com/sharer?u=' + page_url + '&display=popup\',\'sharer\',\'toolbar=0,status=0,width=590,height=325\');" href="javascript: void(0)"></a>';
                }

                code += '<a class="lcl_icon lcl_twit" onClick="window.open(\'https://twitter.com/share?text=Check%20out%20%22' + title + '%22%20@&url=' + page_url + '\',\'sharer\',\'toolbar=0,status=0,width=548,height=325\');" href="javascript: void(0)"></a>';

                // on mobile - use Whatsapp
                if (lcl_on_mobile) {
                    code += '<br/><a class="lcl_icon lcl_wa" href="whatsapp://send?text=' + page_url + '" data-action="share/whatsapp/share"></a>';
                }

                // pinterest only if there's an image
                if (img) {
                    code +=
                        '<a class="lcl_icon lcl_pint" onClick="window.open(\'http://pinterest.com/pin/create/button/?url=' + page_url + '&media=' + encodeURIComponent(img) + '&description=' + title + '\',\'sharer\',\'toolbar=0,status=0,width=575,height=330\');" href="javascript: void(0)"></a>';
                }

                code +=
                    '</div>';

                $('.lcl_socials').addClass('lcl_socials_shown').html(code);

                setTimeout(function () { // delay to let CSS execute animation
                    $('.lcl_socials_tt').addClass('lcl_show_tt');
                }, 20);


                // FB direct share
                if (lcl_curr_opts.fb_direct_share) {
                    $(document).off('click', '.lcl_fb').on('click', '.lcl_fb', function (e) {

                        FB.ui({
                            method: 'share_open_graph',
                            action_type: 'og.shares',
                            action_properties: JSON.stringify({
                                object: {
                                    'og:url': window.location.href,
                                    'og:title': el.title,
                                    'og:description': el.txt,
                                    'og:image': img,
                                }
                            })
                        },
                            function (response) {
                                window.close();
                            });

                    });
                }
            }

            // hide	
            else {
                $('.lcl_socials_tt').removeClass('lcl_show_tt');

                setTimeout(function () {
                    $('.lcl_socials').removeClass('lcl_socials_shown').empty();
                }, 260);
            }
        });


        /* toggle fullscreen via button */
        $(document).on('click', '.lcl_fullscreen', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            if ($('.lcl_fullscreen_mode').length) {
                exit_fullscreen(true);
            } else {
                enter_fullscreen(true);
            }
        });



        /* thumbs navigator - toggle */
        $(document).on('click', '.lcl_thumbs_toggle', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            var fs_mode = $('.lcl_fullscreen_mode').length;
            $('#lcl_wrap').addClass('lcl_toggling_tn').toggleClass('lcl_tn_hidden');


            // if not fullscreen - hide contents
            if (!fs_mode) {
                setTimeout(function () {
                    lcl_resize();
                }, 160);
            }

            setTimeout(function () {
                $('#lcl_wrap').removeClass('lcl_toggling_tn');
            }, lcl_curr_opts.animation_time + 50);
        });


        /* thumbs navigator - switch element */
        var tn_track_touch = (lcl_on_mobile) ? ' click' : '';

        $(document).on('lcl_tn_elem_click' + tn_track_touch, '.lcl_tn_inner > li', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            var elem_id = $(this).attr('rel');
            switch_elem(elem_id);
        });


        /* thumbs navigator - navigate with arrows click */
        $(document).on('click', '.lcl_tn_prev:not(.lcl_tn_disabled_arr)', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            $('.lcl_tn_inner').stop(true).animate({ "scrollLeft": ($('.lcl_tn_inner').scrollLeft() - lcl_curr_opts.thumbs_w - 10) }, 300, 'linear', function () {
                $('.lcl_tn_inner').trigger('lcl_smoothscroll_end');
            });
        });

        $(document).on('click', '.lcl_tn_next:not(.lcl_tn_disabled_arr)', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            $('.lcl_tn_inner').stop(true).animate({ "scrollLeft": ($('.lcl_tn_inner').scrollLeft() + lcl_curr_opts.thumbs_w + 10) }, 300, 'linear', function () {
                $('.lcl_tn_inner').trigger('lcl_smoothscroll_end');
            });
        });


        /* thumbs navigator -  navigate with mousewheel */
        $(document).on('wheel', '#lcl_thumbs_nav.lcl_tn_has_arr', function (e) {
            if (obj != lcl_curr_obj) { return true; }

            e.preventDefault();
            var delta = e.originalEvent.deltaY;

            if (delta > 0) { $('.lcl_tn_prev:not(.lcl_tn_disabled_arr)').trigger('click'); }
            else { $('.lcl_tn_next:not(.lcl_tn_disabled_arr)').trigger('click'); }
        });


        /* right click prevent */
        $(document).on("contextmenu", "#lcl_wrap *", function () {
            if (obj != lcl_curr_obj) { return true; }

            if (lcl_ai_opts.rclick_prevent) {
                return false;
            }
        });


        /* avoid page scrolling on touch devices */
        $(window).on('touchmove', function (e) {
            var $t = $(e.target);
            if (!lcl_shown || !lcl_on_mobile) { return true; }
            if (obj != lcl_curr_obj) { return true; }


            if (!$(e.target).parents('#lcl_window').length && !$(e.target).parents('#lcl_thumbs_nav').length) {
                e.preventDefault();
            }
        });


        /////////////////////////////////////////////////////////////


        // touchswipe & zoom on pinch - requires alloy_finger.min.js
        var touch_events = function () {
            if (typeof (AlloyFinger) != 'function') { return false; }
            lcl_is_pinching = false;

            var el = document.querySelector('#lcl_wrap');
            var af = new AlloyFinger(el, {
                singleTap: function (e) {

                    // close lb tapping on overlay
                    if ($(e.target).attr('id') == 'lcl_overlay' && !lcl_ai_opts.modal) {
                        lcl_close();
                    }
                },
                doubleTap: function (e) {
                    e.preventDefault();
                    zoom(true);
                },
                pinch: function (e) {
                    e.preventDefault();
                    lcl_is_pinching = true;

                    if (typeof (lcl_swipe_delay) != 'undefined') { clearTimeout(lcl_swipe_delay); }

                    if (typeof (lcl_pinch_delay) != 'undefined') { clearTimeout(lcl_pinch_delay); }
                    lcl_pinch_delay = setTimeout(function () {

                        if (e.scale > 1.2) {
                            zoom(true);
                        }
                        else if (e.scale < 0.8) {
                            zoom(false);
                        }

                        // avoid swipe if zoom-out
                        setTimeout(function () {
                            lcl_is_pinching = false;
                        }, 300);
                    }, 20);
                },
                touchStart: function (e) {
                    lcl_touchstartX = e.changedTouches[0].clientX;
                },
                touchEnd: function (e) { // simulate swipe with treshold
                    var diff = lcl_touchstartX - e.changedTouches[0].clientX;

                    if ((diff < -50 || diff > 50) && !lcl_is_pinching) {

                        // ignore if consulting thumbs nav
                        if ($(e.target).parents('#lcl_thumbs_nav').length) {
                            return false;
                        }

                        // do not swipe on zoomed
                        if ($(e.target).parents('.lcl_zoom_wrap').length) {
                            return false;
                        }

                        var delay = ($(e.target).parents('.lcl_zoomable').length) ? 250 : 0;
                        if (typeof (lcl_swipe_delay) != 'undefined') { clearTimeout(lcl_swipe_delay); }

                        lcl_swipe_delay = setTimeout(function () {

                            if (diff < -50) {
                                switch_elem('prev');
                            }
                            else {
                                switch_elem('next');
                            }
                        }, delay);
                    }
                }
            });
        };


        /////////////////////////////////////////////////////////////


        //// PUBLIC METHODS
        // set current settings and vars - for actions with lightbox opened - return false if object not initialized
        var set_curr_vars = function () {
            if (!lcl_curr_obj) { return false; }

            lcl_ai_vars = $.data(lcl_curr_obj, 'lcl_vars');
            lcl_ai_opts = $.data(lcl_curr_obj, 'lcl_settings');

            if (!lcl_ai_vars) {
                console.error('LC Lightbox. Object not initialized');
                return false;
            }
            return true;
        };


        // open lightbox
        lcl_open = function (obj, index) {
            lcl_ai_vars = $.data(obj, 'lcl_vars');
            var v = lcl_ai_vars;

            // check instance existence
            if (!v) {
                console.error('LC Lightbox - cannot open. Object not initialized');
                return false;
            }
            else if (typeof (v.elems[index]) == 'undefined') {
                console.error('LC Lightbox - cannot open. Unexisting index');
                return false;
            }
            else {
                v.elem_index = index;
                $clicked_obj = (v.is_arr_instance) ? false : $(obj[index]);

                return open_lb(obj, $clicked_obj);
            }
        };


        // resize lightbox
        lcl_resize = function () {
            if (!lcl_shown || lcl_is_active || !set_curr_vars()) { return false; }

            var v = lcl_ai_vars;
            if (typeof (lcl_size_check) != 'undefined') { clearTimeout(lcl_size_check); }

            lcl_size_check = setTimeout(function () {
                $('#lcl_wrap').addClass('lcl_is_resizing');
                thumbs_nav_arrows_opacity();

                var el = v.elems[v.elem_index];
                return size_elem(el);
            }, 20);
        };


        // close lightbox and destroy vars
        lcl_close = function () {
            if (!lcl_shown || lcl_is_active || !set_curr_vars()) { return false; }
            return close_lb();
        };


        // pagination (next/prev/index)
        lcl_switch = function (new_el) {
            if (!lcl_shown || lcl_is_active || !set_curr_vars()) { return false; }
            return switch_elem(new_el);
        };


        // start slideshow
        lcl_start_slideshow = function (restart) {
            if (!lcl_shown || (typeof (restart) == 'undefined' && typeof (lcl_slideshow) != 'undefined') || !set_curr_vars()) { return false; }
            var o = lcl_ai_opts;

            // if is latest element and isn't carousel - return false
            if (!o.carousel && lcl_ai_vars.elem_index == (lcl_ai_vars.elems.length - 1)) {
                return false;
            }

            if (typeof (lcl_slideshow) != 'undefined') { clearInterval(lcl_slideshow); } // if reset timing
            $('#lcl_wrap').addClass('lcl_is_playing');

            var time = o.animation_time + o.slideshow_time;

            // use progressbar?
            progbar_animate(true);

            // start
            lcl_slideshow = setInterval(function () {
                progbar_animate(false);
                switch_elem('next', true);
            }, time);

            //////

            if (typeof (restart) == 'undefined') {

                // slideshow start - callback
                if (typeof (o.slideshow_start) == 'function') {
                    o.slideshow_start.call(null, o, lcl_ai_vars);
                }

                // slideshow start - hook | args: interval time
                if (!lcl_ai_vars.is_arr_instance) {
                    var $subj = (lcl_ai_vars.elems_selector) ? $(lcl_ai_vars.elems_selector) : lcl_curr_obj;
                    $subj.first().trigger('lcl_slideshow_start', [time]);
                }
            }

            return true;
        };


        // stop slideshow
        lcl_stop_slideshow = function () {
            if (!lcl_shown || typeof (lcl_slideshow) == 'undefined' || !set_curr_vars()) { return false; }
            var o = lcl_ai_opts;

            // check instance existence
            if (!o) {
                console.error('LC Lightbox. Object not initialized');
                return false;
            }

            clearInterval(lcl_slideshow); lcl_slideshow = undefined;
            $('#lcl_wrap').removeClass('lcl_is_playing');

            $('#lcl_progressbar').stop(true).animate({ 'marginTop': ($('#lcl_progressbar').height() * -3) }, 300, function () {
                $(this).remove();
            });

            //////

            // slideshow end - callback
            if (typeof (o.slideshow_end) == 'function') {
                o.slideshow_end.call(null, lcl_ai_opts, lcl_ai_vars);
            }

            // slideshow end - hook
            if (!lcl_ai_vars.is_arr_instance) {
                var $subj = (lcl_ai_vars.elems_selector) ? $(lcl_ai_vars.elems_selector) : lcl_curr_obj;
                $subj.first().trigger('lcl_slideshow_end', []);
            }


            return true;
        };

        return obj;
    };
})(jQuery);




/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

!function (i) { i.fn.theiaStickySidebar = function (t) { function e(t, e) { return !0 === t.initialized || !(i("body").width() < t.minWidth) && (function (t, e) { t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')); e.each(function () { var e = {}; if (e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({ position: e.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) { var a = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i; e.sidebar.find("script").filter(function (i, t) { return 0 === t.type.length || t.type.match(a) }).remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar) } e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom")); var n = e.stickySidebar.offset().top, s = e.stickySidebar.outerHeight(); function d() { e.fixedScrollTop = 0, e.sidebar.css({ "min-height": "1px" }), e.stickySidebar.css({ position: "static", width: "", transform: "none" }) } e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), n -= e.stickySidebar.offset().top, s = e.stickySidebar.outerHeight() - s - n, 0 == n ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == s ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, d(), e.onScroll = function (e) { if (e.stickySidebar.is(":visible")) if (i("body").width() < e.options.minWidth) d(); else { if (e.options.disableOnResponsiveLayouts) { var a = e.sidebar.outerWidth("none" == e.sidebar.css("float")); if (a + 50 > e.container.width()) return void d() } var n, s, r = i(document).scrollTop(), c = "static"; if (r >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) { var p, b = e.paddingTop + t.additionalMarginTop, l = e.paddingBottom + e.marginBottom + t.additionalMarginBottom, f = e.sidebar.offset().top, h = e.sidebar.offset().top + (n = e.container, s = n.height(), n.children().each(function () { s = Math.max(s, i(this).height()) }), s), g = 0 + t.additionalMarginTop, S = e.stickySidebar.outerHeight() + b + l < i(window).height(); p = S ? g + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom; var u = f - r + e.paddingTop, m = h - r - e.paddingBottom - e.marginBottom, y = e.stickySidebar.offset().top - r, k = e.previousScrollTop - r; "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (y += k), "stick-to-top" == e.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (y = p - e.stickySidebar.outerHeight()), y = k > 0 ? Math.min(y, g) : Math.max(y, p - e.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, m - e.stickySidebar.outerHeight()); var v = e.container.height() == e.stickySidebar.outerHeight(); c = (v || y != g) && (v || y != p - e.stickySidebar.outerHeight()) ? r + y - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed" } if ("fixed" == c) { var x = i(document).scrollLeft(); e.stickySidebar.css({ position: "fixed", width: o(e.stickySidebar) + "px", transform: "translateY(" + y + "px)", left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - x + "px", top: "0px" }) } else if ("absolute" == c) { var T = {}; "absolute" != e.stickySidebar.css("position") && (T.position = "absolute", T.transform = "translateY(" + (r + y - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", T.top = "0px"), T.width = o(e.stickySidebar) + "px", T.left = "", e.stickySidebar.css(T) } else "static" == c && d(); "static" != c && 1 == e.options.updateSidebarHeight && e.sidebar.css({ "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom }), e.previousScrollTop = r } }, e.onScroll(e), i(document).on("scroll." + e.options.namespace, function (i) { return function () { i.onScroll(i) } }(e)), i(window).on("resize." + e.options.namespace, function (i) { return function () { i.stickySidebar.css({ position: "static" }), i.onScroll(i) } }(e)), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], function (i) { return function () { i.onScroll(i) } }(e)) }) }(t, e), !0) } function o(i) { var t; try { t = i[0].getBoundingClientRect().width } catch (i) { } return void 0 === t && (t = i.width()), t } return (t = i.extend({ containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, function (t, o) { e(t, o) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, o) { return function (a) { var n = e(t, o); n && i(this).unbind(a) } }(t, o)), i(window).on("resize." + t.namespace, function (t, o) { return function (a) { var n = e(t, o); n && i(this).unbind(a) } }(t, o))) }(t, this), this } }(jQuery);


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) { function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function (a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function (b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function () { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function () { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b }; !c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function (a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = []; for (a.items = { merge: !1, width: b }; d--;)c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width(); this._widths = f } }, { filter: ["items", "settings"], run: function () { var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = ""; for (g /= 2; g > 0;)b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1; this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function () { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a); this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function () { var a = this.settings.stagePadding, b = this._coordinates, c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" }; this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children(); if (c && a.items.merge) for (; b--;)a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function () { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function () { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function () { var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = []; for (c = 0, d = this._coordinates.length; c < d; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c); this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }], e.prototype.initializeStage = function () { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, e.prototype.initializeItems = function () { var b = this.$element.find(".owl-item"); if (b.length) return this._items = b.get().map(function (b) { return a(b) }), this._mergers = this._items.map(function () { return 1 }), void this.refresh(); this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) }, e.prototype.initialize = function () { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var a, b, c; a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a) } this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.isVisible = function () { return !this.settings.checkVisibility || this.$element.is(":visible") }, e.prototype.setup = function () { var b = this.viewport(), c = this.options.responsive, d = -1, e = null; c ? (a.each(c, function (a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function () { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function (b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function () { for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++; this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function (a) { switch (a = a || e.Width.Default) { case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function () { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function () { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function () { return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function () { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function (b) { var d = null; 3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)); a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function (a) { var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e); this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right"; a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function (b, c) { var e = -1, f = 30, g = this.width(), h = this.coordinates(); return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) { return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e }, e.prototype.animate = function (b) { var c = this.speed() > 0; this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function (a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function (a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function (b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) { return b }) }, e.prototype.reset = function (a) { (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function (a, b) { var c = this._items.length, e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function (a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function (a) { var b, c, d, e = this.settings, f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) { if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);); f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function (a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function (a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function (a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function (b) { var c = this._clones.length / 2, e = c + this._items.length, f = function (a) { return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function (a, b) { return f(b) }) : a.map(this._clones, function (a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function (b) { var c, e = 1, f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function (a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function (a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function (a, b) { var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum(); this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update() }, e.prototype.next = function (a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function (a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function (a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1; this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function () { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function (b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () { return 1 === this.nodeType }).each(a.proxy(function (a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function (b, c) { var e = this.relative(this._current); c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function (a) { (a = this.normalize(a, !0)) !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function (b) { b.each(a.proxy(function (b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function () { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy(); this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function (a, b, c) { var d = this.settings.rtl; switch (b) { case "<": return d ? a > c : a < c; case ">": return d ? a < c : a > c; case ">=": return d ? a <= c : a >= c; case "<=": return d ? a >= c : a <= c } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function (b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } }, i = a.camelCase(a.grep(["on", b, d], function (a) { return a }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function (a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function (b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default; a.event.special[b.name]._default = function (a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function (a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function (a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function (a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function (b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function () { var d = a(this), f = d.data("owl.carousel"); f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () { this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function () { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function () { var a, c; b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) { var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) { this.load(b) }, this); for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;)this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, e.prototype.load = function (c) { var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy"); !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) { var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset"); this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () { this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (c) { this._core = c, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null; var d = this; a(b).on("load", function () { d._core.settings.autoHeight && d.update() }), a(b).resize(function () { d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () { d.update() }, 250)) }) }; e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () { var b = this._core._current, c = b + this._core.settings.items, d = this._core.settings.lazyLoad, e = this._core.$stage.children().toArray().slice(b, c), f = [], g = 0; a.each(e, function (b, c) { f.push(a(c).height()) }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function () { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find(".owl-video"); c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) { this.play(a) }, this)) }; e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) { var c = function () { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported."); c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function (b, c) { var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (c) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" }), b.after(d), b.after(e) }; if (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function () { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function (b) { var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height(); this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function () { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function () { var a, b; this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function (a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) }; e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function () { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function (b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": a.proxy(function (a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function (a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function (a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) }; e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype._next = function (d) { this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed) }, e.prototype.read = function () { return (new Date).getTime() - this._time }, e.prototype.play = function (c, d) { var e; this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e) }, e.prototype.stop = function () { this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating")) }, e.prototype.pause = function () { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call)) }, e.prototype.destroy = function () { var a, b; this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) }; e.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () { var b, c = this._core.settings; this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function () { var a, b, c, d, e; e = this._core.settings; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function () { var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break; b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function () { var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind; this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function (b) { var c = this._core.settings; b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function () { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function (a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function (b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function (b, c, d) { var e; !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return; this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function (c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return; b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) { var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]); f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) }; e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () { var c, d; a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { function e(b, c) { var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) { if (g[b] !== d) return e = !c || b, !1 }), e } function f(a) { return e(a, !0) } var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, j = { csstransforms: function () { return !!e("transform") }, csstransforms3d: function () { return !!e("perspective") }, csstransitions: function () { return !!e("transition") }, cssanimations: function () { return !!e("animation") } }; j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);



/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (e, t) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t() }("undefined" != typeof window ? window : this, function () { function e() { } var t = e.prototype; return t.on = function (e, t) { if (e && t) { var i = this._events = this._events || {}, n = i[e] = i[e] || []; return n.indexOf(t) == -1 && n.push(t), this } }, t.once = function (e, t) { if (e && t) { this.on(e, t); var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {}; return n[t] = !0, this } }, t.off = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = i.indexOf(t); return n != -1 && i.splice(n, 1), this } }, t.emitEvent = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { i = i.slice(0), t = t || []; for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) { var r = i[o], s = n && n[r]; s && (this.off(e, r), delete n[r]), r.apply(this, t) } return this } }, t.allOff = function () { delete this._events, delete this._onceEvents }, e }), function (e, t) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) { return t(e, i) }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter) }("undefined" != typeof window ? window : this, function (e, t) { function i(e, t) { for (var i in t) e[i] = t[i]; return e } function n(e) { if (Array.isArray(e)) return e; var t = "object" == typeof e && "number" == typeof e.length; return t ? d.call(e) : [e] } function o(e, t, r) { if (!(this instanceof o)) return new o(e, t, r); var s = e; return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e)) } function r(e) { this.img = e } function s(e, t) { this.url = e, this.element = t, this.img = new Image } var h = e.jQuery, a = e.console, d = Array.prototype.slice; o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function (e) { "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e); var t = e.nodeType; if (t && u[t]) { for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) { var o = i[n]; this.addImage(o) } if ("string" == typeof this.options.background) { var r = e.querySelectorAll(this.options.background); for (n = 0; n < r.length; n++) { var s = r[n]; this.addElementBackgroundImages(s) } } } }; var u = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function (e) { var t = getComputedStyle(e); if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) { var o = n && n[2]; o && this.addBackground(o, e), n = i.exec(t.backgroundImage) } }, o.prototype.addImage = function (e) { var t = new r(e); this.images.push(t) }, o.prototype.addBackground = function (e, t) { var i = new s(e, t); this.images.push(i) }, o.prototype.check = function () { function e(e, i, n) { setTimeout(function () { t.progress(e, i, n) }) } var t = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) { t.once("progress", e), t.check() }) : void this.complete() }, o.prototype.progress = function (e, t, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t) }, o.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var t = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[t](this) } }, r.prototype = Object.create(t.prototype), r.prototype.check = function () { var e = this.getIsImageComplete(); return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src)) }, r.prototype.getIsImageComplete = function () { return this.img.complete && this.img.naturalWidth }, r.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]) }, r.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, r.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, r.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, r.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(r.prototype), s.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var e = this.getIsImageComplete(); e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]) }, o.makeJQueryPlugin = function (t) { t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) { var i = new o(this, e, t); return i.jqDeferred.promise(h(this)) }) }, o.makeJQueryPlugin(), o });




/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function (t, e) { "use strict"; function i(i, s, a) { function u(t, e, o) { var n, s = "$()." + i + '("' + e + '")'; return t.each(function (t, u) { var h = a.data(u, i); if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s); var d = h[e]; if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method"); var l = d.apply(h, o); n = void 0 === n ? l : n }), void 0 !== n ? n : t } function h(t, e) { t.each(function (t, o) { var n = a.data(o, i); n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n)) }) } a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function (t) { if ("string" == typeof t) { var e = n.call(arguments, 1); return u(this, t, e) } return h(this, t), this }, o(a)) } function o(t) { !t || t && t.bridget || (t.bridget = i) } var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () { } : function (t) { s.error(t) }; return o(e || t.jQuery), i }), function (t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function () { function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, o = i[t] = i[t] || []; return o.indexOf(e) == -1 && o.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {}; return o[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var o = i.indexOf(e); return o != -1 && i.splice(o, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { i = i.slice(0), e = e || []; for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) { var s = i[n], r = o && o[s]; r && (this.off(t, s), delete o[s]), s.apply(this, e) } return this } }, e.allOff = function () { delete this._events, delete this._onceEvents }, t }), function (t, e) { "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function () { "use strict"; function t(t) { var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e); return i && e } function e() { } function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) { var i = u[e]; t[i] = 0 } return t } function o(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e } function n() { if (!d) { d = !0; var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement; i.appendChild(e); var n = o(e); r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e) } } function s(e) { if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var s = o(e); if ("none" == s.display) return i(); var a = {}; a.width = e.offsetWidth, a.height = e.offsetHeight; for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) { var f = u[l], c = s[f], m = parseFloat(c); a[f] = isNaN(m) ? 0 : m } var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width); x !== !1 && (a.width = x + (I ? 0 : p + _)); var S = t(s.height); return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a } } var r, a = "undefined" == typeof console ? e : function (t) { console.error(t) }, u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1; return s }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function () { "use strict"; var t = function () { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var o = e[i], n = o + "MatchesSelector"; if (t[n]) return n } }(); return function (e, i) { return e[t](i) } }), function (t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function (t, e) { var i = {}; i.extend = function (t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function (t, e) { return (t % e + e) % e }; var o = Array.prototype.slice; i.makeArray = function (t) { if (Array.isArray(t)) return t; if (null === t || void 0 === t) return []; var e = "object" == typeof t && "number" == typeof t.length; return e ? o.call(t) : [t] }, i.removeFrom = function (t, e) { var i = t.indexOf(e); i != -1 && t.splice(i, 1) }, i.getParent = function (t, i) { for (; t.parentNode && t != document.body;)if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function (t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.filterFindElements = function (t, o) { t = i.makeArray(t); var n = []; return t.forEach(function (t) { if (t instanceof HTMLElement) { if (!o) return void n.push(t); e(t, o) && n.push(t); for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)n.push(i[s]) } }), n }, i.debounceMethod = function (t, e, i) { i = i || 100; var o = t.prototype[e], n = e + "Timeout"; t.prototype[e] = function () { var t = this[n]; clearTimeout(t); var e = arguments, s = this; this[n] = setTimeout(function () { o.apply(s, e), delete s[n] }, i) } }, i.docReady = function (t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function (t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() }; var n = t.console; return i.htmlInit = function (e, o) { i.docReady(function () { var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery; h.forEach(function (t) { var i, s = t.getAttribute(r) || t.getAttribute(d); try { i = s && JSON.parse(s) } catch (a) { return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) } var u = new e(t, i); l && l.data(t, o, u) }) }) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function (t, e) { "use strict"; function i(t) { for (var e in t) return !1; return e = null, !0 } function o(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } function n(t) { return t.replace(/([A-Z])/g, function (t) { return "-" + t.toLowerCase() }) } var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r], h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" }, d = o.prototype = Object.create(t.prototype); d.constructor = o, d._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, d.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, d.getSize = function () { this.size = e(this.element) }, d.css = function (t) { var e = this.element.style; for (var i in t) { var o = h[i] || i; e[o] = t[i] } }, d.getPosition = function () { var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], s = parseFloat(o), r = parseFloat(n), a = this.layout.size; o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r }, d.layoutPosition = function () { var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n]; e[s] = this.getXValue(a), e[r] = ""; var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u]; e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]) }, d.getXValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, d.getYValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, d._transitionTo = function (t, e) { this.getPosition(); var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y; if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition(); var s = t - i, r = e - o, a = {}; a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, d.getTranslate = function (t, e) { var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"); return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, d.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, d._nonTransition = function (t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, d.transition = function (t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); var o = this.element.offsetHeight; o = null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var l = "opacity," + n(a); d.enableTransition = function () { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration; t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1) } }, d.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, d.onotransitionend = function (t) { this.ontransitionend(t) }; var f = { "-webkit-transform": "transform" }; d.ontransitionend = function (t) { if (t.target === this.element) { var e = this._transn, o = f[t.propertyName] || t.propertyName; if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) { var n = e.onEnd[o]; n.call(this), delete e.onEnd[o] } this.emitEvent("transitionEnd", [this]) } }, d.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, d._removeStyles = function (t) { var e = {}; for (var i in t) e[i] = ""; this.css(e) }; var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return d.removeTransitionStyles = function () { this.css(c) }, d.stagger = function (t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, d.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, d.remove = function () { return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () { this.removeElem() }), void this.hide()) : void this.removeElem() }, d.reveal = function () { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle"); e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, d.getHideRevealTransitionEndProperty = function (t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, d.hide = function () { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle"); e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, d.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, d.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, o }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) { return e(t, i, o, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function (t, e, i, o, n) { "use strict"; function s(t, e) { var i = o.getQueryElement(t); if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t))); this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e); var n = ++l; this.element.outlayerGUID = n, f[n] = this, this._create(); var s = this._getOption("initLayout"); s && this.layout() } function r(t) { function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e } function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2]; if (!i.length) return 0; i = parseFloat(i); var n = m[o] || 1; return i * n } var u = t.console, h = t.jQuery, d = function () { }, l = 0, f = {}; s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var c = s.prototype; o.extend(c, e.prototype), c.option = function (t) { o.extend(this.options, t) }, c._getOption = function (t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle); var t = this._getOption("resize"); t && this.bindResize() }, c.reloadItems = function () { this.items = this._itemize(this.element.children) }, c._itemize = function (t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) { var s = e[n], r = new i(s, this); o.push(r) } return o }, c._filterFindItemElements = function (t) { return o.filterFindElements(t, this.options.itemSelector) }, c.getItemElements = function () { return this.items.map(function (t) { return t.element }) }, c.layout = function () { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited = !0 }, c._init = c.layout, c._resetLayout = function () { this.getSize() }, c.getSize = function () { this.size = i(this.element) }, c._getMeasurement = function (t, e) { var o, n = this.options[t]; n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0 }, c.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, c._getItemsForLayout = function (t) { return t.filter(function (t) { return !t.isIgnored }) }, c._layoutItems = function (t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = []; t.forEach(function (t) { var o = this._getItemLayoutPosition(t); o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o) }, this), this._processLayoutQueue(i) } }, c._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, c._processLayoutQueue = function (t) { this.updateStagger(), t.forEach(function (t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, c.updateStagger = function () { var t = this.options.stagger; return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger) }, c._positionItem = function (t, e, i, o, n) { o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i)) }, c._postLayout = function () { this.resizeContainer() }, c.resizeContainer = function () { var t = this._getOption("resizeContainer"); if (t) { var e = this._getContainerSize(); e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) { if (void 0 !== t) { var i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, c._emitCompleteOnItems = function (t, e) { function i() { n.dispatchEvent(t + "Complete", null, [e]) } function o() { r++, r == s && i() } var n = this, s = e.length; if (!e || !s) return void i(); var r = 0; e.forEach(function (e) { e.once(t, o) }) }, c.dispatchEvent = function (t, e, i) { var o = e ? [e].concat(i) : i; if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) { var n = h.Event(e); n.type = t, this.$element.trigger(n, i) } else this.$element.trigger(t, i) }, c.ignore = function (t) { var e = this.getItem(t); e && (e.isIgnored = !0) }, c.unignore = function (t) { var e = this.getItem(t); e && delete e.isIgnored }, c.stamp = function (t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, c.unstamp = function (t) { t = this._find(t), t && t.forEach(function (t) { o.removeFrom(this.stamps, t), this.unignore(t) }, this) }, c._find = function (t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t) }, c._manageStamps = function () { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, c._getBoundingRect = function () { var t = this.element.getBoundingClientRect(), e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, c._manageStamp = d, c._getElementOffset = function (t) { var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom }; return s }, c.handleEvent = o.handleEvent, c.bindResize = function () { t.addEventListener("resize", this), this.isResizeBound = !0 }, c.unbindResize = function () { t.removeEventListener("resize", this), this.isResizeBound = !1 }, c.onresize = function () { this.resize() }, o.debounceMethod(s, "onresize", 100), c.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, c.needsResizeLayout = function () { var t = i(this.element), e = this.size && t; return e && t.innerWidth !== this.size.innerWidth }, c.addItems = function (t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, c.appended = function (t) { var e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, c.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, c.reveal = function (t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.reveal() }) } }, c.hide = function (t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.hide() }) } }, c.revealItemElements = function (t) { var e = this.getItems(t); this.reveal(e) }, c.hideItemElements = function (t) { var e = this.getItems(t); this.hide(e) }, c.getItem = function (t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, c.getItems = function (t) { t = o.makeArray(t); var e = []; return t.forEach(function (t) { var i = this.getItem(t); i && e.push(i) }, this), e }, c.remove = function (t) { var e = this.getItems(t); this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) { t.remove(), o.removeFrom(this.items, t) }, this) }, c.destroy = function () { var t = this.element.style; t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID; delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace) }, s.data = function (t) { t = o.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function (t, e) { var i = r(s); return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i }; var m = { ms: 1, s: 1e3 }; return s.Item = n, s }), function (t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function (t) { "use strict"; function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype), o = i._create; i._create = function () { this.id = this.layout.itemGUID++, o.call(this), this.sortData = {} }, i.updateSortData = function () { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData, e = this.layout._sorters; for (var i in t) { var o = e[i]; this.sortData[i] = o(this.element, this) } } }; var n = i.destroy; return i.destroy = function () { n.apply(this, arguments), this.css({ display: "" }) }, e }), function (t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function (t, e) { "use strict"; function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var o = i.prototype, n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"]; return n.forEach(function (t) { o[t] = function () { return e.prototype[t].apply(this.isotope, arguments) } }), o.needsVerticalResizeLayout = function () { var e = t(this.isotope.element), i = this.isotope.size && e; return i && e.innerHeight != this.isotope.size.innerHeight }, o._getMeasurement = function () { this.isotope._getMeasurement.apply(this, arguments) }, o.getColumnWidth = function () { this.getSegmentSize("column", "Width") }, o.getRowHeight = function () { this.getSegmentSize("row", "Height") }, o.getSegmentSize = function (t, e) { var i = t + e, o = "outer" + e; if (this._getMeasurement(i, o), !this[i]) { var n = this.getFirstItemSize(); this[i] = n && n[o] || this.isotope.size["inner" + e] } }, o.getFirstItemSize = function () { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, o.layout = function () { this.isotope.layout.apply(this.isotope, arguments) }, o.getSize = function () { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function (t, e) { function n() { i.apply(this, arguments) } return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n }, i }), function (t, e) { "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function (t, e) { var i = t.create("masonry"); i.compatOptions.fitWidth = "isFitWidth"; var o = i.prototype; return o._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++)this.colYs.push(0); this.maxY = 0, this.horizontalColIndex = 0 }, o.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0], i = t && t.element; this.columnWidth = i && e(i).outerWidth || this.containerWidth } var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o, a = r && r < 1 ? "round" : "floor"; s = Math[a](s), this.cols = Math.max(s, 1) }, o.getContainerWidth = function () { var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i); this.containerWidth = o && o.innerWidth }, o._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth); o = Math.min(o, this.cols); for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)this.colYs[h] = a; return r }, o._getTopColPosition = function (t) { var e = this._getTopColGroup(t), i = Math.min.apply(Math, e); return { col: e.indexOf(i), y: i } }, o._getTopColGroup = function (t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)e[o] = this._getColGroupY(o, t); return e }, o._getColGroupY = function (t, e) { if (e < 2) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, o._getHorizontalColPosition = function (t, e) { var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols; i = o ? 0 : i; var n = e.size.outerWidth && e.size.outerHeight; return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) } }, o._manageStamp = function (t) { var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth); a = Math.max(0, a); var u = Math.floor(r / this.columnWidth); u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u); for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)this.colYs[l] = Math.max(d, this.colYs[l]) }, o._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, o._getContainerFitWidth = function () { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++; return (this.cols - t) * this.columnWidth - this.gutter }, o.needsResizeLayout = function () { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }), function (t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function (t, e) { "use strict"; var i = t.create("masonry"), o = i.prototype, n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]); var r = o.measureColumns; o.measureColumns = function () { this.items = this.isotope.filteredItems, r.call(this) }; var a = o._getOption; return o._getOption = function (t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }), function (t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function (t) { "use strict"; var e = t.create("fitRows"), i = e.prototype; return i._resetLayout = function () { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter; 0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var o = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o }, i._getContainerSize = function () { return { height: this.maxY } }, e }), function (t, e) { "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function (t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }), i = e.prototype; return i._resetLayout = function () { this.y = 0 }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function () { return { height: this.y } }, e }), function (t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) { return e(t, i, o, n, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function (t, e, i, o, n, s, r) {
    function a(t, e) { return function (i, o) { for (var n = 0; n < t.length; n++) { var s = t[n], r = i.sortData[s], a = o.sortData[s]; if (r > a || r < a) { var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1; return (r > a ? 1 : -1) * h } } return 0 } } var u = t.jQuery, h = String.prototype.trim ? function (t) { return t.trim() } : function (t) { return t.replace(/^\s+|\s+$/g, "") }, d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }); d.Item = s, d.LayoutMode = r; var l = d.prototype; l._create = function () { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, l.reloadItems = function () { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, l._itemize = function () { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { var o = t[i]; o.id = this.itemGUID++ } return this._updateItemsSortData(t), t }, l._initLayoutMode = function (t) { var e = r.modes[t], i = this.options[t] || {}; this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this) }, l.layout = function () { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, l._layout = function () { var t = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, l.arrange = function (t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items); this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, l._init = l.arrange, l._hideReveal = function (t) { this.reveal(t.needReveal), this.hide(t.needHide) }, l._getIsInstant = function () { var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, l._bindArrangeComplete = function () { function t() { e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) } var e, i, o, n = this; this.once("layoutComplete", function () { e = !0, t() }), this.once("hideComplete", function () { i = !0, t() }), this.once("revealComplete", function () { o = !0, t() }) }, l._filter = function (t) { var e = this.options.filter; e = e || "*"; for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) { var a = t[r]; if (!a.isIgnored) { var u = s(a); u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a) } } return { matches: i, needReveal: o, needHide: n } }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) { return t(e.element) } : function (e) { return o(e.element, t) }
    }, l.updateSortData = function (t) { var e; t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, l._getSorters = function () { var t = this.options.getSortData; for (var e in t) { var i = t[e]; this._sorters[e] = f(i) } }, l._updateItemsSortData = function (t) { for (var e = t && t.length, i = 0; e && i < e; i++) { var o = t[i]; o.updateSortData() } }; var f = function () { function t(t) { if ("string" != typeof t) return t; var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o), a = d.sortDataParsers[i[1]]; return t = a ? function (t) { return t && a(r(t)) } : function (t) { return t && r(t) } } function e(t, e) { return t ? function (e) { return e.getAttribute(t) } : function (t) { var i = t.querySelector(e); return i && i.textContent } } return t }(); d.sortDataParsers = { parseInt: function (t) { return parseInt(t, 10) }, parseFloat: function (t) { return parseFloat(t) } }, l._sort = function () { if (this.options.sortBy) { var t = n.makeArray(this.options.sortBy); this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)); var e = a(this.sortHistory, this.options.sortAscending); this.filteredItems.sort(e) } }, l._getIsSameSortBy = function (t) { for (var e = 0; e < t.length; e++)if (t[e] != this.sortHistory[e]) return !1; return !0 }, l._mode = function () { var t = this.options.layoutMode, e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, l._resetLayout = function () { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, l._getItemLayoutPosition = function (t) { return this._mode()._getItemLayoutPosition(t) }, l._manageStamp = function (t) { this._mode()._manageStamp(t) }, l._getContainerSize = function () { return this._mode()._getContainerSize() }, l.needsResizeLayout = function () { return this._mode().needsResizeLayout() }, l.appended = function (t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e); this.filteredItems = this.filteredItems.concat(i) } }, l.prepended = function (t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e); this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, l._filterRevealAdded = function (t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, l.insert = function (t) { var e = this.addItems(t); if (e.length) { var i, o, n = e.length; for (i = 0; i < n; i++)o = e[i], this.element.appendChild(o.element); var s = this._filter(e).matches; for (i = 0; i < n; i++)e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < n; i++)delete e[i].isLayoutInstant; this.reveal(s) } }; var c = l.remove; return l.remove = function (t) { t = n.makeArray(t); var e = this.getItems(t); c.call(this, t); for (var i = e && e.length, o = 0; i && o < i; o++) { var s = e[o]; n.removeFrom(this.filteredItems, s) } }, l.shuffle = function () { for (var t = 0; t < this.items.length; t++) { var e = this.items[t]; e.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, l._noTransition = function (t, e) { var i = this.options.transitionDuration; this.options.transitionDuration = 0; var o = t.apply(this, e); return this.options.transitionDuration = i, o }, l.getFilteredItemElements = function () { return this.filteredItems.map(function (t) { return t.element }) }, d
});




/*  Waypoints Sticky Element Shortcut - 4.0.1  ||  Copyright Â© 2011-2016 Caleb Troughton  ||  Licensed under the MIT license.  ||  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt*/
!function () { "use strict"; function t(s) { this.options = e.extend({}, i.defaults, t.defaults, s), this.element = this.options.element, this.$element = e(this.element), this.createWrapper(), this.createWaypoint() } var e = window.jQuery, i = window.Waypoint; t.prototype.createWaypoint = function () { var t = this.options.handler; this.waypoint = new i(e.extend({}, this.options, { element: this.wrapper, handler: e.proxy(function (e) { var i = this.options.direction.indexOf(e) > -1, s = i ? this.$element.outerHeight(!0) : ""; this.$wrapper.height(s), this.$element.toggleClass(this.options.stuckClass, i), t && t.call(this, e) }, this) })) }, t.prototype.createWrapper = function () { this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0] }, t.prototype.destroy = function () { this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap()) }, t.defaults = { wrapper: '<div class="sticky-wrapper" />', stuckClass: "is-fixed", direction: "down right" }, i.Sticky = t }();



!function (t) { "use strict"; t.fn.counterUp = function (e) { var n = t.extend({ time: 400, delay: 10 }, e); return this.each(function () { var e = t(this), u = n; e.waypoint({ offset: "100%", handler: function () { var t = [], n = u.time / u.delay, a = e.text(), r = /[0-9]+,[0-9]+/.test(a); a = a.replace(/,/g, ""); /^[0-9]+$/.test(a); for (var o = /^[0-9]+\.[0-9]+$/.test(a), c = o ? (a.split(".")[1] || []).length : 0, s = n; s >= 1; s--) { var d = parseInt(a / n * s); if (o && (d = parseFloat(a / n * s).toFixed(c)), r) for (; /(\d+)(\d{3})/.test(d.toString());)d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2"); t.unshift(d) } e.data("counterup-nums", t), e.text("0"); e.data("counterup-func", function () { e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)) }), setTimeout(e.data("counterup-func"), u.delay), this.destroy() } }) }) } }(jQuery);



/*  Waypoints - 4.0.1  |  Copyright Â© 2011-2016 Caleb Troughton  |  Licensed under the MIT license.  |  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt*/
!function () { "use strict"; function t(o) { if (!o) throw new Error("No options passed to Waypoint constructor"); if (!o.element) throw new Error("No element option passed to Waypoint constructor"); if (!o.handler) throw new Error("No handler option passed to Waypoint constructor"); this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1 } var e = 0, i = {}; t.prototype.queueTrigger = function (t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function (t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function () { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function () { return this.enabled = !1, this }, t.prototype.enable = function () { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function () { return this.group.next(this) }, t.prototype.previous = function () { return this.group.previous(this) }, t.invokeAll = function (t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++)e[n][t]() }, t.destroyAll = function () { t.invokeAll("destroy") }, t.disableAll = function () { t.invokeAll("disable") }, t.enableAll = function () { t.Context.refreshAll(); for (var e in i) i[e].enabled = !0; return this }, t.refreshAll = function () { t.Context.refreshAll() }, t.viewportHeight = function () { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function () { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function () { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function () { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t }(), function () { "use strict"; function t(t) { window.setTimeout(t, 1e3 / 60) } function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler() } var i = 0, o = {}, n = window.Waypoint, r = window.onload; e.prototype.add = function (t) { var e = t.options.horizontal ? "horizontal" : "vertical"; this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function () { var t = this.Adapter.isEmptyObject(this.waypoints.horizontal), e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window; t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]) }, e.prototype.createThrottledResizeHandler = function () { function t() { e.handleResize(), e.didResize = !1 } var e = this; this.adapter.on("resize.waypoints", function () { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) }) }, e.prototype.createThrottledScrollHandler = function () { function t() { e.handleScroll(), e.didScroll = !1 } var e = this; this.adapter.on("scroll.waypoints", function () { (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t)) }) }, e.prototype.handleResize = function () { n.Context.refreshAll() }, e.prototype.handleScroll = function () { var t = {}, e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; for (var i in e) { var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward; for (var s in this.waypoints[i]) { var a = this.waypoints[i][s]; if (null !== a.triggerPoint) { var l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h; (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group) } } } for (var c in t) t[c].flushTriggers(); this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function () { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function (t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function () { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function () { var t = []; for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]); for (var o = 0, n = t.length; n > o; o++)t[o].destroy() }, e.prototype.refresh = function () { var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {}; this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; for (var r in t) { var s = t[r]; for (var a in this.waypoints[r]) { var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0, g = null == w; d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group) } } return n.requestAnimationFrame(function () { for (var t in o) o[t].flushTriggers() }), this }, e.findOrCreateByElement = function (t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function () { for (var t in o) o[t].refresh() }, e.findByElement = function (t) { return o[t.waypointContextKey] }, window.onload = function () { r && r(), e.refreshAll() }, n.requestAnimationFrame = function (e) { var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t; i.call(window, e) }, n.Context = e }(), function () { "use strict"; function t(t, e) { return t.triggerPoint - e.triggerPoint } function e(t, e) { return e.triggerPoint - t.triggerPoint } function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this } var o = { vertical: {}, horizontal: {} }, n = window.Waypoint; i.prototype.add = function (t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function () { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function () { for (var i in this.triggerQueues) { var o = this.triggerQueues[i], n = "up" === i || "left" === i; o.sort(n ? e : t); for (var r = 0, s = o.length; s > r; r += 1) { var a = o[r]; (a.options.continuous || r === o.length - 1) && a.trigger([i]) } } this.clearTriggerQueues() }, i.prototype.next = function (e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1; return o ? null : this.waypoints[i + 1] }, i.prototype.previous = function (e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function (t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function (t) { var e = n.Adapter.inArray(t, this.waypoints); e > -1 && this.waypoints.splice(e, 1) }, i.prototype.first = function () { return this.waypoints[0] }, i.prototype.last = function () { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function (t) { return o[t.axis][t.name] || new i(t) }, n.Group = i }(), function () { "use strict"; function t(t) { this.$element = e(t) } var e = window.jQuery, i = window.Waypoint; e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) { t.prototype[i] = function () { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t }(), function () { "use strict"; function t(t) { return function () { var i = [], o = arguments[0]; return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i } } var e = window.Waypoint; window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto)) }();



/*! Magnific Popup - v1.1.0 - 2016-02-20  |  http://dimsemenov.com/plugins/magnific-popup/  |  Copyright (c) 2016 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery"; return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s); e.click(function () { b.prev() }), f.click(function () { b.next() }), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), A() });



/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper) }(this, (function (t) { "use strict"; function e(t) { if (t && t.__esModule) return t; const e = Object.create(null); if (t) for (const i in t) if ("default" !== i) { const s = Object.getOwnPropertyDescriptor(t, i); Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => t[i] }) } return e.default = t, Object.freeze(e) } const i = e(t), s = "transitionend", n = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null; i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null } return e }, o = t => { const e = n(t); return e && document.querySelector(e) ? e : null }, r = t => { const e = n(t); return e ? document.querySelector(e) : null }, a = t => { t.dispatchEvent(new Event(s)) }, l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, h = (t, e, i) => { Object.keys(i).forEach((s => { const n = i[s], o = e[s], r = o && l(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase(); var a; if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`) })) }, d = t => !(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"), u = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), g = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null }, _ = () => { }, f = t => { t.offsetHeight }, p = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null }, m = [], b = () => "rtl" === document.documentElement.dir, v = t => { var e; e = () => { const e = p(); if (e) { const i = t.NAME, s = e.fn[i]; e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface) } }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => { m.forEach((t => t())) })), m.push(e)) : e() }, y = t => { "function" == typeof t && t() }, E = (t, e, i = !0) => { if (!i) return void y(t); const n = (t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const s = Number.parseFloat(e), n = Number.parseFloat(i); return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 })(e) + 5; let o = !1; const r = ({ target: i }) => { i === e && (o = !0, e.removeEventListener(s, r), y(t)) }; e.addEventListener(s, r), setTimeout((() => { o || a(e) }), n) }, w = (t, e, i, s) => { let n = t.indexOf(e); if (-1 === n) return t[!i && s ? t.length - 1 : 0]; const o = t.length; return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))] }, A = /[^.]*(?=\..*)\.|.*/, T = /\..*/, C = /::\d+$/, k = {}; let L = 1; const S = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /^(mouseenter|mouseleave)/i, N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]); function D(t, e) { return e && `${e}::${L++}` || t.uidEvent || L++ } function I(t) { const e = D(t); return t.uidEvent = e, k[e] = k[e] || {}, k[e] } function P(t, e, i = null) { const s = Object.keys(t); for (let n = 0, o = s.length; n < o; n++) { const o = t[s[n]]; if (o.originalHandler === e && o.delegationSelector === i) return o } return null } function x(t, e, i) { const s = "string" == typeof e, n = s ? i : e; let o = H(t); return N.has(o) || (o = t), [s, n, o] } function M(t, e, i, s, n) { if ("string" != typeof e || !t) return; if (i || (i = s, s = null), O.test(e)) { const t = t => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) }; s ? s = t(s) : i = t(i) } const [o, r, a] = x(e, i, s), l = I(t), c = l[a] || (l[a] = {}), h = P(c, r, o ? i : null); if (h) return void (h.oneOff = h.oneOff && n); const d = D(r, e.replace(A, "")), u = o ? function (t, e, i) { return function s(n) { const o = t.querySelectorAll(e); for (let { target: r } = n; r && r !== this; r = r.parentNode)for (let a = o.length; a--;)if (o[a] === r) return n.delegateTarget = r, s.oneOff && $.off(t, n.type, e, i), i.apply(r, [n]); return null } }(t, i, s) : function (t, e) { return function i(s) { return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [s]) } }(t, i); u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o) } function j(t, e, i, s, n) { const o = P(e[i], s, n); o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]) } function H(t) { return t = t.replace(T, ""), S[t] || t } const $ = { on(t, e, i, s) { M(t, e, i, s, !1) }, one(t, e, i, s) { M(t, e, i, s, !0) }, off(t, e, i, s) { if ("string" != typeof e || !t) return; const [n, o, r] = x(e, i, s), a = r !== e, l = I(t), c = e.startsWith("."); if (void 0 !== o) { if (!l || !l[r]) return; return void j(t, l, r, o, n ? i : null) } c && Object.keys(l).forEach((i => { !function (t, e, i, s) { const n = e[i] || {}; Object.keys(n).forEach((o => { if (o.includes(s)) { const s = n[o]; j(t, e, i, s.originalHandler, s.delegationSelector) } })) }(t, l, i, e.slice(1)) })); const h = l[r] || {}; Object.keys(h).forEach((i => { const s = i.replace(C, ""); if (!a || e.includes(s)) { const e = h[i]; j(t, l, r, e.originalHandler, e.delegationSelector) } })) }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const s = p(), n = H(e), o = e !== n, r = N.has(n); let a, l = !0, c = !0, h = !1, d = null; return o && s && (a = s.Event(e, i), s(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach((t => { Object.defineProperty(d, t, { get: () => i[t] }) })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d } }, B = new Map, z = { set(t, e, i) { B.has(t) || B.set(t, new Map); const s = B.get(t); s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`) }, get: (t, e) => B.has(t) && B.get(t).get(e) || null, remove(t, e) { if (!B.has(t)) return; const i = B.get(t); i.delete(e), 0 === i.size && B.delete(t) } }; class R { constructor(t) { (t = c(t)) && (this._element = t, z.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { z.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => { this[t] = null })) } _queueCallback(t, e, i = !0) { E(t, e, i) } static getInstance(t) { return z.get(c(t), this.DATA_KEY) } static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) } static get VERSION() { return "5.1.3" } static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') } static get DATA_KEY() { return `bs.${this.NAME}` } static get EVENT_KEY() { return `.${this.DATA_KEY}` } } const F = (t, e = "hide") => { const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME; $.on(document, i, `[data-bs-dismiss="${s}"]`, (function (i) { if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this)) return; const n = r(this) || this.closest(`.${s}`); t.getOrCreateInstance(n)[e]() })) }; class q extends R { static get NAME() { return "alert" } close() { if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return; this._element.classList.remove("show"); const t = this._element.classList.contains("fade"); this._queueCallback((() => this._destroyElement()), this._element, t) } _destroyElement() { this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose() } static jQueryInterface(t) { return this.each((function () { const e = q.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } F(q, "close"), v(q); const W = '[data-bs-toggle="button"]'; class U extends R { static get NAME() { return "button" } toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) } static jQueryInterface(t) { return this.each((function () { const e = U.getOrCreateInstance(this); "toggle" === t && e[t]() })) } } function K(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) } function V(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) } $.on(document, "click.bs.button.data-api", W, (t => { t.preventDefault(); const e = t.target.closest(W); U.getOrCreateInstance(e).toggle() })), v(U); const X = { setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${V(e)}`, i) }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${V(e)}`) }, getDataAttributes(t) { if (!t) return {}; const e = {}; return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => { let s = i.replace(/^bs/, ""); s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = K(t.dataset[i]) })), e }, getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${V(e)}`)), offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset } }, position: t => ({ top: t.offsetTop, left: t.offsetLeft }) }, Y = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))), parents(t, e) { const i = []; let s = t.parentNode; for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;)s.matches(e) && i.push(s), s = s.parentNode; return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling } return [] }, focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", "); return this.find(e, t).filter((t => !u(t) && d(t))) } }, Q = "carousel", G = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, Z = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, J = "next", tt = "prev", et = "left", it = "right", st = { ArrowLeft: it, ArrowRight: et }, nt = "slid.bs.carousel", ot = "active", rt = ".active.carousel-item"; class at extends R { constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = Y.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() } static get Default() { return G } static get NAME() { return Q } next() { this._slide(J) } nextWhenVisible() { !document.hidden && d(this._element) && this.next() } prev() { this._slide(tt) } pause(t) { t || (this._isPaused = !0), Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null } cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) } to(t) { this._activeElement = Y.findOne(rt, this._element); const e = this._getItemIndex(this._activeElement); if (t > this._items.length - 1 || t < 0) return; if (this._isSliding) return void $.one(this._element, nt, (() => this.to(t))); if (e === t) return this.pause(), void this.cycle(); const i = t > e ? J : tt; this._slide(i, this._items[t]) } _getConfig(t) { return t = { ...G, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(Q, t, Z), t } _handleSwipe() { const t = Math.abs(this.touchDeltaX); if (t <= 40) return; const e = t / this.touchDeltaX; this.touchDeltaX = 0, e && this._slide(e > 0 ? it : et) } _addEventListeners() { this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), $.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners() } _addTouchEventListeners() { const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), e = e => { t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX) }, i = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX }, s = e => { t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval)) }; Y.find(".carousel-item img", this._element).forEach((t => { $.on(t, "dragstart.bs.carousel", (t => t.preventDefault())) })), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (t => e(t))), $.on(this._element, "pointerup.bs.carousel", (t => s(t))), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (t => e(t))), $.on(this._element, "touchmove.bs.carousel", (t => i(t))), $.on(this._element, "touchend.bs.carousel", (t => s(t)))) } _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = st[t.key]; e && (t.preventDefault(), this._slide(e)) } _getItemIndex(t) { return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) } _getItemByOrder(t, e) { const i = t === J; return w(this._items, e, i, this._config.wrap) } _triggerSlideEvent(t, e) { const i = this._getItemIndex(t), s = this._getItemIndex(Y.findOne(rt, this._element)); return $.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: s, to: i }) } _setActiveIndicatorElement(t) { if (this._indicatorsElement) { const e = Y.findOne(".active", this._indicatorsElement); e.classList.remove(ot), e.removeAttribute("aria-current"); const i = Y.find("[data-bs-target]", this._indicatorsElement); for (let e = 0; e < i.length; e++)if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) { i[e].classList.add(ot), i[e].setAttribute("aria-current", "true"); break } } } _updateInterval() { const t = this._activeElement || Y.findOne(rt, this._element); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10); e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval } _slide(t, e) { const i = this._directionToOrder(t), s = Y.findOne(rt, this._element), n = this._getItemIndex(s), o = e || this._getItemByOrder(i, s), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === J, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i); if (o && o.classList.contains(ot)) return void (this._isSliding = !1); if (this._isSliding) return; if (this._triggerSlideEvent(o, d).defaultPrevented) return; if (!s || !o) return; this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o; const u = () => { $.trigger(this._element, nt, { relatedTarget: o, direction: d, from: n, to: r }) }; if (this._element.classList.contains("slide")) { o.classList.add(h), f(o), s.classList.add(c), o.classList.add(c); const t = () => { o.classList.remove(c, h), o.classList.add(ot), s.classList.remove(ot, h, c), this._isSliding = !1, setTimeout(u, 0) }; this._queueCallback(t, s, !0) } else s.classList.remove(ot), o.classList.add(ot), this._isSliding = !1, u(); a && this.cycle() } _directionToOrder(t) { return [it, et].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t } _orderToDirection(t) { return [J, tt].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t } static carouselInterface(t, e) { const i = at.getOrCreateInstance(t, e); let { _config: s } = i; "object" == typeof e && (s = { ...s, ...e }); const n = "string" == typeof e ? e : s.slide; if ("number" == typeof e) i.to(e); else if ("string" == typeof n) { if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`); i[n]() } else s.interval && s.ride && (i.pause(), i.cycle()) } static jQueryInterface(t) { return this.each((function () { at.carouselInterface(this, t) })) } static dataApiClickHandler(t) { const e = r(this); if (!e || !e.classList.contains("carousel")) return; const i = { ...X.getDataAttributes(e), ...X.getDataAttributes(this) }, s = this.getAttribute("data-bs-slide-to"); s && (i.interval = !1), at.carouselInterface(e, i), s && at.getInstance(e).to(s), t.preventDefault() } } $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", (() => { const t = Y.find('[data-bs-ride="carousel"]'); for (let e = 0, i = t.length; e < i; e++)at.carouselInterface(t[e], at.getInstance(t[e])) })), v(at); const lt = "collapse", ct = { toggle: !0, parent: null }, ht = { toggle: "boolean", parent: "(null|element)" }, dt = "show", ut = "collapse", gt = "collapsing", _t = "collapsed", ft = ":scope .collapse .collapse", pt = '[data-bs-toggle="collapse"]'; class mt extends R { constructor(t, e) { super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = []; const i = Y.find(pt); for (let t = 0, e = i.length; t < e; t++) { const e = i[t], s = o(e), n = Y.find(s).filter((t => t === this._element)); null !== s && n.length && (this._selector = s, this._triggerArray.push(e)) } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle() } static get Default() { return ct } static get NAME() { return lt } toggle() { this._isShown() ? this.hide() : this.show() } show() { if (this._isTransitioning || this._isShown()) return; let t, e = []; if (this._config.parent) { const t = Y.find(ft, this._config.parent); e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e))) } const i = Y.findOne(this._selector); if (e.length) { const s = e.find((t => i !== t)); if (t = s ? mt.getInstance(s) : null, t && t._isTransitioning) return } if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return; e.forEach((e => { i !== e && mt.getOrCreateInstance(e, { toggle: !1 }).hide(), t || z.set(e, "bs.collapse", null) })); const s = this._getDimension(); this._element.classList.remove(ut), this._element.classList.add(gt), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const n = `scroll${s[0].toUpperCase() + s.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut, dt), this._element.style[s] = "", $.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[s] = `${this._element[n]}px` } hide() { if (this._isTransitioning || !this._isShown()) return; if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, f(this._element), this._element.classList.add(gt), this._element.classList.remove(ut, dt); const e = this._triggerArray.length; for (let t = 0; t < e; t++) { const e = this._triggerArray[t], i = r(e); i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1) } this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(gt), this._element.classList.add(ut), $.trigger(this._element, "hidden.bs.collapse") }), this._element, !0) } _isShown(t = this._element) { return t.classList.contains(dt) } _getConfig(t) { return (t = { ...ct, ...X.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle), t.parent = c(t.parent), h(lt, t, ht), t } _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" } _initializeChildren() { if (!this._config.parent) return; const t = Y.find(ft, this._config.parent); Y.find(pt, this._config.parent).filter((e => !t.includes(e))).forEach((t => { const e = r(t); e && this._addAriaAndCollapsedClass([t], this._isShown(e)) })) } _addAriaAndCollapsedClass(t, e) { t.length && t.forEach((t => { e ? t.classList.remove(_t) : t.classList.add(_t), t.setAttribute("aria-expanded", e) })) } static jQueryInterface(t) { return this.each((function () { const e = {}; "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1); const i = mt.getOrCreateInstance(this, e); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t]() } })) } } $.on(document, "click.bs.collapse.data-api", pt, (function (t) { ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); const e = o(this); Y.find(e).forEach((t => { mt.getOrCreateInstance(t, { toggle: !1 }).toggle() })) })), v(mt); const bt = "dropdown", vt = "Escape", yt = "Space", Et = "ArrowUp", wt = "ArrowDown", At = new RegExp("ArrowUp|ArrowDown|Escape"), Tt = "click.bs.dropdown.data-api", Ct = "keydown.bs.dropdown.data-api", kt = "show", Lt = '[data-bs-toggle="dropdown"]', St = ".dropdown-menu", Ot = b() ? "top-end" : "top-start", Nt = b() ? "top-start" : "top-end", Dt = b() ? "bottom-end" : "bottom-start", It = b() ? "bottom-start" : "bottom-end", Pt = b() ? "left-start" : "right-start", xt = b() ? "right-start" : "left-start", Mt = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 }, jt = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" }; class Ht extends R { constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar() } static get Default() { return Mt } static get DefaultType() { return jt } static get NAME() { return bt } toggle() { return this._isShown() ? this.hide() : this.show() } show() { if (u(this._element) || this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return; const e = Ht.getParentFromElement(this._element); this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => $.on(t, "mouseover", _))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(kt), this._element.classList.add(kt), $.trigger(this._element, "shown.bs.dropdown", t) } hide() { if (u(this._element) || !this._isShown(this._menu)) return; const t = { relatedTarget: this._element }; this._completeHide(t) } dispose() { this._popper && this._popper.destroy(), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _completeHide(t) { $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => $.off(t, "mouseover", _))), this._popper && this._popper.destroy(), this._menu.classList.remove(kt), this._element.classList.remove(kt), this._element.setAttribute("aria-expanded", "false"), X.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t)) } _getConfig(t) { if (t = { ...this.constructor.Default, ...X.getDataAttributes(this._element), ...t }, h(bt, t, this.constructor.DefaultType), "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t } _createPopper(t) { if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let e = this._element; "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference); const s = this._getPopperConfig(), n = s.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled)); this._popper = i.createPopper(e, this._menu, s), n && X.setDataAttribute(this._menu, "popper", "static") } _isShown(t = this._element) { return t.classList.contains(kt) } _getMenuElement() { return Y.next(this._element, St)[0] } _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return Pt; if (t.classList.contains("dropstart")) return xt; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt } _detectNavbar() { return null !== this._element.closest(".navbar") } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } } _selectMenuItem({ key: t, target: e }) { const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d); i.length && w(i, e, t === wt, !i.includes(e)).focus() } static jQueryInterface(t) { return this.each((function () { const e = Ht.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } static clearMenus(t) { if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return; const e = Y.find(Lt); for (let i = 0, s = e.length; i < s; i++) { const s = Ht.getInstance(e[i]); if (!s || !1 === s._config.autoClose) continue; if (!s._isShown()) continue; const n = { relatedTarget: s._element }; if (t) { const e = t.composedPath(), i = e.includes(s._menu); if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i) continue; if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; "click" === t.type && (n.clickEvent = t) } s._completeHide(n) } } static getParentFromElement(t) { return r(t) || t.parentNode } static dataApiKeydownHandler(t) { if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key)) return; const e = this.classList.contains(kt); if (!e && t.key === vt) return; if (t.preventDefault(), t.stopPropagation(), u(this)) return; const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0], s = Ht.getOrCreateInstance(i); if (t.key !== vt) return t.key === Et || t.key === wt ? (e || s.show(), void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus()); s.hide() } } $.on(document, Ct, Lt, Ht.dataApiKeydownHandler), $.on(document, Ct, St, Ht.dataApiKeydownHandler), $.on(document, Tt, Ht.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus), $.on(document, Tt, Lt, (function (t) { t.preventDefault(), Ht.getOrCreateInstance(this).toggle() })), v(Ht); const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Bt = ".sticky-top"; class zt { constructor() { this._element = document.body } getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) } hide() { const t = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes($t, "paddingRight", (e => e + t)), this._setElementAttributes(Bt, "marginRight", (e => e - t)) } _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" } _setElementAttributes(t, e, i) { const s = this.getWidth(); this._applyManipulationCallback(t, (t => { if (t !== this._element && window.innerWidth > t.clientWidth + s) return; this._saveInitialAttribute(t, e); const n = window.getComputedStyle(t)[e]; t.style[e] = `${i(Number.parseFloat(n))}px` })) } reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes($t, "paddingRight"), this._resetElementAttributes(Bt, "marginRight") } _saveInitialAttribute(t, e) { const i = t.style[e]; i && X.setDataAttribute(t, e, i) } _resetElementAttributes(t, e) { this._applyManipulationCallback(t, (t => { const i = X.getDataAttribute(t, e); void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e), t.style[e] = i) })) } _applyManipulationCallback(t, e) { l(t) ? e(t) : Y.find(t, this._element).forEach(e) } isOverflowing() { return this.getWidth() > 0 } } const Rt = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null }, Ft = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" }, qt = "show", Wt = "mousedown.bs.backdrop"; class Ut { constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null } show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add(qt), this._emulateAnimation((() => { y(t) }))) : y(t) } hide(t) { this._config.isVisible ? (this._getElement().classList.remove(qt), this._emulateAnimation((() => { this.dispose(), y(t) }))) : y(t) } _getElement() { if (!this._element) { const t = document.createElement("div"); t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element } _getConfig(t) { return (t = { ...Rt, ..."object" == typeof t ? t : {} }).rootElement = c(t.rootElement), h("backdrop", t, Ft), t } _append() { this._isAppended || (this._config.rootElement.append(this._getElement()), $.on(this._getElement(), Wt, (() => { y(this._config.clickCallback) })), this._isAppended = !0) } dispose() { this._isAppended && ($.off(this._element, Wt), this._element.remove(), this._isAppended = !1) } _emulateAnimation(t) { E(t, this._getElement(), this._config.isAnimated) } } const Kt = { trapElement: null, autofocus: !0 }, Vt = { trapElement: "element", autofocus: "boolean" }, Xt = ".bs.focustrap", Yt = "backward"; class Qt { constructor(t) { this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null } activate() { const { trapElement: t, autofocus: e } = this._config; this._isActive || (e && t.focus(), $.off(document, Xt), $.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), $.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0) } deactivate() { this._isActive && (this._isActive = !1, $.off(document, Xt)) } _handleFocusin(t) { const { target: e } = t, { trapElement: i } = this._config; if (e === document || e === i || i.contains(e)) return; const s = Y.focusableChildren(i); 0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus() } _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward") } _getConfig(t) { return t = { ...Kt, ..."object" == typeof t ? t : {} }, h("focustrap", t, Vt), t } } const Gt = "modal", Zt = "Escape", Jt = { backdrop: !0, keyboard: !0, focus: !0 }, te = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }, ee = "hidden.bs.modal", ie = "show.bs.modal", se = "resize.bs.modal", ne = "click.dismiss.bs.modal", oe = "keydown.dismiss.bs.modal", re = "mousedown.dismiss.bs.modal", ae = "modal-open", le = "show", ce = "modal-static"; class he extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = Y.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new zt } static get Default() { return Jt } static get NAME() { return Gt } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || this._isTransitioning || $.trigger(this._element, ie, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(ae), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._dialog, re, (() => { $.one(this._element, "mouseup.dismiss.bs.modal", (t => { t.target === this._element && (this._ignoreBackdropClick = !0) })) })), this._showBackdrop((() => this._showElement(t)))) } hide() { if (!this._isShown || this._isTransitioning) return; if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return; this._isShown = !1; const t = this._isAnimated(); t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(le), $.off(this._element, ne), $.off(this._dialog, re), this._queueCallback((() => this._hideModal()), this._element, t) } dispose() { [window, this._dialog].forEach((t => $.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new Ut({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) } _initializeFocusTrap() { return new Qt({ trapElement: this._element }) } _getConfig(t) { return t = { ...Jt, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(Gt, t, te), t } _showElement(t) { const e = this._isAnimated(), i = Y.findOne(".modal-body", this._dialog); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add(le), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, e) } _setEscapeEvent() { this._isShown ? $.on(this._element, oe, (t => { this._config.keyboard && t.key === Zt ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition() })) : $.off(this._element, oe) } _setResizeEvent() { this._isShown ? $.on(window, se, (() => this._adjustDialog())) : $.off(window, se) } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(ae), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, ee) })) } _showBackdrop(t) { $.on(this._element, ne, (t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) })), this._backdrop.show(t) } _isAnimated() { return this._element.classList.contains("fade") } _triggerBackdropTransition() { if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const { classList: t, scrollHeight: e, style: i } = this._element, s = e > document.documentElement.clientHeight; !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"), t.add(ce), this._queueCallback((() => { t.remove(ce), s || this._queueCallback((() => { i.overflowY = "" }), this._dialog) }), this._dialog), this._element.focus()) } _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0; (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`) } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(t, e) { return this.each((function () { const i = he.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e) } })) } } $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) { const e = r(this);["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, ie, (t => { t.defaultPrevented || $.one(e, ee, (() => { d(this) && this.focus() })) })); const i = Y.findOne(".modal.show"); i && he.getInstance(i).hide(), he.getOrCreateInstance(e).toggle(this) })), F(he), v(he); const de = "offcanvas", ue = { backdrop: !0, keyboard: !0, scroll: !1 }, ge = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, _e = "show", fe = ".offcanvas.show", pe = "hidden.bs.offcanvas"; class me extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() } static get NAME() { return de } static get Default() { return ue } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || $.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new zt).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(_e), this._queueCallback((() => { this._config.scroll || this._focustrap.activate(), $.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)) } hide() { this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(_e), this._backdrop.hide(), this._queueCallback((() => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new zt).reset(), $.trigger(this._element, pe) }), this._element, !0))) } dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } _getConfig(t) { return t = { ...ue, ...X.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, h(de, t, ge), t } _initializeBackDrop() { return new Ut({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) } _initializeFocusTrap() { return new Qt({ trapElement: this._element }) } _addEventListeners() { $.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { this._config.keyboard && "Escape" === t.key && this.hide() })) } static jQueryInterface(t) { return this.each((function () { const e = me.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) { const e = r(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this)) return; $.one(e, pe, (() => { d(this) && this.focus() })); const i = Y.findOne(fe); i && i !== e && me.getInstance(i).hide(), me.getOrCreateInstance(e).toggle(this) })), $.on(window, "load.bs.offcanvas.data-api", (() => Y.find(fe).forEach((t => me.getOrCreateInstance(t).show())))), F(me), v(me); const be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ee = (t, e) => { const i = t.nodeName.toLowerCase(); if (e.includes(i)) return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue)); const s = e.filter((t => t instanceof RegExp)); for (let t = 0, e = s.length; t < e; t++)if (s[t].test(i)) return !0; return !1 }; function we(t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const s = (new window.DOMParser).parseFromString(t, "text/html"), n = [].concat(...s.body.querySelectorAll("*")); for (let t = 0, i = n.length; t < i; t++) { const i = n[t], s = i.nodeName.toLowerCase(); if (!Object.keys(e).includes(s)) { i.remove(); continue } const o = [].concat(...i.attributes), r = [].concat(e["*"] || [], e[s] || []); o.forEach((t => { Ee(t, r) || i.removeAttribute(t.nodeName) })) } return s.body.innerHTML } const Ae = "tooltip", Te = new Set(["sanitize", "allowList", "sanitizeFn"]), Ce = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, ke = { AUTO: "auto", TOP: "top", RIGHT: b() ? "left" : "right", BOTTOM: "bottom", LEFT: b() ? "right" : "left" }, Le = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Se = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, Oe = "fade", Ne = "show", De = "show", Ie = "out", Pe = ".tooltip-inner", xe = ".modal", Me = "hide.bs.modal", je = "hover", He = "focus"; class $e extends R { constructor(t, e) { if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners() } static get Default() { return Le } static get NAME() { return Ae } static get Event() { return Se } static get DefaultType() { return Ce } enable() { this._isEnabled = !0 } disable() { this._isEnabled = !1 } toggleEnabled() { this._isEnabled = !this._isEnabled } toggle(t) { if (this._isEnabled) if (t) { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e) } else { if (this.getTipElement().classList.contains(Ne)) return void this._leave(null, this); this._enter(null, this) } } dispose() { clearTimeout(this._timeout), $.off(this._element.closest(xe), Me, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose() } show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this.isWithContent() || !this._isEnabled) return; const t = $.trigger(this._element, this.constructor.Event.SHOW), e = g(this._element), s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element); if (t.defaultPrevented || !s) return; "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null); const n = this.getTipElement(), o = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME); n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && n.classList.add(Oe); const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r); this._addAttachmentClass(a); const { container: l } = this._config; z.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)), n.classList.add(Ne); const c = this._resolvePossibleFunction(this._config.customClass); c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => { $.on(t, "mouseover", _) })); const h = this.tip.classList.contains(Oe); this._queueCallback((() => { const t = this._hoverState; this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), t === Ie && this._leave(null, this) }), this.tip, h) } hide() { if (!this._popper) return; const t = this.getTipElement(); if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return; t.classList.remove(Ne), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => $.off(t, "mouseover", _))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1; const e = this.tip.classList.contains(Oe); this._queueCallback((() => { this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper()) }), this.tip, e), this._hoverState = "" } update() { null !== this._popper && this._popper.update() } isWithContent() { return Boolean(this.getTitle()) } getTipElement() { if (this.tip) return this.tip; const t = document.createElement("div"); t.innerHTML = this._config.template; const e = t.children[0]; return this.setContent(e), e.classList.remove(Oe, Ne), this.tip = e, this.tip } setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), Pe) } _sanitizeAndSetContent(t, e, i) { const s = Y.findOne(i, t); e || !s ? this.setElementContent(s, e) : s.remove() } setElementContent(t, e) { if (null !== t) return l(e) ? (e = c(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) } getTitle() { const t = this._element.getAttribute("data-bs-original-title") || this._config.title; return this._resolvePossibleFunction(t) } updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t } _initializeOnDelegatedTarget(t, e) { return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t } _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return { ...e, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } } _addAttachmentClass(t) { this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`) } _getAttachment(t) { return ke[t.toUpperCase()] } _setListeners() { this._config.trigger.split(" ").forEach((t => { if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t))); else if ("manual" !== t) { const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT; $.on(this._element, e, this._config.selector, (t => this._enter(t))), $.on(this._element, i, this._config.selector, (t => this._leave(t))) } })), this._hideModalHandler = () => { this._element && this.hide() }, $.on(this._element.closest(xe), Me, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle() } _fixTitle() { const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title"); (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", "")) } _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? He : je] = !0), e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => { e._hoverState === De && e.show() }), e._config.delay.show) : e.show()) } _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ie, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => { e._hoverState === Ie && e.hide() }), e._config.delay.hide) : e.hide()) } _isWithActiveTrigger() { for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 } _getConfig(t) { const e = X.getDataAttributes(this._element); return Object.keys(e).forEach((t => { Te.has(t) && delete e[t] })), (t = { ...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {} }).container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), h(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)), t } _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t } _cleanTipClass() { const t = this.getTipElement(), e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t.getAttribute("class").match(e); null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e))) } _getBasicClassPrefix() { return "bs-tooltip" } _handlePopperPlacementChange(t) { const { state: e } = t; e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement))) } _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) } static jQueryInterface(t) { return this.each((function () { const e = $e.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } v($e); const Be = { ...$e.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, ze = { ...$e.DefaultType, content: "(string|element|function)" }, Re = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }; class Fe extends $e { static get Default() { return Be } static get NAME() { return "popover" } static get Event() { return Re } static get DefaultType() { return ze } isWithContent() { return this.getTitle() || this._getContent() } setContent(t) { this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body") } _getContent() { return this._resolvePossibleFunction(this._config.content) } _getBasicClassPrefix() { return "bs-popover" } static jQueryInterface(t) { return this.each((function () { const e = Fe.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } v(Fe); const qe = "scrollspy", We = { offset: 10, method: "auto", target: "" }, Ue = { offset: "number", method: "string", target: "(string|element)" }, Ke = "active", Ve = ".nav-link, .list-group-item, .dropdown-item", Xe = "position"; class Ye extends R { constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process() } static get Default() { return We } static get NAME() { return qe } refresh() { const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe, e = "auto" === this._config.method ? t : this._config.method, i = e === Xe ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Y.find(Ve, this._config.target).map((t => { const s = o(t), n = s ? Y.findOne(s) : null; if (n) { const t = n.getBoundingClientRect(); if (t.width || t.height) return [X[e](n).top + i, s] } return null })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => { this._offsets.push(t[0]), this._targets.push(t[1]) })) } dispose() { $.off(this._scrollElement, ".bs.scrollspy"), super.dispose() } _getConfig(t) { return (t = { ...We, ...X.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {} }).target = c(t.target) || document.documentElement, h(qe, t, Ue), t } _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop } _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) } _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height } _process() { const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= i) { const t = this._targets[this._targets.length - 1]; this._activeTarget !== t && this._activate(t) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) } } _activate(t) { this._activeTarget = t, this._clear(); const e = Ve.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)), i = Y.findOne(e.join(","), this._config.target); i.classList.add(Ke), i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach((t => { Y.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(Ke))), Y.prev(t, ".nav-item").forEach((t => { Y.children(t, ".nav-link").forEach((t => t.classList.add(Ke))) })) })), $.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t }) } _clear() { Y.find(Ve, this._config.target).filter((t => t.classList.contains(Ke))).forEach((t => t.classList.remove(Ke))) } static jQueryInterface(t) { return this.each((function () { const e = Ye.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } $.on(window, "load.bs.scrollspy.data-api", (() => { Y.find('[data-bs-spy="scroll"]').forEach((t => new Ye(t))) })), v(Ye); const Qe = "active", Ge = "fade", Ze = "show", Je = ".active", ti = ":scope > li > .active"; class ei extends R { static get NAME() { return "tab" } show() { if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe)) return; let t; const e = r(this._element), i = this._element.closest(".nav, .list-group"); if (i) { const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je; t = Y.find(e, i), t = t[t.length - 1] } const s = t ? $.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null; if ($.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== s && s.defaultPrevented) return; this._activate(this._element, i); const n = () => { $.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), $.trigger(this._element, "shown.bs.tab", { relatedTarget: t }) }; e ? this._activate(e, e.parentNode, n) : n() } _activate(t, e, i) { const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0], n = i && s && s.classList.contains(Ge), o = () => this._transitionComplete(t, s, i); s && n ? (s.classList.remove(Ze), this._queueCallback(o, t, !0)) : o() } _transitionComplete(t, e, i) { if (e) { e.classList.remove(Qe); const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode); t && t.classList.remove(Qe), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } t.classList.add(Qe), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains(Ge) && t.classList.add(Ze); let s = t.parentNode; if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) { const e = t.closest(".dropdown"); e && Y.find(".dropdown-toggle", e).forEach((t => t.classList.add(Qe))), t.setAttribute("aria-expanded", !0) } i && i() } static jQueryInterface(t) { return this.each((function () { const e = ei.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) { ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || ei.getOrCreateInstance(this).show() })), v(ei); const ii = "toast", si = "hide", ni = "show", oi = "showing", ri = { animation: "boolean", autohide: "boolean", delay: "number" }, ai = { animation: !0, autohide: !0, delay: 5e3 }; class li extends R { constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() } static get DefaultType() { return ri } static get Default() { return ai } static get NAME() { return ii } show() { $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(si), f(this._element), this._element.classList.add(ni), this._element.classList.add(oi), this._queueCallback((() => { this._element.classList.remove(oi), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)) } hide() { this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi), this._queueCallback((() => { this._element.classList.add(si), this._element.classList.remove(oi), this._element.classList.remove(ni), $.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation))) } dispose() { this._clearTimeout(), this._element.classList.contains(ni) && this._element.classList.remove(ni), super.dispose() } _getConfig(t) { return t = { ...ai, ...X.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {} }, h(ii, t, this.constructor.DefaultType), t } _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) } _onInteraction(t, e) { switch (t.type) { case "mouseover": case "mouseout": this._hasMouseInteraction = e; break; case "focusin": case "focusout": this._hasKeyboardInteraction = e }if (e) return void this._clearTimeout(); const i = t.relatedTarget; this._element === i || this._element.contains(i) || this._maybeScheduleHide() } _setListeners() { $.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), $.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), $.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), $.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) } _clearTimeout() { clearTimeout(this._timeout), this._timeout = null } static jQueryInterface(t) { return this.each((function () { const e = li.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } return F(li), v(li), { Alert: q, Button: U, Carousel: at, Collapse: mt, Dropdown: Ht, Modal: he, Offcanvas: me, Popover: Fe, ScrollSpy: Ye, Tab: ei, Toast: li, Tooltip: $e } }));



/**
 * @popperjs/core v2.9.2 - MIT License
 */

"use strict"; !function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function (e) { function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } } function n(e) { return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e } function o(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } } function r(e) { return e instanceof n(e).Element || e instanceof Element } function i(e) { return e instanceof n(e).HTMLElement || e instanceof HTMLElement } function a(e) { return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot) } function s(e) { return e ? (e.nodeName || "").toLowerCase() : null } function f(e) { return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement } function p(e) { return t(f(e)).left + o(e).scrollLeft } function c(e) { return n(e).getComputedStyle(e) } function l(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) } function u(e, r, a) { void 0 === a && (a = !1); var c = f(r); e = t(e); var u = i(r), d = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 }; return (u || !u && !a) && (("body" !== s(r) || l(c)) && (d = r !== n(r) && i(r) ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop } : o(r)), i(r) ? ((m = t(r)).x += r.clientLeft, m.y += r.clientTop) : c && (m.x = p(c))), { x: e.left + d.scrollLeft - m.x, y: e.top + d.scrollTop - m.y, width: e.width, height: e.height } } function d(e) { var n = t(e), o = e.offsetWidth, r = e.offsetHeight; return 1 >= Math.abs(n.width - o) && (o = n.width), 1 >= Math.abs(n.height - r) && (r = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: r } } function m(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e) } function h(e) { return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e)) } function v(e, t) { var o; void 0 === t && (t = []); var r = h(e); return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r))) } function g(e) { return i(e) && "fixed" !== c(e).position ? e.offsetParent : null } function y(e) { for (var t = n(e), o = g(e); o && 0 <= ["table", "td", "th"].indexOf(s(o)) && "static" === c(o).position;)o = g(o); if (o && ("html" === s(o) || "body" === s(o) && "static" === c(o).position)) return t; if (!o) e: { if (o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e) || "fixed" !== c(e).position) for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e));) { var r = c(e); if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || o && "filter" === r.willChange || o && r.filter && "none" !== r.filter) { o = e; break e } e = e.parentNode } o = null } return o || t } function b(e) { function t(e) { o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) } var n = new Map, o = new Set, r = []; return e.forEach((function (e) { n.set(e.name, e) })), e.forEach((function (e) { o.has(e.name) || t(e) })), r } function w(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()) })) }))), t } } function x(e) { return e.split("-")[0] } function O(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && a(n)) do { if (t && e.isSameNode(t)) return !0; t = t.parentNode || t.host } while (t); return !1 } function j(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function E(e, r) { if ("viewport" === r) { r = n(e); var a = f(e); r = r.visualViewport; var s = a.clientWidth; a = a.clientHeight; var l = 0, u = 0; r && (s = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = { width: s, height: a, x: l + p(e), y: u }) } else i(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({ width: a, height: l, x: u, y: s })); return e } function D(e, t, n) { return t = "clippingParents" === t ? function (e) { var t = v(m(e)), n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? y(e) : e; return r(n) ? t.filter((function (e) { return r(e) && O(e, n) && "body" !== s(e) })) : [] }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function (t, n) { return n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.bottom), t.left = _(n.left, t.left), t }), E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n } function L(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" } function P(e) { var t = e.reference, n = e.element, o = (e = e.placement) ? x(e) : null; e = e ? e.split("-")[1] : null; var r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2; switch (o) { case "top": r = { x: r, y: t.y - n.height }; break; case "bottom": r = { x: r, y: t.y + t.height }; break; case "right": r = { x: t.x + t.width, y: i }; break; case "left": r = { x: t.x - n.width, y: i }; break; default: r = { x: t.x, y: t.y } }if (null != (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "width", e) { case "start": r[o] -= t[i] / 2 - n[i] / 2; break; case "end": r[o] += t[i] / 2 - n[i] / 2 }return r } function M(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) } function k(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function A(e, n) { void 0 === n && (n = {}); var o = n; n = void 0 === (n = o.placement) ? e.placement : n; var i = o.boundary, a = void 0 === i ? "clippingParents" : i, s = void 0 === (i = o.rootBoundary) ? "viewport" : i; i = void 0 === (i = o.elementContext) ? "popper" : i; var p = o.altBoundary, c = void 0 !== p && p; o = M("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)); var l = e.elements.reference; p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ reference: s = t(l), element: p, strategy: "absolute", placement: n }), p = j(Object.assign({}, p, c)), s = "popper" === i ? p : s; var u = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, left: a.left - s.left + o.left, right: s.right - a.right + o.right }; if (e = e.modifiersData.offset, "popper" === i && e) { var d = e[n]; Object.keys(u).forEach((function (e) { var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1, n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x"; u[e] += d[n] * t })) } return u } function W() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect) })) } function B(e) { void 0 === e && (e = {}); var t = e.defaultModifiers, n = void 0 === t ? [] : t, o = void 0 === (e = e.defaultOptions) ? F : e; return function (e, t, i) { function a() { f.forEach((function (e) { return e() })), f = [] } void 0 === i && (i = o); var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, F, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, f = [], p = !1, c = { state: s, setOptions: function (i) { return a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = { reference: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function (e) { var t = b(e); return I.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) }(function (e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function (e) { return e.enabled })), s.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options; n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({ state: s, name: t, instance: c, options: n }), f.push(t || function () { })) })), c.update() }, forceUpdate: function () { if (!p) { var e = s.elements, t = e.reference; if (W(t, e = e.popper)) for (s.rects = { reference: u(t, y(e), "fixed" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)if (!0 === s.reset) s.reset = !1, t = -1; else { var n = s.orderedModifiers[t]; e = n.fn; var o = n.options; o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({ state: s, options: o, name: n, instance: c }) || s) } } }, update: w((function () { return new Promise((function (e) { c.forceUpdate(), e(s) })) })), destroy: function () { a(), p = !0 } }; return W(e, t) ? (c.setOptions(i).then((function (e) { !p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c } } function T(e) { var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.offsets, s = e.position, p = e.gpuAcceleration, l = e.adaptive; if (!0 === (e = e.roundOffsets)) { e = a.y; var u = window.devicePixelRatio || 1; e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 } } else e = "function" == typeof e ? e(a) : a; e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u; var d = a.hasOwnProperty("x"); a = a.hasOwnProperty("y"); var m, h = "left", v = "top", g = window; if (l) { var b = y(o), w = "clientHeight", x = "clientWidth"; b === n(o) && ("static" !== c(b = f(o)).position && (w = "scrollHeight", x = "scrollWidth")), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (h = "right", e -= b[x] - r.width, e *= p ? 1 : -1) } return o = Object.assign({ position: s }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? u + "px" : "", t[h] = d ? e + "px" : "", t.transform = "", t)) } function H(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return $[e] })) } function R(e) { return e.replace(/start|end/g, (function (e) { return ee[e] })) } function S(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function q(e) { return ["top", "right", "bottom", "left"].some((function (t) { return 0 <= e[t] })) } var C = ["top", "bottom", "right", "left"], N = C.reduce((function (e, t) { return e.concat([t + "-start", t + "-end"]) }), []), V = [].concat(C, ["auto"]).reduce((function (e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []), I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), _ = Math.max, U = Math.min, z = Math.round, F = { placement: "bottom", modifiers: [], strategy: "absolute" }, X = { passive: !0 }, Y = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, o = e.instance, r = (e = e.options).scroll, i = void 0 === r || r, a = void 0 === (e = e.resize) || e, s = n(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper); return i && f.forEach((function (e) { e.addEventListener("scroll", o.update, X) })), a && s.addEventListener("resize", o.update, X), function () { i && f.forEach((function (e) { e.removeEventListener("scroll", o.update, X) })), a && s.removeEventListener("resize", o.update, X) } }, data: {} }, G = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state; t.modifiersData[e.name] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} }, J = { top: "auto", right: "auto", bottom: "auto", left: "auto" }, K = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options; e = void 0 === (e = n.gpuAcceleration) || e; var o = n.adaptive; o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = { placement: x(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} }, Q = { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, o = t.attributes[e] || {}, r = t.elements[e]; i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function (e) { var t = o[e]; !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var o = t.elements[e], r = t.attributes[e] || {}; e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e }), {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach((function (e) { o.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] }, Z = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.name, o = void 0 === (e = e.options.offset) ? [0, 0] : e, r = (e = V.reduce((function (e, n) { var r = t.rects, i = x(n), a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1, s = "function" == typeof o ? o(Object.assign({}, r, { placement: n })) : o; return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e }), {}))[t.placement], i = r.x; r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e } }, $ = { left: "right", right: "left", bottom: "top", top: "bottom" }, ee = { start: "end", end: "start" }, te = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; if (e = e.name, !t.modifiersData[e]._skip) { var o = n.mainAxis; o = void 0 === o || o; var r = n.altAxis; r = void 0 === r || r; var i = n.fallbackPlacements, a = n.padding, s = n.boundary, f = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, l = void 0 === c || c, u = n.allowedAutoPlacements; c = x(n = t.options.placement), i = i || (c !== n && l ? function (e) { if ("auto" === x(e)) return []; var t = H(e); return [R(e), t, R(t)] }(n) : [H(n)]); var d = [n].concat(i).reduce((function (e, n) { return e.concat("auto" === x(n) ? function (e, t) { void 0 === t && (t = {}); var n = t.boundary, o = t.rootBoundary, r = t.padding, i = t.flipVariations, a = t.allowedAutoPlacements, s = void 0 === a ? V : a, f = t.placement.split("-")[1]; 0 === (i = (t = f ? i ? N : N.filter((function (e) { return e.split("-")[1] === f })) : C).filter((function (e) { return 0 <= s.indexOf(e) }))).length && (i = t); var p = i.reduce((function (t, i) { return t[i] = A(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {}); return Object.keys(p).sort((function (e, t) { return p[e] - p[t] })) }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n) }), []); n = t.rects.reference, i = t.rects.popper; var m = new Map; c = !0; for (var h = d[0], v = 0; v < d.length; v++) { var g = d[v], y = x(g), b = "start" === g.split("-")[1], w = 0 <= ["top", "bottom"].indexOf(y), O = w ? "width" : "height", j = A(t, { placement: g, boundary: s, rootBoundary: f, altBoundary: p, padding: a }); if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every((function (e) { return e }))) { h = g, c = !1; break } m.set(g, w) } if (c) for (o = function (e) { var t = d.find((function (t) { if (t = m.get(t)) return t.slice(0, e).every((function (e) { return e })) })); if (t) return h = t, "break" }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--); t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }, ne = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; e = e.name; var o = n.mainAxis, r = void 0 === o || o, i = void 0 !== (o = n.altAxis) && o; o = void 0 === (o = n.tether) || o; var a = n.tetherOffset, s = void 0 === a ? 0 : a, f = A(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary }); n = x(t.placement); var p = t.placement.split("-")[1], c = !p, l = L(n); n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets; var u = t.rects.reference, m = t.rects.popper, h = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s; if (s = { x: 0, y: 0 }, a) { if (r || i) { var v = "y" === l ? "top" : "left", g = "y" === l ? "bottom" : "right", b = "y" === l ? "height" : "width", w = a[l], O = a[l] + f[v], j = a[l] - f[g], E = o ? -m[b] / 2 : 0, D = "start" === p ? u[b] : m[b]; p = "start" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : { width: 0, height: 0 }; var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }; v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - E - m - v - h : D - m - v - h, u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - h - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - h, r && (r = o ? U(O, c) : O, j = o ? _(j, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = o - i) } t.modifiersData[e] = s } }, requiresIfExists: ["offset"] }, oe = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x(n.placement); if (e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) { r = M("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, { placement: n.placement })) : r) ? r : k(r, C)); var f = d(i), p = "y" === e ? "top" : "left", c = "y" === e ? "bottom" : "right", l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s]; a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t) } }, effect: function (e) { var t = e.state; if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) { if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return; O(t.elements.popper, e) && (t.elements.arrow = e) } }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, re = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state; e = e.name; var n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = A(t, { elementContext: "reference" }), a = A(t, { altBoundary: !0 }); n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": a }) } }, ie = B({ defaultModifiers: [Y, G, K, Q] }), ae = [Y, G, K, Q, Z, te, ne, oe, re], se = B({ defaultModifiers: ae }); e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = A, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", { value: !0 }) }));



/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */