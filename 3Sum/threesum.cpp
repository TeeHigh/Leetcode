using namespace std;
#include <iostream>
#include <vector>
#include <algorithm>

class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());

        cout << "Sorted nums: [";
        for (size_t i = 0; i < nums.size(); i++)
        {
            cout << nums[i];
            if (i < nums.size() - 1)
                cout << ", ";
        }
        cout << "]\n"
            << endl;

        for (int i = 0; i < nums.size(); i++)
        {
            if (i > 0 && (nums[i] == nums[i - 1]))
                continue;

            int j = i + 1, k = nums.size() - 1;

            while (j < k)
            {
                int sum = nums[i] + nums[j] + nums[k];
                vector<int> triplet;

                if (sum < 0)
                    j++;
                else if (sum > 0)
                    k--;
                else
                {
                    while (j + 1 < k && nums[j] == nums[j + 1])
                        j++;

                    while (k - 1 > j && nums[k] == nums[k - 1])
                        k--;

                    result.push_back({nums[i], nums[j], nums[k]});

                    j++;
                    k--;
                }
            }
        }
        return result;
    }
};

void printResult(const vector<vector<int>> &result)
{
    cout << "List of three sums: [";
    for (const auto &triplet : result)
    {
        cout << "[";

        for (size_t i = 0; i < triplet.size(); i++)
        {
            cout << triplet[i];
            if (i < triplet.size() - 1)
                cout << ", ";
        }

        cout << "], ";
    }
    cout << "]" << endl;
}

int main()
{
    Solution s;

    // vector<int> heights = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    vector<int> nums2 = {0, 1, 1};
    vector<int> nums3 = {0, 0, 0};
    vector<int> nums4 = {-100, -70, -60, 110, 120, 130, 160};
    vector<int> nums5 = {-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 4, 0};

    vector<vector<int>> result = s.threeSum(nums5);

    printResult(result);

    return 0;
}