/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    var resultNode = new ListNode();
    var head = resultNode;
    
    while(list1 && list2){
        if(list1.val <= list2.val){
            resultNode.next = list1;
            list1 = list1.next;
        }else{
            resultNode.next = list2;
            list2 = list2.next;
        }
        resultNode = resultNode.next;
    }
    resultNode.next = list1 || list2;
    
    return head.next;
};



//  var mergeTwoLists = function(list1, list2) {
//     var node = new ListNode();
//     var tail = node;

//     while(list1 && list2){
//         let x = list1.val;
//         let y = list2.val;
//         if(x<y){
//             tail.next = new ListNode(x);
//             list1 = list1.next;
//         }else if(x>y){
//             tail.next = new ListNode(y);
//             list2 = list2.next;
//         }else{
//             tail.next = new ListNode(y);
//             list1 = list1.next;
//         }
//         tail = tail.next;
//     }
//     while(list1){
//         tail.next = new ListNode(list1.val);
//         list1 = list1.next;
//         tail = tail.next;
//     }
//     while(list2){
//         tail.next = new ListNode(list2.val);
//         list2 = list2.next;
//         tail = tail.next;
//     }
    
//     return node.next;
// };

