/**
 * Created by trananhduc1004 on 12/27/15.
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}
now('> Start to wait');
process.nextTick(function(){
    now('> Do this task at the end of event queue');
});
now('> Do other task');
//wait(1000);
now('> Do other task2');