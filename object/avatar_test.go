// Copyright 2021 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package object

import (
	"fmt"
	"testing"

	"github.com/casbin/casdoor/proxy"
)

func TestSyncPermanentAvatars(t *testing.T) {
	InitConfig()
	InitDefaultStorageProvider()
	proxy.InitHttpClient()

	users := GetGlobalUsers()
	for i, user := range users {
		if user.Avatar == "" {
			continue
		}

		user.PermanentAvatar = getPermanentAvatarUrl(user.Owner, user.Name, user.Avatar)
		updateUserColumn("permanent_avatar", user)
		fmt.Printf("[%d/%d]: Update user: [%s]'s permanent avatar: %s\n", i, len(users), user.GetId(), user.PermanentAvatar)
	}
}
