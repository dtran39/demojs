/**
 * Created by trananhduc1004 on 12/27/15.
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
}

now('> Start to wait');
wait(5000);
now('> Finish waiting');