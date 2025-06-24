frappe.show_alert({
    message: '🌈✨ Ultra-Colorful Form with Animations Ready! 🎉',
    indicator: 'purple'
}, 3);

frappe.ui.form.on('Test', {
    refresh(frm) {
        // Add custom CSS for extra color and animation
        if (!document.getElementById('custom-form-styles')) {
            const style = document.createElement('style');
            style.id = 'custom-form-styles';
            style.innerHTML = `
                .rainbow-animated-border {
                    background: linear-gradient(270deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ee5253, #f368e0, #222f3e, #ff6b6b);
                    background-size: 1800% 1800%;
                    animation: rainbowBorderMove 8s linear infinite;
                }
                @keyframes rainbowBorderMove {
                    0% {background-position:0% 50%;}
                    50% {background-position:100% 50%;}
                    100% {background-position:0% 50%;}
                }
                .animated-label {
                    animation: bounceLabel 1.5s infinite alternate;
                }
                @keyframes bounceLabel {
                    0% { transform: translateY(0);}
                    100% { transform: translateY(-6px) scale(1.08);}
                }
                .glow-animated {
                    box-shadow: 0 0 20px 5px #f368e0, 0 0 40px 10px #48dbfb;
                    animation: glowPulse 2s infinite alternate;
                }
                @keyframes glowPulse {
                    from { box-shadow: 0 0 10px #f368e0, 0 0 20px #48dbfb;}
                    to { box-shadow: 0 0 30px #f368e0, 0 0 60px #48dbfb;}
                }
                .rainbow-bg-animated {
                    background: linear-gradient(120deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ee5253, #f368e0, #222f3e, #ff6b6b);
                    background-size: 2000% 2000%;
                    animation: rainbowBGMove 10s linear infinite;
                }
                @keyframes rainbowBGMove {
                    0% {background-position:0% 50%;}
                    50% {background-position:100% 50%;}
                    100% {background-position:0% 50%;}
                }
                .spin-on-hover:hover {
                    animation: spin 1s linear;
                }
                @keyframes spin {
                    100% { transform: rotate(360deg);}
                }
                .animated-section-divider {
                    animation: pulseGlow 2s infinite alternate;
                }
            `;
            document.head.appendChild(style);
        }

        // Colorful Data fields with rainbow borders and animated backgrounds
        const dataFields = ['first_name', 'last_name', 'middle_name', 'full_name'];
        dataFields.forEach((field, index) => {
            const $wrapper = frm.fields_dict[field].$wrapper;
            const $input = $wrapper.find('input');
            $input.addClass(`
                w-full p-4 border-4 rounded-2xl
                rainbow-bg-animated text-white font-bold
                placeholder-white shadow-2xl
                focus:outline-none focus:ring-4 focus:ring-pink-300
                transition-all duration-500
                glow-animated
            `);
            $wrapper.find('.frappe-control').addClass('rainbow-animated-border p-1 rounded-2xl shadow-2xl');
            $input.on('focus', function () {
                $(this).addClass('animate-pulse');
            }).on('blur', function () {
                $(this).removeClass('animate-pulse');
            });
            $wrapper.find('.control-label').addClass('animated-label text-xl font-extrabold mb-2 text-pink-600');
        });

        // Animated Button
        const $button = frm.fields_dict['button'].$wrapper.find('button');
        $button.addClass(`
            rainbow-bg-animated text-white font-extrabold py-4 px-8 rounded-full
            shadow-2xl animate-bounce border-4 border-white
            transition-all duration-300 transform hover:scale-110 spin-on-hover
            relative overflow-hidden
        `);
        $button.prepend('<span class="mr-2 animate-spin inline-block">🎉</span>');
        $button.on('click', function (e) {
            const ripple = $('<span class="absolute inset-0 bg-white opacity-30 rounded-full transform scale-0 animate-ping"></span>');
            $(this).append(ripple);
            setTimeout(() => ripple.remove(), 600);
        });

        // File upload with rainbow border and animated icon
        const $fileInput = frm.fields_dict['attach_file'].$wrapper.find('input');
        const $fileWrapper = frm.fields_dict['attach_file'].$wrapper.find('.frappe-control');
        $fileWrapper.addClass(`
            rainbow-animated-border border-4 rounded-2xl p-8
            shadow-2xl animate-pulse relative overflow-hidden
        `);
        if (!$fileWrapper.find('.attach-icon').length) {
            $fileWrapper.prepend(`
                <div class="attach-icon text-center mb-4">
                    <div class="inline-flex items-center justify-center w-20 h-20 rainbow-bg-animated rounded-full mb-3 shadow-2xl animate-spin">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                    </div>
                    <p class="text-white font-bold text-lg animate-bounce">Drop files here or click to browse</p>
                    <p class="text-pink-200 text-sm mt-1">Supports all file types</p>
                </div>
            `);
        }
        $fileInput.addClass('absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10');
        $fileWrapper.on('click', function (e) {
            const ripple = $('<span class="absolute inset-0 bg-white opacity-30 rounded-full transform scale-0 animate-ping"></span>');
            $(this).append(ripple);
            setTimeout(() => ripple.remove(), 600);
        });

        // Checkbox with rainbow glow
        const $checkbox = frm.fields_dict['check'].$wrapper.find('input[type="checkbox"]');
        $checkbox.addClass(`
            h-8 w-8 border-4 rounded-xl
            rainbow-bg-animated focus:ring-4 focus:ring-pink-300
            transition-all duration-300 transform hover:scale-125
            glow-animated
        `);

        // Barcode field with animated border
        const $barcode = frm.fields_dict['barcode'].$wrapper.find('input');
        $barcode.addClass(`
            w-full p-4 border-4 rounded-xl
            rainbow-animated-border bg-black text-cyan-300 font-mono text-xl
            focus:outline-none focus:ring-4 focus:ring-cyan-300
            transition-all duration-300
            placeholder-cyan-200
        `);

        // Code editor with matrix-style and rainbow border
        const $codeArea = frm.fields_dict['code_eial'].$wrapper.find('textarea');
        $codeArea.addClass(`
            w-full p-4 border-4 rounded-2xl
            rainbow-animated-border bg-black text-green-400 font-mono text-lg
            focus:outline-none focus:ring-4 focus:ring-green-300
            transition-all duration-300
            placeholder-green-200 resize-none
            glow-animated
        `);

        // Color picker with animated border
        const $colorInput = frm.fields_dict['color'].$wrapper.find('input');
        $colorInput.addClass(`
            w-full h-14 border-4 rounded-2xl cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-purple-300
            transition-all duration-300 transform hover:scale-110
            shadow-2xl
        `);
        $colorInput.parent().addClass('rainbow-animated-border p-1 rounded-2xl');

        // Geolocation with animated background
        const $geoWrapper = frm.fields_dict['geolocation'].$wrapper.find('.frappe-control');
        $geoWrapper.addClass(`
            w-full p-6 border-4 rounded-2xl
            rainbow-bg-animated
            focus-within:ring-4 focus-within:ring-indigo-300
            transition-all duration-300
            shadow-2xl
        `);

        // HTML field with glass morphism and rainbow border
        const $htmlWrapper = frm.fields_dict['html'].$wrapper.find('.frappe-control');
        $htmlWrapper.addClass(`
            p-8 rounded-2xl glass-morphism
            rainbow-animated-border border-4
            shadow-2xl
            transition-all duration-300
        `);

        // HTML Editor with rainbow border
        const $htmlEditor = frm.fields_dict['html_editor'].$wrapper.find('.ace_editor');
        $htmlEditor.addClass(`
            border-4 rainbow-animated-border rounded-2xl
            shadow-2xl
            transition-all duration-300
            overflow-hidden
        `);

        // Table with rainbow border and animated headings
        const $table = frm.fields_dict['table'].$wrapper.find('.grid');
        $table.addClass(`
            w-full border-0 rounded-2xl overflow-hidden
            rainbow-animated-border border-4
            shadow-2xl
            transition-all duration-300
        `);
        const $tableHeading = frm.fields_dict['table'].$wrapper.find('.grid-heading-row');
        $tableHeading.addClass(`
            rainbow-bg-animated text-white font-extrabold text-lg
            shadow-xl animate-pulse
        `);
        const $tableRows = frm.fields_dict['table'].$wrapper.find('.grid-row');
        $tableRows.addClass(`
            hover:rainbow-bg-animated hover:text-white
            transition-all duration-200 border-b border-gray-100
            cursor-pointer transform hover:scale-105
        `);

        // Section Breaks with animated rainbow dividers
        const sectionBreaks = ['section_break_zccw', 'section_break_mnyl', 'section_break_buzt'];
        sectionBreaks.forEach((section, index) => {
            const $section = frm.fields_dict[section].$wrapper;
            $section.addClass(`
                mt-10 mb-8 relative animated-section-divider
                before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
                before:h-2 before:rainbow-bg-animated
                before:rounded-full before:shadow-2xl
                pt-8
            `);
        });

        // Column Breaks with more spacing and color
        const columnBreaks = ['column_break_scat', 'column_break_rzcz', 'code_column'];
        columnBreaks.forEach((column, index) => {
            const $column = frm.fields_dict[column].$wrapper;
            $column.addClass('p-4 rainbow-bg-animated rounded-2xl');
        });

        // Animated welcome for the form
        setTimeout(() => {
            $('.frappe-control').each(function (index) {
                $(this).css({
                    opacity: 0,
                    transform: 'translateY(30px) scale(0.95)'
                }).animate({
                    opacity: 1
                }, {
                    duration: 400,
                    delay: index * 60,
                    complete: function () {
                        $(this).css('transform', 'translateY(0) scale(1)');
                    }
                });
            });
        }, 100);

        // Animated lively background
        if (!document.getElementById('lively-background')) {
            const bgDiv = document.createElement('div');
            bgDiv.id = 'lively-background';
            bgDiv.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: -10;
                background: linear-gradient(270deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ee5253, #f368e0, #222f3e, #ff6b6b);
                background-size: 400% 400%;
                animation: rainbowBGMove 20s linear infinite;
                opacity: 0.9;
            `;
            document.body.appendChild(bgDiv);
        }

        // Auto-fill full name with animation
        const firstNameField = frm.fields_dict['first_name'].$wrapper.find('input');
        const lastNameField = frm.fields_dict['last_name'].$wrapper.find('input');
        const middleNameField = frm.fields_dict['middle_name'].$wrapper.find('input');
        const fullNameField = frm.fields_dict['full_name'].$wrapper.find('input');
        function updateFullName() {
            const firstName = firstNameField.val() || '';
            const middleName = middleNameField.val() || '';
            const lastName = lastNameField.val() || '';
            let fullName = firstName;
            if (middleName) fullName += ' ' + middleName;
            if (lastName) fullName += ' ' + lastName;
            fullNameField.val(fullName.trim());
            fullNameField.trigger('change');
            fullNameField.addClass('animate-bounce');
            setTimeout(() => fullNameField.removeClass('animate-bounce'), 500);
        }
        firstNameField.on('input keyup', updateFullName);
        middleNameField.on('input keyup', updateFullName);
        lastNameField.on('input keyup', updateFullName);
        fullNameField.prop('readonly', true).addClass('bg-gradient-to-r from-emerald-200 to-teal-200 cursor-not-allowed text-pink-700 font-extrabold');
        if (!frm.fields_dict['full_name'].$wrapper.find('.auto-fill-indicator').length) {
            frm.fields_dict['full_name'].$wrapper.find('.control-label').append(`
                <span class="auto-fill-indicator ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold rainbow-bg-animated text-white animate-pulse">
                    <svg class="w-4 h-4 mr-1 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    Auto-filled
                </span>
            `);
        }
    }
});


function showFullNameOnInput(frm) {
    const firstNameField = frm.fields_dict['first_name'].$wrapper.find('input');
    const lastNameField = frm.fields_dict['last_name'].$wrapper.find('input');
    const fullNameField = frm.fields_dict['full_name'].$wrapper.find('input');

    function updateFullName() {
        const firstName = firstNameField.val() || '';
        const lastName = lastNameField.val() || '';
        if (firstName && lastName) {
            fullNameField.val(`${firstName} ${lastName}`);
            fullNameField.trigger('change');
        }
    }

    firstNameField.on('input keyup', updateFullName);
    lastNameField.on('input keyup', updateFullName);
}