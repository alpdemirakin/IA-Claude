# 🚀 QUICK START GUIDE
## IA Independent Accountants & Advisors Website

---

## ⚡ IMMEDIATE NEXT STEPS

### 1. ADD YOUR LOGO (5 minutes)
Replace the logo files with your actual logos:

**From the images you provided:**
- Save Image 2 (with "Independent Accountants & Auditors" text) as: `/images/logo.png`
- Create a white version for: `/images/logo-white.png`

**Dimensions:**
- Recommended: 200px width, auto height
- Format: PNG with transparent background

---

### 2. ADD KEY IMAGES (15 minutes)

**Essential Images to Add:**

```
/images/hero-bg.jpg
→ Professional office or cityscape
→ Size: 1920x1080px
→ Modern, bright, professional

/images/office-team.jpg
→ Team photo or office interior
→ Size: 1200x800px
→ Shows professionalism and warmth

/images/cta-bg.jpg
→ Abstract business background
→ Size: 1920x600px
→ Blue tones preferred

/images/clients/
→ Client logos (6-12 logos)
→ Size: 300x150px each
→ PNG with transparent background
→ Grayscale or color
```

---

### 3. UPDATE CONTACT INFO (10 minutes)

**Find and replace in ALL HTML files:**

```
+90 212 XXX XX XX → Your actual phone
info@ia.com.tr → Keep or update
90XXXXXXXXXX → WhatsApp number (without +)
```

**Search for:** `XXX XX XX` to find all instances

**Update address in contact.html:**
```
Current: Nisbetiye Cad. No:12, Beşiktaş, İstanbul 34337
Replace with: Your actual address
```

---

### 4. CONFIGURE GOOGLE MAPS (5 minutes)

**In contact.html, find:**
```html
<iframe src="https://www.google.com/maps/embed?pb=..."
```

**Replace with:**
1. Go to Google Maps
2. Search your office address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace existing iframe

---

### 5. TEST LOCALLY (10 minutes)

**Open in browser:**
```
index.html → Check homepage
about.html → Check about page
services.html → Check services
contact.html → Check contact form
```

**Test checklist:**
- [ ] Logo displays correctly
- [ ] Images load (or show alt text)
- [ ] Navigation works
- [ ] Mobile menu opens/closes
- [ ] Language switcher works
- [ ] Forms show validation
- [ ] Footer looks good

---

### 6. ADD SOCIAL MEDIA LINKS (5 minutes)

**Find in footer of each HTML file:**
```html
<div class="social-links">
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
</div>
```

**Replace # with your URLs:**
```html
<a href="https://linkedin.com/company/ia-accountants">
<a href="https://twitter.com/ia_accountants">
<a href="https://facebook.com/ia.accountants">
<a href="https://instagram.com/ia.accountants">
```

---

## 🎨 CONTENT PRIORITIES

### High Priority (Complete First)
1. ✅ Homepage - Already done
2. ✅ About page - Already done
3. ✅ Services overview - Already done
4. ✅ Contact page - Already done

### Medium Priority (Create Next)
5. ⏳ Individual service pages (4 pages)
6. ⏳ Publications page
7. ⏳ Proposal/Request form page

### Low Priority (Can do later)
8. ⏳ Careers page
9. ⏳ Blog/News page
10. ⏳ Individual publication detail pages

---

## 📝 CONTENT TEMPLATE FOR SERVICE PAGES

**Copy this structure for each service page:**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[SERVICE NAME] - IA Independent Accountants & Advisors">
    <title>[SERVICE NAME] - IA Independent Accountants & Advisors</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Copy header from services.html -->
    
    <section class="page-header">
        <div class="container">
            <h1>[SERVICE NAME]</h1>
            <p>[Service tagline]</p>
        </div>
    </section>

    <section class="section-padding">
        <div class="container">
            <div class="service-detail">
                <h2>Hizmet Detayları</h2>
                <p>[Service description...]</p>
                
                <div class="service-benefits">
                    <h3>Faydaları</h3>
                    <ul>
                        <li>Fayda 1</li>
                        <li>Fayda 2</li>
                        <li>Fayda 3</li>
                    </ul>
                </div>

                <a href="proposal.html" class="btn btn-primary btn-large">Teklif Al</a>
            </div>
        </div>
    </section>

    <!-- Copy footer from services.html -->
    
    <!-- Copy scripts from services.html -->
