    <?php Flasher::flash(); ?>
        <?php if(isset($data['search'])) : ?>
            <?php if($data['search'] != "") : ?>
                <h5 class="mt-3 mb-3">Show results: <?=$data['search']?></h5>
            <?php endif; ?>
        <?php endif; ?>
        <?php if(count($data["main"])==0) : ?>
            <p class="mt-5">There are no post here...</p>
        <?php else : ?>
        <?php foreach($data["main"] as $post): ?>
          <div class="col-12 shadow-sm p-4 mb-4  <?= ($post["suspended"] == 0)?'bg-white': 'bg-light'; ?> rounded">
            <!-- header -->
                <div class="d-flex align-items-center">
                  <img src="<?= BASEURL;?>/img/users/profile/<?=$post["profile"]?>" class="adm-sm-img rounded-circle" width="50px" height="50px" alt="">
                  <div class=" d-flex flex-column ml-4">
                    <h5><?=$post["name"]?></h5>
                    <p class="text-secondary"><?=$post["upload"]?></p>
                  </div>
                </div>
                <div class="mt-4 d-flex flex-column justify-content-start">
                  <?php if($post['file'] != NULL): ?>
                    <img src="<?= BASEURL;?>/img/users/post/<?=$post["file"]?>" class="status-img rounded mb-3" width="100%" alt="">
                  <?php endif; ?>
                  <p><?=$post["content"]?></p>
                </div>
                <div class="more<?=$post["id"]?> d-flex align-items-center">
                    <span class="mr-1"><?= count(json_decode($post["likes"], true))-1;?></span> 
                    <i class="fas fa-heart like-done"></i>
                    <span class="mr-1 ml-3"><?= count((array)json_decode($post["comments"], true))-1;?></span> 
                    <i class="fas fa-comment-alt comment"></i>
                  </div>
                <div class="mt-4 d-flex justify-content-end">
                <?php if($post["suspended"] == 0) : ?>
                   <a href="#" class="btn btn-warning text-white mr-1" onclick="costumModalSet('warning', 'Suspend', 'Suspend post by  <?= $post['name'] ?>','<?= BASEURL;?>/Admin/setSuspendPost/<?= $post['id'] ?>/sus')" data-toggle="modal" data-target="#costum-modal">Suspend</a>
                <?php else : ?>
                    <a href="#" class="btn btn-primary text-white mr-1" onclick="costumModalSet('primary', 'Unsuspend', 'Unsuspend post by <?= $post['name'] ?>','<?= BASEURL;?>/Admin/setSuspendPost/<?= $post['id'] ?>/un')" data-toggle="modal" data-target="#costum-modal">Unsuspend</a>
                <?php endif; ?>
                   <a href="#" class="btn btn-danger" onclick="costumModalSet('danger', 'Delete', 'Delete post by <?= $post['name'] ?>','<?= BASEURL;?>/Admin/deletePost/<?= $post['id'] ?>')" data-toggle="modal" data-target="#costum-modal">Delete</a>
                </div>
          </div>
        <?php endforeach; ?>
        <?php endif; ?>