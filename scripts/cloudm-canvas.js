window.onload = function() { 
    // Colour variables
    const colorWhite = "#FFFFFF"
    const colorGrey = "#939393";
    const colorOrange = "#ED730D";
    const colorLighGrey = "#E2E2E2";
    const colorDarkGrey = "#555555";
    const colorBlue = "#128CF2";
    const colorYellow = "#FABD14";
    const colorRed = "#E30817"
    // Font variable.
    const fontMontSerrat = "Montserrat, Arial, Helvetica, sans-serif";
    const fontCoHeadline = "'co-headline-bold', Arial, Helvetica, sans-serif";
    // Link variables - only requires relative URL.
    // Outer Circle
    const moversLink = '' // populates both title and circle links.
    const joinersLink = ''
    const automateLink = ''
    const joinersLink1 = '' // refers to link at the top.
    const joinersLink2 = 'www.google.com'
    const joinersLink3 = ''
    const moversLink1 = ''
    const automateLink1 = ''
    // Migrate / Starters Branch
    const migrateCircleLink = ''
    const migrateLink1 = '' // refers to link at the top.
    const migrateLink2 = ''
    const migrateLink3 = ''
    const startersCircleLink = ''
    const startersLink1 = '' // refers to link at the top.
    const startersLink2 = ''
    const startersLink3 = ''
    // Leavers / Archive Branch
    const leaversCircleLink = ''
    const leaversLink1 = '' // refers to link at the top.
    const leaversLink2 = ''
    const archiveCircleLink = ''
    const archiveLink1 = '' // refers to link at the top.
    const archiveLink2 = ''

    var width = 2560;
    var height = 1330;

    var stage = new Konva.Stage({
      container: 'cloudm-canvas',
      width: width,
      height: height,
    });
    var layer = new Konva.Layer();
    stage.add(layer);

    // Inner circle section.
    var innerCircle = new Konva.Circle({
      x: 1800,
      y: stage.height() / 2,
      radius: 200,
      fill: colorLighGrey,
    });

    var innerCircleText = new Konva.Text({
        x: 1705,
        y: 740,
        text: 'Avoid vendor lock in',
        fontSize: 24,
        fontFamily: 'Calibri', // change to variable
        fill: colorOrange,
    });

    var innerCircleGoogleLogo = new Image();
    innerCircleGoogleLogo.onload = function () {
      var innerCircleGoogleLogoImage = new Konva.Image({
        x: 1620,
        y: 620,
        image: innerCircleGoogleLogo,
        width: 100,
        height: 100,
      });
      layer.add(innerCircleGoogleLogoImage);
      innerCircleGoogleLogoImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      innerCircleGoogleLogoImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    innerCircleGoogleLogo.src = './assets/google-logo.svg';

    var innerCircleMicrosoft365Logo = new Image();
    innerCircleMicrosoft365Logo.onload = function () {
      var innerCircleMicrosoft365LogoImage = new Konva.Image({
        x: 1875,
        y: 620,
        image: innerCircleMicrosoft365Logo,
        width: 100,
        height: 100,
      });
      layer.add(innerCircleMicrosoft365LogoImage);
      innerCircleMicrosoft365LogoImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      innerCircleMicrosoft365LogoImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    }
    innerCircleMicrosoft365Logo.src = "./assets/microsoft365-logo.svg";

    var innerCircleTwoWayArrow = new Image();
    innerCircleTwoWayArrow.onload = function () {
      var innerCircleTwoWayArrowImage = new Konva.Image({
        x: 1755,
        y: 642.5,
        image: innerCircleTwoWayArrow,
        width: 82.5,
        height: 49.5,
      });
      layer.add(innerCircleTwoWayArrowImage);
    }
    innerCircleTwoWayArrow.src = "./assets/two-way-dotted-arrow.svg";

    // Outer circle section.
    var outerCircle = new Konva.Circle({
      x: 1800,
      y: stage.height() / 2,
      radius: 350,
      fill: 'transparent',
      stroke: colorGrey,
      strokeWidth: 15
    });

    var outerCircleMoversBackground = new Konva.Circle({
      x: 1385 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleMovers = new Image();
    outerCircleMovers.onload = function () {
      var outerCircleMoversImage = new Konva.Image({
        x: 1385,
        y: 595,
        image: outerCircleMovers,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleMoversImage);
      outerCircleMoversImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleMoversImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    outerCircleMovers.src = './assets/movers-circle.svg';

    var outerCircleMoversTitle = new Konva.Text({
      x: 1200,
      y: 646,
      text: 'Movers',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorOrange
    });

    var outerCircleMoversLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Least Privilege Access',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var outerCircleJoinersBackground = new Konva.Circle({
      x: 1720 + 70,
      y: 250 + 70,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleJoiners = new Image();
    outerCircleJoiners.onload = function () {
      var outerCircleJoinersImage = new Konva.Image({
        x: 1720,
        y: 250,
        image: outerCircleJoiners,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleJoinersImage);
      outerCircleJoinersImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleJoinersImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
      outerCircleJoinersImage.on('click', function () {
        joinersZoomIn.play();
      });
    };
    outerCircleJoiners.src = './assets/joiners-circle.svg';

    var outerCircleJoinersBackButton = new Image();
    outerCircleJoinersBackButton.onload = function () {
      var outerCircleJoinersBackButtonImage = new Konva.Image({
        x: 1856,
        y: 248,
        image: outerCircleJoinersBackButton,
        width: 42,
        height: 25,
        visible: false,
        opacity: 0
      });
      layer.add(outerCircleJoinersBackButtonImage);
      outerCircleJoinersBackButtonImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleJoinersBackButtonImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
      outerCircleJoinersBackButtonImage.on('click', function () {
        joinersZoomOut.play();
      });
    };
    outerCircleJoinersBackButton.src = './assets/back-arrows/orange-back-arrow.svg';

    var outerCircleJoinersTitle = new Konva.Text({
      x: 1720,
      y: 200,
      text: 'Joiners',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorOrange
    });

    var outerCircleJoinersLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'SaaS License Management',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      opacity: 0,
      visible: false,
      name: joinersLink1
    });

    var outerCircleJoinersLink2 = new Konva.Text({
      x: 1690,
      y: 130,
      text: 'Email Signatures',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      opacity: 0,
      visible: false,
      name: joinersLink2
    });

    var outerCircleJoinersLink3 = new Konva.Text({
      x: 1670,
      y: 95,
      text: 'Files/Folder/Calendar',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      opacity: 0,
      visible: false,
      name: joinersLink3
    });

    var outerCircleAutomateBackground = new Konva.Circle({
      x: 2075 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleAutomate = new Image();
    outerCircleAutomate.onload = function () {
      var outerCircleAutomateImage = new Konva.Image({
        x: 2075,
        y: 595,
        image: outerCircleAutomate,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleAutomateImage);
      outerCircleAutomateImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleAutomateImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    outerCircleAutomate.src = './assets/automate-circle.svg';

    var outerCircleAutomateTitle = new Konva.Text({
      x: 2250,
      y: 646,
      text: 'Automate',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorOrange
    });

    var outerCircleAutomateLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Smart Teams',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    // Migrate / Starters branch section.
    var topBranch = new Image();
    topBranch.onload = function () {
      var topBranchImage = new Konva.Image({
        x: 720,
        y: 150,
        image: topBranch,
        width: 1000,
        height: 350,
      });
      layer.add(topBranchImage);
      
    };
    topBranch.src = './assets/dotted-branch-left.svg';

    var topBranchMigrateTitle = new Konva.Text({
      x: 413,
      y: 135,
      text: 'Migrate',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorBlue
    });

    var topBranchMigrateLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'File & Email',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchMigrateLink2 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Mergers & Acquisition',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchMigrateLink3 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Domain Consolidation',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchMigrateBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var topBranchMigrate = new Image();
    topBranchMigrate.onload = function () {
      var topBranchMigrateImage = new Konva.Image({
        x: 600,
        y: 84,
        image: topBranchMigrate,
        width: 140,
        height: 140,
      });
      layer.add(topBranchMigrateImage);
      topBranchMigrateImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      topBranchMigrateImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    topBranchMigrate.src = './assets/migrate-circle.svg';

    var topBranchStartersTitle = new Konva.Text({
      x: 413,
      y: 472,
      text: 'Starters',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorYellow
    });

    var topBranchStartersBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    
    var topBranchStartersLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'HR Integration',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchStartersLink2 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'IDM Integration',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchStartersLink3 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'AD Integration',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var topBranchStarters = new Image();
    topBranchStarters.onload = function () {
      var topBranchStartersImage = new Konva.Image({
        x: 600,
        y: 420,
        image: topBranchStarters,
        width: 140,
        height: 140,
      });
      layer.add(topBranchStartersImage);
      topBranchStartersImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      topBranchStartersImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    topBranchStarters.src = './assets/starters-circle.svg';

    // Leavers / Archive branch section.
    var bottomBranch = new Image();
    bottomBranch.onload = function () {
      var bottomBranchImage = new Konva.Image({
        x: 720,
        y: 830,
        image: bottomBranch,
        width: 1000,
        height: 350,
      });
      layer.add(bottomBranchImage);
    };
    bottomBranch.src = './assets/dotted-branch-left.svg';

    var bottomBranchLeaversTitle = new Konva.Text({
      x: 413,
      y: 815,
      text: 'Leavers',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorRed
    });

    var bottomBranchLeaversLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Revoke Access',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var bottomBranchLeaversLink2 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Migrate Emails',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var bottomBranchLeaversBackground = new Konva.Circle({
      x: 100 + 70,
      y: 800,
      radius: 69,
      fill: colorWhite,
    });

    var bottomBranchLeavers = new Image();
    bottomBranchLeavers.onload = function () {
      var bottomBranchLeaversImage = new Konva.Image({
        x: 600,
        y: 765,
        image: bottomBranchLeavers,
        width: 140,
        height: 140,
      });
      layer.add(bottomBranchLeaversImage);
      bottomBranchLeaversImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      bottomBranchLeaversImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    bottomBranchLeavers.src = './assets/leavers-circle.svg';

    var bottomBranchArchiveTitle = new Konva.Text({
      x: 413,
      y: 1150,
      text: 'Archive',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontCoHeadline,
      fill: colorDarkGrey
    });

    var bottomBranchhArchiveLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Archive Data',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var bottomBranchArchiveLink2 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'Search And Restore',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var bottomBranchArchiveBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var bottomBranchArchive = new Image();
    bottomBranchArchive.onload = function () {
      var bottomBranchArchiveImage = new Konva.Image({
        x: 600,
        y: 1100,
        image: bottomBranchArchive,
        width: 140,
        height: 140,
      });
      layer.add(bottomBranchArchiveImage);
      bottomBranchArchiveImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      bottomBranchArchiveImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    bottomBranchArchive.src = './assets/archive-circle.svg';

  // ** BUNDLED EVENTS TO BE MOVED INTO "cloudm-canvas-events.js" **
  // ** OUTER CIRCLE **
  // Movers - Click
  // Joiners - Click
  outerCircleJoinersTitle.on('click', function () {
    outerCircleJoinersLink1.show();
    outerCircleJoinersLink2.show();
    outerCircleJoinersLink3.show();
    joinersZoomIn.play();
  });
  // Automate - Click
    // add the shapes to the layer
    layer.add(innerCircle);
    layer.add(innerCircleText);
    layer.add(outerCircle);
    layer.add(outerCircleMoversBackground);
    layer.add(outerCircleJoinersBackground);
    layer.add(outerCircleAutomateBackground);
    layer.add(outerCircleMoversTitle);
    layer.add(outerCircleJoinersTitle);
    layer.add(outerCircleAutomateTitle);
    layer.add(topBranchMigrateBackground);
    layer.add(topBranchMigrateTitle);
    layer.add(topBranchStartersBackground);
    layer.add(topBranchStartersTitle);
    layer.add(bottomBranchLeaversTitle);
    layer.add(bottomBranchLeaversBackground);
    layer.add(bottomBranchArchiveTitle);
    layer.add(bottomBranchArchiveBackground);
    layer.add(outerCircleJoinersLink1);
    layer.add(outerCircleJoinersLink2);
    layer.add(outerCircleJoinersLink3);

    function fitStageIntoParentContainer() {
      var container = document.querySelector('#cloudm-canvas');

      // now we need to fit stage into parent container
      var containerWidth = container.offsetWidth;

      // but we also make the full scene visible
      // so we need to scale all objects on canvas
      var scale = containerWidth / width;

      stage.width(width * scale);
      stage.height(height * scale);
      stage.scale({ x: scale, y: scale });
    }

    fitStageIntoParentContainer();
    // adapt the stage on any window resize
    window.addEventListener('resize', fitStageIntoParentContainer);

    function navigatePage(url) {
      location.assign(url); 
    }

    // ** Tweens (Strictly used for Zoom in / out animations). **
    // Joiners
    var joinersZoomIn = new Konva.Tween({
      node: stage,
      duration: 1,
      offsetX: 1300, 
      offsetY: 50,
      scaleX: 3,
      scaleY: 3,
      easing: Konva.Easings.EaseInOut,
      onFinish: function () {
        unhideNodesTween([outerCircleJoinersLink1, outerCircleJoinersLink2, outerCircleJoinersLink3]);
        // Add remove / add click event listeners.
      },
    });
    var joinersZoomOut = new Konva.Tween({
      node: stage,
      duration: 1,
      offsetX: 0, 
      offsetY: 0,
      scaleX: 1,
      scaleY: 1,
      easing: Konva.Easings.EaseInOut,
      onFinish: function () {
        // Add remove / add click event listeners.
      },
    });

    function unhideNodesTween(nodeArray) {
      // Setting a timeout value to increment on each iteration. 
      var timeOutValue = 0;
      nodeArray.forEach(function(singleNode) {
        console.log(singleNode);
        var unhideNode = new Konva.Tween({
          node: singleNode,
          duration: 1,
          visible: true,
          opacity: 1,
          easing: Konva.Easings.EaseInOut,
        });
        if(timeOutValue >= 400) {
          setTimeout(function () {
            unhideNode.play();
          }, timeOutValue);
        } else {
          unhideNode.play();
        }
        timeOutValue += 400;
      });
    }

    // Creating to loop through and apply similar styling to objects.
    var drawnNodesArray = [innerCircleText, outerCircleMoversTitle, outerCircleJoinersTitle, outerCircleJoinersLink1, outerCircleJoinersLink2, outerCircleJoinersLink3, 
      outerCircleAutomateTitle, outerCircleMoversLink1, outerCircleAutomateLink1, topBranchMigrateLink1, topBranchMigrateLink2, topBranchMigrateLink3, topBranchMigrateTitle, 
      topBranchStartersLink1, topBranchStartersLink2, topBranchStartersLink3, bottomBranchArchiveTitle ,bottomBranchhArchiveLink1, bottomBranchArchiveLink2, bottomBranchLeaversTitle,
      bottomBranchLeaversLink1, bottomBranchArchiveLink2, topBranchStartersTitle];
  
      drawnNodesArray.forEach(function(singleNode) {
        singleNode.on('mouseover', function () {
          stage.container().style.cursor = 'pointer';
          singleNode.textDecoration('underline');
        });
        singleNode.on('mouseleave', function () {
          stage.container().style.cursor = 'default';
          singleNode.textDecoration('');
        });
        // singleNode.on('click', function () {
        //   if (singleNode.name) {
        //     location.assign(singleNode.name());
        //   }
        // });
      });
}