package SwapNodesInPairs;

class SwapNodesInPairs {
    class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0, head);

        ListNode node1 = head, node2, next, prev = dummy;

        while (node1 != null && node1.next != null) {
            next = node1.next.next;
            node2 = node1.next;

            prev.next = node2;
            node2.next = node1;
            node1.next = next;

            prev = node1;
            node1 = next;
        }
        ;

        return dummy.next;
    }
}