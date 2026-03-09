#include <vector>
#include <algorithm>
#include <limits>
using namespace std;

class Solution {
public:
    double minimumAverage(vector<int>& nums) {

        sort(nums.begin(), nums.end());

        int left = 0;
        int right = nums.size() - 1;
        double minAvg = numeric_limits<double>::infinity();

        while(left < right) {
            double avg = (nums[left] + nums[right]) / 2.0;
            minAvg = min(minAvg, avg);

            left++;
            right--;
        }

        return minAvg;
    }
};