class NumArray {
    private int[] prefixArr;

    public NumArray(int[] nums) {
        int sum = 0;
        prefixArr = new int[nums.length];

        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            prefixArr[i] = sum;
        }
    }
    
    public int sumRange(int left, int right) {

        if(left > right){
            return 0;

        }
        else if(prefixArr.length == 0){
            return 0;
        }
        else if(left == 0){
            return prefixArr[right];
        }
        else if(right >= left){
            return prefixArr[right] - prefixArr[left - 1];
        }
        return 0;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */