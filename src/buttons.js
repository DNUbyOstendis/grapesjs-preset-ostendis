define(function() {
  const tltPosAttr = 'data-tooltip-pos';

  return (opt = {}) => {
    let editor = opt.editor;
    let pnm = editor.Panels;
    let optPanel = pnm.getPanel('options');
    if(optPanel){
      // Fix tooltip position
      var cmdBtns = optPanel.get('buttons');
      cmdBtns.each((btn) => {
        var attrs = btn.get('attributes');
        attrs[tltPosAttr] = 'bottom';
        btn.set('attributes', attrs);
      });
      // Remove preview
      let prvBtn = pnm.addButton('options', 'preview');
      prvBtn && cmdBtns.remove(prvBtn);
    }
    // Clean commands panel
    let cmdPanel = pnm.getPanel('commands');
    if(cmdPanel){
      let cmdBtns = cmdPanel.get('buttons');
      cmdBtns.reset();
    }
    // Turn off default devices select and create new one
    editor.getConfig().showDevices = 0;
    let devicePanel = pnm.addPanel({
      id: 'devices-c'
    });
    let deviceBtns = devicePanel.get('buttons');
    devicePanel.get('buttons').add([{
      id: 'deviceDesktop',
      command: 'set-device-desktop',
      className: 'fa fa-desktop',
      attributes: {[tltAttr]: opt.cmdBtnDesktopLabel},
      active: 1,
    }, {
      id: 'deviceTablet',
      command: 'set-device-tablet',
      className: 'fa fa-tablet',
      attributes: {[tltAttr]: opt.cmdBtnTabletLabel},
    }, {
      id: 'deviceMobile',
      command: 'set-device-mobile',
      className: 'fa fa-mobile',
      attributes: {[tltAttr]: opt.cmdBtnMobileLabel},
    }])
    updateTooltip(deviceBtns);
  };
})
