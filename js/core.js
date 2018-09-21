function changeTraveloElementUI() {
    jQuery(".selector select").each(function() {
        var n = jQuery(this);
        n.parent().children(".custom-select").length < 1 && (n.after("<span class='custom-select'>" + n.children("option:selected").html() + "<\/span>"), n.hasClass("white-bg") && n.next("span.custom-select").addClass("white-bg"), n.hasClass("full-width") && n.next("span.custom-select").addClass("full-width"))
    });
    jQuery("body").on("change", ".selector select", function() {
        jQuery(this).next("span.custom-select").length > 0 && jQuery(this).next("span.custom-select").text(jQuery(this).children("option:selected").text())
    });
    jQuery("body").on("keydown", ".selector select", function() {
        jQuery(this).next("span.custom-select").length > 0 && jQuery(this).next("span.custom-select").text(jQuery(this).children("option:selected").text())
    });
    jQuery(".fileinput input[type=file]").each(function() {
        var n = jQuery(this);
        n.parent().children(".custom-fileinput").length < 1 && (n.after('<input type="text" class="custom-fileinput" />'), typeof n.data("placeholder") != "undefined" && n.next(".custom-fileinput").attr("placeholder", n.data("placeholder")), typeof n.prop("class") != "undefined" && n.next(".custom-fileinput").addClass(n.prop("class")), n.parent().css("line-height", n.outerHeight() + "px"))
    });
    jQuery(".fileinput input[type=file]").on("change", function() {
        var n = this.value,
            t = n.lastIndexOf("\\");
        t == -1 && (t = n.lastIndexOf("/"));
        t != -1 && (n = n.substring(t + 1));
        jQuery(this).next(".custom-fileinput").val(n)
    });
    jQuery(".checkbox input[type='checkbox'], .radio input[type='radio']").each(function() {
        jQuery(this).is(":checked") && (jQuery(this).closest(".checkbox").addClass("checked"), jQuery(this).closest(".radio").addClass("checked"))
    });
    jQuery(".checkbox input[type='checkbox']").bind("change", function() {
        jQuery(this).is(":checked") ? jQuery(this).closest(".checkbox").addClass("checked") : jQuery(this).closest(".checkbox").removeClass("checked")
    });
    jQuery(".radio input[type='radio']").bind("change", function() {
        if (jQuery(this).is(":checked")) {
            var n = jQuery(this).prop("name");
            typeof n != "undefined" && jQuery(".radio input[name='" + n + "']").closest(".radio").removeClass("checked");
            jQuery(this).closest(".radio").addClass("checked")
        }
    });
    jQuery(".datepicker-wrap input").datepicker({
        showOn: "button",
        buttonImage: "images/icon/blank.png",
        buttonText: "",
        buttonImageOnly: !0,
        minDate: 0,
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        dateFormat: "dd/mm/yy",
        beforeShow: function(n) {
            var t = jQuery(n).parent().attr("class").replace("datepicker-wrap", "");
            jQuery("#ui-datepicker-div").attr("class", "");
            jQuery("#ui-datepicker-div").addClass("ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all");
            jQuery("#ui-datepicker-div").addClass(t)
        }
    });
    jQuery(".datepicker-wrap input.dob").datepicker("option", "maxDate", 0).datepicker("option", "minDate", null);
    try {
        jQuery("input, textarea").placeholder()
    } catch (n) {}
}

function displayPhotoGallery(n) {
    var t, r, i;
    !jQuery.fn.flexslider || n.length < 1 || n.is(":hidden") || (t = n.data("animation"), r = n.data("sync"), typeof t == "undefined" && (t = "slide"), i = n.data("fix-control-nav-pos"), n.flexslider({
        animation: t,
        controlNav: !0,
        animationLoop: !0,
        slideshow: !0,
        pauseOnHover: !0,
        sync: r,
        start: function(n) {
            if (typeof i != "undefined" && i == "1") {
                var t = jQuery(n).find(".slides img").height();
                jQuery(n).find(".flex-control-nav").css("top", t - 44 + "px")
            }
        }
    }))
}

