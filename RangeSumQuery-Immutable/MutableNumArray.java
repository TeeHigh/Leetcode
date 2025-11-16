public class MutableNumArray {
  int[] prefixArr, nums;

  public MutableNumArray(int[] nums){
    if (nums.length > 3000) return;

    prefixArr = new int[nums.length];
    this.nums = nums;
    int sum = 0;

    for(int i = 0; i < nums.length; i++){
      sum += nums[i];
      prefixArr[i] = sum;
    }
  }
  
  public int sumRange(int left, int right){
    if(prefixArr.length < 1 || left > prefixArr.length || right > prefixArr.length) return 0;

    if(left == 0) return prefixArr[right];

    if(right >= left){
      return prefixArr[right] - prefixArr[left-1];
    }

    return 0;
  }

  public void update(int index, int val){

    if (index > nums.length || index < 0) return;

    if (val < -100 || val > 100) return;

    int target = nums[index];
    int difference;

    if (val > target){
      difference = val - target;

      for (int i = index; i < prefixArr.length; i++){
        prefixArr[i] += difference;
      }
    }
    else{
      difference = target - val;

      for (int i = index; i < prefixArr.length; i++){
        prefixArr[i] -= difference;
      }
    }

    nums[index] = val;
  }
}