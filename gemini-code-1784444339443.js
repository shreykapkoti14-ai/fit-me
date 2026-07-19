/**
 * FIT ME® - Enterprise Grade High Performance Core System Code
 * Engineered to eliminate layout loops and track metrics via passive inputs.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Performance Responsive Drawer Menu Layer ---
    const menuBurger = document.querySelector('.burger');
    const linksContainer = document.querySelector('.nav-links');
    const interfaceAnchors = document.querySelectorAll('.nav-links a');

    if (menuBurger && linksContainer) {
        const structuralToggle = () => {
            const isOpened = linksContainer.classList.toggle('nav-active');
            menuBurger.classList.toggle('toggle');
            menuBurger.setAttribute('aria-expanded', isOpened);
        };
        menuBurger.addEventListener('click', structuralToggle);
        interfaceAnchors.forEach(a => a.addEventListener('click', () => {
            linksContainer.classList.remove('nav-active');
            menuBurger.classList.remove('toggle');
            menuBurger.setAttribute('aria-expanded', 'false');
        }));
    }

    // --- Dynamic Tier Selector Autofill Concatenation Engine ---
    const planTriggerCTA = document.querySelectorAll('.select-tier-btn');
    const coreTextAreaNode = document.getElementById('contactMessage');
    
    planTriggerCTA.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetedTier = trigger.getAttribute('data-plan');
            if (coreTextAreaNode) {
                coreTextAreaNode.value = `Hello, I want to initiate a formal request for information regarding the ${targetedTier}. Please verify availability window allocation options.`;
                coreTextAreaNode.dispatchEvent(new Event('input'));
                
                const targetDomNode = document.getElementById('contact');
                if (targetDomNode) {
                    window.scrollTo({
                        top: targetDomNode.offsetTop - 120,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Production Input Verification Utilities ---
    const bindInputValidationCheck = (inputTargetId, statusBoxId, constraintRule) => {
        const inputField = document.getElementById(inputTargetId);
        const errorFeedback = document.getElementById(statusBoxId);
        if (!inputField || !errorFeedback) return () => true;

        const executeEvaluation = () => {
            const warningText = constraintRule(inputField.value.trim());
            errorFeedback.textContent = warningText;
            if (warningText) {
                inputField.classList.add('input-invalid');
                return false;
            }
            inputField.classList.remove('input-invalid');
            return true;
        };

        inputField.addEventListener('input', executeEvaluation);
        inputField.addEventListener('blur', executeEvaluation);
        return executeEvaluation;
    };

    // Form Field Execution Instances
    const evaluateNameInput = bindInputValidationCheck('contactName', 'nameError', val => !val ? 'Full Name verification required.' : val.length < 3 ? 'Name must exceed 2 characters.' : '');
    const evaluateEmailInput = bindInputValidationCheck('contactEmail', 'emailError', val => !val ? 'Email address entry required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Provide a valid email format.' : '');
    const evaluatePhoneInput = bindInputValidationCheck('contactPhone', 'phoneError', val => !val ? 'Mobile number required.' : !/^[6-9]\d{9}$/.test(val) ? 'Provide a valid 10-digit Indian mobile number.' : '');
    const evaluateMessageInput = bindInputValidationCheck('contactMessage', 'messageError', val => !val ? 'Please detail your inquiry message.' : val.length < 10 ? 'Message parameters must exceed 10 characters.' : '');
    const evaluateNewsletterInput = bindInputValidationCheck('newsEmail', 'newsEmailError', val => !val ? 'Email designation required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Invalid email format.' : '');

    // Submission Matrix
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const validName = evaluateNameInput();
        const validEmail = evaluateEmailInput();
        const validPhone = evaluatePhoneInput();
        const validMessage = evaluateMessageInput();

        if (validName && validEmail && validPhone && validMessage) {
            alert('Verification confirmed. Your parameters have been saved into the secure system registry.');
            this.reset();
        }
    });

    document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        if (evaluateNewsletterInput()) {
            alert('Subscribed successfully.');
            this.reset();
        }
    });

    // --- Interactive Biometrics Calculation System Engine ---
    const formBmiNode = document.getElementById('bmiForm');
    const blockBmiOutput = document.getElementById('bmiResult');
    const textBmiScore = document.getElementById('bmiValue');
    const textBmiStatus = document.getElementById('bmiStatus');
    const evaluateWeightConstraint = bindInputValidationCheck('weight', 'weightError', val => { const n = parseFloat(val); return (isNaN(n) || n < 10 || n > 300) ? 'Enter a valid weight profile (10kg - 300kg).' : ''; });
    const evaluateHeightConstraint = bindInputValidationCheck('height', 'heightError', val => { const n = parseFloat(val); return (isNaN(n) || n < 50 || n > 250) ? 'Enter a valid height profile (50cm - 250cm).' : ''; });

    formBmiNode?.addEventListener('submit', function(e) {
        e.preventDefault();
        if (evaluateWeightConstraint() && evaluateHeightConstraint()) {
            const rawW = parseFloat(document.getElementById('weight').value);
            const rawH = parseFloat(document.getElementById('height').value) / 100;
            const finalScore = (rawW / (rawH * rawH)).toFixed(1);
            let ratingText = '', rowIdentity = '';

            document.querySelectorAll('.matrix-row').forEach(row => row.classList.remove('active-row'));

            if (finalScore < 18.5) { ratingText = 'Underweight Baseline'; rowIdentity = 'range-under'; }
            else if (finalScore <= 24.9) { ratingText = 'Optimal Operational Range'; rowIdentity = 'range-normal'; }
            else if (finalScore <= 29.9) { ratingText = 'Overweight Profile'; rowIdentity = 'range-over'; }
            else { ratingText = 'Clinical Obese Classification'; rowIdentity = 'range-obese'; }

            textBmiScore.textContent = finalScore;
            textBmiStatus.textContent = ratingText;
            document.getElementById(rowIdentity)?.classList.add('active-row');
            blockBmiOutput.classList.remove('hidden');
        }
    });

    // --- Dynamic Counter Numerical Ticker System ---
    const metricNodes = document.querySelectorAll('.counter-num');
    const initiateCounterTicks = (domNode) => {
        const finalLimit = +domNode.getAttribute('data-target');
        const totalDuration = 1200; 
        const timingInterval = Math.max(Math.floor(totalDuration / finalLimit), 10);
        let dynamicStartValue = 0;
        const mathematicalJump = Math.ceil(finalLimit / (totalDuration / timingInterval));

        const counterIntervalLoop = setInterval(() => {
            dynamicStartValue += mathematicalJump;
            if (dynamicStartValue >= finalLimit) {
                domNode.innerText = finalLimit.toLocaleString() + (finalLimit === 100 ? '' : '+');
                clearInterval(counterIntervalLoop);
            } else {
                domNode.innerText = dynamicStartValue;
            }
        }, timingInterval);
    };

    // --- Scroll Reveal Interface & Intersection Observer Engine ---
    const visualRevealElements = document.querySelectorAll('.reveal');
    let numbersTracked = false;

    const runtimeIntersectionObserver = new IntersectionObserver((observedEntries) => {
        observedEntries.forEach(item => {
            if (item.isIntersecting) {
                item.target.classList.add('visible');
                if (item.target.id === 'metrics' && !numbersTracked) {
                    metricNodes.forEach(node => initiateCounterTicks(node));
                    numbersTracked = true;
                }
            }
        });
    }, { root: null, threshold: 0.08, rootMargin: '0px' });

    visualRevealElements.forEach(element => runtimeIntersectionObserver.observe(element));
    const structuralMetricsId = document.getElementById('metrics');
    if (structuralMetricsId) runtimeIntersectionObserver.observe(structuralMetricsId);

    // --- Passive Section Navigation Target Highlighter ---
    const coreDomSections = document.querySelectorAll('section[id]');
    const optimizeScrollThrottling = (func) => {
        let insideFrame = false;
        return () => {
            if (!insideFrame) {
                window.requestAnimationFrame(() => {
                    func();
                    insideFrame = false;
                });
                insideFrame = true;
            }
        };
    };

    const runActiveSectionAudit = () => {
        const topViewportPosition = window.pageYOffset;
        coreDomSections.forEach(block => {
            const calculatedTop = block.offsetTop - 180;
            const calculatedBottom = calculatedTop + block.offsetHeight;
            const identifier = block.getAttribute('id');
            if (topViewportPosition > calculatedTop && topViewportPosition <= calculatedBottom) {
                document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
                document.querySelector(`.nav-links a[href*="${identifier}"]`)?.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', optimizeScrollThrottling(runActiveSectionAudit));

    // --- Accordion Component Logic (FAQ Engine) ---
    document.querySelectorAll('.luxury-accordion .accordion-header').forEach(headerBlock => {
        headerBlock.addEventListener('click', () => {
            const structuralParentItem = headerBlock.parentElement;
            const absoluteContentChild = headerBlock.nextElementSibling;
            const calculatedCurrentState = structuralParentItem.classList.contains('active');
            
            document.querySelectorAll('.luxury-accordion .accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                item.querySelector('.accordion-content').style.maxHeight = null;
                item.querySelector('.accordion-icon-box i').className = "fa-solid fa-plus";
            });

            if (!calculatedCurrentState) {
                structuralParentItem.classList.add('active');
                headerBlock.setAttribute('aria-expanded', 'true');
                absoluteContentChild.style.maxHeight = absoluteContentChild.scrollHeight + "px";
                structuralParentItem.querySelector('.accordion-icon-box i').className = "fa-solid fa-minus";
            }
        });
    });

    // --- Scroll-To-Top Control Widget ---
    const topAscendWidget = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', optimizeScrollThrottling(() => {
        if (window.pageYOffset > 500) {
            topAscendWidget?.classList.add('widget-visible');
        } else {
            topAscendWidget?.classList.remove('widget-visible');
        }
    }));
    topAscendWidget?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});