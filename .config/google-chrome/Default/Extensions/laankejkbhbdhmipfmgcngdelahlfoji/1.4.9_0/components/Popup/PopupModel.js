define(["core/Logger","core/vendor/DropletJS.Class.min","core/vendor/DropletJS.PubSub.min","core/DomainParser"],function(e,t,n,r){function s(){return chrome.extension.getBackgroundPage()}return t.create({url:null,timer:null,status:null,fullDomain:null,baseDomain:null,construct:function(){this.url=s().StayFocusd.currentURL,this.status="INACTIVE",this.fullDomain=r.extractFullDomain(this.url),this.baseDomain=r.extractBaseDomain(this.url)},init:function(){var e=chrome.runtime.connect({name:"popup"}),t=this;e.onMessage.addListener(function(e){e.message==="StayFocusd.timer.updated"&&t.updateTimer(e.payload.displayTimer)})},updateTimer:function(e){this.timer=e,this.updateStatus(),n.publish("PopupModel.timer.updated",{timer:this.timer})},updateStatus:function(){var e=this.status;s().NuclearOption.isActive()?this.status="NUCLEAR":s().StayFocusd.isActive()===!1?this.status="INACTIVE":this.status="ACTIVE"},isActive:function(){return this.status==="ACTIVE"},isNuclear:function(){return this.status==="NUCLEAR"}})});