</body>
</html>
```

---

## 🌐 DEPLOYMENT CHECKLIST

### Before Uploading to Server:

1. **Files Ready:**
   - [ ] All images added
   - [ ] Logo files in place
   - [ ] Contact info updated
   - [ ] Social links updated
   - [ ] Google Maps configured

2. **Test Everything:**
   - [ ] All pages open correctly
   - [ ] Navigation works
   - [ ] Mobile responsive
   - [ ] Forms work
   - [ ] No broken images

3. **Upload to Server:**
   ```
   Upload entire ia-website folder
   Maintain directory structure
   Set proper permissions (755 for folders, 644 for files)
   ```

4. **Configure Domain:**
   ```
   Point ia.com.tr to your server
   Enable SSL certificate (Let's Encrypt recommended)
   Set up redirects (www to non-www or vice versa)
   ```

5. **Post-Launch:**
   - [ ] Test on live server
   - [ ] Submit to Google Search Console
   - [ ] Set up Google Analytics
   - [ ] Test form submissions
   - [ ] Check mobile performance

---

## 🔧 COMMON ISSUES & SOLUTIONS

### Issue: Logo not showing
**Solution:** Check file path and name match exactly: `/images/logo.png`

### Issue: Mobile menu not working
**Solution:** Check that `js/main.js` is loading correctly

### Issue: Forms not submitting
**Solution:** Need to configure backend (see README.md)

### Issue: Images not loading
**Solution:** Check file paths and upload all images to `/images/` folder

### Issue: Language switcher not working
**Solution:** Clear browser cache and localStorage

---

## 📞 QUICK CONTACT UPDATE GUIDE

**File:** All HTML files (footer section)

**Find this block:**
```html
<div class="contact-info">
    <p><i class="fas fa-phone"></i> +90 212 XXX XX XX</p>
    <p><i class="fas fa-envelope"></i> info@ia.com.tr</p>
</div>
```

**Update with your info:**
```html
<div class="contact-info">
    <p><i class="fas fa-phone"></i> +90 212 [YOUR NUMBER]</p>
    <p><i class="fas fa-envelope"></i> [YOUR EMAIL]</p>
</div>
```

**Also update WhatsApp button:**
```html
<a href="https://wa.me/90[YOURNUMBER]" class="whatsapp-float">
```

---

## 🎯 FIRST DAY ACTION PLAN

**Hour 1:**
- [ ] Add logos
- [ ] Update contact information
- [ ] Add hero background image

**Hour 2:**
- [ ] Add team/office photo
- [ ] Configure Google Maps
- [ ] Add social media links

**Hour 3:**
- [ ] Test all pages locally
- [ ] Fix any issues
- [ ] Prepare for upload

**Hour 4:**
- [ ] Upload to server
- [ ] Test live website
- [ ] Configure SSL

---

## 💡 PRO TIPS

1. **Keep it Simple:** Start with core pages, add more later
2. **Test Mobile First:** Most visitors will be on mobile
3. **Use Real Photos:** Stock photos are okay, but real team photos build trust
4. **Update Regularly:** Add new publications monthly
5. **Monitor Analytics:** Track which services get most views
6. **Fast Loading:** Compress all images before uploading
7. **Backup Everything:** Keep backups of all files

---

## 📚 HELPFUL RESOURCES

**Free Image Sources:**
- Unsplash.com (professional business photos)
- Pexels.com (office and team photos)
- Pixabay.com (business imagery)

**Image Optimization:**
- TinyPNG.com (compress images)
- Squoosh.app (resize and optimize)

**Testing:**
- PageSpeed Insights (performance)
- Mobile-Friendly Test (Google)
- W3C Validator (HTML validation)

---

## ✅ COMPLETION CHECKLIST

**Phase 1 - Immediate (Today):**
- [ ] Logo added
- [ ] Contact info updated
- [ ] Hero image added
- [ ] Test locally

**Phase 2 - This Week:**
- [ ] All images added
- [ ] Google Maps configured
- [ ] Social media linked
- [ ] Upload to server
- [ ] SSL configured

**Phase 3 - This Month:**
- [ ] Service detail pages completed
- [ ] Publications page created
- [ ] Form backend configured
- [ ] Google Analytics set up
- [ ] SEO optimization

---

## 🎉 YOU'RE READY!

Your website foundation is complete and professional. Follow this guide step by step, and you'll have a live, functioning website very soon!

**Remember:**
- Don't rush - quality over speed
- Test everything before going live
- Start simple, add features gradually
- Keep content updated regularly

**Good luck with your launch! 🚀**

---

**Need Help?**
- Check README.md for detailed documentation
- Review PROJECT_SUMMARY.md for complete specifications
- All code is commented and easy to modify

**Last Updated:** November 11, 2025
