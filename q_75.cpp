#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        int c0 = 0;
        int c1 = 0;
        int c2 = 0;

        for(int val : nums){
            if(val == 0) c0++;
            if(val == 1) c1++;
            if(val == 2) c2++;
        }

        int i = 0;

        while(c0>0){
            nums[i++]=0;
            c0--;
        };
        while(c1>0){
            nums[i++]=1;
            c1--;
        };
        while(c2>0){
            nums[i++]=2;
            c2--;
        };
    }
};