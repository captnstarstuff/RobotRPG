var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fc1c00e8-8d37-4c9b-b175-1ed0f19a50f0","824ae2e9-5d20-4dde-9000-4f0e459868fb","906e3414-188c-4232-b219-9e580392cae6","b11e0bca-c027-49ec-ab38-c769a0387892","7ff251ae-c056-4b19-a436-411c532a706b","6e8b42e8-00b6-4e89-b6d8-6b5827299056","3d22b20c-8aca-47e8-89dd-095fc0b49df9","bfd25828-8f73-4fef-9aaa-475dc4b0bb9b","bc6f5d6d-1554-4c77-b2fc-f55cc7f9f3bf","1cd175d6-9ad9-4dde-a81e-d3ce375d6789","62901e0a-f07c-4298-8c64-03e52a77af58"],"propsByKey":{"fc1c00e8-8d37-4c9b-b175-1ed0f19a50f0":{"sourceSize":{"x":167,"y":143},"frameSize":{"x":167,"y":143},"frameCount":1,"frameDelay":4,"name":"lives","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/fc1c00e8-8d37-4c9b-b175-1ed0f19a50f0.png","size":258,"version":"860i0FQsrXzSD2tr9Yrd_RbCmzZCsTfB","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/fc1c00e8-8d37-4c9b-b175-1ed0f19a50f0.png"},"824ae2e9-5d20-4dde-9000-4f0e459868fb":{"sourceSize":{"x":33,"y":52},"frameSize":{"x":33,"y":52},"frameCount":1,"frameDelay":4,"name":"roboBack","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/824ae2e9-5d20-4dde-9000-4f0e459868fb.png","size":2730,"version":"RlqkaHe.Tq6X_Py9Xd3CWwscLE__Y5n8","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/824ae2e9-5d20-4dde-9000-4f0e459868fb.png"},"906e3414-188c-4232-b219-9e580392cae6":{"sourceSize":{"x":33,"y":53},"frameSize":{"x":33,"y":53},"frameCount":1,"frameDelay":4,"name":"roboFront","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/906e3414-188c-4232-b219-9e580392cae6.png","size":2952,"version":"YQwOShCtQiYbPkbnmfr6A_1jfY_h.zzm","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/906e3414-188c-4232-b219-9e580392cae6.png"},"b11e0bca-c027-49ec-ab38-c769a0387892":{"sourceSize":{"x":33,"y":53},"frameSize":{"x":33,"y":53},"frameCount":1,"frameDelay":4,"name":"jeff","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/b11e0bca-c027-49ec-ab38-c769a0387892.png","size":2913,"version":"2TarCwSPgp2jb93gHdQe3LP1BaWedtqe","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/b11e0bca-c027-49ec-ab38-c769a0387892.png"},"7ff251ae-c056-4b19-a436-411c532a706b":{"sourceSize":{"x":33,"y":53},"frameSize":{"x":33,"y":53},"frameCount":1,"frameDelay":4,"name":"rb49","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/7ff251ae-c056-4b19-a436-411c532a706b.png","size":2823,"version":"jFp05Ztib4OPxergyfjEsFzpxUPSOcBH","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/7ff251ae-c056-4b19-a436-411c532a706b.png"},"6e8b42e8-00b6-4e89-b6d8-6b5827299056":{"sourceSize":{"x":23,"y":53},"frameSize":{"x":23,"y":53},"frameCount":1,"frameDelay":4,"name":"roboLeft","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/6e8b42e8-00b6-4e89-b6d8-6b5827299056.png","size":2298,"version":"JQ7QUUlnhyx14qNdRUt3vMjHwW85WdAb","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/6e8b42e8-00b6-4e89-b6d8-6b5827299056.png"},"3d22b20c-8aca-47e8-89dd-095fc0b49df9":{"sourceSize":{"x":23,"y":53},"frameSize":{"x":23,"y":53},"frameCount":1,"frameDelay":4,"name":"roboRight","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/3d22b20c-8aca-47e8-89dd-095fc0b49df9.png","size":2316,"version":"2QEntWb0aXIcm5vJdNUpYGSoxjvZ5wI.","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/3d22b20c-8aca-47e8-89dd-095fc0b49df9.png"},"bfd25828-8f73-4fef-9aaa-475dc4b0bb9b":{"sourceSize":{"x":225,"y":225},"frameSize":{"x":225,"y":225},"frameCount":1,"frameDelay":4,"name":"bg","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/bfd25828-8f73-4fef-9aaa-475dc4b0bb9b.png","size":6261,"version":"AMpqzZXlTcg8TO5sqpc4ve9L4vlGD06g","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/bfd25828-8f73-4fef-9aaa-475dc4b0bb9b.png"},"bc6f5d6d-1554-4c77-b2fc-f55cc7f9f3bf":{"sourceSize":{"x":810,"y":600},"frameSize":{"x":810,"y":600},"frameCount":1,"frameDelay":4,"name":"arrow","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/bc6f5d6d-1554-4c77-b2fc-f55cc7f9f3bf.png","size":27432,"version":"zUvr_sPJwQFb94EpRw_XsPP8ACmWUFIx","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/bc6f5d6d-1554-4c77-b2fc-f55cc7f9f3bf.png"},"1cd175d6-9ad9-4dde-a81e-d3ce375d6789":{"sourceSize":{"x":750,"y":920},"frameSize":{"x":750,"y":920},"frameCount":1,"frameDelay":4,"name":"battle","sourceUrl":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/1cd175d6-9ad9-4dde-a81e-d3ce375d6789.png","size":99871,"version":"BldgPTO2c8jDny.HSY9MSaL89FIlD_cQ","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/x-FvUMVjkUO_EVmv6qYp5dTwt_7FUGY_ksnQdXoSwwo/1cd175d6-9ad9-4dde-a81e-d3ce375d6789.png"},"62901e0a-f07c-4298-8c64-03e52a77af58":{"name":"chargePack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"RZ2staz05XRdb_n.MpZQ5V2MK7KBOv2w","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/62901e0a-f07c-4298-8c64-03e52a77af58.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//robot running out of power in an abandoned world, collects power to stay alive, tries to unravel the mystery of where humans went
var combat = false;
var projectileFacing = 0;
var energy = 100;
var energySpeed = 0;
var env = createGroup();
var clicksTraveled = 0;

var bg = createSprite(200, 200);
bg.setAnimation("bg");
bg.scale = 40;
env.add(bg);

var projectile = createSprite(700, 700, 10, 10);
var Eprojectile = createSprite(800, 700, 10, 10);

var chargePack = createSprite(450, 200);
chargePack.setAnimation("chargePack");
chargePack.scale = 0.02;
env.add(chargePack);


var jeff = createSprite(200, 150);
jeff.setAnimation("jeff");
jeff.scale = 1.8;
env.add(jeff);

var rb49 = createSprite(300, -200);
rb49.setAnimation("rb49");
rb49.scale = 1.3;
env.add(rb49);

var robot = createSprite(200, 200);
robot.setAnimation("roboBack");
robot.scale = 1.5;

var chargerPointer = createSprite(350, 50);
chargerPointer.setAnimation("arrow");
chargerPointer.scale = 0.1;

function draw() {
  chargerPointer.pointTo(chargePack.x, chargePack.y);
  if(energy >= 0 && combat == false) {
    energy -= 0.05;
  }
  energySpeed = energy/25;
  
  background("green");
  drawSprites();
  text(clicksTraveled, 25, 25);
  text(energy, 75, 25);
  if(robot.isTouching(chargePack)) {
    energy += 5;
    chargePack.y += randomNumber(-800, 800);
    chargePack.x += randomNumber(-800, 800);
  }
  
  if(robot.isTouching(rb49)) {
    robot.y = 300;
    rb49.x = 200;
    rb49.y = 100;
    combat = true;
    env.setSpeedAndDirectionEach(0, 0);
  }
  if(combat == false) {
    bg.setAnimation("bg");
    bg.scale = 40;
    robot.x = 200;
    robot.y = 200;
    roboControl();
  }
  if(combat == true) {
    bg.setAnimation("battle");
    bg.scale = 2;
    drawSprites();
    combatControl();
    follower();
    if(robot.x > 400) {
      combat = false;
    }
    if(robot.x < 0) {
      combat = false;
    }
    if(robot.y > 400) {
      combat = false;
    }
    if(robot.y < 0) {
      combat = false;
    }
  }
  
  jeffVanish();
  
  
  dialogue();
  
  
}

function dialogue() {
  if(robot.isTouching(jeff) && energy < 400) {
    text("Howdy, RB-23! You're lookin sluggish;", jeff.x - 100, jeff.y - 75);
    text("go get yo'self a power pack.", jeff.x - 75, jeff.y - 50);
  }
  if(robot.isTouching(rb49)) {
    text("It feels like something is draining me.", rb49.x - 100, rb49.y - 75);
    text("Well, at least I have a powerful charge pack.", rb49.x - 100, rb49.y - 50);
  }
}

function roboControl() {
  if(keyDown("up")) {
    env.setSpeedAndDirectionEach(energySpeed, 90);
    robot.setAnimation("roboBack");
    clicksTraveled += 1;
  }
  else if(keyDown("down")) {
    env.setSpeedAndDirectionEach(-energySpeed, 90);
    robot.setAnimation("roboFront");
    clicksTraveled += 1;
  }
  else if(keyDown("right")) {
    env.setSpeedAndDirectionEach(-energySpeed, 0);
    robot.setAnimation("roboRight");
    clicksTraveled += 1;
  }
  else if(keyDown("left")) {
    env.setSpeedAndDirectionEach(energySpeed, 0);
    robot.setAnimation("roboLeft");
    clicksTraveled += 1;
  }
  else {
    env.setSpeedAndDirectionEach(0, 0);
  }
  if(keyWentDown("r")) {
    clicksTraveled = 0;
  }
}

function jeffVanish() {
  if(jeff.x < -50 || jeff.x > 450 || jeff.y < -100 || jeff.y > 450) {
    jeff.x = 5000;
  }
}

function combatControl() {
  
  background("black");
  drawSprites();
  if (keyDown("left")){
    robot.x -= 7;
    projectile.x = robot.x;
    projectile.y = robot.y;
    robot.setAnimation("roboLeft");
  }
  if (keyDown("up")){
    robot.setAnimation("roboBack");
    projectile.velocityY = -3;
  }
  if (keyDown("right")){
    projectile.x = robot.x;
    projectile.y = robot.y;
    robot.x += 7;
    robot.setAnimation("roboRight");
  }
  if(rb49.velocityX  == 0) {
    Eprojectile.x = rb49.x;
    Eprojectile.x = rb49.y;
  }
  Eprojectile.velocityY = 4;
  
  
  
}

function follower() {
  if(rb49.x < robot.x) {
    rb49.x += 1;
  }
  if(rb49.x > robot.x) {
    rb49.x -= 1;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
