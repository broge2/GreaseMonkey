// ==UserScript==
// @name        BB - Announcemnt - Not Date Restricted
// @namespace   channel1450
// @description Changes duration to Not Date Restricted
// @include     https://bb.uis.edu/webapps/blackboard/execute/announcement?blackboard.platform.security.NonceUtil.nonce=*&method=add&viewChoice=2&editMode=true&tabAction=false&announcementId=&course_id=*&context=course&internalHandle=cp_announcements&searchSelect=*
// @version     1
// @grant       none
// ==/UserScript==
document.getElementById("isPermanent_true").checked = true;