function displayImageCarousel(n) {
    var e, f;
    if (jQuery.fn.flexslider && !(n.length < 1) && !n.is(":hidden")) {
        var u = n.data("animation"),
            t = n.data("item-width"),
            i = n.data("item-margin"),
            r = n.data("sync");
        typeof u == "undefined" && (u = "slide");
        typeof t == "undefined" && (t = 70);
        typeof i == "undefined" && (i = 10);
        t = parseInt(t, 10);
        i = parseInt(i, 10);
        e = !0;
        f = !1;
        typeof r == "undefined" && (r = "", f = !0);
        n.flexslider({
            animation: u,
            controlNav: !0,
            animationLoop: e,
            slideshow: f,
            itemWidth: t,
            itemMargin: i,
            minItems: 2,
            pauseOnHover: !0,
            asNavFor: r,
            start: function(n) {
                r != "" ? (jQuery(n).find(".slides > li").height(t), jQuery(n).find(".slides > li > img").each(function() {
                    jQuery(this).width() < 1 ? jQuery(this).load(function() {
                        jQuery(this).parent().middleblock()
                    }) : jQuery(this).parent().middleblock()
                })) : jQuery(n).find(".middle-block img, .middle-block .middle-item").each(function() {
                    jQuery(this).width() < 1 ? jQuery(this).load(function() {
                        jQuery(this).closest(".middle-block").middleblock()
                    }) : jQuery(this).closest(".middle-block").middleblock()
                })
            },
            after: function(n) {
                n.currentItem == 0 && (target = 0, n.transitions && (target = n.vars.direction === "vertical" ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)", n.container.css("-" + n.pfx + "-transition-duration", "0s"), n.container.css("transition-duration", "0s")), n.args[n.prop] = target, n.container.css(n.args), n.container.css("transform", target))
            }
        })
    }
}

function fixPositionMegaMenu(n) {
    typeof n == "undefined" ? n = "" : n += " ";
    jQuery(n + ".megamenu-menu").each(function() {
        var r = jQuery(this).closest(".container").css("padding-left"),
            u = parseInt(r, 10),
            t = 0,
            n, i;
        try {
            t = jQuery(this).offset().left - jQuery(this).closest(".container").offset().left - u
        } catch (f) {}
        t != 0 && (jQuery(this).children(".megamenu-wrapper").css("left", "-" + t + "px"), jQuery(this).children(".megamenu-wrapper").css("width", jQuery(this).closest(".container").width() + "px"), typeof jQuery(this).children(".megamenu-wrapper").data("items-per-column") != "undefined" && (megamenu_items_per_column = parseInt(jQuery(this).children(".megamenu-wrapper").data("items-per-column"), 10)), n = [], i = 0, jQuery(this).find(".megamenu > li").each(function() {
            var t = Math.ceil(jQuery(this).find("li > a").length / megamenu_items_per_column);
            t == 0 && (t = 1);
            n.push(t);
            i += t
        }), jQuery(this).find(".megamenu > li").each(function(t) {
            jQuery(this).css("width", n[t] / i * 100 + "%");
            jQuery(this).addClass("megamenu-columns-" + n[t])
        }), jQuery(this).find(".megamenu > li.menu-item-has-children").each(function(t) {
            var i, r;
            if (jQuery(this).children(".sub-menu").length < 1) {
                for (jQuery(this).append("<ul class='sub-menu'><\/ul>"), i = 0; i < n[t]; i++) jQuery(this).children(".sub-menu").append("<li><ul><\/ul><\/li>");
                r = jQuery(this).children("ul").eq(0).children("li").length - 1;
                jQuery(this).children("ul").eq(0).children("li").each(function(n) {
                    var t = Math.floor(n / megamenu_items_per_column);
                    jQuery(this).closest("li.menu-item-has-children").children(".sub-menu").children("li").eq(t).children("ul").append(jQuery(this).clone());
                    n == r && jQuery(this).closest(".menu-item-has-children").children("ul").eq(0).remove()
                })
            }
        }), jQuery(this).children(".megamenu-wrapper").show())
    })
}

function formatTime(n) {
    var t = Math.floor(n / 60),
        i = n % 60;
    return ("00" + t).slice(-2) + ":" + ("00" + i).slice(-2)
}! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function(t) {
                function r() {
                    var u, r;
                    return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), void 0 !== r ? r : !1) : !0
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [], t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t;
                r = r.concat(i.errorList)
            }), i.errorList = r), t
        },
        rules: function(t, i) {
            var e, s, f, u, o, h, r = this[0];
            if (t) switch (e = n.data(r.form, "validator").settings, s = e.rules, f = n.validator.staticRules(r), t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i));
                    delete f.messages;
                    s[r.name] = f;
                    i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                        h[i] = f[i];
                        delete f[i];
                        "required" === i && n(r).removeAttr("aria-required")
                    }), h) : (delete s[r.name], f)
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                9 === i.which && "" === this.elementValue(t) || -1 !== n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this.form, "validator"),
                        u = "on" + t.type.replace(/^validate/, ""),
                        i = r.settings;
                    i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var t, r = this.groups = {};
                n.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                this.settings.invalidHandler && n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                    i = this.validationTargetFor(u),
                    r = !0;
                return this.lastElement = i, void 0 === i ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), n(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var t, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (t = 0; i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, "");
                else i.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var i, t = 0;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, u = n(t),
                    r = t.type;
                return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : u.val() : (i = u.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var r, u, i, f = n(t).rules(),
                    s = n.map(f, function(n, t) {
                        return t
                    }).length,
                    o = !1,
                    h = this.elementValue(t);
                for (u in f) {
                    i = {
                        method: u,
                        parameters: f[u]
                    };
                    try {
                        if (r = n.validator.methods[u].call(this, h, t, i.parameters), "dependency-mismatch" === r && 1 === s) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === r) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!r) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e;
                    }
                }
                if (!o) return this.objectLength(f) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, o, e, r = this.errorsFor(t),
                    s = this.idOrName(t),
                    f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", s) : 0 === r.parents("label[for='" + s + "']").length && (e = r.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), f ? f.match(new RegExp("\\b" + e + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), o = this.groups[t.name], o && n.each(this.groups, function(t, i) {
                    i === o && n("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                })));
                !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                    u = n(t).attr("aria-describedby"),
                    i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + u.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max/.test(i) && (null === t || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = void 0));
            r || 0 === r ? n[i] = r : t === i && "range" !== t && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r, i, u = {},
                f = n(t),
                e = t.getAttribute("type");
            for (r in n.validator.methods) "required" === r ? (i = t.getAttribute(r), "" === i && (i = !0), i = !!i) : i = f.attr(r), this.normalizeAttributeRule(u, e, r, i);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function(t) {
            var i, r, u = {},
                f = n(t),
                e = t.getAttribute("type");
            for (i in n.validator.methods) r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(u, e, i, r);
            return u
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) return void delete t[r];
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var i, f, e = 0,
                    r = 0,
                    u = !1;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return !1;
                for (i = n.length - 1; i >= 0; i--) f = n.charAt(i), r = parseInt(f, 10), u && (r *= 2) > 9 && (r -= 9), e += r, u = !u;
                return e % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= u
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || i >= n
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var u, e, f = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {
                    url: r
                } || r, f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o, e, h, s = r === !0 || "true" === r;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        s ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (o = {}, e = r || u.defaultMessage(i, "remote"), o[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(o));
                        f.valid = s;
                        u.stopRequest(i, s)
                    }
                }, r)), "pending")
            }
        }
    });
    var i, t = {};
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
}),
function(n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }

    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }

    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }

    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
            u = r.attr("data-valmsg-replace"),
            e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }

    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]"),
            r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }

    function a(t) {
        var i = t.data("unobtrusiveContainer"),
            r = i.attr("data-valmsg-replace"),
            u = r ? n.parseJSON(r) : null;
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
    }

    function v() {
        var t = n(this),
            i = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(i)) {
            t.data(i, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(i)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
            t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }

    function s(t) {
        var i = n(t),
            f = i.data(u),
            s = n.proxy(v, t),
            e = r.unobtrusive.options || {},
            o = function(i, r) {
                var u = e[i];
                u && n.isFunction(u) && u.apply(t, r)
            };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments);
                    o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments);
                    o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments);
                    o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(), i.valid()
            }
        }, i.data(u, f)), f
    }
    var r = n.validator,
        t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
                f = u.parents("form")[0],
                r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                var i = "data-val-" + this.name,
                    r = u.attr(i),
                    s = {};
                r !== undefined && (i += "-", n.each(this.params, function() {
                    s[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: s,
                    rules: e,
                    messages: o
                }))
            }), n.extend(e, {
                __dummy__: !0
            }), i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t),
                u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            });
            u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    };
    t = r.unobtrusive.adapters;
    t.add = function(n, t, i) {
        return i || (i = t, t = []), this.push({
            name: n,
            params: t,
            adapt: i
        }), this
    };
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    };
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min,
                e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    };
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    };
    r.addMethod("__dummy__", function() {
        return !0
    });
    r.addMethod("regex", function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    });
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
    t.addSingleVal("regex", "pattern");
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name),
            u = t.params.other,
            s = o(u, r),
            h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    });
    t.add("required", function(n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    });
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
                url: t.params.url,
                type: t.params.type || "GET",
                data: {}
            },
            u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
            }
        });
        i(t, "remote", r)
    });
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    });
    n(function() {
        r.unobtrusive.parse(document)
    })
}(jQuery),
function(n, t, i, r) {
    function f(t, i) {
        this.element = t;
        this.options = n.extend({}, h, i);
        this._defaults = h;
        this._name = u;
        this.init()
    }
    var u = "stellar",
        h = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(n) {
                n.hide()
            },
            showElement: function(n) {
                n.show()
            }
        },
        e = {
            scroll: {
                getLeft: function(n) {
                    return n.scrollLeft()
                },
                setLeft: function(n, t) {
                    n.scrollLeft(t)
                },
                getTop: function(n) {
                    return n.scrollTop()
                },
                setTop: function(n, t) {
                    n.scrollTop(t)
                }
            },
            position: {
                getLeft: function(n) {
                    return parseInt(n.css("left"), 10) * -1
                },
                getTop: function(n) {
                    return parseInt(n.css("top"), 10) * -1
                }
            },
            margin: {
                getLeft: function(n) {
                    return parseInt(n.css("margin-left"), 10) * -1
                },
                getTop: function(n) {
                    return parseInt(n.css("margin-top"), 10) * -1
                }
            },
            transform: {
                getLeft: function(n) {
                    var t = getComputedStyle(n[0])[o];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                },
                getTop: function(n) {
                    var t = getComputedStyle(n[0])[o];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        },
        c = {
            position: {
                setLeft: function(n, t) {
                    n.css("left", t)
                },
                setTop: function(n, t) {
                    n.css("top", t)
                }
            },
            transform: {
                setPosition: function(n, t, i, r, u) {
                    n[0].style[o] = "translate3d(" + (t - i) + "px, " + (r - u) + "px, 0)"
                }
            }
        },
        v = function() {
            var u = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                i = n("script")[0].style,
                t = "",
                r;
            for (r in i)
                if (u.test(r)) {
                    t = r.match(u)[0];
                    break
                }
            return "WebkitOpacity" in i && (t = "Webkit"), "KhtmlOpacity" in i && (t = "Khtml"),
                function(n) {
                    return t + (t.length > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n)
                }
        }(),
        o = v("transform"),
        l = n("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        s = l ? function(n, t, i) {
            n.css({
                "background-position-x": t,
                "background-position-y": i
            })
        } : function(n, t, i) {
            n.css("background-position", t + " " + i)
        },
        y = l ? function(n) {
            return [n.css("background-position-x"), n.css("background-position-y")]
        } : function(n) {
            return n.css("background-position").split(" ")
        },
        a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(n) {
            setTimeout(n, 1e3 / 60)
        };
    f.prototype = {
        init: function() {
            this.options.name = u + "_" + Math.floor(Math.random() * 1e9);
            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();
            this.refresh({
                firstLoad: !0
            });
            this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = t);
            this.$scrollElement = n(this.element);
            this.$element = this.element === t ? n("body") : this.$scrollElement;
            this.$viewportElement = this.options.viewportElement !== r ? n(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var n = this,
                t = e[n.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(n.$scrollElement)
            };
            this._getScrollTop = function() {
                return t.getTop(n.$scrollElement)
            }
        },
        _defineSetters: function() {
            var t = this,
                r = e[t.options.scrollProperty],
                i = c[t.options.positionProperty],
                u = r.setLeft,
                f = r.setTop;
            this._setScrollLeft = typeof u == "function" ? function(n) {
                u(t.$scrollElement, n)
            } : n.noop;
            this._setScrollTop = typeof f == "function" ? function(n) {
                f(t.$scrollElement, n)
            } : n.noop;
            this._setPosition = i.setPosition || function(n, r, u, f, e) {
                t.options.horizontalScrolling && i.setLeft(n, r, u);
                t.options.verticalScrolling && i.setTop(n, f, e)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                r = n(t);
            i.options.responsive && r.bind("load." + this.name, function() {
                i.refresh()
            });
            r.bind("resize." + this.name, function() {
                i._detectViewport();
                i.options.responsive && i.refresh()
            })
        },
        refresh: function(i) {
            var r = this,
                u = r._getScrollLeft(),
                f = r._getScrollTop();
            i && i.firstLoad || this._reset();
            this._setScrollLeft(0);
            this._setScrollTop(0);
            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();
            i && i.firstLoad && /WebKit/.test(navigator.userAgent) && n(t).load(function() {
                var n = r._getScrollLeft(),
                    t = r._getScrollTop();
                r._setScrollLeft(n + 1);
                r._setScrollTop(t + 1);
                r._setScrollLeft(n);
                r._setScrollTop(t)
            });
            this._setScrollLeft(u);
            this._setScrollTop(f)
        },
        _detectViewport: function() {
            var n = this.$viewportElement.offset(),
                t = n !== null && n !== r;
            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();
            this.viewportOffsetTop = t ? n.top : 0;
            this.viewportOffsetLeft = t ? n.left : 0
        },
        _findParticles: function() {
            var t = this,
                u = this._getScrollLeft(),
                f = this._getScrollTop(),
                i;
            if (this.particles !== r)
                for (i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", r);
            (this.particles = [], this.options.parallaxElements) && this.$element.find("[data-stellar-ratio]").each(function() {
                var i = n(this),
                    f, e, o, s, h, c, u, l, a, v = 0,
                    y = 0,
                    p = 0,
                    w = 0;
                if (i.data("stellar-elementIsActive")) {
                    if (i.data("stellar-elementIsActive") !== this) return
                } else i.data("stellar-elementIsActive", this);
                t.options.showElement(i);
                i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top")));
                o = i.position().left;
                s = i.position().top;
                h = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10);
                c = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10);
                l = i.offset().left - h;
                a = i.offset().top - c;
                i.parents().each(function() {
                    var t = n(this);
                    if (t.data("stellar-offset-parent") === !0) return v = p, y = w, u = t, !1;
                    p += t.position().left;
                    w += t.position().top
                });
                f = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : u !== r && u.data("stellar-horizontal-offset") !== r ? u.data("stellar-horizontal-offset") : t.horizontalOffset;
                e = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : u !== r && u.data("stellar-vertical-offset") !== r ? u.data("stellar-vertical-offset") : t.verticalOffset;
                t.particles.push({
                    $element: i,
                    $offsetParent: u,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: f,
                    verticalOffset: e,
                    startingPositionLeft: o,
                    startingPositionTop: s,
                    startingOffsetLeft: l,
                    startingOffsetTop: a,
                    parentOffsetLeft: v,
                    parentOffsetTop: y,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var i = this,
                u = this._getScrollLeft(),
                f = this._getScrollTop(),
                t;
            (this.backgrounds = [], this.options.parallaxBackgrounds) && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function() {
                var t = n(this),
                    e = y(t),
                    h, c, l, a, v, p, o, w = 0,
                    b = 0,
                    k = 0,
                    d = 0;
                if (t.data("stellar-backgroundIsActive")) {
                    if (t.data("stellar-backgroundIsActive") !== this) return
                } else t.data("stellar-backgroundIsActive", this);
                t.data("stellar-backgroundStartingLeft") ? s(t, t.data("stellar-backgroundStartingLeft"), t.data("stellar-backgroundStartingTop")) : (t.data("stellar-backgroundStartingLeft", e[0]), t.data("stellar-backgroundStartingTop", e[1]));
                l = t.css("margin-left") === "auto" ? 0 : parseInt(t.css("margin-left"), 10);
                a = t.css("margin-top") === "auto" ? 0 : parseInt(t.css("margin-top"), 10);
                v = t.offset().left - l - u;
                p = t.offset().top - a - f;
                t.parents().each(function() {
                    var t = n(this);
                    if (t.data("stellar-offset-parent") === !0) return w = k, b = d, o = t, !1;
                    k += t.position().left;
                    d += t.position().top
                });
                h = t.data("stellar-horizontal-offset") !== r ? t.data("stellar-horizontal-offset") : o !== r && o.data("stellar-horizontal-offset") !== r ? o.data("stellar-horizontal-offset") : i.horizontalOffset;
                c = t.data("stellar-vertical-offset") !== r ? t.data("stellar-vertical-offset") : o !== r && o.data("stellar-vertical-offset") !== r ? o.data("stellar-vertical-offset") : i.verticalOffset;
                i.backgrounds.push({
                    $element: t,
                    $offsetParent: o,
                    isFixed: t.css("background-attachment") === "fixed",
                    horizontalOffset: h,
                    verticalOffset: c,
                    startingValueLeft: e[0],
                    startingValueTop: e[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(e[0], 10)) ? 0 : parseInt(e[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(e[1], 10)) ? 0 : parseInt(e[1], 10),
                    startingPositionLeft: t.position().left,
                    startingPositionTop: t.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: p,
                    parentOffsetLeft: w,
                    parentOffsetTop: b,
                    stellarRatio: t.data("stellar-background-ratio") === r ? 1 : t.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            for (var t, r, u, i, n = this.particles.length - 1; n >= 0; n--) t = this.particles[n], r = t.$element.data("stellar-startingLeft"), u = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, r, r, u, u), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (n = this.backgrounds.length - 1; n >= 0; n--) i = this.backgrounds[n], i.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), s(i.$element, i.startingValueLeft, i.startingValueTop)
        },
        destroy: function() {
            this._reset();
            this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name);
            this._animationLoop = n.noop;
            n(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this,
                r = n(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name);
            typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset;
            typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var r = this._getScrollLeft(),
                u = this._getScrollTop(),
                n, f, t, l, a, v = !0,
                y = !0,
                e, o, h, c, i;
            if (this.currentScrollLeft !== r || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = r, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, i = this.particles.length - 1; i >= 0; i--) n = this.particles[i], f = n.isFixed ? 1 : 0, this.options.horizontalScrolling ? (e = (r + n.horizontalOffset + this.viewportOffsetLeft + n.startingPositionLeft - n.startingOffsetLeft + n.parentOffsetLeft) * -(n.stellarRatio + f - 1) + n.startingPositionLeft, h = e - n.startingPositionLeft + n.startingOffsetLeft) : (e = n.startingPositionLeft, h = n.startingOffsetLeft), this.options.verticalScrolling ? (o = (u + n.verticalOffset + this.viewportOffsetTop + n.startingPositionTop - n.startingOffsetTop + n.parentOffsetTop) * -(n.stellarRatio + f - 1) + n.startingPositionTop, c = o - n.startingPositionTop + n.startingOffsetTop) : (o = n.startingPositionTop, c = n.startingOffsetTop), this.options.hideDistantElements && (y = !this.options.horizontalScrolling || h + n.width > (n.isFixed ? 0 : r) && h < (n.isFixed ? 0 : r) + this.viewportWidth + this.viewportOffsetLeft, v = !this.options.verticalScrolling || c + n.height > (n.isFixed ? 0 : u) && c < (n.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), y && v ? (n.isHidden && (this.options.showElement(n.$element), n.isHidden = !1), this._setPosition(n.$element, e, n.startingPositionLeft, o, n.startingPositionTop)) : n.isHidden || (this.options.hideElement(n.$element), n.isHidden = !0);
                for (i = this.backgrounds.length - 1; i >= 0; i--) t = this.backgrounds[i], f = t.isFixed ? 0 : 1, l = this.options.horizontalScrolling ? (r + t.horizontalOffset - this.viewportOffsetLeft - t.startingOffsetLeft + t.parentOffsetLeft - t.startingBackgroundPositionLeft) * (f - t.stellarRatio) + "px" : t.startingValueLeft, a = this.options.verticalScrolling ? (u + t.verticalOffset - this.viewportOffsetTop - t.startingOffsetTop + t.parentOffsetTop - t.startingBackgroundPositionTop) * (f - t.stellarRatio) + "px" : t.startingValueTop, s(t.$element, l, a)
            }
        },
        _handleScrollEvent: function() {
            var i = this,
                n = !1,
                r = function() {
                    i._repositionElements();
                    n = !1
                },
                t = function() {
                    n || (a(r), n = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, t);
            t()
        },
        _startAnimationLoop: function() {
            var n = this;
            this._animationLoop = function() {
                a(n._animationLoop);
                n._repositionElements()
            };
            this._animationLoop()
        }
    };
    n.fn[u] = function(t) {
        var i = arguments;
        return t === r || typeof t == "object" ? this.each(function() {
            n.data(this, "plugin_" + u) || n.data(this, "plugin_" + u, new f(this, t))
        }) : typeof t == "string" && t[0] !== "_" && t !== "init" ? this.each(function() {
            var r = n.data(this, "plugin_" + u);
            r instanceof f && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(i, 1));
            t === "destroy" && n.data(this, "plugin_" + u, null)
        }) : void 0
    };
    n[u] = function() {
        var i = n(t);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    };
    n[u].scrollProperty = e;
    n[u].positionProperty = c;
    t.Stellar = f
}(jQuery, this, document),
function() {
    var t = [].indexOf || function(n) {
            for (var t = 0, i = this.length; t < i; t++)
                if (t in this && this[t] === n) return t;
            return -1
        },
        n = [].slice;
    (function(n, t) {
        return typeof define == "function" && define.amd ? define("waypoints", ["jquery"], function(i) {
            return t(i, n)
        }) : t(n.jQuery, n)
    })(window, function(i, r) {
        var a, b, v, o, k, h, s, y, u, f, p, w, d, l, c, e;
        a = i(r);
        y = t.call(r, "ontouchstart") >= 0;
        o = {
            horizontal: {},
            vertical: {}
        };
        k = 1;
        s = {};
        h = "waypoints-context-id";
        p = "resize.waypoints";
        w = "scroll.waypoints";
        d = 1;
        l = "waypoints-waypoint-ids";
        c = "waypoint";
        e = "waypoints";
        b = function() {
            function n(n) {
                var t = this;
                this.$element = n;
                this.element = n[0];
                this.didResize = !1;
                this.didScroll = !1;
                this.id = "context" + k++;
                this.oldScroll = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[h] = this.id;
                s[this.id] = this;
                n.bind(w, function() {
                    var n;
                    if (!(t.didScroll || y)) return t.didScroll = !0, n = function() {
                        return t.doScroll(), t.didScroll = !1
                    }, r.setTimeout(n, i[e].settings.scrollThrottle)
                });
                n.bind(p, function() {
                    var n;
                    if (!t.didResize) return t.didResize = !0, n = function() {
                        return i[e]("refresh"), t.didResize = !1
                    }, r.setTimeout(n, i[e].settings.resizeThrottle)
                })
            }
            return n.prototype.doScroll = function() {
                var n, t = this;
                return n = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !y || n.vertical.oldScroll && n.vertical.newScroll || i[e]("refresh"), i.each(n, function(n, r) {
                    var e, f, u;
                    return u = [], f = r.newScroll > r.oldScroll, e = f ? r.forward : r.backward, i.each(t.waypoints[n], function(n, t) {
                        var i, f;
                        return r.oldScroll < (i = t.offset) && i <= r.newScroll ? u.push(t) : r.newScroll < (f = t.offset) && f <= r.oldScroll ? u.push(t) : void 0
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset
                    }), f || u.reverse(), i.each(u, function(n, t) {
                        if (t.options.continuous || n === u.length - 1) return t.trigger([e])
                    })
                }), this.oldScroll = {
                    x: n.horizontal.newScroll,
                    y: n.vertical.newScroll
                }
            }, n.prototype.refresh = function() {
                var r, t, n, u = this;
                return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), r = {
                    horizontal: {
                        contextOffset: n ? 0 : t.left,
                        contextScroll: n ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: n ? 0 : t.top,
                        contextScroll: n ? 0 : this.oldScroll.y,
                        contextDimension: n ? i[e]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, i.each(r, function(n, t) {
                    return i.each(u.waypoints[n], function(n, r) {
                        var u, e, f, o, s;
                        if (u = r.options.offset, f = r.offset, e = i.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], i.isFunction(u) ? u = u.apply(r.element) : typeof u == "string" && (u = parseFloat(u), r.options.offset.indexOf("%") > -1 && (u = Math.ceil(t.contextDimension * u / 100))), r.offset = e - t.contextOffset + t.contextScroll - u, (!r.options.onlyOnScroll || f == null) && r.enabled) return f !== null && f < (o = t.oldScroll) && o <= r.offset ? r.trigger([t.backward]) : f !== null && f > (s = t.oldScroll) && s >= r.offset ? r.trigger([t.forward]) : f === null && t.oldScroll >= r.offset ? r.trigger([t.forward]) : void 0
                    })
                })
            }, n.prototype.checkEmpty = function() {
                if (i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, w].join(" ")), delete s[this.id]
            }, n
        }();
        v = function() {
            function n(n, t, r) {
                var u, f;
                r.offset === "bottom-in-view" && (r.offset = function() {
                    var n;
                    return n = i[e]("viewportHeight"), i.isWindow(t.element) || (n = t.$element.height()), n - i(this).outerHeight()
                });
                this.$element = n;
                this.element = n[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = t;
                this.enabled = r.enabled;
                this.id = "waypoints" + d++;
                this.offset = null;
                this.options = r;
                t.waypoints[this.axis][this.id] = this;
                o[this.axis][this.id] = this;
                u = (f = this.element[l]) != null ? f : [];
                u.push(this.id);
                this.element[l] = u
            }
            return n.prototype.trigger = function(n) {
                if (this.enabled) return this.callback != null && this.callback.apply(this.element, n), this.options.triggerOnce ? this.destroy() : void 0
            }, n.prototype.disable = function() {
                return this.enabled = !1
            }, n.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, n.prototype.destroy = function() {
                return delete o[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, n.getWaypointsByElement = function(n) {
                var r, t;
                return (t = n[l], !t) ? [] : (r = i.extend({}, o.horizontal, o.vertical), i.map(t, function(n) {
                    return r[n]
                }))
            }, n
        }();
        f = {
            init: function(n, t) {
                var r;
                return t = i.extend({}, i.fn[c].defaults, t), (r = t.handler) == null && (t.handler = n), this.each(function() {
                    var u, r, n, f;
                    return u = i(this), n = (f = t.context) != null ? f : i.fn[c].defaults.context, i.isWindow(n) || (n = u.closest(n)), n = i(n), r = s[n[0][h]], r || (r = new b(n)), new v(u, r, t)
                }), i[e]("refresh"), this
            },
            disable: function() {
                return f._invoke.call(this, "disable")
            },
            enable: function() {
                return f._invoke.call(this, "enable")
            },
            destroy: function() {
                return f._invoke.call(this, "destroy")
            },
            prev: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t > 0) return n.push(i[t - 1])
                })
            },
            next: function(n, t) {
                return f._traverse.call(this, n, t, function(n, t, i) {
                    if (t < i.length - 1) return n.push(i[t + 1])
                })
            },
            _traverse: function(n, t, f) {
                var e, o;
                return n == null && (n = "vertical"), t == null && (t = r), o = u.aggregate(t), e = [], this.each(function() {
                    var t;
                    return t = i.inArray(this, o[n]), f(e, t, o[n])
                }), this.pushStack(e)
            },
            _invoke: function(n) {
                return this.each(function() {
                    var t;
                    return t = v.getWaypointsByElement(this), i.each(t, function(t, i) {
                        return i[n](), !0
                    })
                }), this
            }
        };
        i.fn[c] = function() {
            var r, t;
            return t = arguments[0], r = 2 <= arguments.length ? n.call(arguments, 1) : [], f[t] ? f[t].apply(this, r) : i.isFunction(t) ? f.init.apply(this, arguments) : i.isPlainObject(t) ? f.init.apply(this, [null, t]) : t ? i.error("The " + t + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
        };
        i.fn[c].defaults = {
            context: r,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        };
        u = {
            refresh: function() {
                return i.each(s, function(n, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function() {
                var n;
                return (n = r.innerHeight) != null ? n : a.height()
            },
            aggregate: function(n) {
                var r, t, u;
                return (r = o, n && (r = (u = s[i(n)[0][h]]) != null ? u.waypoints : void 0), !r) ? [] : (t = {
                    horizontal: [],
                    vertical: []
                }, i.each(t, function(n, u) {
                    return i.each(r[n], function(n, t) {
                        return u.push(t)
                    }), u.sort(function(n, t) {
                        return n.offset - t.offset
                    }), t[n] = i.map(u, function(n) {
                        return n.element
                    }), t[n] = i.unique(t[n])
                }), t)
            },
            above: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset <= n.oldScroll.y
                })
            },
            below: function(n) {
                return n == null && (n = r), u._filter(n, "vertical", function(n, t) {
                    return t.offset > n.oldScroll.y
                })
            },
            left: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset <= n.oldScroll.x
                })
            },
            right: function(n) {
                return n == null && (n = r), u._filter(n, "horizontal", function(n, t) {
                    return t.offset > n.oldScroll.x
                })
            },
            enable: function() {
                return u._invoke("enable")
            },
            disable: function() {
                return u._invoke("disable")
            },
            destroy: function() {
                return u._invoke("destroy")
            },
            extendFn: function(n, t) {
                return f[n] = t
            },
            _invoke: function(n) {
                var t;
                return t = i.extend({}, o.vertical, o.horizontal), i.each(t, function(t, i) {
                    return i[n](), !0
                })
            },
            _filter: function(n, t, r) {
                var u, f;
                return (u = s[i(n)[0][h]], !u) ? [] : (f = [], i.each(u.waypoints[t], function(n, t) {
                    if (r(u, t)) return f.push(t)
                }), f.sort(function(n, t) {
                    return n.offset - t.offset
                }), i.map(f, function(n) {
                    return n.element
                }))
            }
        };
        i[e] = function() {
            var i, t;
            return t = arguments[0], i = 2 <= arguments.length ? n.call(arguments, 1) : [], u[t] ? u[t].apply(null, i) : u.aggregate.call(null, t)
        };
        i[e].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return a.on("load.waypoints", function() {
            return i[e]("refresh")
        })
    })
}.call(this);
String.prototype.lpad = function(n, t) {
    for (var i = this; i.length < t;) i = n + i;
    return i
};
jQuery.fn.removeClassPrefix = function(n) {
        return this.each(function(t, i) {
            var r = i.className.split(" ").filter(function(t) {
                return t.lastIndexOf(n, 0) !== 0
            });
            i.className = r.join(" ")
        }), this
    },
    function(n, t, i) {
        function f() {
            var t = i(this),
                r = t.find(".middle-item"),
                f, u, n;
            if (r.length < 1 && (r = t.children("img")), !(r.length < 1)) {
                if (f = r.width(), u = r.height(), t.width() <= 1) {
                    for (n = t; n.width() <= 1;) n = n.parent();
                    t.css("width", n.width() + "px")
                }
                if (t.css("position", "relative"), r.css("position", "absolute"), t.hasClass("middle-block-auto-height") && (t.removeClass("middle-block-auto-height"), t.height(0)), t.height() <= 1) {
                    for (n = t; n.height() <= 1;) n = n.css("float") == "left" && n.index() == 0 && n.next().length > 0 ? n.next() : n.css("float") == "left" && n.index() > 0 ? n.prev() : n.parent();
                    t.css("height", n.outerHeight() + "px");
                    t.addClass("middle-block-auto-height");
                    f = r.width();
                    u = r.height();
                    u <= 1 && (u = n.outerHeight())
                }
                r.css("top", "50%");
                r.css("margin-top", "-" + u / 2 + "px");
                f >= 1 ? (r.css("left", "50%"), r.css("margin-left", "-" + f / 2 + "px")) : r.css("left", "0")
            }
        }
        var r, u = i.fn;
        r = u.middleblock = function() {
            var n = this;
            return i(this).is(":visible") && n.bind("set.middleblock", f).trigger("set.middleblock"), n
        }
    }(this, document, jQuery),
    function(n) {
        n.fn.countTo = function(t) {
            return t = t || {}, n(this).each(function() {
                function o(n) {
                    n = i.formatter.call(e, n, i);
                    f.html(n)
                }
                var i = n.extend({}, n.fn.countTo.defaults, {
                        from: n(this).data("from"),
                        to: n(this).data("to"),
                        speed: n(this).data("speed"),
                        refreshInterval: n(this).data("refresh-interval"),
                        decimals: n(this).data("decimals")
                    }, t),
                    s = Math.ceil(i.speed / i.refreshInterval),
                    c = (i.to - i.from) / s,
                    e = this,
                    f = n(this),
                    h = 0,
                    r = i.from,
                    u = f.data("countTo") || {};
                f.data("countTo", u);
                u.interval && clearInterval(u.interval);
                u.interval = setInterval(function() {
                    r += c;
                    h++;
                    o(r);
                    "function" == typeof i.onUpdate && i.onUpdate.call(e, r);
                    h >= s && (f.removeData("countTo"), clearInterval(u.interval), r = i.to, "function" == typeof i.onComplete && i.onComplete.call(e, r))
                }, i.refreshInterval);
                o(r)
            })
        };
        n.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(n, t) {
                return n.toFixed(t.decimals)
            },
            onUpdate: null,
            onComplete: null
        }
    }(jQuery);
typeof enableChaser == "undefined" && (enableChaser = 1),
    function(n, t, i) {
        var r, u = i.fn;
        r = u.onstage = function() {
            var i = jQuery(n).scrollTop(),
                r = jQuery(n).height(),
                t = this;
            return t.offset().top + t.height() * .9 <= i + r && t.offset().top + t.height() * .9 > i ? !0 : !1
        }
    }(this, document, jQuery);
jQuery("body").on("click", "a.popup-gallery", function(n) {
    return n.preventDefault(), !1
});
jQuery(document).ready(function() {
    changeTraveloElementUI()
});
jQuery(window).load(function() {
    function i() {
        jQuery("#main-menu .menu li.menu-item-has-children > ul, .ribbon ul.menu.mini").each(function() {
            if (!(jQuery(this).closest(".megamenu").length > 0)) {
                var n = jQuery(this).parent().offset().left + jQuery(this).parent().width();
                n + jQuery(this).width() > jQuery("body").width() ? jQuery(this).addClass("left") : jQuery(this).removeClass("left")
            }
        })
    }

    function t(n) {
        var t = 0;
        jQuery(n).find(".slides > li").each(function() {
            jQuery(this).css("height", "auto");
            jQuery(this).height() > t && (t = jQuery(this).height())
        });
        jQuery(n).find(".slides > li").height(t)
    }

    function f() {
        try {
            jQuery(".testimonial.style1").length > 0 && jQuery(".testimonial.style1").is(":visible") && jQuery(".testimonial.style1").flexslider({
                namespace: "testimonial-",
                animation: "slide",
                controlNav: !0,
                animationLoop: !1,
                directionNav: !1,
                slideshow: !1,
                start: t
            })
        } catch (n) {}
        try {
            jQuery(".testimonial.style2").length > 0 && jQuery(".testimonial.style2").is(":visible") && jQuery(".testimonial.style2").flexslider({
                namespace: "testimonial-",
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                directionNav: !0,
                slideshow: !1,
                start: t
            })
        } catch (n) {}
        try {
            jQuery(".testimonial.style3").length > 0 && jQuery(".testimonial.style3").is(":visible") && jQuery(".testimonial.style3").flexslider({
                namespace: "testimonial-",
                controlNav: !1,
                animationLoop: !1,
                directionNav: !0,
                slideshow: !1,
                start: t
            })
        } catch (n) {}
    }

    function e() {
        jQuery(".promo-box").each(function() {
            var n, t;
            if (jQuery(this).find(".content-section").css("float") == "right") {
                n = jQuery(this).find(".image-container > img").height();
                jQuery(this).find(".content-section .table-wrapper").css("height", "auto");
                var r = jQuery(".content-section").css("padding-top"),
                    u = jQuery(".content-section").css("padding-bottom"),
                    i = 0;
                try {
                    i = parseInt(r, 10) + parseInt(u, 10)
                } catch (f) {}
                t = jQuery(this).find(".content-section >.table-wrapper").length > 0 ? jQuery(this).find(".content-section > .table-wrapper").height() + i : jQuery(this).find(".content-section").innerHeight();
                n < t ? n = t : n += 15;
                jQuery(this).find(".image-container").height(n);
                jQuery(this).find(".content-section").innerHeight(n);
                jQuery(this).find(".content-section .table-wrapper").css("height", "100%");
                jQuery(this).find(".image-container").css("margin-left", "-5%");
                jQuery(this).find(".image-container").css("position", "relative");
                jQuery(this).find(".image-container > img").css("position", "absolute");
                jQuery(this).find(".image-container > img").css("bottom", "0");
                jQuery(this).find(".image-container > img").css("left", "0")
            } else jQuery(this).find(".image-container").css("height", "auto"), jQuery(this).find(".image-container").css("margin", "0"), jQuery(this).find(".content-section").css("height", "auto"), jQuery(this).find(".image-container > img").css("position", "static");
            jQuery(this).find(".image-container > img").hasClass("animated") || jQuery(this).find(".image-container > img").css("visibility", "visible")
        })
    }
    var o, n, r, u;
    jQuery("body").on("click", "#back-to-top", function(n) {
        n.preventDefault();
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1e3)
    });
    if (jQuery("#mobile-search-tabs").length > 0 && (o = jQuery("#mobile-search-tabs").bxSlider({
            mode: "fade",
            infiniteLoop: !1,
            hideControlOnEnd: !0,
            touchEnabled: !0,
            pager: !1,
            onSlideAfter: function(n) {
                jQuery('a[href="' + jQuery(n).children("a").attr("href") + '"]').tab("show")
            }
        })), jQuery(".mobile-menu ul.menu > li.menu-item-has-children").each(function(n) {
            var t = "mobile-menu-submenu-item-" + n;
            jQuery('<button class="dropdown-toggle collapsed" data-toggle="collapse" data-target="#' + t + '"><\/button>').insertAfter(jQuery(this).children("a"));
            jQuery(this).children("ul").prop("id", t);
            jQuery(this).children("ul").addClass("collapse");
            jQuery("#" + t).on("show.bs.collapse", function() {
                jQuery(this).parent().addClass("open")
            });
            jQuery("#" + t).on("hidden.bs.collapse", function() {
                jQuery(this).parent().removeClass("open")
            })
        }), 
        jQuery(".middle-block").middleblock(), i(), enableChaser == 1 && jQuery("#content").length > 0 && jQuery("#main-menu ul.menu").length > 0) {
        r = jQuery("#main-menu ul.menu").clone().hide().appendTo(document.body).wrap("<div class='chaser hidden-mobile'><div class='container'><\/div><\/div>");
        jQuery('<h1 class="logo navbar-brand"><a title="Bismillah Hajj Umrah" href="/"><img alt="Khadhem Hajj Group" src="img/logo.png"><\/a><\/h1>').insertBefore(".chaser .menu");
        u = jQuery("#content").first();
        n = u.offset().top + 2;
        /*jQuery(window).on("scroll", function() {
            var t = jQuery(document).scrollTop();
            jQuery(".chaser").is(":hidden") && t > n ? jQuery(".chaser").slideDown(300) : jQuery(".chaser").is(":visible") && t < n && jQuery(".chaser").slideUp(200)
        });*/
        jQuery(window).on("resize", function() {
            var t = jQuery(document).scrollTop();
            jQuery(".chaser").is(":hidden") && t > n ? jQuery(".chaser").slideDown(300) : jQuery(".chaser").is(":visible") && t < n && jQuery(".chaser").slideUp(200)
        });
        jQuery(".chaser").css("visibility", "hidden");
        r.show();
        fixPositionMegaMenu(".chaser");
        jQuery(".chaser .megamenu-menu").removeClass("light");
        jQuery(".chaser").hide();
        jQuery(".chaser").css("visibility", "visible")
    }
    jQuery(".toggle-container .panel-collapse").each(function() {
        jQuery(this).hasClass("in") || jQuery(this).closest(".panel").find("[data-toggle=collapse]").addClass("collapsed")
    });
    jQuery(".toggle-container.with-image").each(function() {
        var r = "",
            u = "1s",
            n;
        if (typeof jQuery(this).data("image-animation-type") != "undefined" && (r = jQuery(this).data("image-animation-type")), typeof jQuery(this).data("image-animation-duration") != "undefined" && (u = jQuery(this).data("image-animation-duration")), n = '<div class="image-container', r != "" && (n += ' animated" data-animation-type="' + r + '" data-animation-duration="' + u), n += '"><img src="" alt="" /><\/div>', jQuery(this).prepend(n), jQuery(this).find(".panel-collapse.in").length > 0) {
            var t = jQuery(this).find(".panel-collapse.in").parent().children("img"),
                s = t.attr("src"),
                f = t.attr("width"),
                e = t.attr("height"),
                o = t.attr("alt"),
                i = jQuery(this).find(".image-container img");
            i.attr("src", s);
            typeof f != "undefined" && i.attr("width", f);
            typeof e != "undefined" && i.attr("height", e);
            typeof o != "undefined" && i.attr("alt", o);
            jQuery(this).children(".image-container").show()
        }
    });
    jQuery(".toggle-container.with-image").on("show.bs.collapse", function(n) {
        var i = jQuery(n.target).parent().children("img");
        if (i.length > 0) {
            var e = i.attr("src"),
                r = i.attr("width"),
                u = i.attr("height"),
                f = i.attr("alt"),
                t = jQuery(this).find(".image-container img");
            t.attr("src", e);
            typeof r != "undefined" && t.attr("width", r);
            typeof u != "undefined" && t.attr("height", u);
            typeof f != "undefined" && t.attr("alt", f);
            t.parent().css("visibility", "hidden");
            t.parent().removeClass(t.parent().data("animation-type"));
            setTimeout(function() {
                t.parent().addClass(t.parent().data("animation-type"));
                t.parent().css("visibility", "visible")
            }, 10)
        }
    });
    jQuery(".toggle-container.with-image").on("shown.bs.collapse", function() {});
    jQuery("body").on("click", ".alert > .close, .info-box > .close", function() {
        jQuery(this).parent().fadeOut(300)
    });
    jQuery("[data-toggle=tooltip]").tooltip();
    f();
    jQuery(".image-carousel").each(function() {
        displayImageCarousel(jQuery(this))
    });
    jQuery(".photo-gallery").each(function() {
        displayPhotoGallery(jQuery(this))
    });
    jQuery('a[data-toggle="tab"]').on("shown.bs.tab", function(n) {
        var t = jQuery(n.target).attr("href");
        jQuery(t).find(".image-carousel").length > 0 && displayImageCarousel(jQuery(t).find(".image-carousel"));
        jQuery(t).find(".photo-gallery").length > 0 && displayPhotoGallery(jQuery(t).find(".photo-gallery"));
        jQuery(t).find(".testimonial").length > 0 && f();
        jQuery(t).find(".middle-block").middleblock()
    });
    jQuery(document).bind("keydown", function(n) {
        var t = n.keyCode;
        jQuery(".opacity-overlay:visible").length > 0 && t === 27 && (n.preventDefault(), jQuery(".opacity-overlay").fadeOut())
    });
    jQuery(document).on("click", ".opacity-overlay", function(n) {
        jQuery(n.target).is(".opacity-overlay .popup-content *") || jQuery(".opacity-overlay").fadeOut()
    });
    jQuery("body").on("click", "a.popup-gallery", function(n) {
        n.preventDefault();
        jQuery("#soap-gallery-popup").length < 1 && jQuery("<div class='opacity-overlay' id='soap-gallery-popup'><div class='container'><div class='popup-wrapper'><i class='fa fa-spinner fa-spin spinner'><\/i><div class='col-xs-12 col-sm-9 popup-content'><\/div><\/div><\/div><\/div>").appendTo("body");
        jQuery("#soap-gallery-popup .popup-content").html("");
        jQuery("#soap-gallery-popup .popup-content").height("auto").css("visibility", "hidden");
        jQuery("#soap-gallery-popup").fadeIn();
        jQuery("#soap-gallery-popup .spinner").show();
        var t = jQuery(this);
        jQuery.ajax({
            url: t.attr("href"),
            type: "post",
            dataType: "html",
            success: function(n) {
                jQuery("#soap-gallery-popup .popup-content").html(n);
                jQuery("#soap-gallery-popup .image-carousel").length > 0 && displayImageCarousel(jQuery("#soap-gallery-popup .image-carousel"));
                jQuery("#soap-gallery-popup .photo-gallery").length > 0 && (displayPhotoGallery(jQuery("#soap-gallery-popup .photo-gallery")), setTimeout(function() {
                    jQuery("#soap-gallery-popup .popup-content").css("visibility", "visible");
                    jQuery("#soap-gallery-popup .spinner").hide()
                }, 100))
            }
        })
    });
    jQuery("body").on("click", ".popup-map", function(n) {
        var t = jQuery(this).data("box"),
            i;
        typeof t != "undefined" && (n.preventDefault(), jQuery("#soap-map-popup").length < 1 && jQuery("<div class='opacity-overlay' id='soap-map-popup'><div class='container'><div class='popup-wrapper'><i class='fa fa-spinner fa-spin spinner'><\/i><div class='col-xs-12 col-sm-9 popup-content'><\/div><\/div><\/div><\/div>").appendTo("body"), jQuery("#soap-map-popup").fadeIn(), jQuery("#soap-map-popup .spinner").show(), t = t.split(","), i = jQuery("#soap-map-popup .popup-content").width(), jQuery("#soap-map-popup .popup-content").gmap3({
            clear: {
                name: "marker",
                last: !0
            }
        }), jQuery("#soap-map-popup .popup-content").height(i * .5).gmap3({
            map: {
                options: {
                    center: t,
                    zoom: 12
                }
            },
            marker: {
                values: [{
                    latLng: t
                }],
                options: {
                    draggable: !1
                }
            }
        }))
    });
    jQuery("body").on("click", ".soap-popupbox", function(n) {
        n.preventDefault();
        var t = jQuery(this).attr("href");
        (typeof t == "undefined" && (t = jQuery(this).data("target")), typeof t != "undefined") && (jQuery(t).length < 1 || (jQuery("#soap-popupbox").length < 1 && jQuery("<div class='opacity-overlay' id='soap-popupbox' tabindex='-1'><div class='container'><div class='popup-wrapper'><div class='popup-content'><\/div><\/div><\/div><\/div>").appendTo("body"), jQuery("#soap-popupbox .popup-content").children().hide(), jQuery("#soap-popupbox .popup-content").children(t).length > 0 || jQuery(t).appendTo(jQuery("#soap-popupbox .popup-content")), jQuery(t).show(), jQuery("#soap-popupbox").fadeIn(function() {
            jQuery(t).find(".input-text").eq(0).focus()
        })))
    });
    jQuery(".style-changer .design-skins a").click(function(n) {
        n.preventDefault();
        jQuery(this).closest("ul").children("li").removeClass("active");
        jQuery(this).parent().addClass("active")
    });
    jQuery("#style-changer .style-toggle").click(function(n) {
        n.preventDefault();
        jQuery(this).hasClass("open") ? (jQuery("#style-changer").css("left", "0"), jQuery(this).removeClass("open"), jQuery(this).addClass("close")) : (jQuery("#style-changer").css("left", "-275px"), jQuery(this).removeClass("close"), jQuery(this).addClass("open"))
    });
    jQuery(".filters-container .filters-option a").click(function(n) {
        n.preventDefault();
        jQuery(this).parent().hasClass("active") ? jQuery(this).parent().removeClass("active") : jQuery(this).parent().addClass("active")
    });
    jQuery(".sort-trip a").click(function(n) {
        n.preventDefault();
        jQuery(this).parent().parent().children().removeClass("active");
        jQuery(this).parent().addClass("active")
    });
    jQuery(".location-reload").click(function(n) {
        var i, t;
        n.preventDefault();
        i = jQuery(this).prop("href").split("#")[0];
        window.location.href.indexOf(i) != -1 ? (t = jQuery(this).prop("href").split("#")[1], typeof t != "undefined" && t != "" && jQuery("a[href='#" + t + "']").length > 0 && jQuery("a[href='#" + t + "']").tab("show")) : window.location.href = jQuery(this).prop("href")
    });
    e();
    jQuery.fn.fitVids && jQuery(".full-video").fitVids();
    jQuery(".go-back").click(function(n) {
        n.preventDefault();
        window.history.go(-1)
    });
    window.location.hash != "" && jQuery('a[href="' + window.location.hash + '"]').length > 0 && setTimeout(function() {
        jQuery('a[href="' + window.location.hash + '"]').tab("show")
    }, 100);
    jQuery(".parallax").length > 0 && jQuery.stellar({
        responsive: !0,
        horizontalScrolling: !1
    });
    jQuery().waypoint && (jQuery(".animated").waypoint(function() {
        var t = jQuery(this).data("animation-type"),
            n, i;
        (typeof t == "undefined" || t == !1) && (t = "fadeIn");
        jQuery(this).addClass(t);
        n = jQuery(this).data("animation-duration");
        (typeof n == "undefined" || n == !1) && (n = "1");
        jQuery(this).css("animation-duration", n + "s");
        i = jQuery(this).data("animation-delay");
        typeof i != "undefined" && i != !1 && jQuery(this).css("animation-delay", i + "s");
        jQuery(this).css("visibility", "visible");
        setTimeout(function() {
            jQuery.waypoints("refresh")
        }, 1e3)
    }, {
        triggerOnce: !0,
        offset: "bottom-in-view"
    }), jQuery(".counters-box").waypoint(function() {
        jQuery(".display-counter").each(function() {
            var n = jQuery(this).data("value");
            jQuery(this).countTo({
                from: 0,
                to: n,
                speed: 3e3,
                refreshInterval: 10
            })
        });
        setTimeout(function() {
            jQuery.waypoints("refresh")
        }, 1e3)
    }, {
        triggerOnce: !0,
        offset: "100%"
    }));
    jQuery("body").on("click", function(n) {
        var t = jQuery(n.target);
        t.is(".mobile-topnav .ribbon.opened *") || (jQuery(".mobile-topnav .ribbon.opened > .menu").toggle(), jQuery(".mobile-topnav .ribbon.opened").removeClass("opened"))
    });
    jQuery(".mobile-topnav .ribbon > a").on("click", function(n) {
        if (n.preventDefault(), jQuery(".mobile-topnav .ribbon.opened").length > 0 && !jQuery(this).parent().hasClass("opened") && (jQuery(".mobile-topnav .ribbon.opened > .menu").toggle(), jQuery(".mobile-topnav .ribbon.opened").removeClass("opened")), jQuery(this).parent().toggleClass("opened"), jQuery(this).parent().children(".menu").toggle(200), jQuery(this).parent().hasClass("opened") && jQuery(this).parent().children(".menu").offset().left + jQuery(this).parent().children(".menu").width() > jQuery("body").width()) {
            var t = jQuery(this).parent().children(".menu").offset().left + jQuery(this).parent().children(".menu").width() - jQuery("body").width();
            t = jQuery(this).parent().children(".menu").position().left - t - 1;
            jQuery(this).parent().children(".menu").css("left", t + "px")
        } else jQuery(this).parent().children(".menu").css("left", "0")
    });
    jQuery(window).resize(function() {
        jQuery(".middle-block").middleblock();
        fixPositionMegaMenu();
        i();
        e();
        t(".testimonial");
        jQuery(".photo-gallery.style2").length > 0 && jQuery(".photo-gallery.style2").each(function() {
            var n = jQuery(this).find(".slides img").height();
            jQuery(this).find(".flex-control-nav").css("top", n - 44 + "px")
        })
    })
});
var megamenu_items_per_column = 6;
fixPositionMegaMenu();
jQuery("#footer #main-menu .menu >  li.menu-item-has-children").each(function() {
    var n = jQuery(this).children("ul, .megamenu-wrapper").height();
    jQuery(this).children("ul, .megamenu-wrapper").css("top", "-" + n + "px")
});
jQuery("body").on("click", ".travelo-signup-box .signup-email", function(n) {
    n.preventDefault();
    jQuery(this).closest(".travelo-signup-box").find(".simple-signup").hide();
    jQuery(this).closest(".travelo-signup-box").find(".email-signup").show();
    jQuery(this).closest(".travelo-signup-box").find(".email-signup").find(".input-text").eq(0).focus()
});
jQuery(document).ready(function() {
        var n = window.location.pathname,
            t = n.split(/[/ ]+/).pop(),
            i = jQuery("#main-menu a, #mobile-primary-menu a");
        i.each(function() {
            var n = jQuery(this),
                i = n.attr("href"),
                r = n.parents("li");
            t == i && r.addClass("active").siblings().removeClass("active")
        })
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("sifter", t) : typeof exports == "object" ? module.exports = t() : n.Sifter = t()
    }(this, function() {
        var n = function(n, t) {
            this.items = n;
            this.settings = t || {
                diacritics: !0
            }
        };
        n.prototype.tokenize = function(n) {
            if (n = e(String(n || "").toLowerCase()), !n || !n.length) return [];
            for (var r, u, h = [], f = n.split(/ +/), i = 0, s = f.length; i < s; i++) {
                if (r = o(f[i]), this.settings.diacritics)
                    for (u in t) t.hasOwnProperty(u) && (r = r.replace(new RegExp(u, "g"), t[u]));
                h.push({
                    string: f[i],
                    regex: new RegExp(r, "i")
                })
            }
            return h
        };
        n.prototype.iterator = function(n, t) {
            var r;
            r = i(n) ? Array.prototype.forEach || function(n) {
                for (var t = 0, i = this.length; t < i; t++) n(this[t], t, this)
            } : function(n) {
                for (var t in this) this.hasOwnProperty(t) && n(this[t], t, this)
            };
            r.apply(n, [t])
        };
        n.prototype.getScoreFunction = function(n, t) {
            var o, u, r, i, e, f;
            return (o = this, n = o.prepareSearch(n, t), r = n.tokens, u = n.options.fields, i = r.length, e = function(n, t) {
                var i, r;
                return n ? (n = String(n || ""), r = n.search(t.regex), r === -1) ? 0 : (i = t.string.length / n.length, r === 0 && (i += .5), i) : 0
            }, f = function() {
                var n = u.length;
                return n ? n === 1 ? function(n, t) {
                    return e(t[u[0]], n)
                } : function(t, i) {
                    for (var r = 0, f = 0; r < n; r++) f += e(i[u[r]], t);
                    return f / n
                } : function() {
                    return 0
                }
            }(), !i) ? function() {
                return 0
            } : i === 1 ? function(n) {
                return f(r[0], n)
            } : n.options.conjunction === "and" ? function(n) {
                for (var u, t = 0, e = 0; t < i; t++) {
                    if (u = f(r[t], n), u <= 0) return 0;
                    e += u
                }
                return e / i
            } : function(n) {
                for (var t = 0, u = 0; t < i; t++) u += f(r[t], n);
                return u / i
            }
        };
        n.prototype.getSortFunction = function(n, t) {
            var i, f, c, l, u, s, v, h, e, a, o;
            if (c = this, n = c.prepareSearch(n, t), o = !n.query && t.sort_empty || t.sort, e = function(n, t) {
                    return n === "$score" ? t.score : c.items[t.id][n]
                }, u = [], o)
                for (i = 0, f = o.length; i < f; i++)(n.query || o[i].field !== "$score") && u.push(o[i]);
            if (n.query) {
                for (a = !0, i = 0, f = u.length; i < f; i++)
                    if (u[i].field === "$score") {
                        a = !1;
                        break
                    }
                a && u.unshift({
                    field: "$score",
                    direction: "desc"
                })
            } else
                for (i = 0, f = u.length; i < f; i++)
                    if (u[i].field === "$score") {
                        u.splice(i, 1);
                        break
                    } for (h = [], i = 0, f = u.length; i < f; i++) h.push(u[i].direction === "desc" ? -1 : 1);
            return s = u.length, s ? s === 1 ? (l = u[0].field, v = h[0], function(n, t) {
                return v * r(e(l, n), e(l, t))
            }) : function(n, t) {
                for (var f, o, i = 0; i < s; i++)
                    if (o = u[i].field, f = h[i] * r(e(o, n), e(o, t)), f) return f;
                return 0
            } : null
        };
        n.prototype.prepareSearch = function(n, t) {
            if (typeof n == "object") return n;
            t = f({}, t);
            var r = t.fields,
                u = t.sort,
                e = t.sort_empty;
            return r && !i(r) && (t.fields = [r]), u && !i(u) && (t.sort = [u]), e && !i(e) && (t.sort_empty = [e]), {
                options: t,
                query: String(n || "").toLowerCase(),
                tokens: this.tokenize(n),
                total: 0,
                items: []
            }
        };
        n.prototype.search = function(n, t) {
            var r = this,
                u, i, f, e;
            return i = this.prepareSearch(n, t), t = i.options, n = i.query, e = t.score || r.getScoreFunction(i), n.length ? r.iterator(r.items, function(n, r) {
                u = e(n);
                (t.filter === !1 || u > 0) && i.items.push({
                    score: u,
                    id: r
                })
            }) : r.iterator(r.items, function(n, t) {
                i.items.push({
                    score: 1,
                    id: t
                })
            }), f = r.getSortFunction(i, t), f && i.items.sort(f), i.total = i.items.length, typeof t.limit == "number" && (i.items = i.items.slice(0, t.limit)), i
        };
        var r = function(n, t) {
                return typeof n == "number" && typeof t == "number" ? n > t ? 1 : n < t ? -1 : 0 : (n = u(String(n || "")), t = u(String(t || "")), n > t) ? 1 : t > n ? -1 : 0
            },
            f = function(n) {
                for (var r, t, i = 1, u = arguments.length; i < u; i++)
                    if (t = arguments[i], t)
                        for (r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            },
            e = function(n) {
                return (n + "").replace(/^\s+|\s+$|/g, "")
            },
            o = function(n) {
                return (n + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
            },
            i = Array.isArray || $ && $.isArray || function(n) {
                return Object.prototype.toString.call(n) === "[object Array]"
            },
            t = {
                a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
                c: "[cÇçćĆčČ]",
                d: "[dđĐďĎ]",
                e: "[eÈÉÊËèéêëěĚĒēęĘ]",
                i: "[iÌÍÎÏìíîïĪī]",
                l: "[lłŁ]",
                n: "[nÑñňŇńŃ]",
                o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
                r: "[rřŘ]",
                s: "[sŠšśŚ]",
                t: "[tťŤ]",
                u: "[uÙÚÛÜùúûüůŮŪū]",
                y: "[yŸÿýÝ]",
                z: "[zŽžżŻźŹ]"
            },
            u = function() {
                var i, u, n, r, f = "",
                    e = {},
                    o;
                for (n in t)
                    if (t.hasOwnProperty(n))
                        for (r = t[n].substring(2, t[n].length - 1), f += r, i = 0, u = r.length; i < u; i++) e[r.charAt(i)] = n;
                return o = new RegExp("[" + f + "]", "g"),
                    function(n) {
                        return n.replace(o, function(n) {
                            return e[n]
                        }).toLowerCase()
                    }
            }();
        return n
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("microplugin", t) : typeof exports == "object" ? module.exports = t() : n.MicroPlugin = t()
    }(this, function() {
        var n = {},
            t;
        return n.mixin = function(n) {
            n.plugins = {};
            n.prototype.initializePlugins = function(n) {
                var i, e, r, f = this,
                    u = [];
                if (f.plugins = {
                        names: [],
                        settings: {},
                        requested: {},
                        loaded: {}
                    }, t.isArray(n))
                    for (i = 0, e = n.length; i < e; i++) typeof n[i] == "string" ? u.push(n[i]) : (f.plugins.settings[n[i].name] = n[i].options, u.push(n[i].name));
                else if (n)
                    for (r in n) n.hasOwnProperty(r) && (f.plugins.settings[r] = n[r], u.push(r));
                while (u.length) f.require(u.shift())
            };
            n.prototype.loadPlugin = function(t) {
                var i = this,
                    r = i.plugins,
                    u = n.plugins[t];
                if (!n.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
                r.requested[t] = !0;
                r.loaded[t] = u.fn.apply(i, [i.plugins.settings[t] || {}]);
                r.names.push(t)
            };
            n.prototype.require = function(n) {
                var t = this,
                    i = t.plugins;
                if (!t.plugins.loaded.hasOwnProperty(n)) {
                    if (i.requested[n]) throw new Error('Plugin has circular dependency ("' + n + '")');
                    t.loadPlugin(n)
                }
                return i.loaded[n]
            };
            n.define = function(t, i) {
                n.plugins[t] = {
                    name: t,
                    fn: i
                }
            }
        }, t = {
            isArray: Array.isArray || function(n) {
                return Object.prototype.toString.call(n) === "[object Array]"
            }
        }, n
    }),
    function(n, t) {
        typeof define == "function" && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : typeof exports == "object" ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : n.Selectize = t(n.jQuery, n.Sifter, n.MicroPlugin)
    }(this, function(n, t, i) {
        "use strict";
        var g = function(n, t) {
                if (typeof t != "string" || t.length) {
                    var i = typeof t == "string" ? new RegExp(t, "i") : t,
                        r = function(n) {
                            var o = 0,
                                e, s, u, t;
                            if (n.nodeType === 3) {
                                if (e = n.data.search(i), e >= 0 && n.data.length > 0) {
                                    s = n.data.match(i);
                                    u = document.createElement("span");
                                    u.className = "highlight";
                                    var f = n.splitText(e),
                                        c = f.splitText(s[0].length),
                                        h = f.cloneNode(!0);
                                    u.appendChild(h);
                                    f.parentNode.replaceChild(u, f);
                                    o = 1
                                }
                            } else if (n.nodeType === 1 && n.childNodes && !/(script|style)/i.test(n.tagName))
                                for (t = 0; t < n.childNodes.length; ++t) t += r(n.childNodes[t]);
                            return o
                        };
                    return n.each(function() {
                        r(this)
                    })
                }
            },
            s = function() {};
        s.prototype = {
            on: function(n, t) {
                this._events = this._events || {};
                this._events[n] = this._events[n] || [];
                this._events[n].push(t)
            },
            off: function(n, t) {
                var i = arguments.length;
                if (i === 0) return delete this._events;
                if (i === 1) return delete this._events[n];
                (this._events = this._events || {}, n in this._events != !1) && this._events[n].splice(this._events[n].indexOf(t), 1)
            },
            trigger: function(n) {
                if (this._events = this._events || {}, n in this._events != !1)
                    for (var t = 0; t < this._events[n].length; t++) this._events[n][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        s.mixin = function(n) {
            for (var i = ["on", "off", "trigger"], t = 0; t < i.length; t++) n.prototype[i[t]] = s.prototype[i[t]]
        };
        var e = /Mac/.test(navigator.userAgent),
            nt = 65,
            tt = 13,
            it = 27,
            l = 37,
            rt = 38,
            ut = 80,
            y = 39,
            ft = 40,
            et = 78,
            o = 8,
            a = 46,
            ot = 16,
            st = e ? 91 : 17,
            ht = e ? 18 : 17,
            p = 9,
            h = 1,
            ct = 2,
            w = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
            b = function(n) {
                return typeof n != "undefined"
            },
            u = function(n) {
                return typeof n == "undefined" || n === null ? null : typeof n == "boolean" ? n ? "1" : "0" : n + ""
            },
            f = function(n) {
                return (n + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            },
            k = function(n) {
                return (n + "").replace(/\$/g, "$$$$")
            },
            c = {};
        c.before = function(n, t, i) {
            var r = n[t];
            n[t] = function() {
                return i.apply(n, arguments), r.apply(n, arguments)
            }
        };
        c.after = function(n, t, i) {
            var r = n[t];
            n[t] = function() {
                var t = r.apply(n, arguments);
                return i.apply(n, arguments), t
            }
        };
        var lt = function(n) {
                var t = !1;
                return function() {
                    t || (t = !0, n.apply(this, arguments))
                }
            },
            at = function(n, t) {
                var i;
                return function() {
                    var r = this,
                        u = arguments;
                    window.clearTimeout(i);
                    i = window.setTimeout(function() {
                        n.apply(r, u)
                    }, t)
                }
            },
            d = function(n, t, i) {
                var u, f = n.trigger,
                    r = {};
                n.trigger = function() {
                    var i = arguments[0];
                    if (t.indexOf(i) !== -1) r[i] = arguments;
                    else return f.apply(n, arguments)
                };
                i.apply(n, []);
                n.trigger = f;
                for (u in r) r.hasOwnProperty(u) && f.apply(n, r[u])
            },
            vt = function(n, t, i, r) {
                n.on(t, i, function(t) {
                    for (var i = t.target; i && i.parentNode !== n[0];) i = i.parentNode;
                    return t.currentTarget = i, r.apply(this, [t])
                })
            },
            v = function(n) {
                var t = {},
                    i, r;
                return "selectionStart" in n ? (t.start = n.selectionStart, t.length = n.selectionEnd - t.start) : document.selection && (n.focus(), i = document.selection.createRange(), r = document.selection.createRange().text.length, i.moveStart("character", -n.value.length), t.start = i.text.length - r, t.length = r), t
            },
            yt = function(n, t, i) {
                var r, f, u = {};
                if (i)
                    for (r = 0, f = i.length; r < f; r++) u[i[r]] = n.css(i[r]);
                else u = n.css();
                t.css(u)
            },
            pt = function(t, i) {
                var r, u;
                return t ? (r = n("<test>").css({
                    position: "absolute",
                    top: -99999,
                    left: -99999,
                    width: "auto",
                    padding: 0,
                    whiteSpace: "pre"
                }).text(t).appendTo("body"), yt(i, r, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]), u = r.width(), r.remove(), u) : 0
            },
            wt = function(n) {
                var t = null,
                    i = function(i, r) {
                        var u, f, l, c, h, y, s, e;
                        (i = i || window.event || {}, r = r || {}, i.metaKey || i.altKey) || (r.force || n.data("grow") !== !1) && (u = n.val(), i.type && i.type.toLowerCase() === "keydown" && (f = i.keyCode, l = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || f === 32, f === a || f === o ? (e = v(n[0]), e.length ? u = u.substring(0, e.start) + u.substring(e.start + e.length) : f === o && e.start ? u = u.substring(0, e.start - 1) + u.substring(e.start + 1) : f === a && typeof e.start != "undefined" && (u = u.substring(0, e.start) + u.substring(e.start + 1))) : l && (y = i.shiftKey, s = String.fromCharCode(i.keyCode), s = y ? s.toUpperCase() : s.toLowerCase(), u += s)), c = n.attr("placeholder"), !u && c && (u = c), h = pt(u, n) + 4, h !== t && (t = h, n.width(h), n.triggerHandler("resize")))
                    };
                n.on("keydown keyup update blur", i);
                i()
            },
            r = function(i, u) {
                var e, s, c, o, f = this,
                    l;
                if (o = i[0], o.selectize = f, l = window.getComputedStyle && window.getComputedStyle(o, null), c = l ? l.getPropertyValue("direction") : o.currentStyle && o.currentStyle.direction, c = c || i.parents("[dir]:first").attr("dir") || "", n.extend(f, {
                        order: 0,
                        settings: u,
                        $input: i,
                        tabIndex: i.attr("tabindex") || "",
                        tagType: o.tagName.toLowerCase() === "select" ? h : ct,
                        rtl: /rtl/i.test(c),
                        eventNS: ".selectize" + ++r.count,
                        highlightedValue: null,
                        isOpen: !1,
                        isDisabled: !1,
                        isRequired: i.is("[required]"),
                        isInvalid: !1,
                        isLocked: !1,
                        isFocused: !1,
                        isInputHidden: !1,
                        isSetup: !1,
                        isShiftDown: !1,
                        isCmdDown: !1,
                        isCtrlDown: !1,
                        ignoreFocus: !1,
                        ignoreBlur: !1,
                        ignoreHover: !1,
                        hasOptions: !1,
                        currentResults: null,
                        lastValue: "",
                        caretPos: 0,
                        loading: 0,
                        loadedSearches: {},
                        $activeOption: null,
                        $activeItems: [],
                        optgroups: {},
                        options: {},
                        userOptions: {},
                        items: [],
                        renderCache: {},
                        onSearchChange: u.loadThrottle === null ? f.onSearchChange : at(f.onSearchChange, u.loadThrottle)
                    }), f.sifter = new t(this.options, {
                        diacritics: u.diacritics
                    }), f.settings.options) {
                    for (e = 0, s = f.settings.options.length; e < s; e++) f.registerOption(f.settings.options[e]);
                    delete f.settings.options
                }
                if (f.settings.optgroups) {
                    for (e = 0, s = f.settings.optgroups.length; e < s; e++) f.registerOptionGroup(f.settings.optgroups[e]);
                    delete f.settings.optgroups
                }
                f.settings.mode = f.settings.mode || (f.settings.maxItems === 1 ? "single" : "multi");
                typeof f.settings.hideSelected != "boolean" && (f.settings.hideSelected = f.settings.mode === "multi");
                f.initializePlugins(f.settings.plugins);
                f.setupCallbacks();
                f.setupTemplates();
                f.setup()
            };
        return s.mixin(r), i.mixin(r), n.extend(r.prototype, {
            setup: function() {
                var t = this,
                    r = t.settings,
                    u = t.eventNS,
                    p = n(window),
                    l = n(document),
                    i = t.$input,
                    s, c, f, o, b, k, a, v, y, d;
                a = t.settings.mode;
                v = i.attr("class") || "";
                s = n("<div>").addClass(r.wrapperClass).addClass(v).addClass(a);
                c = n("<div>").addClass(r.inputClass).addClass("items").appendTo(s);
                f = n('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", i.is(":disabled") ? "-1" : t.tabIndex);
                k = n(r.dropdownParent || s);
                o = n("<div>").addClass(r.dropdownClass).addClass(a).hide().appendTo(k);
                b = n("<div>").addClass(r.dropdownContentClass).appendTo(o);
                t.settings.copyClassesToDropdown && o.addClass(v);
                s.css({
                    width: i[0].style.width
                });
                t.plugins.names.length && (y = "plugin-" + t.plugins.names.join(" plugin-"), s.addClass(y), o.addClass(y));
                (r.maxItems === null || r.maxItems > 1) && t.tagType === h && i.attr("multiple", "multiple");
                t.settings.placeholder && f.attr("placeholder", r.placeholder);
                !t.settings.splitOn && t.settings.delimiter && (d = t.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), t.settings.splitOn = new RegExp("\\s*" + d + "+\\s*"));
                i.attr("autocorrect") && f.attr("autocorrect", i.attr("autocorrect"));
                i.attr("autocapitalize") && f.attr("autocapitalize", i.attr("autocapitalize"));
                t.$wrapper = s;
                t.$control = c;
                t.$control_input = f;
                t.$dropdown = o;
                t.$dropdown_content = b;
                o.on("mouseenter", "[data-selectable]", function() {
                    return t.onOptionHover.apply(t, arguments)
                });
                o.on("mousedown click", "[data-selectable]", function() {
                    return t.onOptionSelect.apply(t, arguments)
                });
                vt(c, "mousedown", "*:not(input)", function() {
                    return t.onItemSelect.apply(t, arguments)
                });
                wt(f);
                c.on({
                    mousedown: function() {
                        return t.onMouseDown.apply(t, arguments)
                    },
                    click: function() {
                        return t.onClick.apply(t, arguments)
                    }
                });
                f.on({
                    mousedown: function(n) {
                        n.stopPropagation()
                    },
                    keydown: function() {
                        return t.onKeyDown.apply(t, arguments)
                    },
                    keyup: function() {
                        return t.onKeyUp.apply(t, arguments)
                    },
                    keypress: function() {
                        return t.onKeyPress.apply(t, arguments)
                    },
                    resize: function() {
                        t.positionDropdown.apply(t, [])
                    },
                    blur: function() {
                        return t.onBlur.apply(t, arguments)
                    },
                    focus: function() {
                        return t.ignoreBlur = !1, t.onFocus.apply(t, arguments)
                    },
                    paste: function() {
                        return t.onPaste.apply(t, arguments)
                    }
                });
                l.on("keydown" + u, function(n) {
                    t.isCmdDown = n[e ? "metaKey" : "ctrlKey"];
                    t.isCtrlDown = n[e ? "altKey" : "ctrlKey"];
                    t.isShiftDown = n.shiftKey
                });
                l.on("keyup" + u, function(n) {
                    n.keyCode === ht && (t.isCtrlDown = !1);
                    n.keyCode === ot && (t.isShiftDown = !1);
                    n.keyCode === st && (t.isCmdDown = !1)
                });
                l.on("mousedown" + u, function(n) {
                    if (t.isFocused) {
                        if (n.target === t.$dropdown[0] || n.target.parentNode === t.$dropdown[0]) return !1;
                        t.$control.has(n.target).length || n.target === t.$control[0] || t.blur(n.target)
                    }
                });
                p.on(["scroll" + u, "resize" + u].join(" "), function() {
                    t.isOpen && t.positionDropdown.apply(t, arguments)
                });
                p.on("mousemove" + u, function() {
                    t.ignoreHover = !1
                });
                if (this.revertSettings = {
                        $children: i.children().detach(),
                        tabindex: i.attr("tabindex")
                    }, i.attr("tabindex", -1).hide().after(t.$wrapper), n.isArray(r.items) && (t.setValue(r.items), delete r.items), w) i.on("invalid" + u, function(n) {
                    n.preventDefault();
                    t.isInvalid = !0;
                    t.refreshState()
                });
                t.updateOriginalInput();
                t.refreshItems();
                t.refreshState();
                t.updatePlaceholder();
                t.isSetup = !0;
                i.is(":disabled") && t.disable();
                t.on("change", this.onChange);
                if (i.data("selectize", t), i.addClass("selectized"), t.trigger("initialize"), r.preload === !0) t.onSearchChange("")
            },
            setupTemplates: function() {
                var t = this,
                    i = t.settings.labelField,
                    r = t.settings.optgroupLabelField,
                    u = {
                        optgroup: function(n) {
                            return '<div class="optgroup">' + n.html + "<\/div>"
                        },
                        optgroup_header: function(n, t) {
                            return '<div class="optgroup-header">' + t(n[r]) + "<\/div>"
                        },
                        option: function(n, t) {
                            return '<div class="option">' + t(n[i]) + "<\/div>"
                        },
                        item: function(n, t) {
                            return '<div class="item">' + t(n[i]) + "<\/div>"
                        },
                        option_create: function(n, t) {
                            return '<div class="create">Add <strong>' + t(n.input) + "<\/strong>&hellip;<\/div>"
                        }
                    };
                t.settings.render = n.extend({}, u, t.settings.render)
            },
            setupCallbacks: function() {
                var n, t, i = {
                    initialize: "onInitialize",
                    change: "onChange",
                    item_add: "onItemAdd",
                    item_remove: "onItemRemove",
                    clear: "onClear",
                    option_add: "onOptionAdd",
                    option_remove: "onOptionRemove",
                    option_clear: "onOptionClear",
                    optgroup_add: "onOptionGroupAdd",
                    optgroup_remove: "onOptionGroupRemove",
                    optgroup_clear: "onOptionGroupClear",
                    dropdown_open: "onDropdownOpen",
                    dropdown_close: "onDropdownClose",
                    type: "onType",
                    load: "onLoad",
                    focus: "onFocus",
                    blur: "onBlur"
                };
                for (n in i)
                    if (i.hasOwnProperty(n) && (t = this.settings[i[n]], t)) this.on(n, t)
            },
            onClick: function(n) {
                var t = this;
                t.isFocused || (t.focus(), n.preventDefault())
            },
            onMouseDown: function(t) {
                var i = this,
                    r = t.isDefaultPrevented(),
                    u = n(t.target);
                if (i.isFocused) {
                    if (t.target !== i.$control_input[0]) return i.settings.mode === "single" ? i.isOpen ? i.close() : i.open() : r || i.setActiveItem(null), !1
                } else r || window.setTimeout(function() {
                    i.focus()
                }, 0)
            },
            onChange: function() {
                this.$input.trigger("change")
            },
            onPaste: function(t) {
                var i = this;
                i.isFull() || i.isInputHidden || i.isLocked ? t.preventDefault() : i.settings.splitOn && setTimeout(function() {
                    for (var r = n.trim(i.$control_input.val() || "").split(i.settings.splitOn), t = 0, u = r.length; t < u; t++) i.createItem(r[t])
                }, 0)
            },
            onKeyPress: function(n) {
                if (this.isLocked) return n && n.preventDefault();
                var t = String.fromCharCode(n.keyCode || n.which);
                if (this.settings.create && this.settings.mode === "multi" && t === this.settings.delimiter) return this.createItem(), n.preventDefault(), !1
            },
            onKeyDown: function(n) {
                var u = n.target === this.$control_input[0],
                    t = this,
                    i, r;
                if (t.isLocked) {
                    n.keyCode !== p && n.preventDefault();
                    return
                }
                switch (n.keyCode) {
                    case nt:
                        if (t.isCmdDown) {
                            t.selectAll();
                            return
                        }
                        break;
                    case it:
                        t.isOpen && (n.preventDefault(), n.stopPropagation(), t.close());
                        return;
                    case et:
                        if (!n.ctrlKey || n.altKey) break;
                    case ft:
                        !t.isOpen && t.hasOptions ? t.open() : t.$activeOption && (t.ignoreHover = !0, i = t.getAdjacentOption(t.$activeOption, 1), i.length && t.setActiveOption(i, !0, !0));
                        n.preventDefault();
                        return;
                    case ut:
                        if (!n.ctrlKey || n.altKey) break;
                    case rt:
                        t.$activeOption && (t.ignoreHover = !0, r = t.getAdjacentOption(t.$activeOption, -1), r.length && t.setActiveOption(r, !0, !0));
                        n.preventDefault();
                        return;
                    case tt:
                        if (t.isOpen && t.$activeOption) {
                            t.onOptionSelect({
                                currentTarget: t.$activeOption
                            });
                            n.preventDefault()
                        }
                        return;
                    case l:
                        t.advanceSelection(-1, n);
                        return;
                    case y:
                        t.advanceSelection(1, n);
                        return;
                    case p:
                        if (t.settings.selectOnTab && t.isOpen && t.$activeOption) {
                            t.onOptionSelect({
                                currentTarget: t.$activeOption
                            });
                            t.isFull() || n.preventDefault()
                        }
                        t.settings.create && t.createItem() && n.preventDefault();
                        return;
                    case o:
                    case a:
                        t.deleteSelection(n);
                        return
                }
                if ((t.isFull() || t.isInputHidden) && !(e ? n.metaKey : n.ctrlKey)) {
                    n.preventDefault();
                    return
                }
            },
            onKeyUp: function(n) {
                var t = this,
                    i;
                if (t.isLocked) return n && n.preventDefault();
                if (i = t.$control_input.val() || "", t.lastValue !== i) {
                    t.lastValue = i;
                    t.onSearchChange(i);
                    t.refreshOptions();
                    t.trigger("type", i)
                }
            },
            onSearchChange: function(n) {
                var t = this,
                    i = t.settings.load;
                i && (t.loadedSearches.hasOwnProperty(n) || (t.loadedSearches[n] = !0, t.load(function(r) {
                    i.apply(t, [n, r])
                })))
            },
            onFocus: function(n) {
                var t = this,
                    i = t.isFocused;
                if (t.isDisabled) return t.blur(), n && n.preventDefault(), !1;
                if (!t.ignoreFocus) {
                    if (t.isFocused = !0, t.settings.preload === "focus") t.onSearchChange("");
                    i || t.trigger("focus");
                    t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus));
                    t.refreshState()
                }
            },
            onBlur: function(n, t) {
                var i = this,
                    r;
                if (i.isFocused && (i.isFocused = !1, !i.ignoreFocus)) {
                    if (!i.ignoreBlur && document.activeElement === i.$dropdown_content[0]) {
                        i.ignoreBlur = !0;
                        i.onFocus(n);
                        return
                    }
                    r = function() {
                        i.close();
                        i.setTextboxValue("");
                        i.setActiveItem(null);
                        i.setActiveOption(null);
                        i.setCaret(i.items.length);
                        i.refreshState();
                        (t || document.body).focus();
                        i.ignoreFocus = !1;
                        i.trigger("blur")
                    };
                    i.ignoreFocus = !0;
                    i.settings.create && i.settings.createOnBlur ? i.createItem(null, !1, r) : r()
                }
            },
            onOptionHover: function(n) {
                this.ignoreHover || this.setActiveOption(n.currentTarget, !1)
            },
            onOptionSelect: function(t) {
                var r, u, i = this;
                t.preventDefault && (t.preventDefault(), t.stopPropagation());
                u = n(t.currentTarget);
                u.hasClass("create") ? i.createItem(null, function() {
                    i.settings.closeAfterSelect && i.close()
                }) : (r = u.attr("data-value"), typeof r != "undefined" && (i.lastQuery = null, i.setTextboxValue(""), i.addItem(r), i.settings.closeAfterSelect ? i.close() : !i.settings.hideSelected && t.type && /mouse/.test(t.type) && i.setActiveOption(i.getOption(r))))
            },
            onItemSelect: function(n) {
                var t = this;
                t.isLocked || t.settings.mode === "multi" && (n.preventDefault(), t.setActiveItem(n.currentTarget, n))
            },
            load: function(n) {
                var t = this,
                    i = t.$wrapper.addClass(t.settings.loadingClass);
                t.loading++;
                n.apply(t, [function(n) {
                    t.loading = Math.max(t.loading - 1, 0);
                    n && n.length && (t.addOption(n), t.refreshOptions(t.isFocused && !t.isInputHidden));
                    t.loading || i.removeClass(t.settings.loadingClass);
                    t.trigger("load", n)
                }])
            },
            setTextboxValue: function(n) {
                var t = this.$control_input,
                    i = t.val() !== n;
                i && (t.val(n).triggerHandler("update"), this.lastValue = n)
            },
            getValue: function() {
                return this.tagType === h && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
            },
            setValue: function(n, t) {
                var i = t ? [] : ["change"];
                d(this, i, function() {
                    this.clear(t);
                    this.addItems(n, t)
                })
            },
            setActiveItem: function(t, i) {
                var r = this,
                    e, o, h, u, f, s, c, l;
                if (r.settings.mode !== "single") {
                    if (t = n(t), !t.length) {
                        n(r.$activeItems).removeClass("active");
                        r.$activeItems = [];
                        r.isFocused && r.showInput();
                        return
                    }
                    if (e = i && i.type.toLowerCase(), e === "mousedown" && r.isShiftDown && r.$activeItems.length) {
                        for (l = r.$control.children(".active:last"), u = Array.prototype.indexOf.apply(r.$control[0].childNodes, [l[0]]), f = Array.prototype.indexOf.apply(r.$control[0].childNodes, [t[0]]), u > f && (c = u, u = f, f = c), o = u; o <= f; o++) s = r.$control[0].childNodes[o], r.$activeItems.indexOf(s) === -1 && (n(s).addClass("active"), r.$activeItems.push(s));
                        i.preventDefault()
                    } else e === "mousedown" && r.isCtrlDown || e === "keydown" && this.isShiftDown ? t.hasClass("active") ? (h = r.$activeItems.indexOf(t[0]), r.$activeItems.splice(h, 1), t.removeClass("active")) : r.$activeItems.push(t.addClass("active")[0]) : (n(r.$activeItems).removeClass("active"), r.$activeItems = [t.addClass("active")[0]]);
                    r.hideInput();
                    this.isFocused || r.focus()
                }
            },
            setActiveOption: function(t, i, r) {
                var e, o, f, s, h, u = this;
                (u.$activeOption && u.$activeOption.removeClass("active"), u.$activeOption = null, t = n(t), t.length) && (u.$activeOption = t.addClass("active"), (i || !b(i)) && (e = u.$dropdown_content.height(), o = u.$activeOption.outerHeight(!0), i = u.$dropdown_content.scrollTop() || 0, f = u.$activeOption.offset().top - u.$dropdown_content.offset().top + i, s = f, h = f - e + o, f + o > e + i ? u.$dropdown_content.stop().animate({
                    scrollTop: h
                }, r ? u.settings.scrollDuration : 0) : f < i && u.$dropdown_content.stop().animate({
                    scrollTop: s
                }, r ? u.settings.scrollDuration : 0)))
            },
            selectAll: function() {
                var n = this;
                n.settings.mode !== "single" && (n.$activeItems = Array.prototype.slice.apply(n.$control.children(":not(input)").addClass("active")), n.$activeItems.length && (n.hideInput(), n.close()), n.focus())
            },
            hideInput: function() {
                var n = this;
                n.setTextboxValue("");
                n.$control_input.css({
                    opacity: 0,
                    position: "absolute",
                    left: n.rtl ? 1e4 : -1e4
                });
                n.isInputHidden = !0
            },
            showInput: function() {
                this.$control_input.css({
                    opacity: 1,
                    position: "relative",
                    left: 0
                });
                this.isInputHidden = !1
            },
            focus: function() {
                var n = this;
                n.isDisabled || (n.ignoreFocus = !0, n.$control_input[0].focus(), window.setTimeout(function() {
                    n.ignoreFocus = !1;
                    n.onFocus()
                }, 0))
            },
            blur: function(n) {
                this.$control_input[0].blur();
                this.onBlur(null, n)
            },
            getScoreFunction: function(n) {
                return this.sifter.getScoreFunction(n, this.getSearchOptions())
            },
            getSearchOptions: function() {
                var t = this.settings,
                    n = t.sortField;
                return typeof n == "string" && (n = [{
                    field: n
                }]), {
                    fields: t.searchField,
                    conjunction: t.searchConjunction,
                    sort: n
                }
            },
            search: function(t) {
                var f, r, e, i = this,
                    o = i.settings,
                    s = this.getSearchOptions();
                if (o.score && (e = i.settings.score.apply(this, [t]), typeof e != "function")) throw new Error('Selectize "score" setting must be a function that returns a function');
                if (t !== i.lastQuery ? (i.lastQuery = t, r = i.sifter.search(t, n.extend(s, {
                        score: e
                    })), i.currentResults = r) : r = n.extend(!0, {}, i.currentResults), o.hideSelected)
                    for (f = r.items.length - 1; f >= 0; f--) i.items.indexOf(u(r.items[f].id)) !== -1 && r.items.splice(f, 1);
                return r
            },
            refreshOptions: function(t) {
                var f, a, tt, e, s, c, b, it, r, v, y, k, d, h, p, w;
                typeof t == "undefined" && (t = !0);
                var i = this,
                    nt = n.trim(i.$control_input.val()),
                    o = i.search(nt),
                    l = i.$dropdown_content,
                    rt = i.$activeOption && u(i.$activeOption.attr("data-value"));
                for (e = o.items.length, typeof i.settings.maxOptions == "number" && (e = Math.min(e, i.settings.maxOptions)), s = {}, c = [], f = 0; f < e; f++)
                    for (b = i.options[o.items[f].id], it = i.render("option", b), r = b[i.settings.optgroupField] || "", v = n.isArray(r) ? r : [r], a = 0, tt = v && v.length; a < tt; a++) r = v[a], i.optgroups.hasOwnProperty(r) || (r = ""), s.hasOwnProperty(r) || (s[r] = [], c.push(r)), s[r].push(it);
                for (this.settings.lockOptgroupOrder && c.sort(function(n, t) {
                        var r = i.optgroups[n].$order || 0,
                            u = i.optgroups[t].$order || 0;
                        return r - u
                    }), y = [], f = 0, e = c.length; f < e; f++) r = c[f], i.optgroups.hasOwnProperty(r) && s[r].length ? (k = i.render("optgroup_header", i.optgroups[r]) || "", k += s[r].join(""), y.push(i.render("optgroup", n.extend({}, i.optgroups[r], {
                    html: k
                })))) : y.push(s[r].join(""));
                if (l.html(y.join("")), i.settings.highlight && o.query.length && o.tokens.length)
                    for (f = 0, e = o.tokens.length; f < e; f++) g(l, o.tokens[f].regex);
                if (!i.settings.hideSelected)
                    for (f = 0, e = i.items.length; f < e; f++) i.getOption(i.items[f]).addClass("selected");
                d = i.canCreate(nt);
                d && (l.prepend(i.render("option_create", {
                    input: nt
                })), w = n(l[0].childNodes[0]));
                i.hasOptions = o.items.length > 0 || d;
                i.hasOptions ? (o.items.length > 0 ? (p = rt && i.getOption(rt), p && p.length ? h = p : i.settings.mode === "single" && i.items.length && (h = i.getOption(i.items[0])), h && h.length || (h = w && !i.settings.addPrecedence ? i.getAdjacentOption(w, 1) : l.find("[data-selectable]:first"))) : h = w, i.setActiveOption(h), t && !i.isOpen && i.open()) : (i.setActiveOption(null), t && i.isOpen && i.close())
            },
            addOption: function(t) {
                var r, f, u, i = this;
                if (n.isArray(t)) {
                    for (r = 0, f = t.length; r < f; r++) i.addOption(t[r]);
                    return
                }(u = i.registerOption(t)) && (i.userOptions[u] = !0, i.lastQuery = null, i.trigger("option_add", u, t))
            },
            registerOption: function(n) {
                var t = u(n[this.settings.valueField]);
                return !t || this.options.hasOwnProperty(t) ? !1 : (n.$order = n.$order || ++this.order, this.options[t] = n, t)
            },
            registerOptionGroup: function(n) {
                var t = u(n[this.settings.optgroupValueField]);
                return t ? (n.$order = n.$order || ++this.order, this.optgroups[t] = n, t) : !1
            },
            addOptionGroup: function(n, t) {
                t[this.settings.optgroupValueField] = n;
                (n = this.registerOptionGroup(t)) && this.trigger("optgroup_add", n, t)
            },
            removeOptionGroup: function(n) {
                this.optgroups.hasOwnProperty(n) && (delete this.optgroups[n], this.renderCache = {}, this.trigger("optgroup_remove", n))
            },
            clearOptionGroups: function() {
                this.optgroups = {};
                this.renderCache = {};
                this.trigger("optgroup_clear")
            },
            updateOption: function(t, i) {
                var r = this,
                    s, h, f, c, e, o, l;
                if ((t = u(t), f = u(i[r.settings.valueField]), t !== null) && r.options.hasOwnProperty(t)) {
                    if (typeof f != "string") throw new Error("Value must be set in option data");
                    l = r.options[t].$order;
                    f !== t && (delete r.options[t], c = r.items.indexOf(t), c !== -1 && r.items.splice(c, 1, f));
                    i.$order = i.$order || l;
                    r.options[f] = i;
                    e = r.renderCache.item;
                    o = r.renderCache.option;
                    e && (delete e[t], delete e[f]);
                    o && (delete o[t], delete o[f]);
                    r.items.indexOf(f) !== -1 && (s = r.getItem(t), h = n(r.render("item", i)), s.hasClass("active") && h.addClass("active"), s.replaceWith(h));
                    r.lastQuery = null;
                    r.isOpen && r.refreshOptions(!1)
                }
            },
            removeOption: function(n, t) {
                var i = this,
                    r, f;
                n = u(n);
                r = i.renderCache.item;
                f = i.renderCache.option;
                r && delete r[n];
                f && delete f[n];
                delete i.userOptions[n];
                delete i.options[n];
                i.lastQuery = null;
                i.trigger("option_remove", n);
                i.removeItem(n, t)
            },
            clearOptions: function() {
                var n = this;
                n.loadedSearches = {};
                n.userOptions = {};
                n.renderCache = {};
                n.options = n.sifter.items = {};
                n.lastQuery = null;
                n.trigger("option_clear");
                n.clear()
            },
            getOption: function(n) {
                return this.getElementWithValue(n, this.$dropdown_content.find("[data-selectable]"))
            },
            getAdjacentOption: function(t, i) {
                var r = this.$dropdown.find("[data-selectable]"),
                    u = r.index(t) + i;
                return u >= 0 && u < r.length ? r.eq(u) : n()
            },
            getElementWithValue: function(t, i) {
                if (t = u(t), typeof t != "undefined" && t !== null)
                    for (var r = 0, f = i.length; r < f; r++)
                        if (i[r].getAttribute("data-value") === t) return n(i[r]);
                return n()
            },
            getItem: function(n) {
                return this.getElementWithValue(n, this.$control.children())
            },
            addItems: function(t, i) {
                for (var f = n.isArray(t) ? t : [t], r = 0, u = f.length; r < u; r++) this.isPending = r < u - 1, this.addItem(f[r], i)
            },
            addItem: function(t, i) {
                var r = i ? [] : ["change"];
                d(this, r, function() {
                    var e, s, h, r = this,
                        f = r.settings.mode,
                        o, c;
                    if (t = u(t), r.items.indexOf(t) !== -1) {
                        f === "single" && r.close();
                        return
                    }
                    r.options.hasOwnProperty(t) && ((f === "single" && r.clear(i), f === "multi" && r.isFull()) || (e = n(r.render("item", r.options[t])), c = r.isFull(), r.items.splice(r.caretPos, 0, t), r.insertAtCaret(e), r.isPending && (c || !r.isFull()) || r.refreshState(), r.isSetup && (h = r.$dropdown_content.find("[data-selectable]"), r.isPending || (s = r.getOption(t), o = r.getAdjacentOption(s, 1).attr("data-value"), r.refreshOptions(r.isFocused && f !== "single"), o && r.setActiveOption(r.getOption(o))), !h.length || r.isFull() ? r.close() : r.positionDropdown(), r.updatePlaceholder(), r.trigger("item_add", t, e), r.updateOriginalInput({
                        silent: i
                    }))))
                })
            },
            removeItem: function(n, t) {
                var i = this,
                    r, f, e;
                r = typeof n == "object" ? n : i.getItem(n);
                n = u(r.attr("data-value"));
                f = i.items.indexOf(n);
                f !== -1 && (r.remove(), r.hasClass("active") && (e = i.$activeItems.indexOf(r[0]), i.$activeItems.splice(e, 1)), i.items.splice(f, 1), i.lastQuery = null, !i.settings.persist && i.userOptions.hasOwnProperty(n) && i.removeOption(n, t), f < i.caretPos && i.setCaret(i.caretPos - 1), i.refreshState(), i.updatePlaceholder(), i.updateOriginalInput({
                    silent: t
                }), i.positionDropdown(), i.trigger("item_remove", n, r))
            },
            createItem: function(t, i) {
                var r = this,
                    s = r.caretPos,
                    f;
                if (t = t || n.trim(r.$control_input.val() || ""), f = arguments[arguments.length - 1], typeof f != "function" && (f = function() {}), typeof i != "boolean" && (i = !0), !r.canCreate(t)) return f(), !1;
                r.lock();
                var h = typeof r.settings.create == "function" ? this.settings.create : function(n) {
                        var t = {};
                        return t[r.settings.labelField] = n, t[r.settings.valueField] = n, t
                    },
                    e = lt(function(n) {
                        if (r.unlock(), !n || typeof n != "object") return f();
                        var t = u(n[r.settings.valueField]);
                        if (typeof t != "string") return f();
                        r.setTextboxValue("");
                        r.addOption(n);
                        r.setCaret(s);
                        r.addItem(t);
                        r.refreshOptions(i && r.settings.mode !== "single");
                        f(n)
                    }),
                    o = h.apply(this, [t, e]);
                return typeof o != "undefined" && e(o), !0
            },
            refreshItems: function() {
                this.lastQuery = null;
                this.isSetup && this.addItem(this.items);
                this.refreshState();
                this.updateOriginalInput()
            },
            refreshState: function() {
                var t, n = this;
                n.isRequired && (n.items.length && (n.isInvalid = !1), n.$control_input.prop("required", t));
                n.refreshClasses()
            },
            refreshClasses: function() {
                var t = this,
                    i = t.isFull(),
                    r = t.isLocked;
                t.$wrapper.toggleClass("rtl", t.rtl);
                t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", r).toggleClass("full", i).toggleClass("not-full", !i).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !n.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0);
                t.$control_input.data("grow", !i && !r)
            },
            isFull: function() {
                return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems
            },
            updateOriginalInput: function(n) {
                var i, u, r, e, t = this;
                if (n = n || {}, t.tagType === h) {
                    for (r = [], i = 0, u = t.items.length; i < u; i++) e = t.options[t.items[i]][t.settings.labelField] || "", r.push('<option value="' + f(t.items[i]) + '" selected="selected">' + f(e) + "<\/option>");
                    r.length || this.$input.attr("multiple") || r.push('<option value="" selected="selected"><\/option>');
                    t.$input.html(r.join(""))
                } else t.$input.val(t.getValue()), t.$input.attr("value", t.$input.val());
                t.isSetup && (n.silent || t.trigger("change", t.$input.val()))
            },
            updatePlaceholder: function() {
                if (this.settings.placeholder) {
                    var n = this.$control_input;
                    this.items.length ? n.removeAttr("placeholder") : n.attr("placeholder", this.settings.placeholder);
                    n.triggerHandler("update", {
                        force: !0
                    })
                }
            },
            open: function() {
                var n = this;
                n.isLocked || n.isOpen || n.settings.mode === "multi" && n.isFull() || (n.focus(), n.isOpen = !0, n.refreshState(), n.$dropdown.css({
                    visibility: "hidden",
                    display: "block"
                }), n.positionDropdown(), n.$dropdown.css({
                    visibility: "visible"
                }), n.trigger("dropdown_open", n.$dropdown))
            },
            close: function() {
                var n = this,
                    t = n.isOpen;
                n.settings.mode === "single" && n.items.length && n.hideInput();
                n.isOpen = !1;
                n.$dropdown.hide();
                n.setActiveOption(null);
                n.refreshState();
                t && n.trigger("dropdown_close", n.$dropdown)
            },
            positionDropdown: function() {
                var n = this.$control,
                    t = this.settings.dropdownParent === "body" ? n.offset() : n.position();
                t.top += n.outerHeight(!0);
                this.$dropdown.css({
                    width: n.outerWidth(),
                    top: t.top,
                    left: t.left
                })
            },
            clear: function(n) {
                var t = this;
                t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({
                    silent: n
                }), t.refreshState(), t.showInput(), t.trigger("clear"))
            },
            insertAtCaret: function(t) {
                var i = Math.min(this.caretPos, this.items.length);
                i === 0 ? this.$control.prepend(t) : n(this.$control[0].childNodes[i]).before(t);
                this.setCaret(i + 1)
            },
            deleteSelection: function(t) {
                var f, l, u, e, r, s, h, c, a, i = this;
                if (u = t && t.keyCode === o ? -1 : 1, e = v(i.$control_input[0]), i.$activeOption && !i.settings.hideSelected && (h = i.getAdjacentOption(i.$activeOption, -1).attr("data-value")), r = [], i.$activeItems.length) {
                    for (a = i.$control.children(".active:" + (u > 0 ? "last" : "first")), s = i.$control.children(":not(input)").index(a), u > 0 && s++, f = 0, l = i.$activeItems.length; f < l; f++) r.push(n(i.$activeItems[f]).attr("data-value"));
                    t && (t.preventDefault(), t.stopPropagation())
                } else(i.isFocused || i.settings.mode === "single") && i.items.length && (u < 0 && e.start === 0 && e.length === 0 ? r.push(i.items[i.caretPos - 1]) : u > 0 && e.start === i.$control_input.val().length && r.push(i.items[i.caretPos]));
                if (!r.length || typeof i.settings.onDelete == "function" && i.settings.onDelete.apply(i, [r]) === !1) return !1;
                for (typeof s != "undefined" && i.setCaret(s); r.length;) i.removeItem(r.pop());
                return i.showInput(), i.positionDropdown(), i.refreshOptions(!0), h && (c = i.getOption(h), c.length && i.setActiveOption(c)), !0
            },
            advanceSelection: function(n, t) {
                var o, r, u, f, s, e, i = this;
                n !== 0 && (i.rtl && (n *= -1), o = n > 0 ? "last" : "first", r = v(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, s = n < 0 ? r.start === 0 && r.length === 0 : r.start === f, s && !f && i.advanceCaret(n, t)) : (e = i.$control.children(".active:" + o), e.length && (u = i.$control.children(":not(input)").index(e), i.setActiveItem(null), i.setCaret(n > 0 ? u + 1 : u))))
            },
            advanceCaret: function(n, t) {
                var i = this,
                    u, r;
                n !== 0 && (u = n > 0 ? "next" : "prev", i.isShiftDown ? (r = i.$control_input[u](), r.length && (i.hideInput(), i.setActiveItem(r), t && t.preventDefault())) : i.setCaret(i.caretPos + n))
            },
            setCaret: function(t) {
                var i = this,
                    r, e, u, f;
                if (t = i.settings.mode === "single" ? i.items.length : Math.max(0, Math.min(i.items.length, t)), !i.isPending)
                    for (u = i.$control.children(":not(input)"), r = 0, e = u.length; r < e; r++) f = n(u[r]).detach(), r < t ? i.$control_input.before(f) : i.$control.append(f);
                i.caretPos = t
            },
            lock: function() {
                this.close();
                this.isLocked = !0;
                this.refreshState()
            },
            unlock: function() {
                this.isLocked = !1;
                this.refreshState()
            },
            disable: function() {
                var n = this;
                n.$input.prop("disabled", !0);
                n.$control_input.prop("disabled", !0).prop("tabindex", -1);
                n.isDisabled = !0;
                n.lock()
            },
            enable: function() {
                var n = this;
                n.$input.prop("disabled", !1);
                n.$control_input.prop("disabled", !1).prop("tabindex", n.tabIndex);
                n.isDisabled = !1;
                n.unlock()
            },
            destroy: function() {
                var t = this,
                    i = t.eventNS,
                    r = t.revertSettings;
                t.trigger("destroy");
                t.off();
                t.$wrapper.remove();
                t.$dropdown.remove();
                t.$input.html("").append(r.$children).removeAttr("tabindex").removeClass("selectized").attr({
                    tabindex: r.tabindex
                }).show();
                t.$control_input.removeData("grow");
                t.$input.removeData("selectize");
                n(window).off(i);
                n(document).off(i);
                n(document.body).off(i);
                delete t.$input[0].selectize
            },
            render: function(n, t) {
                var e, h, i = "",
                    o = !1,
                    r = this,
                    s = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                return ((n === "option" || n === "item") && (e = u(t[r.settings.valueField]), o = !!e), o && (b(r.renderCache[n]) || (r.renderCache[n] = {}), r.renderCache[n].hasOwnProperty(e))) ? r.renderCache[n][e] : (i = r.settings.render[n].apply(this, [t, f]), (n === "option" || n === "option_create") && (i = i.replace(s, "<$1 data-selectable")), n === "optgroup" && (h = t[r.settings.optgroupValueField] || "", i = i.replace(s, '<$1 data-group="' + k(f(h)) + '"')), (n === "option" || n === "item") && (i = i.replace(s, '<$1 data-value="' + k(f(e || "")) + '"')), o && (r.renderCache[n][e] = i), i)
            },
            clearCache: function(n) {
                var t = this;
                typeof n == "undefined" ? t.renderCache = {} : delete t.renderCache[n]
            },
            canCreate: function(n) {
                var i = this,
                    t;
                return i.settings.create ? (t = i.settings.createFilter, n.length && (typeof t != "function" || t.apply(i, [n])) && (typeof t != "string" || new RegExp(t).test(n)) && (!(t instanceof RegExp) || t.test(n))) : !1
            }
        }), r.count = 0, r.defaults = {
            options: [],
            optgroups: [],
            plugins: [],
            delimiter: ",",
            splitOn: null,
            persist: !0,
            diacritics: !0,
            create: !1,
            createOnBlur: !1,
            createFilter: null,
            highlight: !0,
            openOnFocus: !0,
            maxOptions: 1e3,
            maxItems: null,
            hideSelected: null,
            addPrecedence: !1,
            selectOnTab: !1,
            preload: !1,
            allowEmptyOption: !1,
            closeAfterSelect: !1,
            scrollDuration: 60,
            loadThrottle: 300,
            loadingClass: "loading",
            dataAttr: "data-data",
            optgroupField: "optgroup",
            valueField: "value",
            labelField: "text",
            optgroupLabelField: "label",
            optgroupValueField: "value",
            lockOptgroupOrder: !1,
            sortField: "$order",
            searchField: ["text"],
            searchConjunction: "and",
            mode: null,
            wrapperClass: "selectize-control",
            inputClass: "selectize-input",
            dropdownClass: "selectize-dropdown",
            dropdownContentClass: "selectize-dropdown-content",
            dropdownParent: null,
            copyClassesToDropdown: !0,
            render: {}
        }, n.fn.selectize = function(t) {
            var h = n.fn.selectize.defaults,
                i = n.extend({}, h, t),
                o = i.dataAttr,
                s = i.labelField,
                e = i.valueField,
                f = i.optgroupField,
                c = i.optgroupLabelField,
                l = i.optgroupValueField,
                a = function(t, r) {
                    var u, h, f, c, a = t.attr(o),
                        l;
                    if (a)
                        for (r.options = JSON.parse(a), u = 0, h = r.options.length; u < h; u++) r.items.push(r.options[u][e]);
                    else {
                        if (l = n.trim(t.val() || ""), !i.allowEmptyOption && !l.length) return;
                        for (f = l.split(i.delimiter), u = 0, h = f.length; u < h; u++) c = {}, c[s] = f[u], c[e] = f[u], r.options.push(c);
                        r.items = f
                    }
                },
                v = function(t, r) {
                    var h, p, y, a, k = r.options,
                        v = {},
                        w = function(n) {
                            var t = o && n.attr(o);
                            return typeof t == "string" && t.length ? JSON.parse(t) : null
                        },
                        b = function(t, o) {
                            var h, l, c;
                            if (t = n(t), h = u(t.attr("value")), h || i.allowEmptyOption) {
                                if (v.hasOwnProperty(h)) {
                                    o && (l = v[h][f], l ? n.isArray(l) ? l.push(o) : v[h][f] = [l, o] : v[h][f] = o);
                                    return
                                }
                                c = w(t) || {};
                                c[s] = c[s] || t.text();
                                c[e] = c[e] || h;
                                c[f] = c[f] || o;
                                v[h] = c;
                                k.push(c);
                                t.is(":selected") && r.items.push(h)
                            }
                        },
                        d = function(t) {
                            var u, o, i, f, e;
                            for (t = n(t), i = t.attr("label"), i && (f = w(t) || {}, f[c] = i, f[l] = i, r.optgroups.push(f)), e = n("option", t), u = 0, o = e.length; u < o; u++) b(e[u], i)
                        };
                    for (r.maxItems = t.attr("multiple") ? null : 1, a = t.children(), h = 0, p = a.length; h < p; h++) y = a[h].tagName.toLowerCase(), y === "optgroup" ? d(a[h]) : y === "option" && b(a[h])
                };
            return this.each(function() {
                var f;
                if (!this.selectize) {
                    var o, u = n(this),
                        s = this.tagName.toLowerCase(),
                        e = u.attr("placeholder") || u.attr("data-placeholder");
                    e || i.allowEmptyOption || (e = u.children('option[value=""]').text());
                    f = {
                        placeholder: e,
                        options: [],
                        optgroups: [],
                        items: []
                    };
                    s === "select" ? v(u, f) : a(u, f);
                    o = new r(u, n.extend(!0, {}, h, f, t))
                }
            })
        }, n.fn.selectize.defaults = r.defaults, n.fn.selectize.support = {
            validity: w
        }, r.define("drag_drop", function() {
            if (!n.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
            if (this.settings.mode === "multi") {
                var t = this;
                t.lock = function() {
                    var n = t.lock;
                    return function() {
                        var i = t.$control.data("sortable");
                        return i && i.disable(), n.apply(t, arguments)
                    }
                }();
                t.unlock = function() {
                    var n = t.unlock;
                    return function() {
                        var i = t.$control.data("sortable");
                        return i && i.enable(), n.apply(t, arguments)
                    }
                }();
                t.setup = function() {
                    var i = t.setup;
                    return function() {
                        i.apply(this, arguments);
                        var r = t.$control.sortable({
                            items: "[data-value]",
                            forcePlaceholderSize: !0,
                            disabled: t.isLocked,
                            start: function(n, t) {
                                t.placeholder.css("width", t.helper.css("width"));
                                r.css({
                                    overflow: "visible"
                                })
                            },
                            stop: function() {
                                r.css({
                                    overflow: "hidden"
                                });
                                var u = t.$activeItems ? t.$activeItems.slice() : null,
                                    i = [];
                                r.children("[data-value]").each(function() {
                                    i.push(n(this).attr("data-value"))
                                });
                                t.setValue(i);
                                t.setActiveItem(u)
                            }
                        })
                    }
                }()
            }
        }), r.define("dropdown_header", function(t) {
            var i = this;
            t = n.extend({
                title: "Untitled",
                headerClass: "selectize-dropdown-header",
                titleRowClass: "selectize-dropdown-header-title",
                labelClass: "selectize-dropdown-header-label",
                closeClass: "selectize-dropdown-header-close",
                html: function(n) {
                    return '<div class="' + n.headerClass + '"><div class="' + n.titleRowClass + '"><span class="' + n.labelClass + '">' + n.title + '<\/span><a href="javascript:void(0)" class="' + n.closeClass + '">&times;<\/a><\/div><\/div>'
                }
            }, t);
            i.setup = function() {
                var r = i.setup;
                return function() {
                    r.apply(i, arguments);
                    i.$dropdown_header = n(t.html(t));
                    i.$dropdown.prepend(i.$dropdown_header)
                }
            }()
        }), r.define("optgroup_columns", function(t) {
            var i = this,
                r, u;
            t = n.extend({
                equalizeWidth: !0,
                equalizeHeight: !0
            }, t);
            this.getAdjacentOption = function(t, i) {
                var r = t.closest("[data-group]").find("[data-selectable]"),
                    u = r.index(t) + i;
                return u >= 0 && u < r.length ? r.eq(u) : n()
            };
            this.onKeyDown = function() {
                var n = i.onKeyDown;
                return function(t) {
                    var e, u, f, r;
                    if (this.isOpen && (t.keyCode === l || t.keyCode === y)) {
                        i.ignoreHover = !0;
                        r = this.$activeOption.closest("[data-group]");
                        e = r.find("[data-selectable]").index(this.$activeOption);
                        r = t.keyCode === l ? r.prev("[data-group]") : r.next("[data-group]");
                        f = r.find("[data-selectable]");
                        u = f.eq(Math.min(f.length - 1, e));
                        u.length && this.setActiveOption(u);
                        return
                    }
                    return n.apply(this, arguments)
                }
            }();
            r = function() {
                var n, t = r.width,
                    i = document;
                return typeof t == "undefined" && (n = i.createElement("div"), n.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"><\/div><\/div>', n = n.firstChild, i.body.appendChild(n), t = r.width = n.offsetWidth - n.clientWidth, i.body.removeChild(n)), t
            };
            u = function() {
                var e, u, o, s, c, h, f;
                if (f = n("[data-group]", i.$dropdown_content), u = f.length, u && i.$dropdown_content.width()) {
                    if (t.equalizeHeight) {
                        for (o = 0, e = 0; e < u; e++) o = Math.max(o, f.eq(e).height());
                        f.css({
                            height: o
                        })
                    }
                    t.equalizeWidth && (h = i.$dropdown_content.innerWidth() - r(), s = Math.round(h / u), f.css({
                        width: s
                    }), u > 1 && (c = h - s * (u - 1), f.eq(u - 1).css({
                        width: c
                    })))
                }
            };
            (t.equalizeHeight || t.equalizeWidth) && (c.after(this, "positionDropdown", u), c.after(this, "refreshOptions", u))
        }), r.define("remove_button", function(t) {
            if (this.settings.mode !== "single") {
                t = n.extend({
                    label: "&times;",
                    title: "Remove",
                    className: "remove",
                    append: !0
                }, t);
                var i = this,
                    r = '<a href="javascript:void(0)" class="' + t.className + '" tabindex="-1" title="' + f(t.title) + '">' + t.label + "<\/a>",
                    u = function(n, t) {
                        var i = n.search(/(<\/[^>]+>\s*)$/);
                        return n.substring(0, i) + t + n.substring(i)
                    };
                this.setup = function() {
                    var f = i.setup;
                    return function() {
                        if (t.append) {
                            var e = i.settings.render.item;
                            i.settings.render.item = function() {
                                return u(e.apply(this, arguments), r)
                            }
                        }
                        f.apply(this, arguments);
                        this.$control.on("click", "." + t.className, function(t) {
                            if (t.preventDefault(), !i.isLocked) {
                                var r = n(t.currentTarget).parent();
                                i.setActiveItem(r);
                                i.deleteSelection() && i.setCaret(i.items.length)
                            }
                        })
                    }
                }()
            }
        }), r.define("restore_on_backspace", function(n) {
            var t = this;
            n.text = n.text || function(n) {
                return n[this.settings.labelField]
            };
            this.onKeyDown = function() {
                var i = t.onKeyDown;
                return function(t) {
                    var r, u;
                    if (t.keyCode === o && this.$control_input.val() === "" && !this.$activeItems.length && (r = this.caretPos - 1, r >= 0 && r < this.items.length)) {
                        u = this.options[this.items[r]];
                        this.deleteSelection(t) && (this.setTextboxValue(n.text.apply(this, [u])), this.refreshOptions(!0));
                        t.preventDefault();
                        return
                    }
                    return i.apply(this, arguments)
                }
            }()
        }), r
    }),
    function(n) {
        n(["jquery"], function(n) {
            function ct(n) {
                t.modal(ot).find(".modal-content").append(n)
            }

            function nt() {
                s = null;
                p.length = 0
            }

            function h(n) {
                return typeof n == "function"
            }

            function tt(t) {
                var e, o, s, i, f, r;
                if (t === !1) return u;
                if (e = n(a).addClass("modal-footer").prop("id", ii), t)
                    for (o = 0, s = t.length; o < s; o++) {
                        i = t[o];
                        f = n("<button>").addClass("btn btn-" + (i.style || "primary"));
                        for (r in i)
                            if (i.hasOwnProperty(r)) switch (r) {
                                case "close":
                                    i[r] && f.attr("data-dismiss", "modal").addClass("x");
                                    break;
                                case rt:
                                    f.click(i.click);
                                    break;
                                case "text":
                                    f.html(i[r]);
                                    break;
                                default:
                                    f.attr(r, i[r])
                            }
                            e.append(f)
                    } else e.append('<button class="x btn btn-primary" data-dismiss=modal type=button>Close<\/button>');
                return e
            }

            function lt(t) {
                var r, u = t.loading ? i.loadingHtml : t.message || t;
                return u.on || u.onclick ? (r = t.clone === !0 ? n(u).clone() : n(u), r.addClass(t.useBin && !t.loading ? g : ht)) : r = n(a).addClass(d).html(u), t.css && t.css !== r.css && r.css(t.css), r
            }

            function at() {
                function i() {
                    return n('<div class="modal fade" tabindex="-1"><style>.modal-xl{width:96%;}<\/style><div class=modal-dialog><div class=modal-content> <div class=modal-header><button type=button class="x close" data-dismiss=modal><span aria-hidden=true>&times;<\/span><span class=sr-only>Close<\/span><\/button><h4 class=modal-title><\/h4><\/div><\/div><\/div><\/div>').on("hidden.bs.modal", it).on(rt, "button.x", function(i) {
                        var r = n(i.currentTarget);
                        if (r.prop("type") !== y) return t.modal(b);
                        try {
                            if (r.closest("form")[0].checkValidity()) return o()
                        } catch (u) {
                            return o()
                        }
                        return t
                    })
                }
                t || (document.getElementById(l) || n("body").append(n(a).prop("id", l).hide()), t = i(), w.element = t);
                return t.on(v, function() {
                    n(this).find(ut).first().focus()
                })
            }

            function it() {
                if (t) {
                    var n = t.find("." + g).removeClass(g).appendTo("#" + l);
                    t.off(k).off(v).find(".modal-content > div:not(:first-child)").remove();
                    nt();
                    (!i.allowContentRecycle || et.clone) && n.remove()
                }
            }

            function vt(t, r) {
                if (!t) throw new Error("Invalid parameters!");
                it();
                et = t;
                var f = at();
                f.find(".modal-dialog").removeClass("modal-sm modal-lg modal-xl").addClass(t.size ? "modal-" + t.size : i.size);
                f.find(".modal-title").html((t.title || r || i.title) + " ").append(n("<small>").html(t.subtitle || u));
                f.on(k, t.onHide)
            }

            function r(n) {
                var i = p.shift(),
                    u;
                if (i) try {
                    return u = i.success(n || t), r(u)
                } catch (f) {
                    c(f, i)
                }
                return n
            }

            function c(n, t) {
                t || (t = p.shift());
                t && h(t.error) && t.error(n);
                h(s) && (s(n), s = null);
                nt()
            }

            function yt(n) {
                h(n) && (s = n)
            }

            function pt(n, t) {
                if (h(n)) {
                    var i = {
                        error: t,
                        success: n
                    };
                    p.push(i)
                }
                return w
            }

            function wt(u, f) {
                function s(n, i) {
                    var u = i === "error",
                        f;
                    t.on(v, u ? c : r);
                    u && (f = '<div class="alert alert-danger"><strong>XHR Fail: <\/strong>Url [ ' + o.url + "] load fail.<\/div>", t.find("." + d).html(f))
                }
                var o = {
                    async: !0,
                    loading: !0,
                    title: u.title || f || i.title,
                    url: u.url || u
                };
                return u.url && n.extend(o, u), e(o, f).element.find("." + d).load(o.url, s), w
            }

            function e(i, u) {
                vt(i, u);
                var f = n(a).append(lt(i), tt(i.buttons));
                if (ct(f), !i.async) t.on(v, r);
                return w
            }

            function bt(t, u) {
                function s(t) {
                    o();
                    var i = n(t.currentTarget).html();
                    return f[i] ? r() : c()
                }
                return e({
                    async: !0,
                    buttons: [{
                        close: !0,
                        click: s,
                        text: f[t.label] ? f[t.label] : f[i.confirmLabel],
                        style: ft
                    }, {
                        close: !0,
                        click: s,
                        text: f[t.label] ? t.label : i.confirmLabel
                    }],
                    message: t.message || t,
                    onHide: s,
                    size: t.size,
                    title: t.title || u
                })
            }

            function kt(t, u) {
                function f() {
                    return n(this).parent().find("div." + ht).fadeOut(function() {
                        n(this).remove()
                    }), r()
                }
                var o = '<div class=modal-body style="position: absolute;width: 100%;background-color: rgba(255,255,255,0.8);height: 100%;">%1%<\/div><iframe class="embed-responsive-item" frameborder=0 src="%0%" style="width:100%;height:75vh;display:block;"/>'.replace("%0%", t.message || t.url || t).replace("%1%", i.loadingHtml),
                    s = n(o).load(f);
                return e({
                    async: !0,
                    buttons: t.buttons || !1,
                    message: s,
                    size: t.size || st.xl,
                    title: t.title || u
                })
            }

            function dt() {
                return n("#" + l + " > *").remove()
            }

            function gt(s, h) {
                function p(n) {
                    var i = t.find(ut).val();
                    return o(), n.type !== y ? c(i) : r(i), !1
                }
                var l = {},
                    a, v, w, b;
                if (typeof s == "object" ? n.extend(l, s) : (l.message = s, l.title = h), l.async = !0, l.buttons)
                    for (v = 0, w = l.buttons.length; v < w; v++) a = l.buttons[v], a.style = (a.style || "default") + " pull-left", a.type = a.type || "button";
                return b = tt([{
                    close: !0,
                    type: "reset",
                    text: f.OK,
                    style: ft
                }, {
                    close: !1,
                    type: y,
                    text: i.confirmLabel
                }].concat(l.buttons || [])), l.buttons = !1, l.onHide = p, l.message = n('<form role=form style="margin-bottom:0;"><div class=modal-body><label for=prompt-input class=control-label>' + (l.message || u) + '<\/label><input type=text class=form-control required autocomplete="on" value="' + (l.value || u) + (l.pattern ? '" pattern="' + l.pattern : u) + '"><\/div><\/form>').append(b).on(y, p), e(l)
            }

            function ni(t) {
                return n.extend(i, t)
            }

            function ti(i) {
                return t && t.remove(), n.extend(ot, i)
            }

            function o() {
                return t && t.off(k).modal(b), t
            }
            var t, l = "recycle-bin",
                s, a = '<div style="position:relative;word-wrap:break-word;">',
                u = "",
                rt = "click",
                b = "hide",
                v = "shown.bs.modal",
                y = "submit",
                ii = "eFooter",
                k = b + ".bs.modal",
                ut = "input",
                ft = "danger",
                f = {
                    OK: "Cancel",
                    True: "False",
                    Yes: "No"
                },
                et = {},
                d = "modal-body",
                ot = {},
                g = "modal-rec",
                st = {
                    sm: "sm",
                    lg: "lg",
                    xl: "xl"
                },
                p = [],
                ht = "modal-tmp",
                i = {
                    allowContentRecycle: !0,
                    confirmLabel: "OK",
                    size: u,
                    loadingHtml: '<h5>Loading...<\/h5><div class=progress><div class="progress-bar progress-bar-striped active" style="width: 100%"><\/div><\/div>',
                    title: "Attention"
                },
                w = {
                    "catch": yt,
                    element: t,
                    then: pt
                };
            return {
                ajax: wt,
                alert: e,
                close: o,
                confirm: bt,
                emptyBin: dt,
                iframe: kt,
                prompt: gt,
                setEModalOptions: ni,
                setModalOptions: ti,
                size: st,
                version: "1.2.1"
            }
        })
    }(typeof define == "function" && define.amd ? define : function(n, t) {
        typeof module != "undefined" && window.module.exports ? window.module.exports = t(window.require(n[0])) : window.eModal = t(window.$)
    }),
    function(n) {
        "use strict";
        typeof define == "function" && define.amd ? define(["jquery"], n) : n(typeof jQuery != "undefined" ? jQuery : window.Zepto)
    }(function(n) {
        "use strict";

        function u(t) {
            var i = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), n(t.target).ajaxSubmit(i))
        }

        function f(t) {
            var r = t.target,
                u = n(r),
                f, i, e;
            if (!u.is("[type=submit],[type=image]")) {
                if (f = u.closest("[type=submit]"), f.length === 0) return;
                r = f[0]
            }
            i = this;
            i.clk = r;
            r.type == "image" && (t.offsetX !== undefined ? (i.clk_x = t.offsetX, i.clk_y = t.offsetY) : typeof n.fn.offset == "function" ? (e = u.offset(), i.clk_x = t.pageX - e.left, i.clk_y = t.pageY - e.top) : (i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop));
            setTimeout(function() {
                i.clk = i.clk_x = i.clk_y = null
            }, 100)
        }

        function t() {
            if (n.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var i = {},
            r;
        i.fileapi = n("<input type='file'/>").get(0).files !== undefined;
        i.formdata = window.FormData !== undefined;
        r = !!n.fn.prop;
        n.fn.attr2 = function() {
            if (!r) return this.attr.apply(this, arguments);
            var n = this.prop.apply(this, arguments);
            return n && n.jquery || typeof n == "string" ? n : this.attr.apply(this, arguments)
        };
        n.fn.ajaxSubmit = function(u) {
            function ot(t) {
                for (var r = n.param(t, u.traditional).split("&"), o = r.length, e = [], f, i = 0; i < o; i++) r[i] = r[i].replace(/\+/g, " "), f = r[i].split("="), e.push([decodeURIComponent(f[0]), decodeURIComponent(f[1])]);
                return e
            }

            function st(t) {
                for (var o = new FormData, f, r, s, i = 0; i < t.length; i++) o.append(t[i].name, t[i].value);
                if (u.extraData)
                    for (f = ot(u.extraData), i = 0; i < f.length; i++) f[i] && o.append(f[i][0], f[i][1]);
                return u.data = null, r = n.extend(!0, {}, n.ajaxSettings, u, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: e || "POST"
                }), u.uploadProgress && (r.xhr = function() {
                    var t = n.ajaxSettings.xhr();
                    return t.upload && t.upload.addEventListener("progress", function(n) {
                        var t = 0,
                            i = n.loaded || n.position,
                            r = n.total;
                        n.lengthComputable && (t = Math.ceil(i / r * 100));
                        u.uploadProgress(n, i, r, t)
                    }, !1), t
                }), r.data = null, s = r.beforeSend, r.beforeSend = function(n, t) {
                    t.data = u.formData ? u.formData : o;
                    s && s.call(this, n, t)
                }, n.ajax(r)
            }

            function ft(i) {
                function ot(n) {
                    var i = null;
                    try {
                        n.contentWindow && (i = n.contentWindow.document)
                    } catch (r) {
                        t("cannot get iframe.contentWindow document: " + r)
                    }
                    if (i) return i;
                    try {
                        i = n.contentDocument ? n.contentDocument : n.document
                    } catch (r) {
                        t("cannot get iframe.contentDocument: " + r);
                        i = n.document
                    }
                    return i
                }

                function st() {
                    function h() {
                        try {
                            var n = ot(a).readyState;
                            t("state = " + n);
                            n && n.toLowerCase() == "uninitialized" && setTimeout(h, 50)
                        } catch (i) {
                            t("Server abort: ", i, " (", i.name, ")");
                            b(tt);
                            g && clearTimeout(g);
                            g = undefined
                        }
                    }
                    var u = f.attr2("target"),
                        s = f.attr2("action"),
                        y = f.attr("enctype") || f.attr("encoding") || "multipart/form-data",
                        r, i, c;
                    l.setAttribute("target", d);
                    (!e || /post/i.test(e)) && l.setAttribute("method", "POST");
                    s != o.url && l.setAttribute("action", o.url);
                    o.skipEncodingOverride || e && !/post/i.test(e) || f.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    });
                    o.timeout && (g = setTimeout(function() {
                        rt = !0;
                        b(ut)
                    }, o.timeout));
                    r = [];
                    try {
                        if (o.extraData)
                            for (i in o.extraData) o.extraData.hasOwnProperty(i) && (n.isPlainObject(o.extraData[i]) && o.extraData[i].hasOwnProperty("name") && o.extraData[i].hasOwnProperty("value") ? r.push(n('<input type="hidden" name="' + o.extraData[i].name + '">').val(o.extraData[i].value).appendTo(l)[0]) : r.push(n('<input type="hidden" name="' + i + '">').val(o.extraData[i]).appendTo(l)[0]));
                        o.iframeTarget || v.appendTo("body");
                        a.attachEvent ? a.attachEvent("onload", b) : a.addEventListener("load", b, !1);
                        setTimeout(h, 15);
                        try {
                            l.submit()
                        } catch (p) {
                            c = document.createElement("form").submit;
                            c.apply(l)
                        }
                    } finally {
                        l.setAttribute("action", s);
                        l.setAttribute("enctype", y);
                        u ? l.setAttribute("target", u) : f.removeAttr("target");
                        n(r).remove()
                    }
                }

                function b(i) {
                    var r, u, w, f, k, d, e, c, l;
                    if (!s.aborted && !lt) {
                        if (h = ot(a), h || (t("cannot access response document"), i = tt), i === ut && s) {
                            s.abort("timeout");
                            y.reject(s, "timeout");
                            return
                        }
                        if (i == tt && s) {
                            s.abort("server abort");
                            y.reject(s, "error", "server abort");
                            return
                        }
                        if (h && h.location.href != o.iframeSrc || rt) {
                            a.detachEvent ? a.detachEvent("onload", b) : a.removeEventListener("load", b, !1);
                            r = "success";
                            try {
                                if (rt) throw "timeout";
                                if (w = o.dataType == "xml" || h.XMLDocument || n.isXMLDoc(h), t("isXml=" + w), !w && window.opera && (h.body === null || !h.body.innerHTML) && --ct) {
                                    t("requeing onLoad callback, DOM not available");
                                    setTimeout(b, 250);
                                    return
                                }
                                f = h.body ? h.body : h.documentElement;
                                s.responseText = f ? f.innerHTML : null;
                                s.responseXML = h.XMLDocument ? h.XMLDocument : h;
                                w && (o.dataType = "xml");
                                s.getResponseHeader = function(n) {
                                    var t = {
                                        "content-type": o.dataType
                                    };
                                    return t[n.toLowerCase()]
                                };
                                f && (s.status = Number(f.getAttribute("status")) || s.status, s.statusText = f.getAttribute("statusText") || s.statusText);
                                k = (o.dataType || "").toLowerCase();
                                d = /(json|script|text)/.test(k);
                                d || o.textarea ? (e = h.getElementsByTagName("textarea")[0], e ? (s.responseText = e.value, s.status = Number(e.getAttribute("status")) || s.status, s.statusText = e.getAttribute("statusText") || s.statusText) : d && (c = h.getElementsByTagName("pre")[0], l = h.getElementsByTagName("body")[0], c ? s.responseText = c.textContent ? c.textContent : c.innerText : l && (s.responseText = l.textContent ? l.textContent : l.innerText))) : k == "xml" && !s.responseXML && s.responseText && (s.responseXML = at(s.responseText));
                                try {
                                    ht = yt(s, k, o)
                                } catch (nt) {
                                    r = "parsererror";
                                    s.error = u = nt || r
                                }
                            } catch (nt) {
                                t("error caught: ", nt);
                                r = "error";
                                s.error = u = nt || r
                            }
                            s.aborted && (t("upload aborted"), r = null);
                            s.status && (r = s.status >= 200 && s.status < 300 || s.status === 304 ? "success" : "error");
                            r === "success" ? (o.success && o.success.call(o.context, ht, "success", s), y.resolve(s.responseText, "success", s), p && n.event.trigger("ajaxSuccess", [s, o])) : r && (u === undefined && (u = s.statusText), o.error && o.error.call(o.context, s, r, u), y.reject(s, "error", u), p && n.event.trigger("ajaxError", [s, o, u]));
                            p && n.event.trigger("ajaxComplete", [s, o]);
                            p && !--n.active && n.event.trigger("ajaxStop");
                            o.complete && o.complete.call(o.context, s, r);
                            lt = !0;
                            o.timeout && clearTimeout(g);
                            setTimeout(function() {
                                o.iframeTarget ? v.attr("src", o.iframeSrc) : v.remove();
                                s.responseXML = null
                            }, 100)
                        }
                    }
                }
                var l = f[0],
                    it, nt, o, p, d, v, a, s, k, w, rt, g, y = n.Deferred(),
                    ut, tt, ft, et, ht, h, ct, lt;
                if (y.abort = function(n) {
                        s.abort(n)
                    }, i)
                    for (nt = 0; nt < c.length; nt++) it = n(c[nt]), r ? it.prop("disabled", !1) : it.removeAttr("disabled");
                if (o = n.extend(!0, {}, n.ajaxSettings, u), o.context = o.context || o, d = "jqFormIO" + (new Date).getTime(), o.iframeTarget ? (v = n(o.iframeTarget), w = v.attr2("name"), w ? d = w : v.attr2("name", d)) : (v = n('<iframe name="' + d + '" src="' + o.iframeSrc + '" />'), v.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), a = v[0], s = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(i) {
                            var r = i === "timeout" ? "timeout" : "aborted";
                            t("aborting upload... " + r);
                            this.aborted = 1;
                            try {
                                a.contentWindow.document.execCommand && a.contentWindow.document.execCommand("Stop")
                            } catch (u) {}
                            v.attr("src", o.iframeSrc);
                            s.error = r;
                            o.error && o.error.call(o.context, s, r, i);
                            p && n.event.trigger("ajaxError", [s, o, r]);
                            o.complete && o.complete.call(o.context, s, r)
                        }
                    }, p = o.global, p && 0 == n.active++ && n.event.trigger("ajaxStart"), p && n.event.trigger("ajaxSend", [s, o]), o.beforeSend && o.beforeSend.call(o.context, s, o) === !1) return o.global && n.active--, y.reject(), y;
                if (s.aborted) return y.reject(), y;
                k = l.clk;
                k && (w = k.name, w && !k.disabled && (o.extraData = o.extraData || {}, o.extraData[w] = k.value, k.type == "image" && (o.extraData[w + ".x"] = l.clk_x, o.extraData[w + ".y"] = l.clk_y)));
                ut = 1;
                tt = 2;
                ft = n("meta[name=csrf-token]").attr("content");
                et = n("meta[name=csrf-param]").attr("content");
                et && ft && (o.extraData = o.extraData || {}, o.extraData[et] = ft);
                o.forceSync ? st() : setTimeout(st, 10);
                ct = 50;
                var at = n.parseXML || function(n, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(n)) : t = (new DOMParser).parseFromString(n, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
                    },
                    vt = n.parseJSON || function(s) {
                        return window.eval("(" + s + ")")
                    },
                    yt = function(t, i, r) {
                        var f = t.getResponseHeader("content-type") || "",
                            e = i === "xml" || !i && f.indexOf("xml") >= 0,
                            u = e ? t.responseXML : t.responseText;
                        return e && u.documentElement.nodeName === "parsererror" && n.error && n.error("parsererror"), r && r.dataFilter && (u = r.dataFilter(u, i)), typeof u == "string" && (i === "json" || !i && f.indexOf("json") >= 0 ? u = vt(u) : (i === "script" || !i && f.indexOf("javascript") >= 0) && n.globalEval(u)), u
                    };
                return y
            }
            var e, b, o, f, a, v, c, y, s, l, h, d, g, nt, ut, p, w;
            if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
            if (f = this, typeof u == "function" ? u = {
                    success: u
                } : u === undefined && (u = {}), e = u.type || this.attr2("method"), b = u.url || this.attr2("action"), o = typeof b == "string" ? n.trim(b) : "", o = o || window.location.href || "", o && (o = (o.match(/^([^#]+)/) || [])[1]), u = n.extend(!0, {
                    url: o,
                    success: n.ajaxSettings.success,
                    type: e || n.ajaxSettings.type,
                    iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
                }, u), a = {}, this.trigger("form-pre-serialize", [this, u, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (u.beforeSerialize && u.beforeSerialize(this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            if (v = u.traditional, v === undefined && (v = n.ajaxSettings.traditional), c = [], s = this.formToArray(u.semantic, c), u.data && (u.extraData = u.data, y = n.param(u.data, v)), u.beforeSubmit && u.beforeSubmit(s, this, u) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [s, this, u, a]), a.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            l = n.param(s, v);
            y && (l = l ? l + "&" + y : y);
            u.type.toUpperCase() == "GET" ? (u.url += (u.url.indexOf("?") >= 0 ? "&" : "?") + l, u.data = null) : u.data = l;
            h = [];
            u.resetForm && h.push(function() {
                f.resetForm()
            });
            u.clearForm && h.push(function() {
                f.clearForm(u.includeHidden)
            });
            !u.dataType && u.target ? (d = u.success || function() {}, h.push(function(t) {
                var i = u.replaceTarget ? "replaceWith" : "html";
                n(u.target)[i](t).each(d, arguments)
            })) : u.success && h.push(u.success);
            u.success = function(n, t, i) {
                for (var o = u.context || this, r = 0, e = h.length; r < e; r++) h[r].apply(o, [n, t, i || f, f])
            };
            u.error && (g = u.error, u.error = function(n, t, i) {
                var r = u.context || this;
                g.apply(r, [n, t, i, f])
            });
            u.complete && (nt = u.complete, u.complete = function(n, t) {
                var i = u.context || this;
                nt.apply(i, [n, t, f])
            });
            var et = n("input[type=file]:enabled", this).filter(function() {
                    return n(this).val() !== ""
                }),
                tt = et.length > 0,
                it = "multipart/form-data",
                rt = f.attr("enctype") == it || f.attr("encoding") == it,
                k = i.fileapi && i.formdata;
            for (t("fileAPI :" + k), ut = (tt || rt) && !k, u.iframe !== !1 && (u.iframe || ut) ? u.closeKeepAlive ? n.get(u.closeKeepAlive, function() {
                    p = ft(s)
                }) : p = ft(s) : p = (tt || rt) && k ? st(s) : n.ajax(u), f.removeData("jqxhr").data("jqxhr", p), w = 0; w < c.length; w++) c[w] = null;
            return this.trigger("form-submit-notify", [this, u]), this
        };
        n.fn.ajaxForm = function(i) {
            if (i = i || {}, i.delegation = i.delegation && n.isFunction(n.fn.on), !i.delegation && this.length === 0) {
                var r = {
                    s: this.selector,
                    c: this.context
                };
                return !n.isReady && r.s ? (t("DOM not ready, queuing ajaxForm"), n(function() {
                    n(r.s, r.c).ajaxForm(i)
                }), this) : (t("terminating; zero elements found by selector" + (n.isReady ? "" : " (DOM not ready)")), this)
            }
            if (i.delegation) {
                n(document).off("submit.form-plugin", this.selector, u).off("click.form-plugin", this.selector, f).on("submit.form-plugin", this.selector, i, u).on("click.form-plugin", this.selector, i, f);
                return this
            }
            return this.ajaxFormUnbind().bind("submit.form-plugin", i, u).bind("click.form-plugin", i, f)
        };
        n.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        };
        n.fn.formToArray = function(t, r) {
            var e = [],
                l, h, f, c, u, b, k, a, p, v;
            if (this.length === 0) return e;
            var o = this[0],
                w = this.attr("id"),
                s = t ? o.getElementsByTagName("*") : o.elements,
                y;
            if (s && !/MSIE [678]/.test(navigator.userAgent) && (s = n(s).get()), w && (y = n(':input[form="' + w + '"]').get(), y.length && (s = (s || []).concat(y))), !s || !s.length) return e;
            for (l = 0, b = s.length; l < b; l++)
                if (u = s[l], f = u.name, f && !u.disabled) {
                    if (t && o.clk && u.type == "image") {
                        o.clk == u && (e.push({
                            name: f,
                            value: n(u).val(),
                            type: u.type
                        }), e.push({
                            name: f + ".x",
                            value: o.clk_x
                        }, {
                            name: f + ".y",
                            value: o.clk_y
                        }));
                        continue
                    }
                    if (c = n.fieldValue(u, !0), c && c.constructor == Array)
                        for (r && r.push(u), h = 0, k = c.length; h < k; h++) e.push({
                            name: f,
                            value: c[h]
                        });
                    else if (i.fileapi && u.type == "file")
                        if (r && r.push(u), a = u.files, a.length)
                            for (h = 0; h < a.length; h++) e.push({
                                name: f,
                                value: a[h],
                                type: u.type
                            });
                        else e.push({
                            name: f,
                            value: "",
                            type: u.type
                        });
                    else c !== null && typeof c != "undefined" && (r && r.push(u), e.push({
                        name: f,
                        value: c,
                        type: u.type,
                        required: u.required
                    }))
                }
            return !t && o.clk && (p = n(o.clk), v = p[0], f = v.name, f && !v.disabled && v.type == "image" && (e.push({
                name: f,
                value: p.val()
            }), e.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))), e
        };
        n.fn.formSerialize = function(t) {
            return n.param(this.formToArray(t))
        };
        n.fn.fieldSerialize = function(t) {
            var i = [];
            return this.each(function() {
                var f = this.name,
                    r, u, e;
                if (f)
                    if (r = n.fieldValue(this, t), r && r.constructor == Array)
                        for (u = 0, e = r.length; u < e; u++) i.push({
                            name: f,
                            value: r[u]
                        });
                    else r !== null && typeof r != "undefined" && i.push({
                        name: this.name,
                        value: r
                    })
            }), n.param(i)
        };
        n.fn.fieldValue = function(t) {
            for (var f, i, r = [], u = 0, e = this.length; u < e; u++)(f = this[u], i = n.fieldValue(f, t), i !== null && typeof i != "undefined" && (i.constructor != Array || i.length)) && (i.constructor == Array ? n.merge(r, i) : r.push(i));
            return r
        };
        n.fieldValue = function(t, i) {
            var a = t.name,
                u = t.type,
                h = t.tagName.toLowerCase(),
                e, o, r, f;
            if (i === undefined && (i = !0), i && (!a || t.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !t.checked || (u == "submit" || u == "image") && t.form && t.form.clk != t || h == "select" && t.selectedIndex == -1)) return null;
            if (h == "select") {
                if (e = t.selectedIndex, e < 0) return null;
                var c = [],
                    l = t.options,
                    s = u == "select-one",
                    v = s ? e + 1 : l.length;
                for (o = s ? e : 0; o < v; o++)
                    if (r = l[o], r.selected) {
                        if (f = r.value, f || (f = r.attributes && r.attributes.value && !r.attributes.value.specified ? r.text : r.value), s) return f;
                        c.push(f)
                    }
                return c
            }
            return n(t).val()
        };
        n.fn.clearForm = function(t) {
            return this.each(function() {
                n("input,select,textarea", this).clearFields(t)
            })
        };
        n.fn.clearFields = n.fn.clearInputs = function(t) {
            var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var r = this.type,
                    u = this.tagName.toLowerCase();
                i.test(r) || u == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : u == "select" ? this.selectedIndex = -1 : r == "file" ? /MSIE/.test(navigator.userAgent) ? n(this).replaceWith(n(this).clone(!0)) : n(this).val("") : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && n(this).is(t)) && (this.value = "")
            })
        };
        n.fn.resetForm = function() {
            return this.each(function() {
                typeof this.reset != "function" && (typeof this.reset != "object" || this.reset.nodeType) || this.reset()
            })
        };
        n.fn.enable = function(n) {
            return n === undefined && (n = !0), this.each(function() {
                this.disabled = !n
            })
        };
        n.fn.selected = function(t) {
            return t === undefined && (t = !0), this.each(function() {
                var r = this.type,
                    i;
                r == "checkbox" || r == "radio" ? this.checked = t : this.tagName.toLowerCase() == "option" && (i = n(this).parent("select"), t && i[0] && i[0].type == "select-one" && i.find("option").selected(!1), this.selected = t)
            })
        };
        n.fn.ajaxSubmit.debug = !1
    }),
    function() {
        "use strict";

        function n(n) {
            function s(s, h) {
                var rt, ut, p = s == window,
                    l = h && h.message !== undefined ? h.message : undefined,
                    g, k, d, tt, nt, w, b, it, ft, et, at;
                if (h = n.extend({}, n.blockUI.defaults, h || {}), !h.ignoreIfBlocked || !n(s).data("blockUI.isBlocked")) {
                    if (h.overlayCSS = n.extend({}, n.blockUI.defaults.overlayCSS, h.overlayCSS || {}), rt = n.extend({}, n.blockUI.defaults.css, h.css || {}), h.onOverlayClick && (h.overlayCSS.cursor = "pointer"), ut = n.extend({}, n.blockUI.defaults.themedCSS, h.themedCSS || {}), l = l === undefined ? h.message : l, p && t && e(window, {
                            fadeOut: 0
                        }), l && typeof l != "string" && (l.parentNode || l.jquery) && (g = l.jquery ? l[0] : l, k = {}, n(s).data("blockUI.history", k), k.el = g, k.parent = g.parentNode, k.display = g.style.display, k.position = g.style.position, k.parent && k.parent.removeChild(g)), n(s).data("blockUI.onUnblock", h.onUnblock), d = h.baseZ, tt = f || h.forceIframe ? n('<iframe class="blockUI" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + h.iframeSrc + '"><\/iframe>') : n('<div class="blockUI" style="display:none"><\/div>'), nt = h.theme ? n('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + d++ + ';display:none"><\/div>') : n('<div class="blockUI blockOverlay" style="z-index:' + d++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"><\/div>'), h.theme && p ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:fixed">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : h.theme ? (b = '<div class="blockUI ' + h.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (d + 10) + ';display:none;position:absolute">', h.title && (b += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (h.title || "&nbsp;") + "<\/div>"), b += '<div class="ui-widget-content ui-dialog-content"><\/div>', b += "<\/div>") : b = p ? '<div class="blockUI ' + h.blockMsgClass + ' blockPage" style="z-index:' + (d + 10) + ';display:none;position:fixed"><\/div>' : '<div class="blockUI ' + h.blockMsgClass + ' blockElement" style="z-index:' + (d + 10) + ';display:none;position:absolute"><\/div>', w = n(b), l && (h.theme ? (w.css(ut), w.addClass("ui-widget-content")) : w.css(rt)), h.theme || nt.css(h.overlayCSS), nt.css("position", p ? "fixed" : "absolute"), (f || h.forceIframe) && tt.css("opacity", 0), it = [tt, nt, w], ft = p ? n("body") : n(s), n.each(it, function() {
                            this.appendTo(ft)
                        }), h.theme && h.draggable && n.fn.draggable && w.draggable({
                            handle: ".ui-dialog-titlebar",
                            cancel: "li"
                        }), et = v && (!n.support.boxModel || n("object,embed", p ? null : s).length > 0), o || et) {
                        if (p && h.allowBodyStretch && n.support.boxModel && n("html,body").css("height", "100%"), (o || !n.support.boxModel) && !p) var ot = r(s, "borderTopWidth"),
                            st = r(s, "borderLeftWidth"),
                            ht = ot ? "(0 - " + ot + ")" : 0,
                            ct = st ? "(0 - " + st + ")" : 0;
                        n.each(it, function(n, t) {
                            var i = t[0].style,
                                r, u;
                            i.position = "absolute";
                            n < 2 ? (p ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + h.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), p ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), ct && i.setExpression("left", ct), ht && i.setExpression("top", ht)) : h.centerY ? (p && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0) : !h.centerY && p && (r = h.css && h.css.top ? parseInt(h.css.top, 10) : 0, u = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"', i.setExpression("top", u))
                        })
                    }
                    if (l && (h.theme ? w.find(".ui-widget-content").append(l) : w.append(l), (l.jquery || l.nodeType) && n(l).show()), (f || h.forceIframe) && h.showOverlay && tt.show(), h.fadeIn) {
                        var lt = h.onBlock ? h.onBlock : u,
                            vt = h.showOverlay && !l ? lt : u,
                            yt = l ? lt : u;
                        h.showOverlay && nt._fadeIn(h.fadeIn, vt);
                        l && w._fadeIn(h.fadeIn, yt)
                    } else h.showOverlay && nt.show(), l && w.show(), h.onBlock && h.onBlock.bind(w)();
                    c(1, s, h);
                    p ? (t = w[0], i = n(h.focusableElements, t), h.focusInput && setTimeout(a, 20)) : y(w[0], h.centerX, h.centerY);
                    h.timeout && (at = setTimeout(function() {
                        p ? n.unblockUI(h) : n(s).unblock(h)
                    }, h.timeout), n(s).data("blockUI.timeout", at))
                }
            }

            function e(r, u) {
                var o, s = r == window,
                    e = n(r),
                    l = e.data("blockUI.history"),
                    a = e.data("blockUI.timeout"),
                    f;
                a && (clearTimeout(a), e.removeData("blockUI.timeout"));
                u = n.extend({}, n.blockUI.defaults, u || {});
                c(0, r, u);
                u.onUnblock === null && (u.onUnblock = e.data("blockUI.onUnblock"), e.removeData("blockUI.onUnblock"));
                f = s ? n("body").children().filter(".blockUI").add("body > .blockUI") : e.find(">.blockUI");
                u.cursorReset && (f.length > 1 && (f[1].style.cursor = u.cursorReset), f.length > 2 && (f[2].style.cursor = u.cursorReset));
                s && (t = i = null);
                u.fadeOut ? (o = f.length, f.stop().fadeOut(u.fadeOut, function() {
                    --o == 0 && h(f, l, u, r)
                })) : h(f, l, u, r)
            }

            function h(t, i, r, u) {
                var f = n(u);
                if (!f.data("blockUI.isBlocked")) {
                    if (t.each(function() {
                            this.parentNode && this.parentNode.removeChild(this)
                        }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.el.style.cursor = "default", i.parent && i.parent.appendChild(i.el), f.removeData("blockUI.history")), f.data("blockUI.static") && f.css("position", "static"), typeof r.onUnblock == "function") r.onUnblock(u, r);
                    var e = n(document.body),
                        o = e.width(),
                        s = e[0].style.width;
                    e.width(o - 1).width(o);
                    e[0].style.width = s
                }
            }

            function c(i, r, u) {
                var f = r == window,
                    o = n(r),
                    e;
                (i || (!f || t) && (f || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", i), f && u.bindEvents && (!i || u.showOverlay)) && (e = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", i ? n(document).bind(e, u, l) : n(document).unbind(e, l))
            }

            function l(r) {
                var u, f;
                if (r.type === "keydown" && r.keyCode && r.keyCode == 9 && t && r.data.constrainTabKey) {
                    var e = i,
                        s = !r.shiftKey && r.target === e[e.length - 1],
                        o = r.shiftKey && r.target === e[0];
                    if (s || o) return setTimeout(function() {
                        a(o)
                    }, 10), !1
                }
                if (u = r.data, f = n(r.target), f.hasClass("blockOverlay") && u.onOverlayClick) u.onOverlayClick(r);
                return f.parents("div." + u.blockMsgClass).length > 0 ? !0 : f.parents().children().filter("div.blockUI").length === 0
            }

            function a(n) {
                if (i) {
                    var t = i[n === !0 ? i.length - 1 : 0];
                    t && t.focus()
                }
            }

            function y(n, t, i) {
                var u = n.parentNode,
                    f = n.style,
                    e = (u.offsetWidth - n.offsetWidth) / 2 - r(u, "borderLeftWidth"),
                    o = (u.offsetHeight - n.offsetHeight) / 2 - r(u, "borderTopWidth");
                t && (f.left = e > 0 ? e + "px" : "0");
                i && (f.top = o > 0 ? o + "px" : "0")
            }

            function r(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }
            var t, i;
            n.fn._fadeIn = n.fn.fadeIn;
            var u = n.noop || function() {},
                f = /MSIE/.test(navigator.userAgent),
                o = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                p = document.documentMode || 0,
                v = n.isFunction(document.createElement("div").style.setExpression);
            n.blockUI = function(n) {
                s(window, n)
            };
            n.unblockUI = function(n) {
                e(window, n)
            };
            n.growlUI = function(t, i, r, u) {
                var f = n('<div class="growlUI"><\/div>'),
                    e, o;
                t && f.append("<h1>" + t + "<\/h1>");
                i && f.append("<h2>" + i + "<\/h2>");
                r === undefined && (r = 3e3);
                e = function(t) {
                    t = t || {};
                    n.blockUI({
                        message: f,
                        fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700,
                        fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3,
                        timeout: typeof t.timeout != "undefined" ? t.timeout : r,
                        centerY: !1,
                        showOverlay: !1,
                        onUnblock: u,
                        css: n.blockUI.defaults.growlCSS
                    })
                };
                e();
                o = f.css("opacity");
                f.mouseover(function() {
                    e({
                        fadeIn: 0,
                        timeout: 3e4
                    });
                    var t = n(".blockMsg");
                    t.stop();
                    t.fadeTo(300, 1)
                }).mouseout(function() {
                    n(".blockMsg").fadeOut(1e3)
                })
            };
            n.fn.block = function(t) {
                if (this[0] === window) return n.blockUI(t), this;
                var i = n.extend({}, n.blockUI.defaults, t || {});
                return this.each(function() {
                    var t = n(this);
                    i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                        fadeOut: 0
                    })
                }), this.each(function() {
                    n.css(this, "position") == "static" && (this.style.position = "relative", n(this).data("blockUI.static", !0));
                    this.style.zoom = 1;
                    s(this, t)
                })
            };
            n.fn.unblock = function(t) {
                return this[0] === window ? (n.unblockUI(t), this) : this.each(function() {
                    e(this, t)
                })
            };
            n.blockUI.version = 2.7;
            n.blockUI.defaults = {
                message: "<h1>Please wait...<\/h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    padding: 0,
                    margin: 0,
                    width: "30%",
                    top: "40%",
                    left: "35%",
                    textAlign: "center",
                    color: "#000",
                    border: "3px solid #aaa",
                    backgroundColor: "#fff",
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#000",
                    opacity: .6,
                    cursor: "wait"
                },
                cursorReset: "default",
                growlCSS: {
                    width: "350px",
                    top: "10px",
                    left: "",
                    right: "10px",
                    border: "none",
                    padding: "5px",
                    opacity: .6,
                    cursor: "default",
                    color: "#fff",
                    backgroundColor: "#000",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "10px"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                focusableElements: ":input:enabled:visible",
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            t = null;
            i = []
        }
        typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
    }();
Number.prototype.formatMoney = function(n, t, i) {
    var u = this,
        n = isNaN(n = Math.abs(n)) ? 2 : n,
        t = t == undefined ? "." : t,
        i = i == undefined ? "," : i,
        e = u < 0 ? "-" : "",
        f = parseInt(u = Math.abs(+u || 0).toFixed(n)) + "",
        r = (r = f.length) > 3 ? r % 3 : 0;
    return e + (r ? f.substr(0, r) + i : "") + f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? t + Math.abs(u - f).toFixed(n).slice(2) : "")
};
jQuery(document).ready(function() {
    jQuery(".selectize").selectize();
    jQuery("#form-subscription").ajaxForm({
        target: "#subscription-response",
        beforeSubmit: function() {
            jQuery("subscription-response").empty()
        }
    });
    jQuery("#form-home-contact").ajaxForm({
        target: "#form-home-contact-container",
        message: null,
        beforeSubmit: function() {
            jQuery("#form-home-contact-container").block()
        }
    })
});
jQuery.validator.methods.date = function(n, t) {
    var i = n.match(/([0-9]+)/gi),
        r;
    return i ? (r = i[1] + "/" + i[0] + "/" + i[2], this.optional(t) || !/Invalid|NaN/.test(new Date(r))) : this.optional(t) || !1
};
jQuery(document).ready(function() {
    jQuery(".airport-autocomplete").selectize({
        valueField: "Airport_Code",
        searchField: ["Airport_Name", "Airport_Code", "City_Name", "City_Code"],
        closeAfterSelect: !0,
        maxItems: 1,
        options: [],
        create: !1,
        persist: !1,
        selectOnTab: !0,
        render: {
            option: function(n, t) {
                return '<div class="airport"><div class="name">' + t(n.Airport_Name) + " [" + n.Airport_Code + ']<\/div><div class="desc">' + t(n.City_Name + ", " + n.Country_Name) + "<\/div><\/div>"
            },
            item: function(n, t) {
                return "<div>" + t(n.Airport_Name) + " [" + n.Airport_Code + "]<\/div>"
            }
        },
        load: function(n, t) {
            if (!n.length) return t();
            jQuery.ajax({
                url: "/places/airports?q=" + encodeURIComponent(n),
                type: "GET",
                error: function() {
                    t()
                },
                success: function(n) {
                    var i = n.items.slice(0, 10);
                    t(i)
                }
            })
        }
    });
    jQuery(".city-autocomplete").selectize({
        valueField: "City_Code",
        searchField: ["Airport_Name", "Airport_Code", "City_Name", "City_Code"],
        closeAfterSelect: !0,
        maxItems: 1,
        options: [],
        create: !1,
        persist: !1,
        selectOnTab: !0,
        render: {
            option: function(n, t) {
                return '<div class="airport"><div class="name">' + t(n.Airport_Name) + " [" + n.Airport_Code + ']<\/div><div class="desc">' + t(n.City_Name + ", " + n.Country_Name) + "<\/div><\/div>"
            },
            item: function(n, t) {
                return "<div>" + t(n.City_Name) + ", " + n.Country_Name + " [" + n.City_Code + "]<\/div>"
            }
        },
        load: function(n, t) {
            if (!n.length) return t();
            jQuery.ajax({
                url: "/places/airports?q=" + encodeURIComponent(n),
                type: "GET",
                error: function() {
                    t()
                },
                success: function(n) {
                    var i = n.items.slice(0, 10);
                    t(i)
                }
            })
        }
    })
});
jQuery(document).ready(function() {
    jQuery("#form-package-search").validate({
        rules: {
            Origin: {
                required: !0,
                minlength: 3,
                maxlength: 3
            },
            Destination: {
                required: !0,
                minlength: 3,
                maxlength: 3
            }
        },
        messages: {
            Origin: {
                required: "Please enter the origin location.",
                minlength: "Please select a valid location.",
                maxlength: "Please select a valid location."
            },
            Destination: {
                required: "Please enter the origin location.",
                minlength: "Please select a valid location.",
                maxlength: "Please select a valid location."
            }
        },
        onsubmit: !0,
        ignore: []
    })
})